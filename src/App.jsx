import { useState } from 'react'
import Home from './components/Home/Home'
import MovingSkills from './components/MovingSkills/MovingSkills'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Glimps from './components/Glimps/Glimps'
import Achievements from './components/Achievements/Achievements'
import Experience from './components/Experience/Experience'

function App() {

  return (
    <div>
      <Home/>
      {/* <MovingSkills/> */}
      {/* <Education /> */}
      <Glimps/>
      {/* <Skills/> */}
      <Projects />
      <Experience/>
      <Achievements/>
      <Footer/>
    </div>
  )
}

export default App
