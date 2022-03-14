import React from 'react'
import Layout from '../layouts/Layout'
import * as componentStyles from '../styles/main.module.scss'

export default function Home() {

    return (
        <Layout>
            <section className={componentStyles.splash}>
                <h1>Hi, I'm Ulises, a UX Designer and Illustrator based in Brooklyn, New York</h1>
                <h2>Currently, I design Marketing Tools for Google. Formerly at Notarize, Broadlume, and Smarking</h2>
            </section>
        </Layout>

    )
}