"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WaveBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to y position for the wave
  const yPos = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute inset-0"
        style={{ y: yPos }}
      >
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,1000 L0,1000 Z"
            fill="#4CAF50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,1000 L0,1000 Z;
                M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 L1000,1000 L0,1000 Z;
                M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,1000 L0,1000 Z
              "
            />
          </motion.path>
          <motion.path
            d="M0,120 C150,70 350,170 500,120 C650,70 850,170 1000,120 L1000,1000 L0,1000 Z"
            fill="#81C784"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
          >
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0,120 C150,70 350,170 500,120 C650,70 850,170 1000,120 L1000,1000 L0,1000 Z;
                M0,120 C150,170 350,70 500,120 C650,170 850,70 1000,120 L1000,1000 L0,1000 Z;
                M0,120 C150,70 350,170 500,120 C650,70 850,170 1000,120 L1000,1000 L0,1000 Z
              "
            />
          </motion.path>
        </svg>
      </motion.div>
    </div>
  );
};

export default WaveBackground;
