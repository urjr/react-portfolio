import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../layouts/Layout.js'
import * as componentStyles from '../../styles/projects.module.scss'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className={componentStyles.projects}>
        <h1>My Projects</h1>
          {projects.map(project => (
            <div>
              <h2>{ project.frontmatter.slug }</h2>
              <h2>{ project.frontmatter.name }</h2>
              <h2>{ project.frontmatter.description }</h2>
              <Link to={'/projects/' + project.frontmatter.slug}>link</Link>
              <GatsbyImage image={project.frontmatter.featured.childImageSharp.gatsbyImageData}/>
            </div>
          ))}
      </section>   
    </Layout>
  )
}

export const query = graphql`
  query ProjectInfo {
    allMarkdownRemark {
      nodes {
        frontmatter {
          featured {
            childImageSharp {
              gatsbyImageData
            }
          }
          description
          name
          slug
          title
        }
      }
    }
  }
`
