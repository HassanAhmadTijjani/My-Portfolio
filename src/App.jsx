// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from '../src/components/Navbar'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <>
      <Navbar />
      {/* <div className="h-screen bg-slate-900"></div> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
