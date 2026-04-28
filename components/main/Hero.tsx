import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section className="relative w-full h-screen" id="home">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute md:top-[-240px] lg:top-[-335px] top-[-400px] left-0 z-0 w-full h-full object-cover opacity-70"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/30 to-dark z-[1]" />
      <HeroContent />
    </section>
  );
};

export default Hero;
