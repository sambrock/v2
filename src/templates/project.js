import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Image from "../components/image";
import TechList from "../components/tech-list";
import { useWindowSize } from "../hooks/useWindowSize";
import { projectPageAnimateIn, animateHeaderColor, projectHeroScroll } from "../animations/animations";
import ProjectImages from "../components/project-images";
import { Waypoint } from 'react-waypoint';
import Footer from "../components/footer";
import Head from '../components/head';


export default function Project({ data, transitionStatus }) {
  const [project, setProject] = useState();
  const [hideLogo, setHideLogo] = useState(false);
  const [width, height] = useWindowSize();
  const isMobile = height < 768;

  useEffect(() => {
    setProject(data.projects.edges[0].node)
  }, [data])

  useEffect(() => {
    if (transitionStatus === 'entering') projectPageAnimateIn(height).play();
  }, [transitionStatus, height])

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset < (height / 2)) {
        setHideLogo(false);
        if (!isMobile) projectHeroScroll(height);
      } else {
        setHideLogo(true);
      }
    }

    return window.addEventListener('scroll', onScroll);
  }, [height, isMobile])

  if (!project) return <div></div>;

  return (
    <>
      <Head title={`${project.title}`}/>
      <main className={`project`}>
        <div className="project__hero" style={{ background: project.color }}>
          <div className="project__logo" style={hideLogo ? { display: 'none' } : { display: 'block' }}>
            <Image filename={`project__${project.title}.png`} alt={project.title} />
          </div>
          {project.type === 'web' && (
            <Image filename={`project-slide__${project.title}.png`} alt={project.title} classes="project__mainimg" />
          )}
          {project.type === 'phone' && (
            <div className="project__mainimg phone">
              <Image filename={`project-slide__${project.title}-1.png`} alt={project.title} />
              <Image filename={`project-slide__${project.title}-2.png`} alt={project.title} />
              <Image filename={`project-slide__${project.title}-3.png`} alt={project.title} />
            </div>
          )}
        </div>
        <Waypoint onEnter={() => animateHeaderColor('white')} onLeave={() => animateHeaderColor('grey')} />
        <div className="project__info">
          <div className="project__mini-info">
            <div className="project__info-item">
              <h3 style={{ color: project.color }}>Completed</h3>
              <span>{project.completed}</span>
            </div>
            <div className="project__info-item">
              <h3 style={{ color: project.color }}>My role</h3>
              <ul>
                {project.role.map(r => <li>{r}</li>)}
              </ul>
            </div>
            <div className="project__info-item">
              <h3 style={{ color: project.color }}>Made with</h3>
              <div className="project__tech-list">
                <TechList items={project.tech}></TechList>
              </div>
            </div>
          </div>
          <div className="project__txt">
            <h2 className="project__sub-heading">{project.shortDescription}</h2>
            <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project__btns">
              <a className="project__launch-btn btn" target="__blank" rel="noopener" style={{ color: project.color, border: `1px ${project.color} solid` }} href={project.url}>Launch project</a>
              {project.github && (
                <a href={project.github} target="__blank" rel="noopener" className="project__github-link btn no-border">View on GitHub</a>
              )}
            </div>
          </div>
        </div>
        <ProjectImages title={project.title} />
        <Footer>
          <span>&#169; {new Date().getFullYear()} Sam Brocklehurst</span>
        </Footer>
      </main>
    </>
  )
}
export const query = graphql`
  query($id: String!) {
    projects: allProjectsJson(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          url
          title
          type
          shortDescription
          completed
          color
          role
          tech
          github
        }
      }
    }
  }
`
