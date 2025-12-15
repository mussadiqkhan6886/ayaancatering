"use client"

import React, { useEffect, useState } from 'react'
import { Italianno } from "next/font/google"
import Link from 'next/link'
import { FiMenu, FiX } from "react-icons/fi"
import { prata } from '@/lib/fonts/font'

export const italianno = Italianno({
  weight: "400",
  subsets: ["latin"]
})

const Header = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 45)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menu = [
    { item: "Home", link: "/" },
    { item: "Service", link: "/" },
    { item: "Menu", link: "/" },
    { item: "Contact Us", link: "/" },
  ]

  return (
    <header className="flex flex-col">

      {/* Top Bar */}
      <div className="text-center font-light py-2 text-sm sm:text-base md:text-lg bg-main text-white">
        <p>
          Your Guests Deserve more than just an event.
          <Link className="underline font-medium ml-2" href="/">
            Make it Memorable
          </Link>
        </p>
      </div>

      {/* Nav */}
      <nav
        className={`
          flex items-center justify-between px-4 md:px-6 py-3 border-b border-main
          transition-colors duration-300
          ${isFixed
            ? "fixed top-0 left-0 w-full z-50 bg-white"
            : "absolute top-13 sm:top-10 w-full z-50 text-white"}
        `}
      >

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center md:items-start">
        <div>
          <p className={`${prata.className} font-semibold text-xl md:text-[22px] uppercase text-center`}>Ayyan</p>
          <p className={`${italianno.className} text-[25px] md:text-3xl`}>
            Event And Catering
          </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-7">
            {menu.map(item => (
              <li key={item.item}>
                <Link
                  className={`font-medium ${
                    isFixed ? "text-main hover:text-black" : "text-white"
                  }`}
                  href={item.link}
                >
                  {item.item}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className={`${prata.className} border border-main rounded-full px-6 py-2.5 hover:bg-main hover:text-white duration-300`}
          >
            Get A Custom Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden fixed  left-0 w-full bg-white z-40
          transition-all duration-300 overflow-hidden
          ${isOpen ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0"}
          ${isFixed ? "top-[90px]" : "top-[130px]"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          {menu.map(item => (
            <li key={item.item}>
              <Link
                className="text-lg font-medium text-main"
                href={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.item}
              </Link>
            </li>
          ))}

          <Link
            href="/"
            className={`${prata.className} border border-main rounded-full px-6 py-2.5 hover:bg-main hover:text-white duration-300`}
            onClick={() => setIsOpen(false)}
          >
            Get A Custom Quote
          </Link>
        </ul>
      </div>

    </header>
  )
}

export default Header
