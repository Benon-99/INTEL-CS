"use client";

import React from "react";
import { motion } from "framer-motion";

const TopServices = () => {
  const services = [
    {
      title: "Cloud Services",
      description:
        "Cloud strategy, migration, security, application modernization, and DevSecOps for secure, scalable solutions.",
      link: "/cloud-services-details",
    },
    {
      title: "Data Services",
      description:
        "Data engineering, analytics, and science for scalable infrastructure, insights, and data-driven decisions.",
      link: "/data-services-details",
    },
    {
      title: "Business Process Automation",
      description:
        "Custom applications, workflow automation, legacy system modernization, and mobile development for business efficiency.",
      link: "/business-process-automation-details",
    },
  ];

  return (
    <section
      className=" py-16 relative"
      style={{
        background: "linear-gradient(135deg, #f6f8f9 0%, #e5ebee 100%)",
        borderRadius: "20px",
      }}
    >
      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#006D8F] to-[#004B6B] tracking-wide uppercase"
>
  TOP SERVICES
</motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              translateZ: 30,
              scale: 1.05,
              boxShadow: "30px 30px 60px rgba(0,0,0,0.3)",
            }}
            className="relative bg-gradient-to-br from-[#006D8F] to-[#004B6B] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between transform-gpu transition-transform duration-300 cursor-pointer"
            style={{
              minHeight: "320px",
              boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/90 mb-6">
                {service.description}
              </p>
            </div>
            <a
              href={service.link}
              className="text-sm py-2 px-4 border border-white rounded-full w-fit relative overflow-hidden z-10 hover:bg-white hover:text-[#004B6B] transition-colors"
            >
              Read more
            </a>

            {/* Glass hover overlay */}
            <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-white rounded-2xl z-0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
