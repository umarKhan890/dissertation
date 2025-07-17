import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const HomeHeroSection = ({ service }) => {

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Using Next.js Image component with fill and priority */}
        <Image
          src="/assets/images/HeroBg.jpg"
          alt="Students studying"
          fill // Ensures the image fills the parent container
          priority // Optimizes loading for above-the-fold images
          className="object-cover" // Ensures the image covers the area without distortion
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
          {service?.page_title || "Welcome to online skilled writing"}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
          {service?.statistics || "Looking for the ideal place to get academic Writing? Welcome to the Online Dissertation Writingers! Dissertations, essays, skilled, or we are here to assist you everywhere. If you are one of the anxious students and want to score the best grades in your exams, contact us now!"}
          </p>

          <Link href={"/contact"}  className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-lg font-medium rounded-full transition-colors duration-300">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </section>

    </>
  )
}

export default HomeHeroSection
