import { prata } from '@/lib/fonts/font'
import React from 'react'

const AboutUs = () => {
  return (
    <section className='min-h-[70vh] relative bg-white flex flex-col items-center justify-center gap-3'>
      <h2 className='font-medium text-2xl'>- Welcome to Ayaan Event And Catering -</h2>
      <h3 className={`${prata.className} text-[45px] `}>Best Event Planners In Peshawar</h3>
      <p className='text-center max-w-4xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id dicta voluptatibus delectus inventore debitis! Possimus cumque veritatis ab odit, commodi quia sed pariatur, ut dolores consequatur accusamus, in earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat optio, quia tenetur accusamus voluptas possimus delectus debitis consectetur suscipit labore aperiam laudantium dolore ipsum doloribus excepturi velit aspernatur quae laborum!</p>
    </section>
  )
}

export default AboutUs
