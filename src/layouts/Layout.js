import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import '../styles/layout.scss'

export default function Layout({ children }) {
  
  React.useState(typeof window !== 'undefined'? window.innerHeight: 800);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  });


  const updateHeight = () => setHeight(window.innerHeight);
  
  if (typeof window === "undefined") return null;
  return (
    <div className='wrapper' style={{minHeight: height}}>
      <Navbar/>
        { children }
      <Socials/>
    </div>
  )
}