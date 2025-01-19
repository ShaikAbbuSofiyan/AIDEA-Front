import React from 'react'
import LeftC from './getCertifiedComponents/LeftC'
import RightC from './getCertifiedComponents/RightC'

const Getcertified = () => {
  return (
    <div>
      <div className='w-full h-screen px-20 py-20 bg-blue-200'>
            <div>
                <h1 className='text-5xl font-semibold text-zinc-800'>Get Certified</h1>
            </div>
            <div className='mt-5 flex justify-between' >
                <div>
                    <LeftC/>
                </div>
                <div>
                    <RightC/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Getcertified
