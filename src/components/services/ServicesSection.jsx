
import { PenTool, Users, GraduationCap, FileText, FileCheck2, Mic, Presentation, Video, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <>
 <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent leading-tight">
            Find A Expert For Any Academic Task You Want
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Reach out to Assignment Writing and get a range of services to seek writing. Let's learn together and help you succeed in your academic life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <PenTool className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Skilled Writing",
              text: "Find answers to even the most complicated questions of your skill with the help of our experts and score more.",
            },
            {
              icon: <Users className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Easy Writing",
              text: "Our essayists will help you learn the art of writing excellent essays and unique tips to impress your teachers.",
            },
            {
              icon: <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Dissertation Writing",
              text: "We have P.H.D. research writers to guide you in composing a winning dissertation.",
            },
            {
              icon: <FileText className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Lab Report Writing",
              text: "Get help writing 100% accurate, genuine, scientific, and properly formatted lab reports.",
            },
            {
              icon: <FileCheck2 className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Project Report Writing",
              text: "Let our experts assist you in writing a detailed and outstanding project report.",
            },
            {
              icon: <Mic className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Speech Writing",
              text: "Want to impress your audience? Hire our experts to write an unforgettable speech.",
            },
            {
              icon: <Presentation className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Presentation Writing",
              text: "We help with making your presentations and teach you to deliver them effectively.",
            },
            {
              icon: <Video className="w-7 h-7 md:w-8 md:h-8" />,
              title: "Video Solutions",
              text: "Aid your learning and solve academic problems through skilled writing’s video sessions.",
            },
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-xl bg-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 rounded-xl border border-gray-100 hover:border-transparent">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-purple-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors duration-300 text-purple-600 group-hover:text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                  {item.text}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 group-hover:bg-white group-hover:text-blue-600 group-hover:hover:bg-gray-100 text-white rounded-full p-3 transition-all duration-300 inline-flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>


  )
}

export default ServicesSection
