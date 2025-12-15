import Velocity from '@/components/Velocity'
import AboutUs from '@/sections/AboutUs'
import ContactUs from '@/sections/ContactUs'
import Gallery from '@/sections/Gallery'
import Hero from '@/sections/Hero'
import Menu from '@/sections/Menu'
import Quote from '@/sections/Quote'
import SayEnd from '@/sections/SayEnd'
import Services from '@/sections/Services'
import WhatYouGet from '@/sections/WhatYouGet'
import React from 'react'

const Home = () => {
  return (
    <main >
      <Hero />
      <Velocity />
      <AboutUs />
      <WhatYouGet />
      <Services />
      <Menu />
      <Quote />
      <Gallery />
      <ContactUs />
      <SayEnd />
    </main>
  )
}

export default Home
