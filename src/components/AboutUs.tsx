"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const overviewRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const whyChooseRef = useRef(null);

  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });
  return (
    <section
      className="relative py-16 px-6 bg-white text-center border-t-2 border-black"
      style={{
        backgroundImage: "url('/bg-about.webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">
        ABOUT US
      </h2>

      {/* Company Overview */}
      <motion.div 
        ref={overviewRef}
        initial={{ opacity: 0, y: 50 }}
        animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-white text-base leading-relaxed mb-12 drop-shadow">
        <h1 className="text-2xl text-[#004B6B] font-bold mb-4 drop-shadow-lg">Company Overview</h1>
        <p className="text-black font-bold">
          iNTEL-CS, born in the cloud and thriving at the edge of innovation, is
          your partner for comprehensive IT modernization. Located in the UAE,
          our team of local experts is dedicated to transforming businesses
          using the power of cloud technology.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-8 text-left">
        <motion.div 
          ref={missionRef}
          initial={{ opacity: 0, x: -100 }}
          animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 bg-black/50 backdrop-blur-sm rounded-lg shadow text-white">
          <h3 className="text-xl font-semibold text-[#004B6B] mb-4">Mission</h3>
          <p className="text-white text-base leading-relaxed">
            To empower businesses through innovative IT solutions, enhancing
            their capabilities and driving growth in a rapidly evolving digital
            landscape.
          </p>
        </motion.div>
        <motion.div 
          ref={visionRef}
          initial={{ opacity: 0, x: 100 }}
          animate={visionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 bg-black/50 backdrop-blur-sm rounded-lg shadow text-white">
          <h3 className="text-xl font-semibold text-[#004B6B] mb-4">Vision</h3>
          <p className="text-white text-base leading-relaxed">
            To be a leading provider of comprehensive IT modernization services,
            recognized for our expertise, customer-centric approach, and
            commitment to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
