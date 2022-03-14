import React from 'react'
import Layout from '../layouts/Layout'
import * as componentStyles from '../styles/main.module.scss'

export default function Home() {
    const introText = "Hi,-I'm-Ulises,-a-UX Designer-and-Illustrator-based-in-Brooklyn,-New York"
    const introWords = introText.split("-")

    return (
        <Layout>
            <section className={componentStyles.splash}>
                <h1>
                    {introWords.map((word, index) => (
                        <span key={word} className={componentStyles.mask}>
                            <span className={componentStyles.animate} style={{ animationDelay: `${(index * .1) + .25}s` }}>
                                { word === "Ulises," || word === "UX Designer" || word === "Illustrator" || word === "Brooklyn," || word === "New York" ? <button className={componentStyles.hoverable}>{ word }</button> : word }&nbsp;<wbr/>
                            </span>
                        </span>
                    ))}
                </h1>
                <h2>Currently, I design Marketing Tools for Google. Formerly at Notarize, Broadlume, and Smarking</h2>
            </section>
        </Layout>
    )
}