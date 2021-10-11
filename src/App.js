import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Languages from './components/Languages'
import MyWork from './components/MyWork'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Fade from 'react-reveal/Fade'

function App() {
  return (
    <main>
      <Navbar />
      <Fade>
        <Home />
        <About />
        <Languages />
      </Fade>
      <MyWork />
      <Fade>
        <Experience />
        <Contact />
        <Interests />
      </Fade>
      <Footer />
    </main>
  )
}

export default App