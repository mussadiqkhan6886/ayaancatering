import { prata } from '@/lib/fonts/font'
import React from 'react'
import {
  FiInstagram,
  FiFacebook,
  FiArrowDown,
  FiArrowDownCircle
} from "react-icons/fi"

import {FaPhone, FaWhatsapp} from "react-icons/fa"


const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        src="/hero.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Heading */}
      <h1
        className={`absolute left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-[86%] sm:-translate-y-1/2
        text-[35px] md:text-[50px] font-bold w-full px-10 md:px-37.5 lg:px-62.5 xl:px-75 text-white uppercase text-center
        ${prata.className}`}
      >
        Create a memory that lasts a <strong><i className='scale-105'>lifetime</i></strong> 
      </h1>

      <div className='absolute left-1/2  text-white bottom-60 sm:bottom-25 -translate-x-1/2 flex items-center justify-center flex-col'>
          <p className='text-xl mb-5'>See Our Work</p>
          <FiArrowDown className='text-[35px] md:text-[40px] animate-ping' />
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-28 sm:bottom-18 right-7 flex flex-col gap-4 text-white text-xl">
        <FaPhone className='rounded-full border border-white w-10 h-10 p-2' />
        <FaWhatsapp className='rounded-full border border-white w-10 h-10 p-2' />
        <FiInstagram className='rounded-full border border-white w-10 h-10 p-2' />
        <FiFacebook className='rounded-full border border-white w-10 h-10 p-2' />
      </div>

    </section>
  )
}

export default Hero
