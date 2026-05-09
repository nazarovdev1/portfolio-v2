"use client";

import React, { useState, useEffect } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col" id="home">
      {isClient && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          width={768}
          height={432}
          className="absolute top-[-250px] md:top-[-200px] left-0 z-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/30 to-dark z-[1]" />
      <HeroContent />
    </section>
  );
};

export default Hero;
