import React from 'react'
import Navbar from "./components/Navbar"
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import LocomotiveScroll from 'locomotive-scroll';


export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900 '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />

    </div>
  )
}
