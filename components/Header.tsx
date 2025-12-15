"use client"

import React, { useEffect, useState } from 'react'
import { Italianno } from "next/font/google"
import Link from 'next/link'

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"]
})

const Header = () => {
  const [isFixed, setIsFixed] = useState(false)

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
      <div className="text-center py-2 text-lg bg-main text-white">
        <p>
          Your Guests Deserve more than just an event.
          <Link className="underline font-semibold ml-2" href="/">
            Make it Memorable
          </Link>
        </p>
      </div>

      {/* Nav */}
      <nav
        className={`
          flex px-6 border-b border-main py-2 items-center justify-between 
          
          ${isFixed ? "fixed top-0 left-0 w-full z-50 bg-white" : "absolute top-10 text-white w-full"}
        `}
      >
        <Link href="/" className="block">
          <p className="font-semibold text-2xl uppercase text-center">Ayyan</p>
          <p className={`${italianno.className} text-3xl`}>
            Event And Catering
          </p>
        </Link>

        <ul className="flex gap-7 items-center">
          {menu.map(item => (
            <li key={item.item}>
              <Link
                className={`text-lg font-medium ${isFixed ? "text-main" : "text-white"} hover:text-black`}
                href={item.link}
              >
                {item.item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border border-main rounded-full px-4 py-2 hover:bg-main hover:text-white duration-300">
          <Link href="/">Get A Custom Quote</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
