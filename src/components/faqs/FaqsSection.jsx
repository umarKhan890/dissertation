"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react" 

const FaqsSection = () => {
  const [openId, setOpenId] = useState(3) 

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const faqs = [
    {
      id: 1,
      question: "Brilliant Ideas",
      answer: "Our PH.D. experts always deliver unique and smart solutions.",
    },
    {
      id: 2,
      question: "Timely Assistance",
      answer: "We make sure that our students receive timely and best assistance.",
    },
    {
      id: 3,
      question: "Privacy Guaranteed",
      answer: "We are a safe and secured company and value our customers’ privacy.",
    },
    {
      id: 4,
      question: "24/7 Availability",
      answer: "We are here to address your concerns and problems 24/7.",
    },
    {
      id: 5,
      question: "Customer Satisfaction",
      answer: "We try our level best to Writing our customers with everything.",
    },
    {
      id: 6,
      question: "Boost Grades",
      answer: "Our team put all their efforts to level up the students’ grades.",
    },
  ]

  return (
    <>
     <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            What parts skilled writing From Others?
          </h2>
          <p className="text-base md:text-lg text-gray-700">YOU ARE A FEW CLICKS AWAY</p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  openId === faq.id
                    ? "bg-gradient-to-br from-blue-600 to-teal-500 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <button
                  className={`flex justify-between items-center w-full p-5 md:p-6 text-left font-semibold text-lg md:text-xl ${
                    openId === faq.id ? "text-white" : "text-gray-900"
                  }`}
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  {faq.question}
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === faq.id ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 md:p-6 pt-0">
                    <p className={`${openId === faq.id ? "text-white/90" : "text-gray-600"}`}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqs.slice(3, 6).map((faq) => (
              <div
                key={faq.id}
                className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  openId === faq.id
                    ? "bg-gradient-to-br from-blue-600 to-teal-500 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <button
                  className={`flex justify-between items-center w-full p-5 md:p-6 text-left font-semibold text-lg md:text-xl ${
                    openId === faq.id ? "text-white" : "text-gray-900"
                  }`}
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  {faq.question}
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === faq.id ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 md:p-6 pt-0">
                    <p className={`${openId === faq.id ? "text-white/90" : "text-gray-600"}`}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default FaqsSection;
