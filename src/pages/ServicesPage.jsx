"use client";
import React from "react";
import AboutUsSection from "../components/about/AboutUsSection";
import HomeHeroSection from "../components/home/HomeHeroSection";
import { servicesData } from "../../public/assets/js/servicesdata";


const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");
const ServicesPage = ({title}) => {

  const matchedKey = Object.keys(servicesData).find(
    (key) => slugify(key) === title
  );

  const service = servicesData[matchedKey];

  if (!service) {
    return <h2 className="text-red-600 text-center mt-10">Service not found</h2>;
  }

  return (
    <>
      <HomeHeroSection service={service} />
      <AboutUsSection service={service} />
    </>
  );
};

export default ServicesPage;
