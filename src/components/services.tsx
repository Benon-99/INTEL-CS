"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LandingServices = () => {
  // Reference to store the interval
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
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
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Start auto-slide when component mounts
  React.useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Cleanup on unmount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const startAutoSlide = () => {
    if (intervalRef.current) return; // Don't start if already running
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % professionalServices.length);
      }
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % professionalServices.length);
    // Reset the timer when manually changing slides
    stopAutoSlide();
    startAutoSlide();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) =>
        (prev - 1 + professionalServices.length) % professionalServices.length
    );
    // Reset the timer when manually changing slides
    stopAutoSlide();
    startAutoSlide();
  };

  return (
    <>
      {/* PROFESSIONAL SERVICES Carousel */}
      <section 
        className="relative mb-16 h-[600px] overflow-hidden rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{
              x: direction === 1 ? 1000 : -1000,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            exit={{
              x: direction === 1 ? -1000 : 1000,
              opacity: 0
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
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
                className="text-white backdrop-blur-md bg-white/10 p-8 rounded-xl shadow-lg"
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
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(0, 75, 107, 0.1);
          border-radius: 50%;
          pointer-events: none;
          animation: float 15s infinite linear;
        }
        .bubble:nth-child(1) { left: 10%; width: 40px; height: 40px; animation-delay: 0s; }
        .bubble:nth-child(2) { left: 20%; width: 60px; height: 60px; animation-delay: 2s; }
        .bubble:nth-child(3) { left: 35%; width: 30px; height: 30px; animation-delay: 4s; }
        .bubble:nth-child(4) { left: 50%; width: 45px; height: 45px; animation-delay: 6s; }
        .bubble:nth-child(5) { left: 65%; width: 35px; height: 35px; animation-delay: 8s; }
        .bubble:nth-child(6) { left: 80%; width: 50px; height: 50px; animation-delay: 10s; }
        .bubble:nth-child(7) { left: 90%; width: 25px; height: 25px; animation-delay: 12s; }
      `}</style>
      <section className="relative py-16 bg-gradient-to-b from-white to-[#f5f9fb] overflow-hidden bg-black/20 backdrop-blur-sm" style={{
        backgroundImage: "url('/bg-about2.webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center text-[#004B6B] relative z-10"
        >
          MANAGED SERVICES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12 text-gray-700 px-4 relative z-10"
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
                className: "mr-50"
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
