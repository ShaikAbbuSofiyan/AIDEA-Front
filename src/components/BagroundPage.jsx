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
import NavBar from './page1Components/NavBar'
import { Link } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";



const BagroundPage = () => {
  return (
    <div className='w-full h-screen bg-blue-200'>
      <div>
        <nav className="bg-blue-400 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-3xl font-bold">AIDEA</div>
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
                    Carriculum
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
                  <div className='flex gap-1 text-slate-600 font-sans'>Login <div className='py-1.5' ><BsArrowRight /></div></div>
                </Link>
                
              </div>
          </div>
        </nav>
      </div>
      <div id='home'>
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
            <div className='px-2 mb-4'>
              {/* <IoArrowUpCircleOutline className='text-3xl'/> */}
              <IoArrowUp className='text-2xl'/>
            </div>
          </Link>
        </div>
      </div>
      <Specs/>
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
