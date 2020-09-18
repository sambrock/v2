import React, { useEffect, useState } from 'react'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ProjectSlide from './projectSlide';

export default function Projects({ data, setAccent }) {
  const [projects, setProjects] = useState(null);
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState({ index: active, type: 'in', direction: 'down' });

  useEffect(() => {
    setProjects(data)
  }, [data])

  const handleNavigation = (scroll) => {
    let next = active;

    if (scroll === 'up') next--;
    if (scroll === 'down') next++;

    if (next === projects.length) next = 0;
    if (next === -1) next = (projects.length - 1);

    setAnimate({ index: active, type: 'out', direction: scroll });

    setTimeout(() => {
      setActive(next);
      setAnimate({ index: next, type: 'in', direction: scroll });
    }, 600)
  }

  useEffect(() => {
    if(projects) setAccent(projects[active].node.color);
  }, [projects, active])

  if (!projects) return <div></div>;

  return (
    <div class="projects-container">
      <ReactScrollWheelHandler className="projects" upHandler={() => handleNavigation('up')} downHandler={() => handleNavigation('down')} >
        {projects.map((projectNode, index) => {
          const project = projectNode.node;
          return (
            <ProjectSlide key={project.id}
              project={project}
              isActive={index === active}
              animate={animate}
              current={active + 1}
              indicator={index === 0}
            />
          )
        })}
        <div className="project-slide__count bg-count animating" ><span className="count">{((active + 1).toString().length < 2) ? `0${active + 1}` : active + 1}.</span></div>
      </ReactScrollWheelHandler>
    </div>
  )
}
