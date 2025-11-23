import { useState } from 'react'
import Home from './components/Home/Home'
import MovingSkills from './components/MovingSkills/MovingSkills'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <MovingSkills/>
      {/* <Skills/> */}
      <Education />
      <Projects />
    </div>
  )
}

export default App
