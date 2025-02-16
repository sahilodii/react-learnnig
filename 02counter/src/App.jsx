import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Kill,setKill] = useState(7)
 //let Kill = 6
 
  const addKill = () => {
    
    console.log("Kill added",Kill);
    //  Kill = Kill + 1
     setKill(Kill= Kill + 1)
  }
  const removeKill = () => {
    
    console.log("Kill remove",Kill);
    //  Kill = Kill - 1
     setKill(Kill = Kill - 1)
  }

  return (
    <>
       <h1>zgod op</h1>
      <h2>kills: {Kill}</h2>
      <button
      onClick={addKill}
      >Add kill </button>
     <br />
      <button
      onClick={removeKill}
      >remove kill </button>
    </>
  )
}

export default App
