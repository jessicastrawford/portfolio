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

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Languages />
      <MyWork />
      <Experience />
      <Contact />
      <Interests />
      <Footer />
    </main>
  )
}

export default App