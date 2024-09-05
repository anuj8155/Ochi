import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-[#0c0d0d] pt-1'>

    <div className="textstructure mt-44 px-20" > 
        {["We Create","Eye Opening","Presntations"].map((item, index) =>{
            return (
                <div className='masker'>
                    <div className='w-fit flex items-center'>
                        {index === 1 &&(<div className='mr-[0.5vw] w-[9vw] rounded-md h-[5vw] bg-red-500'></div>)}
                    
            <h1 className=" uppercase text-[7vw] leading-[6.3vw] tracking-tighter font-['Founders Grotesk'] font-semibold">{item}
                
            </h1>
            </div>
        </div>          
            );
        })}    
       
    </div>
    <div className='border-t-2 border-zinc-700 mt-20  flex justify-between item-center py-5 px-20'>
        {["for public and private companies","from the first pitch to IPO",].map((item, index) =>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>

        ))}
    </div>
    </div>
  )
}

export default LandingPage