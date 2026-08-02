import React from 'react'

const card = () => {
    const name = "Rohit";
    const age = 21;
  return (
    <div>
        <div className='card'>
                <h1>Rohit Kumawat</h1>
                <h2>Hello i am {name}</h2>
                <p>I am {age} years old. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
    </div>
  )
}

export default card 

