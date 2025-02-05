import React from 'react';
// import myimage from 'AIDEA/src/components/Timer.jpg';

const Specs = () => {
  // const myimage = require('AIDEA/src/components/Timer.jpeg');
  return (
    <div>
        <div className='w-full max-h-[200px] px-20 py-10 bg-gray-800 flex justify-between'>
            <div className='max-w-[200px]'>
              <div className='flex gap-3 '>

                <div>
                  <h4 className='font-sans tracking-tighter text-gray-400 text-semibold text-xl' >Course Duration</h4>
                  <p className='font-sans tracking-tighter not-italic  text-semibold text-white'>1 Year of your class</p>
                </div>
              </div>
            </div>
            <div className='max-w-[200px]'>

              <h4 className='font-sans tracking-tighter text-gray-400 text-semibold text-xl' >Eligibility</h4>
              <p className='font-sans tracking-tighter not-italic text-xl text-semibold text-white'>8-12th Students</p>
            </div>
            <div className='max-w-[200px]'>
              <h4 className='font-sans tracking-tighter text-gray-400 text-semibold text-xl' >Online</h4>
              <p className='font-sans tracking-tighter not-italic text-xl text-semibold text-white'>3 Hours of Classes and Three Hours Labs Every Day</p>
            </div>
            <div className='max-w-[200px]'>
              <h4 className='font-sans tracking-tighter text-gray-400 text-semibold text-xl' >Support</h4>
              <span className='font-sans tracking-tighter not-italic text-xl text-semibold text-white'>Dedicated Success Coach and Live Sessions with course mentors</span>
            </div>
        </div>
    </div>
  )
}

export default Specs
