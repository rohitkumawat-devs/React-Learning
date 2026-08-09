import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState([10,20,30]);
  // const [num, setNum] = useState({user:"Rishi", age :17});
  // const btnClicked = ()=>{
  //   setNum(prev => ({...prev,age:50}));
  // }

  const [num, setNum] = useState(10);
  const btnClicked = ()=>{
    // setNum(num+1);
    // setNum(num+1);
    // setNum(num+1); as we know that its asynchronos so all 3 update it by just 1 4

    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1)); // this is called batch update 
    setNum(prev=>(prev+1));
  }
  return (
    <div>
      {/* <h1>{num.user} , {num.age} </h1> */}

      <h1>{num} </h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App