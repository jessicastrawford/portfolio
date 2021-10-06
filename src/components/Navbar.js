import React from 'react'
// import navImage from '../assets/js-nobackground.png'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        {/* <li><img src={navImage} alt="js-logo" className="navbar-logo"></img></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#interests">Interests</a></li>
      </ul> 
    </nav>
  )
}

export default Navbar