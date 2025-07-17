import Image from "next/image"
import { Check } from "lucide-react"

const SecuritySection = () => {
  return (
    <>
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 md:mb-20">
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Book Your Personal Experts Now!
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0">
                Send Us Your Message And Hire Your Experts Within A Few Minutes! Place Your Order And Get 25% Off Today!
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                Book Now
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/assets/images/bookyourapointmint.png" 
                alt="Person with megaphone"
                width={400}
                height={300}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Section: Signup Benefits & Add-Ons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Card: Signup & Get Benefits */}
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src="/assets/images/ordernowimg.jpg" // Replace with actual image URL
                  alt="Smiling girl with laptop"
                  fill
                  className="object-cover object-center"
                />
             
              </div>
            </div>

            {/* Right Content: Cool Add-Ons */}
            <div className="lg:pl-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Cool Add-Ones Of Our Academic Writing Services Which You Shouldn't Miss!
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Cool Add-Ones Of Our Academic Writing Services Which You Shouldn't Miss!
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 text-base md:text-lg">
                  <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Access to Free Material
                </li>
                <li className="flex items-center text-gray-700 text-base md:text-lg">
                  <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Editing & Proofreading
                </li>
                <li className="flex items-center text-gray-700 text-base md:text-lg">
                  <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Exclusive Discounts
                </li>
                <li className="flex items-center text-gray-700 text-base md:text-lg">
                  <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Higher Grades
                </li>
                <li className="flex items-center text-gray-700 text-base md:text-lg">
                  <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Personalized Learning
                </li>
                <li className="flex items-center text-gray-700 text-base md:text-lg">
                  <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Sample Provisions
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecuritySection
