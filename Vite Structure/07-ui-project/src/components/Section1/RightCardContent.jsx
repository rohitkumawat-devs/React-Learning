import React from 'react'
import { ArrowRight } from 'lucide-react';
import RightCard from './RightCard'

const RightCardContent = (props) => {
  return (
    <div>        
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full w-12 h-12 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className=' text-white mb-14 text-xl leading-relaxed  text-shadow:2px_2px_6px_rgba(0,0,0,0.8) '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad, nihil corrupti saepe iste nesciunt.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><ArrowRight size={18} strokeWidth={1} absoluteStrokeWidth /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent