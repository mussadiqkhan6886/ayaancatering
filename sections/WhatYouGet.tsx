"use client"

import { prata } from "@/lib/fonts/font"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8 },
  }),
}

const WhatYouGet = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 border-t border-b border-main">
      
      {/* Heading */}
      <motion.div
        className="text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className={`${prata.className} text-3xl md:text-4xl font-bold mb-4`}>
          What You Get When You Choose Us
        </h3>
        <p className="text-gray-500 max-w-2xl px-10 mx-auto">
          A full-service event and catering experience designed to impress,
          support, and elevate every celebration.
        </p>
      </motion.div>

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 items-center">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/wedding.jpg"
            alt="Full service event planning"
            width={500}
            height={500}
            className="rounded-2xl object-cover h-[280px] w-full"
          />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="text-xl font-semibold mb-3">
            Complete Event & Catering
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Planning, catering, décor, and coordination — everything handled
            under one trusted team.
          </p>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="text-xl font-semibold mb-3">
            Tailored to Your Vision
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Every menu, setup, and detail is thoughtfully customized to match
            your occasion and style.
          </p>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/catering.jpg"
            alt="Customized events"
            width={500}
            height={500}
            className="rounded-2xl object-cover h-[280px] w-full"
          />
        </motion.div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 items-center">
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="text-xl font-semibold mb-3">
            Proven Experience
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Years of experience delivering weddings, corporate events, and
            celebrations with precision.
          </p>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/business.jpg"
            alt="Experienced event planners"
            width={500}
            height={500}
            className="rounded-2xl object-cover h-[280px] w-full"
          />
        </motion.div>

        <motion.div
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/family.jpg"
            alt="Premium presentation"
            width={500}
            height={500}
            className="rounded-2xl object-cover h-[280px] w-full"
          />
        </motion.div>

        <motion.div
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="text-xl font-semibold mb-3">
            Premium Taste & Presentation
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Elegant setups, refined service, and flavors that leave a lasting
            impression on every guest.
          </p>
        </motion.div>
      </div>

      {/* ROW 3 – FEATURE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/birthday.jpg"
            alt="Stress free execution"
            width={700}
            height={450}
            className="rounded-3xl object-cover w-full h-[360px]"
          />
        </motion.div>

        <motion.div
          custom={9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="text-2xl font-semibold mb-4">
            Stress-Free Execution
          </h4>
          <p className="text-gray-600 leading-relaxed text-lg">
            We manage timelines, logistics, and on-ground execution so you can
            stay present, enjoy your guests, and celebrate without worry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatYouGet
