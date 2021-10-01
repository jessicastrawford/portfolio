import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Languages from './components/Languages'
import MyWork from './components/MyWork'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contact from './components/Contact'

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Languages />
      <MyWork />
      <Experience />
      <Interests />
      <Contact />
    </main>
  )
}

export default App