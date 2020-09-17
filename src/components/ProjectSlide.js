import React, { useEffect } from 'react'
import { useWindowSize } from '../hooks/window-hooks';
import { projectSlideAnimateIn, projectSlideAnimateOut } from '../animations/animations';
import Image from './Image';

import LogoT from '../images/logo-g-t.svg';
import LogoWT from '../images/logo-w-t.svg';

export default function ProjectSlide({ project, isActive, animate, current, count }) {
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (animate.type === 'in') projectSlideAnimateIn(animate.direction).play();
    if (animate.type === 'out') projectSlideAnimateOut(animate.direction).play();
  }, [isActive, animate])

  return (
    <div className={`project-slide ${isActive ? 'active' : ''}`}>
      <div className="project-slide__logo"><img src={LogoT} /></div>
      <div className="project-slide__mask" style={{ height: `${height}px` }}>
        <div className="project-slide__logo"><img src={LogoWT} /></div>
        <div className="project-slide__bg" style={{ background: `${project.color}` }}>
          {project.type === 'web' && (
            <Image filename={project.projectSlideImg} alt={project.title} classes="project-slide__img" />
          )}
          {project.type === 'phone' && (
            <div className="project-slide__img phone">
              <Image filename={project.projectSlideImg + '-1.png'} alt={project.title} />
              <Image filename={project.projectSlideImg + '-2.png'} classes={" phone-2"}alt={project.title} />
              <Image filename={project.projectSlideImg + '-3.png'} classes={" phone-3"}alt={project.title} />
            </div>
          )}
          <div className="project-slide__info">
            <div className="project-slide__short-desc to-animate">{project.shortDescription}</div>
            <div className="project-slide__title to-animate">{project.title}.</div>
            <div className="project-slide__count"><span className="count">{(current.toString().length < 2) ? `0${current}` : current}.</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}