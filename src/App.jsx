import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 id = "Name">
      Ceyda Topcu
    </h1>

    <p id = "Studying"> 
      I am a student at Columbia 
    </p>

    <p id = "Studying"> 
      Studying Computer Science
    </p>
    <body>
      <div class = "animated-text">
        <div class = "line">Hiii</div>
        <div class = "line">I'm Ceyda</div>
        <div class = "line">aodood</div>
      </div>
    </body>
    </>
  )
}
  
export default App
