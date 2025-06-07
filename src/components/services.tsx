"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingServices = () => {
  const professionalServices = [
    {
      title: "Cloud Services",
      description:
        "Cloud strategy, migration, security, application modernization, and DevSecOps for secure, scalable solutions.",
      icon: "/cloud_gear.png", // Example, put your real path here
      link: "/cloud-services-details",
    },
    {
      title: "Data Services",
      description:
        "Data engineering, analytics, and science for scalable infrastructure, insights, and data-driven decisions.",
      icon: "/_Cloud_with.png", // Example, put your real path here
      link: "/data-services-details",
    },
    {
      title: "Business Process Automation",
      description:
        "Custom applications, workflow automation, legacy system modernization, and mobile development for business efficiency.",
      icon: "/gear.png", // Example, put your real path here
      link: "/business-process-automation-details",
    },
  ];

  const managedServices = [
    {
      title: "24/7 Cloud Infrastructure Management",
      description:
        "Round-the-clock monitoring and management of cloud infrastructure with proactive maintenance and optimization.",
      icon: "🕒",
    },
    {
      title: "Security Operations",
      description:
        "Continuous security monitoring and threat detection with expert security analysts.",
      icon: "🛡️",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Automated backup solutions with comprehensive disaster recovery planning and testing.",
      icon: "💾",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % professionalServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + professionalServices.length) % professionalServices.length
    );
  };

  return (
    <>
      {/* PROFESSIONAL SERVICES Carousel */}
      <section
        className="relative py-16 mb-16"
        style={{
          backgroundImage: "url('/bg-body.png')", // use your background image here
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
        }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-white uppercase">
          PROFESSIONAL SERVICES
        </h2>
        <div className="w-16 h-1 mx-auto bg-white rounded-full mb-12"></div>

        <div className="relative max-w-3xl mx-auto px-4">
        <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:text-gray-300"
  >
    &#10094;
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:text-gray-300"
  >
    &#10095;
  </button>

  <div className="relative max-w-3xl mx-auto px-4">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center text-white"
      >
        <img
          src={professionalServices[currentSlide].icon}
          alt={`${professionalServices[currentSlide].title} icon`}
          className="w-60 h-60 mb-6"
        />
        <h3 className="text-2xl font-semibold mb-4">
          {professionalServices[currentSlide].title}
        </h3>
        <p className="text-sm leading-relaxed mb-6 max-w-md">
          {professionalServices[currentSlide].description}
        </p>
        <a
          href={professionalServices[currentSlide].link}
          className="text-sm py-2 px-6 border border-white rounded-full hover:bg-white hover:text-[#004B6B] transition-colors"
        >
          Read more
        </a>
      </motion.div>
    </AnimatePresence>
  </div>
        </div>
      </section>

      {/* MANAGED SERVICES */}
      <section className="relative py-16 mb-16 bg-white">
  <h2 className="text-3xl font-bold mb-6 text-center text-[#004B6B]">
    MANAGED SERVICES
  </h2>
  <p className="max-w-3xl mx-auto text-center mb-12 text-gray-700 px-4">
    We offer a comprehensive suite of managed services to ensure optimized,
    secure, and resilient cloud environments for your business.
  </p>

  <div className="relative max-w-5xl mx-auto px-4">
    {/* Central Icon */}
    <div className="flex justify-center mb-16 relative">
    <img
  src="/cloud_gear.png"
  alt="Managed Services Icon"
  className="w-60 h-60"
  style={{
    filter: 'brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(6000%) hue-rotate(185deg) brightness(90%) contrast(85%)',
  }}
/>

      {/* Connecting lines (optional) */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* You can draw lines here using borders or SVG if you want more precise lines */}
      </div>
    </div>

    {/* 4 blocks */}
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col items-center text-center px-4">
        <h3 className="text-lg font-semibold text-[#004B6B] mb-2">
          24/7 Cloud Infrastructure Management
        </h3>
        <p className="text-sm text-gray-700">
          Round-the-clock monitoring and management of cloud infrastructure with
          proactive maintenance and optimization.
        </p>
      </div>
      <div className="flex flex-col items-center text-center px-4">
        <h3 className="text-lg font-semibold text-[#004B6B] mb-2">
          Security Operations
        </h3>
        <p className="text-sm text-gray-700">
          Continuous security monitoring and threat detection with expert
          security analysts.
        </p>
      </div>
      <div className="flex flex-col items-center text-center px-4">
        <h3 className="text-lg font-semibold text-[#004B6B] mb-2">
          Backup & Disaster Recovery
        </h3>
        <p className="text-sm text-gray-700">
          Automated backup solutions with comprehensive disaster recovery
          planning and testing.
        </p>
      </div>
      <div className="flex flex-col items-center text-center px-4">
        <h3 className="text-lg font-semibold text-[#004B6B] mb-2">
          Custom Managed Service
        </h3>
        <p className="text-sm text-gray-700">
          Tailored managed services to match your unique business requirements
          and ensure operational efficiency.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default LandingServices;
