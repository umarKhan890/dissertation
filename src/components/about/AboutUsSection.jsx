import React from 'react';

const AboutUsSection = ({ service }) => {
  const currentService = service || defaultService;

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Main Heading and Intro Paragraph */}
      <div className="">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center">
          {currentService.main_heading}
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">{currentService.intro_paragraph}</p>
      </div>

      {/* Content Sections */}
      <div className="space-y-10 md:space-y-12">
        {currentService.content_sections.map((section, idx) => (
          <div key={idx} className="security-content-item">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h4>
            {Array.isArray(section.description) ? (
              <ul className="list-none space-y-3 text-base md:text-lg text-gray-700">
                {section.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl leading-none">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">{section.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default AboutUsSection;
