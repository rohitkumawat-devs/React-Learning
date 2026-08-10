import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log("Form Submitted by ",title);
    setTitle('');
  }

  const [title, setTitle] = useState("");

  return (
    <div>
      <form onSubmit={ (e)=>{
        submitHandler(e);
      }}>
        <input type='text'
        placeholder='Enter your Name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App