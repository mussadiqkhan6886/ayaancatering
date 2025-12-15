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
       <Image src={"/spin.svg"} alt='spinning image' width={150} height={150} className='spin-slow absolute left-45 top-5 z-10' />
      <Link href="/" className="flex flex-col items-center md:items-start">
        <div className='pt-20'>
          <p className={`${prata.className} font-semibold text-xl md:text-[106px] leading-10 uppercase text-center`}>Ayyan</p>
          <p className={`${italianno.className} text-[25px] md:text-[140px]`}>
            Event And Catering
          </p>
          </div>
        </Link>
    </footer>
  )
}

export default Footer
