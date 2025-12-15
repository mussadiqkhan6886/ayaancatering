import { Italianno } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const italianno = Italianno({
    weight: "400"
})

const Quote = () => {
  return (
    <section className="relative h-[70vh] my-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/quote.jpg"
        alt="quote background"
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
        <div className="bg-main relative p-10 md:p-20 max-w-4xl text-center ">
          <FaQuoteLeft className="text-4xl md:text-5xl mx-auto mb-4 text-amber-400" />
          <h2 className={`${italianno.className} text-white text-3xl md:text-5xl font-semibold mb-6`}>
            Your event is a work of art. Trust a master with your masterpiece
          </h2>
          <div className='border border-amber-400 w-4xl h-[330px] bg-transparent absolute -top-7 -left-7'>

            </div>
            <div className='border border-amber-400 w-4xl h-[330px] bg-transparent absolute -bottom-7 -right-7'>

            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Quote
