import { prata } from '@/lib/fonts/font'
import React from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const achievements = [
  { value: '7+', label: 'Years of Experience' },
  { value: '1600+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '200+', label: 'Events / Year' },
  { value: '#1', label: 'Ranking on Google' },
  { value: '100+', label: 'Venues Available' },
]

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white px-4 py-10 space-y-16">
      
      {/* Section Title */}
      <h3 className={`${prata.className} text-center text-3xl md:text-4xl font-bold`}>
        Our Achievements
      </h3>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Passion, creativity, and flawless execution define us — transforming ordinary gatherings 
        into extraordinary experiences as Pakistan’s trusted event planners.
      </p>

      {/* Achievements Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {achievements.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
            {/* Placeholder for icon/image */}
            <div className="text-4xl mb-2 text-main font-bold">{item.value}</div>
            <p className="text-gray-700 font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className={`${prata.className} bg-main text-white px-8 py-3 rounded-full font-semibold hover:bg-main/90 transition`}>
          Schedule a Call
        </button>
      </div>

      {/* Contact + Why Us Section */}
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Contact Form */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main" />
            <input type="text" placeholder="Phone" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main" />
            <input type="text" placeholder="Guest Count" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main" />
            <div className='flex'>
              <div>
                <label className='inline-block mr-4'>Event Type: </label>
                <select className='border rounded-lg p-2'>
                  <option className='text-gray-600' value="">Choose Event</option>
                  <option value="">Wedding Event</option>
                  <option value="">Birthday Party</option>
                  <option value="">Business Event</option>
                  <option value="">Family Gathering</option>
                </select>
              </div>
              <div>
                <label className='inline-block mx-4' >Event Date: </label>
                <input type="date" className='border border-black rounded-lg p-2' />
              </div>
            </div>
            <textarea placeholder="Message" rows={5} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main"></textarea>
            <button type="submit" className="bg-main text-white px-6 py-3 rounded-full font-semibold hover:bg-main/90 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Why Us */}
        <div className="flex-1 bg-main text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
          <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
          <p className="mb-4">
            We are more than a vendor — we are your partner in creating unforgettable events. 
            From concept to execution, we deliver flawless experiences that leave a lasting impression.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2"><FiPhone /> +92 300 1234567</p>
            <p className="flex items-center gap-2"><FiMail /> info@eventcompany.com</p>
            <p className="flex items-center gap-2"><FiMapPin /> Islamabad, Pakistan</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactUs
