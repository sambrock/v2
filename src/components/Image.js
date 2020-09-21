import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 3160, quality: 100) {
                  srcSet
                  srcSetWebp
                  src
                }
              }
            }
          }
        }
      }
    `}

    render={data => {

      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      });

      return !image ? null : (
        <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} className={props.classes} imgStyle={{height: false, width: false, left: false, position: false}}/>
      )
    }}
  />
)
export default Image