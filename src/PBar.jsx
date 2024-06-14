import React, { useEffect, useState } from 'react'

function PBar({value=0}) {

    const[percent, setPercent] = useState(value)

   useEffect(()=>{
    if(percent < 100){
        setTimeout(()=>setPercent((newval)=> newval+1),100)
    }
   },[percent])


  return (
    
      <div>
      <div className="progressBar">
        <div className="progressBarFill" style={{width:`${percent}%`}}>
          {percent}%
        </div>
      </div>
    </div>
   
  )
}

export default PBar
