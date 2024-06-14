
import { useEffect, useState } from 'react'
import './App.css'
import PBar from './PBar'

function App() {

  const[progress, setProgress] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
        setProgress((p)=>p+1)
    },50)
  },[]);


  return(
    <div id="container">
      <h2>Progress bar</h2>
      <div id="row">
        <div id="inner">
          <PBar value={progress} />
        </div>
      </div>
    </div>
  )
}

export default App
