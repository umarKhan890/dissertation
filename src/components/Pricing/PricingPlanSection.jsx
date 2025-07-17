import { ClipboardCheck } from "lucide-react"
const PricingPlanSection = () => {
  const reviews = [
    {
      service: "Essay Writing",
      text: "Wow! Incredible services. I must say their experts are professional and very cooperative. Due to them I can now write amazing essays.",
    },
    {
      service: "Presentation Writing",
      text: "Had the best online learning experience! The Experts Writinged me in making my presentation and also provided smart tips that caused me to score highest marks in the class.",
    },
    {
      service: "Lab Report Writing",
      text: "I must say they are the best place to seek Writing. Because of them I was able to submit an excellent lab report. Thank You.",
    },
  ]
  return (
    <>

<section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center lg:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center lg:justify-start">
            Review & Opinion....
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center mb-4">
                <ClipboardCheck className="w-8 h-8 md:w-9 md:h-9 text-blue-500 mr-2" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{review.service}</h3>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 
    </>


  )
}

export default PricingPlanSection
