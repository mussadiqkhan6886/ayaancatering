import { prata } from '@/lib/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Italianno } from 'next/font/google'

const italianno = Italianno({
  weight: "400"
})

const Footer = () => {
  return (
    <footer className='max-w-7xl flex flex-col items-center justify-center relative mx-auto border-t border-main'>
       <Image src={"/spin.svg"} alt='spinning image' width={150} height={150} className='spin-slow absolute left-0 sm:left-10 scale-75 md:scale-100 md:left-45 top-1 sm:top-5 z-10' />
      <Link href="/" className="flex flex-col items-center md:items-start">
        <div className='pt-20'>
          <p className={`${prata.className} font-semibold text-6xl md:text-[106px] leading-10 uppercase text-center`}>Ayyan</p>
          <p className={`${italianno.className} text-[55px] sm:text-[80px] md:text-[140px]`}>
            Event And Catering
          </p>
          </div>
        </Link>
        <div className='border-t border-main py-2 w-full text-center text-sm'>
          <p>Copyright Reserved &copy; 2025 <span className='font-[500] inline-block ml-2'>Design & Developed By <Link href={"/scrupulous.vercel.app"} className='hover:text-pink-800'>Scrupulous</Link></span></p>
        </div>
    </footer>
  )
}

export default Footer
