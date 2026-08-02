import React from 'react'
import {Bookmark} from 'lucide-react';

const card = () => {
  return (
            <div className="card">
          <div>
            <div className="top">
              <img src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" alt="" />
                <button>Save <Bookmark size={10} /></button>
             </div>
            <div className="center">
              <h3>Amazon<span> 5 days ago</span></h3>
              <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
          </div>
          <div className="bottom">

            <div >
                <h3>120$/hr</h3>
                <p>Mumbai,India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
  )
}

export default card