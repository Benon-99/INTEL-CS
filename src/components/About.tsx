"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#004B6B] mb-4"
        >
          ABOUT US
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-semibold text-[#004B6B] mb-6">COMPANY OVERVIEW</h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            iNTEL-CS, born in the cloud and thriving at the edge of innovation, is your partner for comprehensive IT modernization.
            Located in the UAE, our team of local experts is dedicated to transforming businesses using the power of cloud technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#005B82] text-white p-12 rounded-2xl shadow-lg" style={{ background: '#005B82' }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center tracking-wide">MISSION</h3>
            <p className="text-center text-lg leading-relaxed">
              To Empower Businesses Through Innovative IT Solutions, Enhancing Their Capabilities And Driving Growth In A Rapidly Evolving Digital Landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#005B82] text-white p-12 rounded-2xl shadow-lg" style={{ background: '#005B82' }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center tracking-wide">VISION</h3>
            <p className="text-center text-lg leading-relaxed">
              To Be A Leading Provider Of Comprehensive IT Modernization Services, Recognized For Our Expertise, Customer-Centric Approach, And Commitment To Excellence.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#004B6B] text-center mb-8">WHY CHOOSE iNTEL-CS?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#004B6B] font-bold mr-2">•</span>
                <p><span className="font-bold">Bespoke Solutions</span> tailored to business objectives</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#004B6B] font-bold mr-2">•</span>
                <p><span className="font-bold">Cloud Expertise</span> with AWS and Microsoft Azure partnerships</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#004B6B] font-bold mr-2">•</span>
                <p><span className="font-bold">Security First</span> approach to all implementations</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#004B6B] font-bold mr-2">•</span>
                <p><span className="font-bold">Cost Optimization</span> focus</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#004B6B] font-bold mr-2">•</span>
                <p><span className="font-bold">Seamless Migration</span> capabilities</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#004B6B] font-bold mr-2">•</span>
                <p><span className="font-bold">Enhanced Productivity</span> outcomes</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#004B6B] font-bold mr-2">•</span>
                <p><span className="font-bold">24/7 Managed Services</span> support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
