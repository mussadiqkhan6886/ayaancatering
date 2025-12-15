import { prata } from '@/lib/fonts/font'
import { Italianno } from 'next/font/google'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"]
})

const AboutUs = () => {
  return (
    <section className='min-h-[75vh] relative bg-white flex flex-col items-center justify-center gap-20'>
      {/* <div className='relative'>
        <h2 ><FaQuoteLeft className='inline absolute -left-6' /> <span className={`${italianno.className} text-5xl`}> Your event is work of art. Trust a master with your masterpiece </span><FaQuoteRight className='inline absolute -right-7' /></h2>
        <p className='text-center'>We are not a vendor. We are partner in elevation</p>
      </div> */}
      <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className='font-medium text-2xl'>- Welcome to Ayaan Event And Catering -</h2>
        <h3 className={`${prata.className} text-[45px] `}>Best Event Planners In Peshawar</h3>
        <p className='text-center max-w-4xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id dicta voluptatibus delectus inventore debitis! Possimus cumque veritatis ab odit, commodi quia sed pariatur, ut dolores consequatur accusamus, in earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat optio, quia tenetur accusamus voluptas possimus delectus debitis consectetur suscipit labore aperiam laudantium dolore ipsum doloribus excepturi velit aspernatur quae laborum!</p>
      </div>
    </section>
  )
}

export default AboutUs
