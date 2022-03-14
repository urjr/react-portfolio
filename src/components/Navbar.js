import { Link } from 'gatsby'
import React from 'react'
import { useLocation } from '@reach/router'
import * as componentStyles from '../styles/navbar.module.scss'

export default function Navbar() {
    const location = useLocation();
    return (
        <nav className={componentStyles.navbar} style={{
            animationPlayState: `${location.pathname === '/' ? 'running' : 'paused'}`,
            animationFillMode: `${location.pathname === '/' ? 'both' : 'forwards'}`
            }}>
            <Link className={componentStyles.logo} activeStyle={{textDecoration: "udnerline"}} to='/'>UR</Link>
            <Link activeStyle={{textDecoration: "underline"}} to='/projects'>Projects</Link>
            <Link activeStyle={{textDecoration: "underline"}} to='/art'>Art</Link>
            <Link activeStyle={{textDecoration: "underline"}} to='/about'>About</Link>
        </nav>
    )
}
