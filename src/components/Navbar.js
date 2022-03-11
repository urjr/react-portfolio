import { Link } from 'gatsby'
import React from 'react'
import * as componentStyles from '../styles/navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={componentStyles.navbar}>
            <Link className={componentStyles.logo} activeStyle={{textDecoration: "udnerline"}} to='/'>UR</Link>
            <Link activeStyle={{textDecoration: "underline"}} to='/projects'>Projects</Link>
            <Link activeStyle={{textDecoration: "underline"}} to='/art'>Art</Link>
            <Link activeStyle={{textDecoration: "underline"}} to='/about'>About</Link>
        </nav>
    )
}
