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

  const highlights = [
    0, 1, 2, 3,
  ].map((i) => t(`highlights.${i}`));

  return (
    <div className="relative z-10 h-full flex items-center">
      <div className="section-container h-full flex md:flex-row flex-col-reverse items-center justify-center gap-8 md:gap-12 pt-20 md:pt-0">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-5 max-w-2xl"
        >
          <motion.div
            variants={fadeInUp(0.2)}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                variants={fadeInUp(0.3 + i * 0.1)}
                className="glass flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-accent-indigo text-xs md:text-sm font-medium"
              >
                {badge.icon}
                <span className="text-white/90">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.4)}
            className="flex flex-col gap-2"
          >
            <span className="text-gray-400 text-sm md:text-base font-medium">
              {t("greeting")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t("name")}
              <span className="block gradient-text mt-1">
                {t("title")}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.6)}
            className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl"
          >
            {t("description")}
          </motion.p>

          <motion.ul
            variants={fadeInUp(0.8)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300"
          >
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-indigo mt-0.5">&#9656;</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeInUp(1)}
            className="flex flex-wrap gap-3 mt-2"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <HiOutlineCode className="w-4 h-4" />
              {t("cta.projects")}
            </a>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Akbar_Mamanazarov_CV.docx";
                link.setAttribute("download", "Akbar_Mamanazarov_CV.docx");
                link.setAttribute("target", "_blank");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="btn-outline flex items-center gap-2 text-sm"
            >
              <IoDownloadOutline className="w-4 h-4" />
              {t("cta.cv")}
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline flex items-center gap-2 text-sm"
            >
              <IoMailOutline className="w-4 h-4" />
              {t("cta.contact")}
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp(1.2)}
            className="flex items-center gap-4 mt-2"
          >
            {[
              {
                icon: <FaGithub className="w-5 h-5" />,
                href: "https://github.com/nazarovdev1",
              },
              {
                icon: <FaLinkedinIn className="w-5 h-5" />,
                href: "https://linkedin.com/in/akbar-nazarov-1a39ab406",
              },
              {
                icon: <FaTelegramPlane className="w-5 h-5" />,
                href: "https://t.me/nazarov_49",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo/40 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.6)}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-indigo/20 to-accent-blue/20 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-accent-indigo/20 animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full border border-accent-blue/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black gradient-text animate-float select-none">
                AM
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl glass flex items-center justify-center">
              <HiOutlineCode className="w-7 h-7 text-accent-indigo" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl glass flex items-center justify-center">
              <HiOutlineLightningBolt className="w-6 h-6 text-accent-blue" />
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-xl glass flex items-center justify-center">
              <HiOutlineSparkles className="w-5 h-5 text-accent-cyan" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-accent-indigo"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
