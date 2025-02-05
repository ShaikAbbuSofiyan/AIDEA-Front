import React from 'react'
import Page1 from './Page1'
import Specs from './page1Components/Specs'
import Mentors from './Mentors'
import Carriculum from './Carriculum'
import Reviews from './Reviews'
import Affiliates from './Affiliates'
import Whyus from './Whyus'
import Getcertified from './Getcertified'
import FAQ from './FAQ'
// import NavBar from './page1Components/NavBar
import { Link } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";
import './Background.css'


const BagroundPage = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-br from-[#6a11cb] to-[#2575fc] '>
      <div className=''>
        <nav className="  w-full bg-zinc-900 p-5 items-center">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-3xl font-bold px-7">AIDEA</div>
              <div className="flex space-x-4">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-white tracking-tighter text-xl hover:text-gray-300 cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    to="carriculum"
                    smooth={true}
                    duration={500}
                    className="text-white tracking-tighter text-xl hover:text-gray-300 cursor-pointer"
                >
                    Curriculum
                </Link>
                <Link
                    to="reviews"
                    smooth={true}
                    duration={500}
                    className="text-white tracking-tighter text-xl hover:text-gray-300 cursor-pointer"
                >
                    Reviews
                </Link>
                <Link
                    to="faq"
                    smooth={true}
                    duration={500}
                    className="text-white tracking-tighter text-xl hover:text-gray-300 cursor-pointer"
                >
                    FAQs
                </Link>
                <Link
                    to="login"
                    smooth={true}
                    duration={500}
                    className="text-white tracking-tighter text-xl hover:text-gray-300 cursor-pointer"
                >
                  <div className='h-[50px] px-5 w-auto border bg-blue-200 rounded-s-lg rounded-e-lg  max-h-8 flex gap-1 text-slate-900 font-sans  align-text-middle hover:bg-cyan-400 hover:text-white hover:font-semibold'>Login </div>
                </Link>
                
              </div>
          </div>
        </nav>
      </div>
      <div id='home' className=''>
        <Page1/>
      </div>
      <div className='flex w-full  justify-between fixed h-[500px] opacity-90'>
        {/* <div className='w-full '></div> */}
        <div className='w-[20px]'></div>
        <div className='w-[50px] h-[50px] text-center border-2 rounded-[50%] mb-3'>

          <Link
            to="home"
            smooth={true}
            duration={500}
            className=" text-blue-900  tracking-tighter  hover:text-gray-300 cursor-pointer"
          >
            <div className='flex justify-center py-2 mb-4'>
              {/* <IoArrowUpCircleOutline className='text-3xl'/> */}
              <IoArrowUp className='text-3xl'/>
            </div>
          </Link>
        </div>
      </div>
      <Specs className = ""/>
      <Mentors/>
      <div id='reviews'><Reviews/></div>
      <div id='carriculum'>
        <Carriculum/>
      </div>
      <Affiliates/>
      <Getcertified/>
      <Whyus/>
      <div id='faq'><FAQ/></div>
    </div>
  )
}

export default BagroundPage
