import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as componentStyles from '../styles/navbar.module.scss'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query {
            site {
                 siteMetadata {
                    description
                    title
                    copyright
                }
            }
        }     
    `)

    console.log(data);

    const { title } = data.site.siteMetadata;

    return (
        <nav className={componentStyles.navbar}>
            <h1>Ulises Reyes { title }</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </nav>
    )
}
