import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log("Use effect is running ")
  },[num,num2])

  return (
    <div>
      <h1>Num1 {num}</h1>
      <h1>Num2 {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}>
        Click Me!
      </button>
    </div>
  )
}

export default App