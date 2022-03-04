import { Link } from 'gatsby'
import React from 'react'
import * as componentStyles from '../styles/navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={componentStyles.navbar}>
            <h1>Ulises Reyes</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </nav>
    )
}
