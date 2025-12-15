'use client';

import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards'
import { prata } from '@/lib/fonts/font';
import React from 'react'

const Gallery = () => {

    const gallery = ["/birthday.jpg", "/business.jpg", "/catering.jpg", "/family.jpg","/family.jpg","/family.jpg","/family.jpg"]
    const gallery2 = ["/quote.jpg", "/wedding.jpg", "/birthday.jpg", "/business.jpg"]

  return (
    <section className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
       <h3 className={`${prata.className} text-center text-3xl md:text-4xl font-bold mb-12`}>
            Gallery
        </h3>
        <InfiniteMovingCards
        items={gallery}
        direction="right"
        speed="slow"
        />
        <InfiniteMovingCards
        items={gallery2}
        direction="left"
        speed="slow"
        />
    </section>
  )
}

export default Gallery