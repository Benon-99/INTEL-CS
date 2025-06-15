"use client";

import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const InteractiveRobot = () => {
  return (
    <div className="w-[800px] h-[800px] transform scale-100">
      <Spline
        scene="https://prod.spline.design/QI7H7TvGkqIQ9HeK/scene.splinecode"
      />
    </div>
  );
};

export default InteractiveRobot;
