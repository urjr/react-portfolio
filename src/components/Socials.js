import React from 'react'
import * as componentStyles from '../styles/socials.module.scss'

export default function Socials() {
  return (
    <nav className={componentStyles.socials}>
        <a href='https://www.linkedin.com/in/ulirey/'>Li</a>
        <a href='https://www.instagram.com/urjr/'>In</a>
        <a href='https://www.twitter.com/ulireys'>Tw</a>
        <a href='mailto:hi@ulises.me'>Email</a>
    </nav>
  )
}
