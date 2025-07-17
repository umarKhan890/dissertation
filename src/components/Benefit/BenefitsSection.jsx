import { ClipboardCheck } from "lucide-react"
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Award Winning",
      subtitle: "Ideas",
    },
    {
      title: "High Quality",
      subtitle: "Work",
    },
    {
      title: "Direct Communication",
      subtitle: "With the Experts",
    },
    {
      title: "Constant Assistance",
      subtitle: "24/7",
    },
  ]
  return (
    <>
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            Exciting Benefits Which You <br className="sm:hidden" /> Shouldn't Overlook!!
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <ClipboardCheck className="w-16 h-16 md:w-20 md:h-20 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{benefit.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default BenefitsSection;
