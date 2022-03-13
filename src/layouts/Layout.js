import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import '../styles/layout.scss'

export default function Layout({ children }) {
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  });

  const updateHeight = () => setHeight(window.innerHeight);

  return (
    <div className='wrapper' style={{minHeight: height}}>
      <Navbar/>
        { children }
      <Socials/>
    </div>
  )
}

// export default height;
