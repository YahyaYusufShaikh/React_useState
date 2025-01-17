import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Red")

  function changeColor(){
    setColor("Blue")
  }

  return (
    <>
      <h2>My color : {color} will change</h2>
      <button onClick={changeColor}>{color}</button>
    </>
  )
}

export default App
