import { graphql } from 'gatsby';
import React from 'react'
import Header from '../components/Header';
import Projects from '../components/Projects';
import SocialLinks from '../components/SocialLinks';

import '../styles/main.scss';

export default function Index({ data }) {
  return (
    <main>
      <Header />
      <div className="container">
        <section className="overview">
          <div className="intro">
            <h1>Hi, <br /> I'm Sam, <br /> web developer.</h1>
            <p>I use modern web technologies to create engaging online
            experiences. I'm currently a Web Technologies student at the University of
            Huddersfield, graduating in 2021. </p>
          </div>
          <SocialLinks />
        </section>
        <Projects data={data.projects.edges} />
      </div>
    </main>
  )
}

export const query = graphql`
query IndexQuery {
  projects: allProjectsJson {
    edges {
      node {
        title
        type
        projectSlideImg
        shortDescription
        completed
        url
        color
      }
    }
  }
}`;