import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Image from "../components/image";
import TechList from "../components/tech-list";

export default function Project({ data }) {
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(data.projects.edges[0].node)
  }, [data])

  if (!project) return <div></div>;

  console.log(project.images);

  return (
    <Layout>
      <main className="project">
        <div className="project__hero" style={{ background: project.color }}>
          <div className="testtestetestse"></div>
          <Image filename={`project__${project.title}.png`} alt={project.title} classes="project__logo" />
          <Image filename={`project-slide__${project.title}.png`} alt={project.title} classes="project__mainimg" />
        </div>
        <div className="project__info">
          <h2 className="project__sub-heading">{project.shortDescription}</h2>
          <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="project__info-items">
            <div className="project__info-item">
              <h3 style={{ color: project.color }}>Year</h3>
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
          <div className="project__btns">
            <a className="project__launch-btn btn" target="__blank" style={{ color: project.color, border: `1px ${project.color} solid` }} href={project.url}>Launch project</a>
            {project.github && (
              <a href={project.github} target="__blank" className="project__github-link btn">View on GitHub</a>
            )}
          </div>
        </div>
        <div className="project__images">
          {/* {project.images.map(i => <Image filename={i} alt={project.title} classes="project__img" />)} */}
        </div>
      </main>
    </Layout>
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
          images
          protopie
        }
      }
    }
  }
`
