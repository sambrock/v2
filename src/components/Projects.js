import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import ProjectSlide from './ProjectSlide';

import PortfolioProjects from '../portfolio-projects.json';

export default function Projects() {
  const [projects, setProjects] = useState(null);
  // const [scroll, setScroll] = useState(null);
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState({ index: active, type: 'in', direction: 'down' });

  useEffect(() => {
    setProjects(PortfolioProjects)
  }, [])

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

  if (!projects) return <div></div>;

  return (
    <ReactScrollWheelHandler className="projects" upHandler={(e) => handleNavigation('up')} downHandler={(e) => handleNavigation('down')} >
      {projects.map((project, index) => (
        <ProjectSlide key={project.id}
          project={project}
          isActive={index === active}
          animate={animate}
          current={active + 1}
          count={projects.length}
        />
      ))}
    </ReactScrollWheelHandler>
  )
}
