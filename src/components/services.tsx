"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + professionalServices.length) % professionalServices.length
    );
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % professionalServices.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <>
      <div className="relative py-8 bg-gradient-to-r from-gray-100 to-gray-200">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#004B6B] mb-2">
            Professional Services
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#004B6B] to-[#00E5FF] rounded-full mt-4"></div>
        </motion.div>
      </div>
    <section className="w-screen h-screen overflow-hidden relative bg-black">
      <div
        className="absolute inset-0 z-0"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full absolute inset-0"
          >
            <Image
              src={professionalServices[currentIndex].image}
              alt={professionalServices[currentIndex].title}
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <div className="backdrop-blur-md bg-black/30 p-8 rounded-xl max-w-3xl">
          <motion.h2
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl font-extrabold uppercase mb-6 drop-shadow-lg"
          >
            {professionalServices[currentIndex].title}
          </motion.h2>
          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-200 max-w-2xl mb-8 drop-shadow leading-relaxed"
          >
            {professionalServices[currentIndex].description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={professionalServices[currentIndex].link}
              className="inline-block py-3 px-8 bg-[#00E5FF] text-white text-lg font-medium rounded-full hover:bg-[#0066FF] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-[#111927] hover:bg-[#1a222f] p-2 rounded-full text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-[#111927] hover:bg-[#1a222f] p-2 rounded-full text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center z-20">
        {professionalServices.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
            className={`h-2 w-8 mx-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#00E5FF]" : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default LandingServices;
