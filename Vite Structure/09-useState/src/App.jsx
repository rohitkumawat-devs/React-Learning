import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increaseValue(){
    setnum(num+1);
  }
  function decreaseValue(){
    setnum(num-1);
  }
  function reset(){
    setnum(0);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button className='increase' onClick={increaseValue}>Increase</button>
      <button className='reset' onClick={reset}>Reset</button>
      <button className='decrease' onClick={decreaseValue}>Decrease</button>
    </div>
  )
}

export default App