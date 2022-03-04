import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../layouts/Layout'
import * as componentStyles from '../styles/main.module.scss'

export default function Home({ data }) {

    const { description, title, copyright } = data.site.siteMetadata;
    return (
        <Layout>
            <section className={componentStyles.header}>
                <div>
                    <h1>Hi, I'm Ulises, a UX Designer and Illustrator based in Brooklyn, New York</h1>
                    <h3>Currently, I design Marketing Tools for Google. Formerly at Notarize, Broadlume, and Smarking</h3>
                </div>
                <p>{ copyright }</p>
                <p>{ title }</p>
                <p>{ description }</p>
            </section>
        </Layout>

    )
}

export const query = graphql`
    query siteInfo {
        site {
            siteMetadata {
                description
                title
                copyright
            }
        }
    }  
`