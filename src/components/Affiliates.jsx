import React from 'react'
import Schs from '../assets/images/schs1.jpg';
import BookDemo from './page1Components/BookDemo';
import { IoRadioButtonOn } from "react-icons/io5";
import { Link } from 'react-scroll';



const Affiliates = () => {

  return (
    <div>
      <div className='bg-cyan-100 w-full h-auto bg-inherit'>
        <div className=' py-20 flex justify-center'>
            <div className='max-w-[500px]  flex justify-center'>
                <p className='text-5xl font-sans font-semibold text-center text-zinc-600'>2000+ CBSE Schools Collabrated with AIDEA</p>
            </div>
        </div>
        <div className='flex justify-center bg-transparent'>
            <img className='w-auto max-h-[350px] object-cover bg-opacity-0' src={Schs} alt="" />
        </div>
        <div>
            <div className=' flex justify-center mt-5'>
                        <div>
                            <div className='flex gap-2 py-1 justify-center'>
                                <div className='py-1'>
                                    <IoRadioButtonOn  className='text-green-500'/>
                                </div>
                                <h4 className='font-semibold text-[15px]'> Next batch starts at 20th jan</h4>
                            </div>
                            <div className='mt-5 flex justify-center gap-4'>
                                <div>
            
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
                                <div className='py-5'>
                                    {/* <input type="submit" className='text-green-900' value="View All Reviews"/> */}
                                    <button className='text-green-900 font-sans tracking-tighter'>View All Schools</button>
                                </div>
            
                            </div>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default Affiliates
