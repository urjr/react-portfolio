import React from 'react'
import Layout from '../layouts/Layout'
import * as componentStyles from '../styles/main.module.scss'

export default function Home() {
    let introText = "Hi, I'm Ulises, a UX-Designer and Illustrator based in Brooklyn, New-York"
    introText = introText.split(" ")

    const introWords = []

    introText.map( word => { return introWords.push(word.replace('-', ' ')) })
    console.log(introWords)

    return (
        <Layout>
            <section className={componentStyles.splash}>
                <h1>
                    {introWords.map((word, index) => (
                        <span key={word} className={componentStyles.mask}>
                            <span className={componentStyles.animate} style={{ animationDelay: `${(index * .1) + .5}s` }}>
                                { word === "Ulises," || word === "UX Designer" || word === "Illustrator" || word === "Brooklyn," || word === "New York" ? <a href='' className={componentStyles.hoverable}>{ word }</a> : word }&nbsp;<wbr/>
                            </span>
                        </span>
                    ))}
                </h1>
                <h2>Currently, I design <a href='https://marketingplatform.google.com/about/' target="_blank" rel="noreferrer">Marketing Tools</a> for <a href='https://about.google/' target="_blank" rel="noreferrer">Google</a>. Formerly at <a href='https://notarize.com' target="_blank" rel="noreferrer">Notarize</a>, <a href='https://www.broadlume.com/' target="_blank" rel="noreferrer">Broadlume</a>, and <a href='https://www.smarking.com/' target="_blank" rel="noreferrer">Smarking</a></h2>
            </section>
        </Layout>
    )
}