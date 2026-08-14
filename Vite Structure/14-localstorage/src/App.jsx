import React, { use } from 'react'

const App = () => {

  // localStorage.setItem('user','Rohit') even if you comment it data will stay saved
  // localStorage.clear();
  // localStorage.setItem('age',18)

  // const name = localStorage.getItem('user')
  // const age = localStorage.getItem('age')
  // console.log(name, age)

  // localStorage.removeItem('user')

  const user ={
    username : 'Rohit',
    years:19,
    city:'Bengaluru',
  }
  localStorage.setItem('user',JSON.stringify(user))

  const elem = localStorage.getItem('user')
  console.log(elem)
  console.log(typeof(elem)) // it will give string
  const use = JSON.parse(localStorage.getItem('user'));
  console.log(typeof(use))

  return (
    <div>App</div>
  )
}

export default App