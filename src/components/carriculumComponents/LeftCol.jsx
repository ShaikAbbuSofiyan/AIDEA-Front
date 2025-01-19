import React from 'react'
import { IoRadioButtonOn } from "react-icons/io5";
import {  NavLink } from 'react-router-dom';
import BookDemo from '../page1Components/BookDemo';
import { Link } from 'react-scroll';

const LeftCol = () => {

  return (
    <div className='max-w-[500px]  px-10 py-10'>
      <div className='mb-20'>
        <h1 className='font-semibold font-sans-serif tracking-tighter text-5xl font-[48px]'>Get Ready for Learning AI and ML</h1>
      </div>
      <div className=''>
        <div className='flex gap-2 py-1'>
            <div className='py-1'>
                <IoRadioButtonOn  className='text-green-500'/>
            </div>
            <h4 className='font-semibold text-[15px]'> Next batch starts at 20th jan</h4>
        </div>
        <div className='mt-5'>

            <button  className='mt-3 mb-10 px-5 py-3 bg-violet-400 w-[350px] rounded-lg' >
              <Link
                  to="demo"
                  smooth={true}
                  duration={500}
                  
              >
                  Book a Free Demo
              </Link>
            </button>
        </div>
        

      </div>
    </div>
  )
}

export default LeftCol
