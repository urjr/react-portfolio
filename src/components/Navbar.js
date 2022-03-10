import { Link } from 'gatsby' //add graphql, and useStaticQuery to static queries
import React from 'react'
import * as componentStyles from '../styles/navbar.module.scss'

export default function Navbar() {

    // Example of static query
    
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //              siteMetadata {
    //                 description
    //                 title
    //                 copyright
    //             }
    //         }
    //     }     
    // `)

    // console.log(data);

    // const { title } = data.site.siteMetadata;

    return (
        <nav className={componentStyles.navbar}>
            <Link className={componentStyles.logo} activeStyle={{textDecoration: "udnerline"}} to='/'>UR</Link>
            <Link activeStyle={{textDecoration: "udnerline"}} to='/projects'>Projects</Link>
            <Link activeStyle={{textDecoration: "udnerline"}} to='/art'>Art</Link>
            <Link activeStyle={{textDecoration: "udnerline"}} to='/about'>About</Link>
        </nav>
    )
}
