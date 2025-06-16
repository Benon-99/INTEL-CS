"use client";

import Hero from "@/components/Hero";
import Services from "../components/services";
import TopServices from "@/components/topServices";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import { motion, useScroll, useSpring } from "framer-motion";
import WaveBackground from "@/components/WaveBackground";

import Clients from "@/components/Clients"; 

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // const scrollAnimation = gsap.to(".scroll-indicator", {
  //   y: 50,
  //   duration: 1,
  //   ease: "power2.out",
  //   repeat: -1,
  //   yoyo: true
  // })

  return (
    <main className="min-h-screen relative overflow-hidden">
      <WaveBackground />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#004B6B] origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <TopServices />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <AboutUs />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Clients />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>

      {/* Simple scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-medium text-gray-600 mb-2 tracking-wider">
            SCROLL
          </span>
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current text-gray-600"
            fill="none"
            strokeWidth="2"
          >
            <line x1="12" y1="1" x2="12" y2="22.5" />
            <line x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
            <line x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
          </svg>
        </div>
      </div>
    </main>
  );
}
