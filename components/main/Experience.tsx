"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import { HiOutlineBriefcase } from "react-icons/hi";

const Experience = () => {
  const t = useTranslations("experience");

  const items = [0, 1, 2].map((i) => ({
    role: t(`items.${i}.role`),
    company: t(`items.${i}.company`),
    period: t(`items.${i}.period`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col items-center"
            >
              <motion.div variants={fadeInUp(0.1)} className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("heading")}
                  <span className="gradient-text"> {t("headingAccent")}</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-indigo to-accent-blue rounded-full mx-auto mt-4" />
              </motion.div>

              <motion.p
                variants={fadeInUp(0.2)}
                className="text-gray-400 text-sm md:text-base text-center mb-12 max-w-md"
              >
                {t("subtitle")}
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="relative w-full max-w-3xl"
              >
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-indigo/50 via-accent-blue/30 to-transparent" />

                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                      i % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-indigo border-2 border-dark z-10 mt-6" />

                    <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-10 md:pl-0`}>
                      <div className="glass-card p-5">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <HiOutlineBriefcase className="w-4 h-4 text-accent-indigo flex-shrink-0" />
                          <span className="text-xs font-mono text-accent-indigo/80">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm text-accent-blue/70 mb-2">
                          {item.company}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default Experience;
