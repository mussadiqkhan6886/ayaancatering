import { prata } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const SayEnd = () => {
  return (
    <section className='bg-main flex items-center overflow-hidden min-h-screen justify-center flex-col py-10 my-10 relative gap-4'>
      <Image src={"/spin.svg"} alt='spinning image' width={150} height={150} className='spin-slow absolute left-10 md:left-45 top-5 z-10' />
      <h5 className={`${prata.className} text-white z-40 text-center text-7xl`}>Put an <strong> <i> end </i></strong><br />to<strong> <i>  boring event </i></strong>  </h5>
      <p className='text-center text-white text-lg mb-4'>Impress your guests with a bit of boujee.</p>
      <button className={`${prata.className} flex gap-3 items-center bg-[#d497a1] rounded-full text-lg px-8 py-3`}>Start Planning <FaArrowRight className='text-sm' /> </button>
      <Image src={"/wedding.jpg"} alt='image' width={300} height={300} className=' rounded-full -top-5 right-0 absolute object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
      <Image src={"/business.jpg"} alt='image' width={300} height={300} className=' top-15 rounded-4xl -left-10 absolute object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
      <Image src={"/family.jpg"} alt='image' width={300} height={300} className='bottom-0 right-0 absolute object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
      <Image src={"/art.png"} alt='image' width={300} height={300} className='bottom-0 left-10 lg:left-50 absolute object-cover object-center h-[150px] w-[150px] md:w-[300px] md:h-[300px]' />
    </section>
  )
}

export default SayEnd
