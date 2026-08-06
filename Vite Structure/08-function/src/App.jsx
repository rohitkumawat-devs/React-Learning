import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("Button Clicked");
  }

  function dbclicked(){
    console.log("Double Click");
  }

  function mouseEnter(){
    console.log("Mouse Entered");
  }

  function scrolling(elem){
    if(elem>0){
      console.log("sidha scrolling");}
    else if(elem<0){
      console.log("Ulta scrolling");
    }
  }
  return (
    <div>
      <h1>Hello ,Rohit</h1>
      <button  onMouseEnter={mouseEnter} onClick={btnClicked} onDoubleClick={dbclicked}>Change user </button>
      <button onMouseEnter={mouseEnter}>Enter here</button>



      <button onClick={function(){
        console.log("You Clicked me ")
      }}>3rd Button</button>

      <input  onChange={(elem)=>{
        console.log(elem.target.value);
      }} type='text' placeholder='Enter Name'></input>

      <div className='box'
      onMouseMove={(elem)=>{
        console.log(elem.clientX,elem.clientY);
      }}>
        Hello
      </div>

      <div onWheel={
        function(elem){
          scrolling(elem.deltaY);
        }
      }>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
      </div>

    </div>
  )
}

export default App