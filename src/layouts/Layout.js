import React from 'react'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import '../styles/layout.scss'

export default function Layout({ children }) {
  return (
    <div className='wrapper'>
      <Navbar/>
        { children }
      <Socials/>
    </div>
  )
}
