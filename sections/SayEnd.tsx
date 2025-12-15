"use client"

import { prata } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 }
  })
}

const SayEnd = () => {
  return (
    <section className='bg-main flex items-center overflow-hidden min-h-screen justify-center flex-col py-10 my-10 relative gap-4'>

      <Image src={"/spin.svg"} alt='spinning image' width={150} height={150} className='spin-slow absolute left-10 md:left-45 top-5 z-10' />

      <h5 className={`${prata.className} text-white z-40 text-center text-7xl`}>
        Put an <strong><i>end</i></strong><br />to <strong><i>boring event</i></strong>
      </h5>
      <p className='text-center text-white text-lg mb-4'>Impress your guests with a bit of boujee.</p>
      <button className={`${prata.className} flex gap-3 items-center bg-[#d497a1] rounded-full text-lg px-8 py-3`}>
        Start Planning <FaArrowRight className='text-sm' />
      </button>

      {/* Images with animation */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className='absolute -top-5 right-0'
      >
        <Image src={"/wedding.jpg"} alt='image' width={300} height={300} className='rounded-full object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className='absolute top-15 -left-10'
      >
        <Image src={"/business.jpg"} alt='image' width={300} height={300} className='rounded-4xl object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className='absolute bottom-0 right-0'
      >
        <Image src={"/family.jpg"} alt='image' width={300} height={300} className='object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
      </motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className='absolute bottom-0 left-3 sm:left-10 lg:left-50'
      >
        <Image src={"/art.png"} alt='image' width={300} height={300} className='object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
      </motion.div>

    </section>
  )
}

export default SayEnd
