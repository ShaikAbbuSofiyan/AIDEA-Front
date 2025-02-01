import React from 'react'
// import NavBar from './page1Components/NavBar'
import MovingArrayContent from './page1Components/MovingArrayContent'
import MovingArray from './page1Components/MovingArray'
import BookDemo from './page1Components/BookDemo'
import MovingImg from './page1Components/MovingImg'

const Page1 = () => {
  return (
    <div className='w-full h-[600px] max-h-screen flex-col flex-wrap'>
      {/* <NavBar/> */}
        <div className='px-12 flex gap-[400px] mt-10'>
            <div className='px-3 font-semibold text-zinc-700 mt-3 max-w-[500px] max-h-[400px] '>
                <h1 className='text-[48px] font-sans text-white'>A Proven Program To Make you a Master of</h1>
                {/* <MovingArrayContent/> */}
                <div className='max-h-[400px]'>
                    <MovingArray/>
                    {/* <MovingImg/> */}
                </div>
            </div>
            <div id='demo'className=''>
                <BookDemo className='h-auto'/>
            </div>
        </div>
        
    </div>
  )
}

export default Page1
