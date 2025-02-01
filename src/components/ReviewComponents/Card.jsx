import React from 'react'
import StudentImg from '../Timer.jpeg';
const Card = () => {
  return (
    <div>
      <div className='px-5 py-5 w-[300px] h-[300px] border-2 mt-12  rounded-[30px] bg-[#f7f7f7] shadow-sm hover:h-[320px] hover:w-[320px] hover:shadow-lg hover:bg-zinc-700 hover:text-white cursor-pointer'>
        <div className='flex space-x-20'>
            <div>
                <h1 className='font-semibold text-[18px] font-sans text-zinc-700 hover:text-white'>Sofiyan</h1>
                <h4 className='font-sans mt-2'>10th</h4>
                <h4 className='font-sans mt-2'>CBSE School</h4>
            </div>
            <div>
                <img className='max-w-[80px] max-h-[80px] rounded-[50%]' src={StudentImg} alt="Student" />
            </div>
        </div>
        <div>
            <h4 className='mt-2 font-zinc-200 font-sans font-semibold' >Expert in</h4>
            <div>
                <div className='flex mt-2 tracking-tighter gap-3'>
                    <p className='text-blue-500'>Foundation of AI</p>
                    <p className='text-blue-500'>Foundation of Coding</p>
                </div>
            </div>
            <div className='mt-4 font-sans font-semibold text-2xl text-zinc-700 hover:text-white' >
                <p className=' text-center'>AIDEA gave me strong foundation of AI and Coding.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
