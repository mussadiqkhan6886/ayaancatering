"use client"

import React from "react"
import { FaStar, FaQuoteLeft } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import { prata } from "@/lib/fonts/font"

const reviews = [
  {
    name: "Ayesha Khan",
    event: "Wedding Event",
    review:
      "Everything was handled beautifully. From décor to catering, our guests were impressed. Truly a stress-free experience.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    event: "Corporate Event",
    review:
      "Professional, elegant, and perfectly managed. The team exceeded expectations in every way.",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    event: "Birthday Celebration",
    review:
      "Amazing service and presentation. The food, the setup, everything felt premium and personal.",
    rating: 4,
  },
  {
    name: "Hassan Raza",
    event: "Engagement Ceremony",
    review:
      "Attention to detail was incredible. Our guests are still talking about the event.",
    rating: 5,
  },
]

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className={`${prata.className} text-3xl md:text-4xl font-bold mb-4`}>
          What Clients are <strong> <i>Saying </i></strong>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Elegant events, memorable experiences — trusted by our clients.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".review-next",
          prevEl: ".review-prev",
        }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                group bg-white/70 backdrop-blur-lg 
                border border-gray-200 rounded-2xl p-8
                shadow-sm hover:shadow-xl transition-all duration-500
                hover:-translate-y-2 h-full
              "
            >
              <FaQuoteLeft className="text-main text-3xl mb-6 opacity-20 group-hover:opacity-100 transition" />

              <p className="text-gray-700 leading-relaxed mb-6">
                {item.review}
              </p>

              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">{item.event}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex justify-center gap-6 mt-12">
        <button className="review-prev w-12 h-12 rounded-full border border-main text-main hover:bg-main hover:text-white transition">
          ←
        </button>
        <button className="review-next w-12 h-12 rounded-full border border-main text-main hover:bg-main hover:text-white transition">
          →
        </button>
      </div>

    </section>
  )
}

export default Reviews
