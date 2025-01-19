import React from 'react'
import Us from './whyUsComponents/Us'
import Others from './whyUsComponents/Others'

const Whyus = () => {
  return (
    <div>
      <div className='bg-blue-100 h-screen px-20 py-20'>
        <div >
            <p className='font-sans font-semibold text-5xl'>Why Choose AIDEA?</p>
        </div>
        <div className='flex  gap-5  w-full px-[265px]  mt-[45px] '>

            <div className='w-auto h-auto '>
                <div className='flex py-10 justify-center h-[100px] text-2xl w-[300px] bg-violet-400 rounded-t-[40px]'>
                    <p>AIDEA</p>
                </div>
            </div>
            <div className='w-auto h-auto   '>
                <div className='flex py-10 justify-center h-[100px] text-2xl w-[300px] bg-gray-400 rounded-t-[40px]'>
                    <p>Others</p>
                </div>
            </div>
        </div>
        <div className='flex px-20  w-full h-[500px] max-h-screen '>
            <div className=''>
                <table className=' '>
                {/* border border-collapse border-gray-200 border-slate-500 */}
                    <tbody  className=''>
                        <tr className='' >
                            <td className='border bg-blue-200 border-gray-400 w-auto px-3 py-10 mt-3 font-sans font-semibold '>Subject Expertise</td>
                        </tr>
                        <tr>
                            <td className='border bg-zinc-200 border-gray-400 w-auto px-3 py-10 mt-3 font-sans font-semibold '>Hands-on Work done in AI</td>
                        </tr>
                        <tr>
                            <td className='border bg-blue-200 border-gray-400 w-auto px-3 py-10 mt-3 font-sans font-semibold '>Practical Knowledge</td>
                        </tr>
                        <tr>
                            <td className='border bg-zinc-200 border-gray-400 w-auto px-3 py-10 mt-3 font-sans font-semibold '>Portal based Learning</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='w-full flex gap-5'>

                <div>
                    <Us/>
                </div>
                <div>
                    <Others/>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Whyus
