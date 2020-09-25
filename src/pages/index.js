import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby';
import Projects from '../components/projects';
import Footer from '../components/footer';

import '../styles/main.scss';
import { indexAnimateIn } from '../animations/animations';
import { useWindowSize } from '../hooks/useWindowSize';

export default function Index({ data }) {
  const [accentColor, setAccentColor] = useState();
  const [width, height] = useWindowSize();
  const isMobile = height < 768;

  useEffect(() => {
    setTimeout(() => {
      indexAnimateIn().play()
    }, [100])
  }, [])

  return (
    <div className="index">
      <section className="overview">
        <div className="intro">
          <div className="intro__name"><h1>Sam Brocklehurst</h1><div className="txt-mask"></div></div>
          <div className="intro__description"><h2>I design and develop web apps.</h2><div className="txt-mask"></div></div>
          <div className="intro__btn"><a className="btn primary-bg" style={{ color: accentColor, border: `1px solid ${accentColor}` }} href="mailto:sambrocklehurst1998@gmail.com">Get in touch</a><div className="txt-mask"></div></div>
        </div>
      </section>
      <Footer />
      <Projects data={data.projects.edges} setAccent={(color) => setAccentColor(color)} isMobile={isMobile} />
    </div>
  )
}

export const query = graphql`
query IndexQuery {
  projects: allProjectsJson {
    edges {
      node {
        title
        type
        shortDescription
        completed
        url
        color
      }
    }
  }
}
`;