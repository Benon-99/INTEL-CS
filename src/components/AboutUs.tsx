"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative py-16 px-6 bg-white text-center"
      style={{
        backgroundImage: "url('/about-bg.png')", // put your background image here
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#004B6B] mb-8">
        ABOUT US
      </h2>

      {/* Company Overview */}
      <div className="max-w-3xl mx-auto text-black text-base leading-relaxed mb-12">
        <h1 className="text-2xl text-[#004B6B] mb-4">Company Overview</h1>
        <p>
          iNTEL-CS, born in the cloud and thriving at the edge of innovation, is
          your partner for comprehensive IT modernization. Located in the UAE,
          our team of local experts is dedicated to transforming businesses
          using the power of cloud technology.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-8 text-left">
        <div className="p-6 bg-[#065B86] rounded-lg shadow text-white">
          <h3 className="text-xl font-semibold text-white mb-4">Mission</h3>
          <p className="text-white text-base leading-relaxed">
            To empower businesses through innovative IT solutions, enhancing
            their capabilities and driving growth in a rapidly evolving digital
            landscape.
          </p>
        </div>
        <div className="p-6 bg-[#065B86] rounded-lg shadow text-white">
          <h3 className="text-xl font-semibold text-white mb-4">Vision</h3>
          <p className="text-white text-base leading-relaxed">
            To be a leading provider of comprehensive IT modernization services,
            recognized for our expertise, customer-centric approach, and
            commitment to excellence.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto text-left">
        <h3 className="text-2xl font-semibold text-[#004B6B] mb-6 text-left">
          Why Choose iNTEL-CS?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-left">
          <div className="flex items-start space-x-3">
            <span className="text-[#004B6B] font-bold">•</span>
            <span>Bespoke Solutions tailored to business objectives</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-[#004B6B] font-bold">•</span>
            <span>
              Cloud Expertise with AWS and Microsoft Azure partnerships
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-[#004B6B] font-bold">•</span>
            <span>Security First approach to all implementations</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-[#004B6B] font-bold">•</span>
            <span>Seamless Migration capabilities</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-[#004B6B] font-bold">•</span>
            <span>Cost Optimization focus</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-[#004B6B] font-bold">•</span>
            <span>Enhanced Productivity outcomes</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-[#004B6B] font-bold">•</span>
            <span>24/7 Managed Services support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
