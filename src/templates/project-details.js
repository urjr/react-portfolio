import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../layouts/Layout.js'

export default function projectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, name, description } = data.markdownRemark.frontmatter

  return (
    <Layout>
        <h2>{ title }</h2>
        <h2>{ name }</h2>
        <h2>{ description }</h2>
        <div className='content'>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
    query Projects($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        frontmatter {
            title
            slug
            name
            description 
        }
        html
        }
    }
`