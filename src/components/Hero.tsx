"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InteractiveRobot from "./InteractiveRobot";

const slides = [
  {
    title: "Welcome to iNTEL-CS",
    sub: "Transform Your Business with Cloud-First Innovation",
    description:
      "Born in the cloud and thriving at the edge of innovation, iNTEL-CS is your partner for comprehensive IT modernization. Located in the UAE, our team of local experts is dedicated to transforming businesses using the power of cloud technology.",
    image: "/bg-body2.png",
    buttons: {
      primary: { text: "Get in Touch", href: "/contact" },
    },
  },
];

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen w-full">
      <Swiper
        ref={swiperRef}
        effect="fade"
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center z-30"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {activeIndex === index && (
                <div className="relative z-40 h-full flex items-center px-4">
                  <div className="w-full lg:w-[1280px] mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="max-w-xl text-left"
                    >
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 tracking-tight"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-3xl font-semibold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/70 max-w-2xl"
                      >
                        {slide.sub}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                      >
                        <Link
                          href={slide.buttons.primary.href}
                          className="group relative bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden"
                        >
                          <span className="relative z-10">
                            {slide.buttons.primary.text}
                          </span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-white hover:text-secondary transition-colors"></div>
        <div className="swiper-button-next !text-white hover:text-secondary transition-colors"></div>
      </Swiper>
      {/* Robot overlay */}
      <div className="absolute right-[100px] top-[80px] z-10 pointer-events-none">
        <InteractiveRobot />
      </div>
    </div>
  );
}
