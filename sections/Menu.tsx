import { prata } from '@/lib/fonts/font'
import React from 'react'

const Menu = () => {

    const menus = ["menu1", "menu2", "menu3", "menu4"]

  return (
    <section className="relative bg-white max-w-7xl mx-auto px-4">
        <h3 className={`${prata.className} text-center border-t py-3 border-b border-main text-3xl md:text-4xl font-bold mb-4`}>
            Menu
        </h3>
        <div className='text-center'>
            <h4 className={`${prata.className} text-3xl md:text-5xl  sm:px-10 mb-3`}>
                Your guests deserve more than ordinary catering.
            </h4>
            <p className='max-w-3xl mx-auto italic text-sm sm:text-lg'>
                <span className='font-semibold text-xl mb-7 inline-block mt-3 italic'>Why settle for the usual buffet when you can wow them with flavor and style?</span>
                <br />
                From signature dishes to picture-perfect presentations, every detail is crafted to impress and delight. Make your event memorable from the first bite to the last toast.
<br />
                Your guests won’t just eat—they’ll talk about it long after the celebration is over. From the appetizers to the dessert table, every element is thoughtfully crafted to impress and engage.
            </p>
        </div>
        <div className='grid lg:grid-cols-2 gap-10 place-items-center mt-9'>
            {menus.map(item => (
                <div className='bg-main h-[500px] rounded-lg border-black border w-[290px] md:w-[450px] text-white' key={item}>
                    <p>{item}</p> 
                </div>
            ))}
        </div>
    </section>
  )
}

export default Menu
