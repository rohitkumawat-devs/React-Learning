import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault();

    console.log(title,details)
    const copyTask = [...task];

    copyTask.push({title,details});
    setTask(copyTask)

    setTitle('');
    setDetails('');
  }

  const noteDeleted = (idx) =>{
    const copytask = [...task]
    copytask.splice(idx,1);
    setTask(copytask);

  }


  return (
    <div className='h-screen lg:flex  bg-black text-white' >
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className=' lg:w-1/2 flex flex-col  items-start w-1/2 gap-4  p-10 '>

          <h1 className='text-3xl font-bold'>Add Notes</h1>

          {/* Pehla Input for heading   */}
          <input 
            type='text' 
            placeholder='Enter Noted Heading' 
            className='px-5 py-2 w-full border-5 font-medium rounded outline-none'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder='Write Details'
            className='px-5 py-2 h-32 w-full border-5 font-medium rounded outline-none'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value);
            }}
          />

        <button className=  'w-full active:scale-95 bg-white text-black px-5 py-2 font-medium rounded outline-none'>
          Add Notes
        </button>

      </form>
      <div className='lg:border-l-2 lg:w-1/2  flex-wrap p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start h-90% overflow-auto gap-10 mt-5 '>
        {/* <div className='w-40 h-52 rounded-2xl bg-white '></div> */}
        {task.map(function(elem,idx){

          return <div key={idx} className='flex justify-between flex-col items-start relative w-40 h-52 pt-9 pb-3 px-4 text-black rounded-2xl bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] '>
            <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              noteDeleted(idx);
            }} className=' cursor-pointer active:scale-95 w-full bg-red-600 text-white py-1 text-xs rounded font-bold'>
              Delete
            </button>
          </div>;
        })}

      </div>


      </div>
    </div>
  )
}

export default App