import React from 'react'
import { motion } from "framer-motion"

function Marquee() {

    return (
        <div className='w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-[#004D43] rounded-lg'>
            <div className='text border-t-2 border-b-2 rounded-md border-zinc-100 flex gap-10 pt-25  overflow-hidden whitespace-nowrap'>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className='text-[20vw] leading-none font-["Founders Grotesk"] uppercase font-semibold pt-1 mb-1 -mt-19'>
                    We are ochi
                </motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className='text-[20vw] leading-none font-["Founders Grotesk"] uppercase font-semibold pt-1 mb-1 -mt-19'>
                    We are ochi
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee