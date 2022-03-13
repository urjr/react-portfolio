import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import '../styles/layout.scss'

export default function Layout({ children }) {
  
const [height, setHeight] = useState(undefined);  

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    window.addEventListener('resize', updateHeight);
    updateHeight();
    return () => window.removeEventListener('resize', updateHeight);
  });
  
  return (
    <div className='wrapper' style={{ minHeight: height }}>
      <Navbar/>
        { children }
      <Socials/>
    </div>
  )
}