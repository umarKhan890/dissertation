import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Facebook, Linkedin, Instagram } from "lucide-react"

const BlogDetailPage = () => {
  return (
    <>
        <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg mb-12 md:mb-16">
          <Image
            src="/assets/images/blgimg.jpg" 
            alt="Content word cloud"
            fill
            className="object-cover"
            priority 
          />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl text-left mx-auto ">
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            In a world where personal branding and professional clarity matter more than ever, well-written skills can
            be the key to unlocking new opportunities. Whether you're a student, job seeker, freelancer, or
            professional, having clearly articulated skills can set you apart from the competition.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our skills writing service is designed to help you express your expertise effectively. We craft
            personalized, compelling content that highlights your strengths, showcases your value, and aligns with your
            career goals.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Quote Block */}
        <div className="bg-[#0a0a2a] text-white rounded-2xl p-8 md:p-12 mb-12 md:mb-16 relative overflow-hidden">
          <span className="absolute top-4 left-4 text-6xl md:text-8xl font-bold text-white/20 leading-none">
            &ldquo;
          </span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center relative z-10 leading-tight">
            Whether you&apos;re building a resume, a portfolio, or an online profile, we make sure your skills shine
            with confidence and clarity. Let your words work as hard as you do.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            We believe that every individual has unique strengths, and our mission is to put those into words that speak
            powerfully to employers, clients, and collaborators.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-10">What We Offer</h2>

          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            We offer custom skills writing services for a variety of purposes. Whether you&apos;re targeting a specific
            job, industry, or niche, we tailor your content accordingly.
          </p>

          <ul className="list-none space-y-4 mb-8">
            <li className="flex items-start text-base md:text-lg text-gray-700">
              <span className="text-blue-600 mr-3 text-xl leading-none">&bull;</span>
              Professionally written skill descriptions for resumes and CVs
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700">
              <span className="text-blue-600 mr-3 text-xl leading-none">&bull;</span>
              Customized LinkedIn skill section writing
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700">
              <span className="text-blue-600 mr-3 text-xl leading-none">&bull;</span>
              Skills content for personal websites and portfolios
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700">
              <span className="text-blue-600 mr-3 text-xl leading-none">&bull;</span>
              Freelancer profile optimization (Upwork, Fiverr, etc.)
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700">
              <span className="text-blue-600 mr-3 text-xl leading-none">&bull;</span>
              Business skill content for teams and company profiles
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            Let us help you present your strengths with confidence. Contact us today and take the first step toward
            making your skills stand out in a crowded world.
          </p>
        </div>

        {/* Tags and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 md:mt-16">
          <div className="flex items-center mb-6 sm:mb-0">
            <span className="text-lg font-semibold text-gray-800 mr-3">Tags:</span>
            <div className="flex space-x-3">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Skills</span>
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">Writing</span>
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Branding</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BlogDetailPage
