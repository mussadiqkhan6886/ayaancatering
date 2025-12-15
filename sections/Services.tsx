"use client"

import React from "react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import {motion} from "framer-motion"
import "swiper/css"
import "swiper/css/navigation"
import { prata } from "@/lib/fonts/font"
import { italianno } from "@/components/Header"
import Image from "next/image"

const services = [
  {
    title: "Wedding Event",
    image: "/wedding.jpg",
    link: "/services/wedding"
  },
  {
    title: "Family Gathering",
    image: "/family.jpg",
    link: "/services/wedding"
  },
  {
    title: "Business Event",
    image: "/business.jpg",
    link: "/services/corporate"
  },
  {
    title: "Catering Services",
    image: "/catering.jpg",
    link: "/services/catering"
  },
  {
    title: "Birthday Parties",
    image: "/birthday.jpg",
    link: "/services/birthday"
  },
]

const slideIn = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
})

const Services = () => {
  
  return (
    <section className="relative overflow-x-hidden py-20 bg-white max-w-7xl mx-auto px-4">
      
      <h3 className={`${prata.className} text-center text-3xl md:text-4xl font-bold mb-12`}>
        Our Core Services
      </h3>

      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="services-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Link href={service.link} className="service-card">
              
              <div className="service-image-wrapper">
                <Image src={service.image} alt={service.title} width={400} height={400} />
                <div className="service-overlay">
                  <h4 className={`${italianno.className} text-4xl`}>{service.title}</h4>
                </div>
              </div>

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className="flex items-center justify-center pt-8">
            <Link
            href="/"
            className={`${prata.className} border border-main rounded-full px-6 py-2.5 hover:bg-main hover:text-white duration-300`}
          >
            Book Now
          </Link>
        </div>

     <div className="my-20 lg:px-20 space-y-20">
      {/* Indoor Service */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("left")}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <Image
            src="/catering.jpg"
            alt="Indoor Event"
            width={600}
            height={400}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <h4 className={`${prata.className} text-3xl mb-7`}>Indoor Events</h4>
          <p>
            Our indoor events are crafted for comfort and elegance. From intimate
            gatherings to large-scale celebrations, we ensure a perfect ambiance
            with sophisticated décor, seamless catering, and attention to every detail.
          </p>
        </div>
      </motion.div>

      {/* Outdoor Service */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("right")}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <Image
            src="/family.jpg"
            alt="Outdoor Event"
            width={600}
            height={400}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <h4 className={`${prata.className} text-3xl mb-7`}>Outdoor Events</h4>
          <p>
            Celebrate under the open sky with our outdoor events. Whether it's a garden
            party, wedding, or corporate event, we create a magical atmosphere combining
            natural beauty, premium catering, and professional planning.
          </p>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="flex items-center justify-center flex-col gap-5 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        <Image
          src="/icon.svg"
          alt="icon"
          width={50}
          height={50}
          className="spin-slow"
        />
        <p className="text-2xl font-[200] italic">
          You put a lot of effort into your event.
          <br />
          Why not make our service a{" "}
          <span className={`${prata.className}`}>memorable part of it?</span>
        </p>
        <Link
          href="/"
          className={`${prata.className} rounded-full px-6 py-2.5 border border-transparent bg-[#d497a1] text-white hover:bg-white hover:border hover:border-main hover:text-main duration-300`}
        >
          Make it Memorable
        </Link>
      </motion.div>
    </div>
    </section>
  )
}

export default Services
