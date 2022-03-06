import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../layouts/Layout'
import * as componentStyles from '../../styles/projects.module.scss'

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className={componentStyles.projects}>
        <h1>My Projects</h1>
        <div>
          {projects.map(project => (
            <div>
              <h2>{ project.frontmatter.slug }</h2>
              <h2>{ project.frontmatter.name }</h2>
              <h2>{ project.frontmatter.description }</h2>
              <Link to={'/projects/' + project.frontmatter.slug}>link</Link>
            </div>
          ))}
        </div>
      </section>   
    </Layout>
  )
}

export const query = graphql`
  query projectInfo {
    allMarkdownRemark {
      nodes {
        frontmatter {
          name
          slug
          title
          description
        }
      }
    }
  }
`
