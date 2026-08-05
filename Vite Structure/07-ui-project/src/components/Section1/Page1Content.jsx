import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-16 pb-20 pt-6 h-[90vh] flex items-center justify-between gap-10 '>
      <LeftContent/>
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content