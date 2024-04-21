import React from 'react'
import Footer from '../footer/Footer.jsx'
import Navbar from '../navbar/Navbar.jsx'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout