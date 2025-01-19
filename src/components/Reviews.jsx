import React, { useRef } from 'react'
import Card from './ReviewComponents/Card'
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoRadioButtonOn } from "react-icons/io5";
import BookDemo from './page1Components/BookDemo';
import { Link } from 'react-scroll';
import { Navigate } from 'react-router-dom';

const Reviews = () => {
    const scrollRef = useRef(null);
    function rightScroll(){
        

        const scrollLeft = () => {
            scrollRef.current.scrollBy({
            right: -100, // Adjust scroll amount
            behavior: 'smooth',
            });
        };
        const scrollRight = () => {
            scrollRef.current.scrollBy({
              left: 100, // Adjust scroll amount
              behavior: 'smooth',
            });
        };
    }
  return (
    <div>
      <div className='bg-zinc-400 w-full h-auto px-60 py-20'>
        <div className='w-full text-5xl font-sans  font-semibold flex justify-center mb-12'>
            Your Seniors Reviews
        </div>
        <div className='flex space-x-20 px-20 flex-wrap'>
            <div className='max-w-[100px] px-3 py-2 border-2 rounded-[15px] bg-green-600 border-none text-white'>
                <button>All</button>
            </div>
            <div className='min-w-[100px] px-3 py-2 border-2 rounded-[20px]'>
                <button>9th Class</button>
            </div>
            <div className='min-w-[100px] px-3 py-2 border-2 rounded-[20px]'>
                <button>10th Class</button>
            </div>
            <div className='min-w-[100px] px-3 py-2 border-2 rounded-[20px]'>
                <button>11th Class</button>
            </div>
            <div className='min-w-[100px] px-3 py-2 border-2 rounded-[20px]'>
                <button>12th Class</button>
            </div>
        </div>
        <div className=' overflow-x-auto w-full  scrollbar-none'>
            <div className='flex space-x-10  '>
                <div className='d1 flex space-x-10'>


                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className='d2'><Card/></div>
            </div>
            <div className='mt-10 text-2xl  space-x-10 flex justify-center'>
                <div>
                    <button  onClick={rightScroll}><MdKeyboardArrowLeft  /></button>
                </div>
                <div>
                    <button><MdChevronRight  /></button>
                </div>
            </div>
        </div>
        <div className=' flex justify-center'>
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
                        <button className='text-green-900 font-sans tracking-tighter'>View All Reviews</button>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
