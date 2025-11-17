import { useState } from 'react'
import Home from './components/Home/Home'
import MovingSkills from './components/MovingSkills/MovingSkills'
import Skills from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <MovingSkills/>
      <Skills/>
    </div>
  )
}

export default App
