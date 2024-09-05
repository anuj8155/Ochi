import React from 'react'

function Feature() {
  return (
    <div className='w-full py-10'>
        <div className='w-fill px-10 border-b-[1px] border-zinc-600 pt-10 pb-10'>
            <h1 className='text-6xl tracking-tight font-["neue_Montreal"] '>Featured projects</h1>
           
        </div>
      
            <div className='px-10'>
            <div className="cards w-full flex gap-10 mt-20">
            <div className='card w-1/2 rounded-xl h-[80vh] bg-red-500 flex items-center justify-center'>
  <h1 className='text-9xl font-bold text-white'>"THE</h1>
</div>

<div className='card w-1/2 rounded-xl h-[80vh] bg-red-500 flex items-center justify-center'>
  <h1 className='text-9xl font-bold text-white'>END"</h1>
</div>

            </div>
            </div>
    </div>
    
  )
}

export default Feature