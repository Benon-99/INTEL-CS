"use client";

import React from "react";
import Spline from "@splinetool/react-spline";

const InteractiveRobot = () => {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-600">3D model could not be loaded</p>
      </div>
    );
  }

  return (
    <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
      <Spline
        scene="https://prod.spline.design/QI7H7TvGkqIQ9HeK/scene.splinecode"
        onError={() => setError(true)}
      />
    </div>
  );
};

export default InteractiveRobot;
