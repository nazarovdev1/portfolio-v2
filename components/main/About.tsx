"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/utils/motion";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineUserGroup,
} from "react-icons/hi";

const statIcons = [
  <HiOutlineCode key="code" className="w-6 h-6" />,
  <HiOutlineDeviceMobile key="device" className="w-6 h-6" />,
  <HiOutlineUserGroup key="users" className="w-6 h-6" />,
];

const About = () => {
  const t = useTranslations("about");

  const bio = t("bio").split("\n\n");
  const statKeys = ["projects", "technologies", "clients"] as const;

  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col items-center"
            >
              <motion.div variants={fadeInUp(0.1)} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("heading")}
                  <span className="gradient-text"> {t("headingAccent")}</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-indigo to-accent-blue rounded-full mx-auto mt-4" />
              </motion.div>

              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">
                <motion.div
                  variants={slideInFromLeft(0.3)}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 sm:border-4 border-accent-indigo/30 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-accent-indigo/20 to-accent-blue/20">
                        <Image
                          src="/myPhoto.jpg"
                          alt="Akbar Mamanazarov"
                          width={250}
                          height={250}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-7 sm:w-20 sm:h-8 glass-strong rounded-lg flex items-center justify-center">
                      <span className="text-[10px] sm:text-xs font-mono font-medium text-accent-indigo">
                        &lt;/&gt;
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight(0.3)}
                  className="flex-1 space-y-4 text-center lg:text-left"
                >
                  {bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-gray-300 text-sm md:text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mt-12 w-full"
              >
                {statKeys.map((key, i) => (
                  <motion.div
                    key={key}
                    variants={staggerItem}
                    className={`glass-card p-4 sm:p-5 text-center ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-indigo/10 flex items-center justify-center text-accent-indigo mx-auto mb-3">
                      {statIcons[i]}
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {t(`stats.${key}.value`)}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wider font-medium">
                      {t(`stats.${key}.label`)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp(0.8)}
                className="mt-10 text-center"
              >
                <p className="text-gray-400 text-sm italic">
                  &quot;{t("tagline")}&quot;
                </p>
              </motion.div>
            </motion.div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default About;
