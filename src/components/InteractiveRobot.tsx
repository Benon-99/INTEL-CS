"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const InteractiveRobot = () => {
  const [error, setError] = React.useState(false);
  const [isWebGLAvailable, setIsWebGLAvailable] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setIsWebGLAvailable(false);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle between mouse and center
    const angleX = (e.clientY - centerY) / 20;
    const angleY = (e.clientX - centerX) / 20;

    setRotation({ x: angleX, y: angleY });
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotation({ x: 0, y: 0 });
  };

  if (!isWebGLAvailable || error) {
    return (
      <div className="w-full h-[400px] flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 text-center">
        <p className="text-gray-600 mb-2">
          {!isWebGLAvailable ? 
            'WebGL is not supported in your browser' : 
            '3D model could not be loaded'}
        </p>
        <p className="text-sm text-gray-500">
          {!isWebGLAvailable ? 
            'Try using a modern browser or enabling hardware acceleration' : 
            'Please check your internet connection and try again'}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] cursor-pointer"
    >
      <Spline
        scene="https://prod.spline.design/QI7H7TvGkqIQ9HeK/scene.splinecode"
        onError={(e) => {
          console.error('Spline error:', e);
          setError(true);
        }}
      />
    </motion.div>
  );
};

export default InteractiveRobot;
