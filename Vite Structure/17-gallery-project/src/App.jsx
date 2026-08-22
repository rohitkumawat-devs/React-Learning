import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = ()=>{
    console.log("Data a gya")
  }

  return (
    <div className='bg-black h-screen p-4 text-white '
    onClick={getData}>
      <button className='bg-green-600 mb-2 active:scale-95  text-white px-5 py-2 rounded'>
        Get Data
      </button>  
    </div>
  )
}

export default App