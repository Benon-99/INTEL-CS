"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LandingServices = () => {
  const professionalServices = [
    {
      title: "Cloud Services",
      description:
        "Cloud strategy, migration, security, application modernization, and DevSecOps for secure, scalable solutions.",
      image: "/pro1.webp",
      link: "/cloud-services-details",
    },
    {
      title: "Data Services",
      description:
        "Data engineering, analytics, and science for scalable infrastructure, insights, and data-driven decisions.",
      image: "/pro2.webp",
      link: "/data-services-details",
    },
    {
      title: "Business Process Automation",
      description:
        "Custom applications, workflow automation, legacy system modernization, and mobile development for business efficiency.",
      image: "/pro3.webp",
      link: "/business-process-automation-details",
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
      <section className="relative mb-16 h-[600px] overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={professionalServices[currentSlide].image}
                alt={`${professionalServices[currentSlide].title}`}
                fill
                className="object-cover"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-white uppercase">
            PROFESSIONAL SERVICES
          </h2>
          <div className="w-16 h-1 mx-auto bg-white rounded-full mb-12"></div>

          <div className="max-w-3xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white"
              >
                <h3 className="text-3xl font-semibold mb-4">
                  {professionalServices[currentSlide].title}
                </h3>
                <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  {professionalServices[currentSlide].description}
                </p>
                <a
                  href={professionalServices[currentSlide].link}
                  className="inline-block text-lg py-3 px-8 border-2 border-white rounded-full hover:bg-white hover:text-[#004B6B] transition-colors"
                >
                  Learn More
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10 hover:text-gray-300 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10 hover:text-gray-300 transition-colors"
          >
            ›
          </button>
        </div>
      </section>

      {/* MANAGED SERVICES */}
      <section className="relative py-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center text-[#004B6B]"
        >
          MANAGED SERVICES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12 text-gray-700 px-4"
        >
          We offer a comprehensive suite of managed services to ensure optimized,
          secure, and resilient cloud environments for your business.
        </motion.p>

        <div className="relative max-w-5xl mx-auto px-4">
          {/* Central Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="flex justify-center mb-16 relative"
          >
            <img
              src="/cloud_gear.png"
              alt="Managed Services Icon"
              className="w-60 h-60"
              style={{
                filter: 'brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(6000%) hue-rotate(185deg) brightness(90%) contrast(85%)',
              }}
            />
          </motion.div>

          {/* 4 blocks */}
          <div className="absolute top-10 grid grid-cols-2 gap-10">
            {[
              {
                title: "24/7 Cloud Infrastructure Management",
                description: "Round-the-clock monitoring and management of cloud infrastructure with proactive maintenance and optimization.",
                delay: 0.4,
                x: -50,
                className: "mr-20"
              },
              {
                title: "Security Operations",
                description: "Continuous security monitoring and threat detection with expert security analysts.",
                delay: 0.6,
                x: 50,
                className: "ml-20"
              },
              {
                title: "Backup & Disaster Recovery",
                description: "Automated backup solutions with comprehensive disaster recovery planning and testing.",
                delay: 0.8,
                x: -50,
                className: "mr-20"
              },
              {
                title: "Custom Managed Service",
                description: "Tailored managed services to match your unique business requirements and ensure operational efficiency.",
                delay: 1,
                x: 50,
                className: "ml-20"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: service.x }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                className={`flex flex-col items-center text-center px-4 ${service.className}`}
              >
                <h3 className="text-lg font-semibold text-[#004B6B] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default LandingServices;
