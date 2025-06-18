"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface Service {
  title: string;
  description: string;
  position: Position;
}

const services: Service[] = [
  {
    title: "24/7 Cloud Infrastructure Management",
    description:
      "Round-the-clock monitoring and management of cloud infrastructure with proactive maintenance and optimization.",
    position: "top-left",
  },
  {
    title: "Security Operations",
    description:
      "Continuous security monitoring and threat detection with expert security analysts.",
    position: "top-right",
  },
  {
    title: "Backup & Disaster Recovery",
    description:
      "Automated backup solutions with comprehensive disaster recovery planning and testing.",
    position: "bottom-left",
  },
  {
    title: "Custom Managed Services",
    description:
      "Tailored services to meet your unique business requirements and ensure operational efficiency.",
    position: "bottom-right",
  },
];

const ManagedServices = () => {
  return (
    <section className="w-full bg-white py-20 px-4 text-center relative">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 uppercase">
        Managed Services
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-16">
        We provide secure, optimized, and scalable managed services to support your cloud environment.
      </p>

      <div className="relative max-w-6xl mx-auto h-[500px] hidden md:block">
        {/* Center icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-8  z-10">
          <Image
            src="/cloud_gear.png"
            alt="Cloud Gear"
            width={250}
            height={250}
            className="object-contain"
            style={{
              filter: 'brightness(0) saturate(100%) invert(30%) sepia(90%) saturate(1000%) hue-rotate(190deg) brightness(90%) contrast(95%)'
            }}
          />
        </div>

        {/* Service blocks */}
        {services.map((service, i) => {
          const positionStyles: Record<Position, string> = {
            "top-left": "top-0 left-0 text-right items-end",
            "top-right": "top-0 right-0 text-left items-start",
            "bottom-left": "bottom-0 left-0 text-right items-end",
            "bottom-right": "bottom-0 right-0 text-left items-start",
          };

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`absolute w-[280px] max-w-[90%] ${positionStyles[service.position]} flex flex-col`}
            >
              <div className="bg-white text-blue-800 border border-blue-200 p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2 text-sm md:text-base">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500">{service.description}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Connecting lines */}
        <div className="absolute inset-0">
          {/* Horizontal lines */}
          <div className="absolute top-[15%] left-1/2 w-[200px] h-px bg-blue-300 -translate-x-1/2" />
          <div className="absolute bottom-[15%] left-1/2 w-[200px] h-px bg-blue-300 -translate-x-1/2" />

          {/* Vertical lines */}
          <div className="absolute top-1/2 left-[18%] w-px h-[150px] bg-blue-300 -translate-y-1/2" />
          <div className="absolute top-1/2 right-[18%] w-px h-[150px] bg-blue-300 -translate-y-1/2" />
        </div>
      </div>

      {/* Mobile stacked view */}
      <div className="md:hidden space-y-6 mt-10">
        {services.map((service, i) => (
          <div key={i} className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-blue-800 font-semibold text-base mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagedServices;
