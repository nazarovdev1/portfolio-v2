"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";

const SkillText = () => {
  const t = useTranslations("skills");

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <InView triggerOnce threshold={0.1}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp(0.1)}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("heading")}
              <span className="gradient-text"> {t("headingAccent")}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-indigo to-accent-blue rounded-full mx-auto mt-4" />
            <p className="text-gray-400 text-sm md:text-base mt-3">
              {t("subtitle")}
            </p>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default SkillText;
