import React from 'react'
// import navImage from '../assets/js-nobackground.png'
import { slide as Menu } from 'react-burger-menu'


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleMenuToggle = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-items">
          {/* <li><img src={navImage} alt="js-logo" className="navbar-logo"></img></li> */}
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#interests">Interests</a></li>
        </ul> 
      </nav>
      <nav className="mobile-navbar">
        <Menu right width= { '100%' } isOpen={ false }>
          <a href="#about" className="menu-item" isOpen={ false } onClick={handleMenuToggle}>About</a>
          <a href="#skills" className="menu-item" isOpen={ false }>Skills</a>
          <a href="#projects" className="menu-item" isOpen={ false }>Projects</a>
          <a href="#experience" className="menu-item" isOpen={ false }>Experience</a>
          <a href="#contact" className="menu-item" isOpen={ false }>Contact</a>
          <a href="#interests" className="menu-item" isOpen={ false }>Interests</a>
        </Menu>
        {/* <div>
          <p>Menu</p>
        </div> */}
      </nav>
    </>
  )
}

export default Navbar