import React from 'react'
import RightCol from './carriculumComponents/RightCol'
import LeftCol from './carriculumComponents/LeftCol'

const Carriculum = () => {
  return(
    <div className='bg-blue-200 px-20  flex h-screen '>
        <LeftCol/>
        <div className='max-w-screen   flex space-x-4 '>

          <div className='  border-r  h-full  border-green-300 '></div>
          <div>

            <RightCol/> 
          </div>
        </div>
    </div>
  )
}

export default Carriculum
