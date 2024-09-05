import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
        <h1 className='font-["neue_Montreal"] text-[4vw] leading-[4vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, exlain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5  border-t-[2px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
            <h1 className='text-5xl font-semiregular'>Our approach:</h1>
            <button className='px-10 py-4 mt-10 flex gap-10 items-center text-white bg-zinc-900 rounded-full'>READ MORE
                <div className='w-3 h-3 bg-zinc-100 rounded-full '></div>
            </button>
            </div>
            <div className='w-1/2 h-[75vh] rounded-2xl bg-red-600 flex items-center justify-center'>
  <h1 className='text-4xl font-semibold text-white text-center px-4'>
    "The only limit to our realization of tomorrow is our doubts of today."
  </h1>
</div>

        </div>
    </div>
    
  )
}

export default About