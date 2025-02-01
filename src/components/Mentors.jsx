import React from 'react'
// import TopIITs from '../assets/images/Top-IITs2.jpg';
import TopIITs from '../assets/images/Top-IITs2.jpg';
import i1 from '../assets/images/i1.jpg'
import A from '../assets/images/Alumni_2x.avif';

const Mentors = () => {
return (
    <div>
        <div className='w-full max-h-[250px] px-20 py-10 bg-gradient-to-br from-[#6a11cb] to-[#2575fc] flex justify-center'>
            <div className='hi text-center'>
                <h4 className='text-5xl font-sans font-size-48 font-semibold'>Your Trainers are Alumni of</h4>
                <div className='relative bg-transparent mt-5'>
                    <img className='object-cover"' src={A} alt="" />
                </div>
                <h4 className='text-zinc-400'>and many more...</h4>
            </div>
        </div>
    </div>
)
}

export default Mentors
