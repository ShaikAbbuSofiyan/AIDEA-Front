import React from 'react'
import RightF from './faqComponents/RightF'
import LeftF from './faqComponents/LeftF'
import FAQPage from './faqComponents/FAQPage'

const FAQ = () => {
  return (
    <div>
      <div className='px-20 py-20 w-full h-screen bg-zinc-200 bg-gradient-to-br from-[#6a11cb] to-[#2575fc]'>
        <div className='text-[48px] font-sans font-semibold'>Frequently Asked Questions</div>
        <div className='flex justify-between mt-10'>
            <div>
                <LeftF/>
            </div>
            <div>
                {/* <RightF/> */}
                <FAQPage/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
