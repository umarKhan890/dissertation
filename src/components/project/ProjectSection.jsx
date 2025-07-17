import Image from 'next/image'
import React from 'react'

const steps = [
  {
    id: 1,
    title: "Choose Your Topic",
    description: "Tell us what type of Writing you need from our experts.",
    image: "/assets/images/Eduone.jpg?height=500&width=500", // Replace with actual image URL for step 1
    alt: "Graduation cap on books",
  },
  {
    id: 2,
    title: "Tell Us Your Problem",
    description: "Let us know what type of Writing you need from our experts.",
    image: "/assets/images/Edutwo.jpg?height=500&width=500", // Replace with actual image URL for step 2
    alt: "Globe and books",
  },
  {
    id: 3,
    title: "Get Your Draft",
    description: "Our experts will start working on your assignment and deliver a draft.",
    image: "/assets/images/Eduthree.jpg?height=500&width=500", // Replace with actual image URL for step 3
    alt: "Blackboard with equations",
  },
  {
    id: 4,
    title: "Receive Final Work",
    description: "Review the work and get ready to submit your high-quality assignment.",
    image: "/assets/images/Edufour.jpg?height=500&width=500", // Replace with actual image URL for step 4
    alt: "Lightbulb with graduation cap",
  },
]
const ProjectSection = () => {
  return (
    <>
       <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <span className="w-4 h-4 md:w-5 md:h-5 bg-black rounded-full mr-3" />
            Getting Our Writing Is Easier Than You Think
          </h2>
          <p className="text-sm md:text-base text-gray-600 uppercase tracking-widest">YOU ARE A FEW CLICKS AWAY</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
            >
              {/* Image */}
              <Image
                src={step.image || "/placeholder.svg"}
                alt={step.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay for details on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-blue-600 rounded-md flex items-center justify-center font-bold text-lg mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-white/90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>


  )
}

export default ProjectSection
