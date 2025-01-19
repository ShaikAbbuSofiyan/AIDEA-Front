import React from 'react'

const RightCol = () => {
    return (
        <div className='max-w-[600px]  bg-blue-200 h-screen overflow-auto scrollbar-none  '>
          <div >
            
            <div className='mt-5  mb-5 '>
                <div className='px-5 py-5 max-w-[500px] border-[3px] border-zinc-400 bg-blue-100 shadow-lg  rounded-lg '>
                    <div className='w-full flex justify-center '>
                        <div className='bg-zinc-900 text-white  w-10 h-10 text-center py-1 rounded-[50%] text-xl'>1</div>
                    </div>
                    <h3 className='font-sans font-semibold text-zinc-900 text-3xl font-size-20 '>Beginner Level</h3>
                    <div className='flex gap-3' >
                        <h1 className='font-bold text-zinc-500'>Grade: </h1>
                        <h4 className='font-bold '>8th-9th</h4>
                    </div>
                    <div>3 Hours Classes and 3 Hours Labs per day</div>
                    <div>
                        <h4 className='font-bold text-zinc-500'>Courses Includes:</h4>
    
                        <div className='flex gap-3 font-semibold text-violet-500'>
                            <h4>Foundation of AI</h4>
                            <h4>Foundation of Coding</h4>
                        </div>
    
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-5 '>
                <div className='px-5 py-5 max-w-[350px] border-[3px] border-zinc-400 bg-blue-100 shadow-lg  rounded-lg'>
                    <div className='w-full flex justify-center '>
                        <div className='bg-zinc-900 text-white  w-10 h-10 text-center py-1 rounded-[50%] text-xl'>2</div>
                    </div>
                    <h3 className='font-sans font-semibold text-zinc-900 text-3xl font-size-20 '>Intermediate Level</h3>
                    <div className='flex gap-3' >
                        <h1 className='text-zinc-500'>Grade: </h1>
                        <h4 className='font-bold '>10th</h4>
                    </div>
                    <div>3 Hours Classes and 3 Hours Labs per day</div>
                    <div>
                        <h4 className='font-bold text-zinc-500'>Courses Includes:</h4>
    
                        <div className='flex gap-3 font-semibold text-violet-500'>
                        <h4>AI Tools</h4>
                        <h4>Intro to Machine Learning</h4>
                        </div>
    
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-5 '>
                <div className='px-5 py-5 max-w-[350px] border-[3px] border-zinc-400 bg-blue-100 shadow-lg  rounded-lg'>
                    <div className='w-full flex justify-center '>
                        <div className='bg-zinc-900 text-white  w-10 h-10 text-center py-1 rounded-[50%] text-xl'>3</div>
                    </div>
                    <h3 className='font-sans font-semibold text-zinc-900 text-3xl font-size-20 '>Advanced Level</h3>
                    <div className='flex gap-3' >
                        <h1 className='text-zinc-500'>Grade: </h1>
                        <h4 className='font-bold '>11th-12th</h4>
                    </div>
                    <div>3 Hours Classes and 3 Hours Labs per day</div>
                    <div>
                        <h4 className='font-bold text-zinc-500'>Courses Includes:</h4>
    
                        <div className='flex gap-3 font-semibold text-violet-500'>
                            <h4>Applied Machine Learning </h4>
                            <h4> Blockchain</h4>
                        </div>
    
                    </div>
                </div>
            </div>
            <div>
                <div className='px-5 py-5 max-w-[350px] border-[3px] border-zinc-400 bg-blue-100 shadow-lg  rounded-lg'>
                    <div className='w-full flex justify-center '>
                        <div className='bg-zinc-900 text-white  w-10 h-10 text-center py-1 rounded-[50%] text-xl'>4</div>
                    </div>
                    <h3 className='font-sans font-semibold text-zinc-900 text-3xl font-size-20 '>Capstone Projects</h3>
                    {/* <div className='flex gap-3' >
                        <h1 className='text-zinc-500'>Grade: </h1>
                        <h4 className='font-bold '>8th-9th</h4>
                    </div> */}
                    {/* <div>3 Hours Classes and 3 Hours Labs per day</div> */}
                    <div>
                        {/* <h4 className='font-bold text-zinc-500'>Courses Includes:</h4> */}
    
                        <div className='flex gap-3 font-semibold text-violet-500'>
                            <h4 className='h-[95px] font-sans text-2xl'>Real World Problem Solving with AI and ML.</h4>
                        </div>
    
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
}

export default RightCol
