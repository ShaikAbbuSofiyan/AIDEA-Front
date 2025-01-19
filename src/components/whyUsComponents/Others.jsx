import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Others = () => {
  return (
    <div>
        <div className=' w-[300px] h-auto h-[445px] border-2 border-gray-400 rounded-b-lg'>
            <div className='w-full h-[104px] flex justify-center py-10 border-3 border-green-400'>
                <IoMdCloseCircle className='text-red-400 text-4xl'/>
            </div>
            <div className='w-full h-[104px] flex justify-center py-10 border-3 border-green-400'>
                <IoMdCloseCircle className='text-red-400 text-4xl'/>
            </div>
            <div className='w-full h-[104px] flex justify-center py-10 border-3 border-green-400'>
                <IoMdCloseCircle className='text-red-400 text-4xl'/>
            </div>
            <div className='w-full h-[104px] flex justify-center py-10 border-3 border-green-400'>
                <IoMdCloseCircle className='text-red-400 text-4xl'/>
            </div>
        </div>
    </div>
  )
}

export default Others
