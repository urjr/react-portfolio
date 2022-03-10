import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/layout.scss'

export default function Layout({ children }) {
  return (
    <div className='wrapper'>
        <Navbar/>
        <div className='content'>
          { children }
      </div>
    </div>
  )
}
