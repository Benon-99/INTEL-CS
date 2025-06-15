"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  link: string;
  image: string;
}

const TopServices: React.FC = () => {
  const services: Service[] = [
    {
      title: "Cloud Services",
      description:
        "Cloud strategy, migration, security, application modernization, and DevSecOps for secure, scalable solutions.",
      link: "/cloud-services-details",
      image: "/__cloud services.jpg"
    },
    {
      title: "Data Services",
      description:
        "Data engineering, analytics, and science for scalable infrastructure, insights, and data-driven decisions.",
      link: "/data-services-details",
      image: "/__data services.jpg"
    },
    {
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation solutions that enhance efficiency and reduce manual tasks.",
      link: "/automation-services-details",
      image: "/__Business Process Automation.jpg"
    }
  ];

  return (
    <section
      className="py-16 relative z-20"
      style={{
        background: "linear-gradient(135deg, #f6f8f9 0%, #e5ebee 100%)",
        borderRadius: "20px",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-rotate-y-12 hover:rotate-x-12 group preserve-3d"
            >
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  quality={90}
                  onError={(e: any) => {
                    console.error(`Error loading image: ${service.image}`);
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              </div>
              <div className="p-6 relative">
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServices;
