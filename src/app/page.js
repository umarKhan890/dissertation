"use client";
import BenefitsSection from "@/components/Benefit/BenefitsSection";
import FaqsSection from "@/components/faqs/FaqsSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import LoadingScreen from "@/components/loading/LoadingScreen";
import PricingPlanSection from "@/components/Pricing/PricingPlanSection";
import ProjectSection from "@/components/project/ProjectSection";
import SecuritySection from "@/components/Security/SecuritySection";
import ServicesSection from "@/components/services/ServicesSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    // <HomePage />
    <>

      <HomeHeroSection />
      <ServicesSection />
      <ProjectSection />
      <FaqsSection />
      <SecuritySection />
      <BenefitsSection />
      <PricingPlanSection />
    </>
  );
}
