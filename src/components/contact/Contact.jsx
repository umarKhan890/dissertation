"use client"

import { Phone, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

const Contact = () => {
  return (
    <>

      <section className=" py-16 md:py-20 px-4 md:px-6 overflow-hidden bg-gray-100">
       

        <div className="relative z-10 max-w-7xl mx-auto md:py-40 py-20">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 -mt-24 md:-mt-32 lg:-mt-40">
            {/* UK Call And WhatsApp Card */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 md:p-8 text-white text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">UK Call And WhatsApp</h3>
              <p className="text-sm md:text-base text-white/90">+44-123 456 789</p>
              <p className="text-sm md:text-base text-white/90">+44-7351886011</p>
            </div>

            {/* E-Mail Us Card */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg p-6 md:p-8 text-white text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">E-Mail Us</h3>
              <p className="text-sm md:text-base text-white/90">info@skilledwriting.co.uk</p>
            </div>

            {/* WhatsApp Chat Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg p-6 md:p-8 text-white text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">WhatsApp Chat</h3>
              <p className="text-sm md:text-base text-white/90">+447471 095853</p>
            </div>
          </div>

          {/* Get A Quote Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Get A Quote</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First name"
                className="col-span-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="col-span-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Enter Your Phone No."
                className="col-span-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="col-span-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Write Message"
                rows={5}
                className="col-span-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />
              <div className="col-span-full text-center mt-4">
                <Link href={"/contact"} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium transition-colors duration-300">
                  GET IN TOUCH
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
