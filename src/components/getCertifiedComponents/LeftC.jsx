import React from 'react'
import { TbCertificate } from "react-icons/tb";
import { IoCheckmarkCircle } from "react-icons/io5";
import {  NavLink } from 'react-router-dom';
import BookDemo from '../page1Components/BookDemo';
import { IoRadioButtonOn } from "react-icons/io5";
import { Link } from 'react-scroll';

const LeftC = () => {
    
  return (
    <div>
      <div>
        <div className='max-w-[400px] text-xl font-sans text-zinc-600' >
            <p >Yes, you’ll get a certificate representing your Expertise in AI Tools once you submit your projects and clear the test</p>
        </div>
        <div className='mt-5'>
            <div className='flex gap-2'>
                <div className=' text-5xl'><TbCertificate /></div>
                <div className='py-1 '>
                    <h1 className='font-semibold font-xl'>Expertise Certificate</h1>
                    <p>AIDEA Certificate</p>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <div className='w-[40px] h-[40px]  px-1.5 py-.5 text-3xl'><IoCheckmarkCircle  className='text--400'/></div>
                <div className='max-w-[400px]'>
                    <h1 className='font-semibold font-xl'>Shareable, Credible and Official</h1>
                    <p>Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere.</p>
                </div>
            </div>
            <div>
                <div className='mt-12'>
                    <div className='flex gap-2 py-1'>
                        <div className='py-1'>
                            <IoRadioButtonOn  className='text-green-500'/>
                        </div>
                        <h4 className='font-semibold text-[15px]'> Next batch starts at 20th jan</h4>
                    </div>
                    <div className='mt-5'>
                        {/* <input onClick ={BookDemoClick} className='mt-3 mb-10 px-5 py-3 bg-violet-400 w-[350px] rounded-lg' type="submit" value='Book a Free Demo' /> */}
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
        </div>
      </div>
    </div>
  )
}

export default LeftC
