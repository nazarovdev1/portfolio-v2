"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  fadeInUp,
} from "@/utils/motion";
import { useTranslations } from "next-intl";
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { IoDownloadOutline, IoMailOutline } from "react-icons/io5";

const HeroContent = () => {
  const t = useTranslations("hero");

  const badges = [
    { text: t("badges.0"), icon: <HiOutlineCode className="w-4 h-4" /> },
    { text: t("badges.1"), icon: <HiOutlineSparkles className="w-4 h-4" /> },
    { text: t("badges.2"), icon: <HiOutlineLightningBolt className="w-4 h-4" /> },
  ];

  const highlights = [0, 1, 2, 3].map((i) => t(`highlights.${i}`));

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center pt-28 pb-20 md:py-0 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-indigo/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        
        {/* Profile Image Section - Modern Floating Look */}
        <motion.div
          variants={slideInFromRight(0.4)}
          initial="hidden"
          animate="visible"
          className="relative flex-shrink-0 order-1 md:order-2"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group">
            {/* Outer Glow Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-700" />
            
            {/* Main Circle */}
            <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-dark-200 overflow-hidden backdrop-blur-sm flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black gradient-text tracking-tighter select-none animate-float">
                AM
              </div>
            </div>

            {/* Floating Badges - Only visible on sm+ */}
            <div className="absolute -top-4 -right-4 hidden sm:flex w-14 h-14 rounded-2xl glass-strong items-center justify-center shadow-2xl shadow-accent-indigo/20 border-accent-indigo/30 animate-float" style={{ animationDelay: "1s" }}>
              <HiOutlineCode className="w-6 h-6 text-accent-indigo" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:flex w-12 h-12 rounded-2xl glass-strong items-center justify-center shadow-2xl shadow-accent-blue/20 border-accent-blue/30 animate-float" style={{ animationDelay: "2s" }}>
              <HiOutlineLightningBolt className="w-5 h-5 text-accent-blue" />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-2xl order-2 md:order-1"
        >
          {/* Top Status Badge */}
          <motion.div
            variants={fadeInUp(0.2)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-bold tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-indigo opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-indigo"></span>
            </span>
            {t("greeting")}
          </motion.div>

          {/* Main Title */}
          <div className="flex flex-col gap-2 w-full">
            <motion.h1 
              variants={slideInFromLeft(0.4)}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              {t("name")}
              <span className="block gradient-text mt-2 pb-2">
                {t("title")}
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            variants={slideInFromLeft(0.6)}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
          >
            {t("description")}
          </motion.p>

          {/* Highlights - New Interactive Grid */}
          <motion.div
             variants={fadeInUp(0.8)}
             className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
           >
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all group">
                <div className="w-8 h-8 rounded-lg bg-accent-indigo/10 flex items-center justify-center text-accent-indigo group-hover:scale-110 transition-transform">
                   <HiOutlineSparkles className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons Section - More Premium */}
          <motion.div
            variants={fadeInUp(1)}
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mt-6 w-full"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary group flex items-center justify-center gap-2 text-sm sm:text-base py-4 sm:px-8"
            >
              <HiOutlineCode className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>{t("cta.projects")}</span>
            </a>
            <a
              href="/Akbar_Mamanazarov_CV.docx"
              download="Akbar_Mamanazarov_CV.docx"
              className="btn-outline group flex items-center justify-center gap-2 text-sm sm:text-base py-4 sm:px-8"
            >
              <IoDownloadOutline className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span>{t("cta.cv")}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline group flex items-center justify-center gap-2 text-sm sm:text-base py-4 sm:px-8 col-span-2 sm:col-span-1"
            >
              <IoMailOutline className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t("cta.contact")}</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp(1.2)}
            className="flex items-center gap-5 mt-4"
          >
            {[
              { icon: <FaGithub />, href: "https://github.com/nazarovdev1" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/akbar-nazarov-1a39ab406" },
              { icon: <FaTelegramPlane />, href: "https://t.me/nazarov_49" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-indigo/20 hover:border-accent-indigo/40 transition-all duration-300 text-xl shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
