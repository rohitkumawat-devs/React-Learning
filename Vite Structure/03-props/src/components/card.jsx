import React from 'react'

const card = (props) => {
  console.log(props);
  return (
    <div>
            <div className="card">

                <img src={props.img}/>
                <h1>{props.user},{props.age}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quibusdam!</p>
                <button>View Profile</button>
            </div>
    </div>
  )
}

export default card