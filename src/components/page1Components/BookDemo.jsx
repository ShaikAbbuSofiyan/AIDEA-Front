import React from 'react'

const BookDemo = () => {
  return (
    <div className='  '>
      <div className='shadow-lg hover:shadow-2xl bg-blue-200 px-11 py-5  text-zinc-900 mt-3 max-w-[450px] max-h-[520px] border-[2px] border-blue-400 rounded-lg overflow-hidden'>
        <h2 className='text-2xl font-semibold mb-9 mt-3'>
            Book a Live Demo For Free !
        </h2>
        <h4 clas>Name</h4>
        <input className='mt-3 mb-7 w-[350px]  max-w-[500px] shadow-small mb-3 border border-blue-300 hover:bg-blue-100 hover:border-cyan-300 hover:shadow-sm  px-3 py-2 mt-3 rounded-md bg-blue-200 outline-none' type="text" placeholder='Enter your name' />
        <h4>Mobile Number</h4>
        <input className='mt-3 mb-7 w-[350px]  max-w-[500px] shadow-small mb-3 border border-blue-300 hover:bg-blue-100 hover:border-cyan-300 hover:shadow-sm  px-3 py-2 mt-3 rounded-md bg-blue-200 outline-none' type="tel" pattern="[0-9]{10}" placeholder='Enter Mobile Number' />
        <h4>Native State</h4>
        <input className='mt-3 mb-7 w-[350px]  max-w-[500px] shadow-small mb-3 border border-blue-300 hover:bg-blue-100 hover:border-cyan-300 hover:shadow-sm  px-3 py-2 mt-3 rounded-md bg-blue-200 outline-none' type="text" placeholder='Enter your State' />
        <input className='mt-3 mb-10 px-5 py-3 bg-blue-400 hover:bg-gradient-to-br from-cyan-500 to-cyan-300 w-[350px] rounded-lg cursor-pointer' type="submit" value='Book My Demo' />
      </div>
    </div>
  )
}

export default BookDemo
