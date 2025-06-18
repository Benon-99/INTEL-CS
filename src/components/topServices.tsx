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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const leftCardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const middleCardVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const rightCardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };
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
    <motion.section 
        className="py-16 relative z-20 bg-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
    >
        <motion.h1 
          className="text-3xl font-bold mb-2 text-center text-[#004B6B]"
          variants={titleVariants}
        >
          Top Services
        </motion.h1>
        <motion.div 
          className="flex grid-cols-3 justify-center gap-4"
          variants={containerVariants}
        >
          {services&&services.map((service,index)=>(
            <motion.div 
              key={index} 
              className="relative hover:scale-110 transition-all duration-300"
              variants={index === 0 ? leftCardVariants : index === 1 ? middleCardVariants : rightCardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image src={service.image} alt={service.title} width={500} height={500} />
              </motion.div>
              <motion.div 
                className="absolute top-[45vh] w-[70%] left-1/2 transform -translate-x-1/2 p-4 gap-2 h-[35%] flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                <motion.h2 
                  className="text-xl font-bold text-[#004B6B]"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h2>  
                <motion.p 
                  className="text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  {service.description}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={service.link} 
                    className="text-white rounded-2xl bg-[#004B6B] p-2 mt-1 w-[38%] text-center hover:bg-[#2a88b0] inline-block"
                  >
                    Read More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
    </motion.section>
  );
};

export default TopServices;
