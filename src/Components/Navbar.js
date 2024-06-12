import React from 'react'
import"./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar

