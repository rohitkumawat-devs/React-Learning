import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className=' h-full shrink-0 w-72 overflow-hidden relative rounded-4xl    '>
        <img src={props.img} className='h-full w-full object-cover'></img>
        <RightCardContent id={props.id} key ={props.key} tag = {props.tag}/>
    </div>
  )
}

export default RightCard