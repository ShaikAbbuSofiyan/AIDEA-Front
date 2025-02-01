import React from 'react'
import RightCol from './carriculumComponents/RightCol'
import LeftCol from './carriculumComponents/LeftCol'

const Carriculum = () => {
  return(
    <div className='bg-blue-200 px-20  flex h-screen  bg-gradient-to-br from-[#6a11cb] to-[#2575fc]'>
        <LeftCol/>
        <div className='max-w-screen   flex space-x-4 '>

          <div className='   '></div>
          <div>
            <RightCol/> 
          </div>
        </div>
    </div>
  )
}

export default Carriculum
