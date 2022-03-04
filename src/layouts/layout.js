import React from 'react'
import Navbar from '../components/Navbar'

export default function Layout({ children }) {
  return (
      <div>
         <Navbar/>
         <div className='content'>
            { children }
        </div>
      </div>
  )
}
