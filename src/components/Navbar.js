import React from 'react'
// import navImage from '../assets/js-nobackground.png'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        {/* <li><img src={navImage} alt="js-logo" className="navbar-logo"></img></li> */}
        <a href="#about"><li>About</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#experience"><li>Experience</li></a>
        <a href="#interests"><li>Interests</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul> 
    </nav>
  )
}

export default Navbar