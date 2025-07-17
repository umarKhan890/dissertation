"use client"
import React, { useEffect, useState } from 'react';
import HomeHeroSection from '../components/home/HomeHeroSection';
import BenefitsSection from '../components/Benefit/BenefitsSection'
import FaqsSection from '../components/faqs/FaqsSection';
import PricingPlanSection from '../components/Pricing/PricingPlanSection';
import ProjectSection from '../components/project/ProjectSection';
import SecuritySection from '../components/Security/SecuritySection';
import ServicesSection from '../components/services/ServicesSection';
import Image from 'next/image';


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader1">
        <div className="loading-container">
          <div className="loading" />
          <div id="loading-icon" className="relative w-24 h-24 mx-auto">
            <Image
              src="/assets/images/icon.png"
              alt="Loading..."
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HomeHeroSection />
      <ServicesSection />
      <ProjectSection />
      <FaqsSection />
      <SecuritySection />
      <BenefitsSection/>
      <PricingPlanSection />
    </>
  );
};

export default HomePage;
