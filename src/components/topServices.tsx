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
      image: "__2.png"
    },
    {
      title: "Data Services",
      description:
        "Data engineering, analytics, and science for scalable infrastructure, insights, and data-driven decisions.",
      link: "/data-services-details",
      image: "__1.png"
    },
    {
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation solutions that enhance efficiency and reduce manual tasks.",
      link: "/automation-services-details",
      image: "__3.png"
    }
  ];

  return (
    <section className="py-16 relative z-20 bg-gray-300">
        <h1 className="text-3xl font-bold mb-2 text-center text-[#004B6B]">Top Services</h1>
        <div className="flex grid-cols-3 justify-center gap-4 ">
          {services&&services.map((service,index)=>(
            <div key={index} className="relative hover:scale-110 transition-all duration-300">
              <Image src={service.image} alt={service.title} width={500} height={500}  />
              <div className="absolute top-[45vh] w-[70%] left-1/2 transform -translate-x-1/2 p-4 gap-2 h-[35%] flex flex-col">
                <h2 className="text-xl font-bold text-[#004B6B] ">{service.title}</h2>  
                <p className="text-black">{service.description}</p>
                <Link href={service.link} className="text-white rounded-2xl bg-[#004B6B] p-2 mt-1 w-[38%] text-center hover:bg-[#2a88b0]">Read More</Link>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default TopServices;
