"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";
import {
  HiOutlineChatAlt2,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { IoSendOutline } from "react-icons/io5";

const Testimonials = () => {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const items = [0, 1].map((i) => ({
    quote: t(`items.${i}.quote`),
    name: t(`items.${i}.name`),
    role: t(`items.${i}.role`),
  }));

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const threshold = 50;
    if (distance > threshold) {
      next();
    } else if (distance < -threshold) {
      prev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, next, prev]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isClient, next]);

  return (
    <section className="section-padding relative">
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
                variants={fadeInUp(0.3)}
                className="relative w-full max-w-2xl"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="glass-card p-6 sm:p-8 md:p-10 text-center min-h-[220px] flex flex-col items-center justify-center">
                  <div className="text-4xl mb-4 text-accent-indigo/30 font-serif">
                    &ldquo;
                  </div>
                  <motion.p
                    key={current}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-6 max-w-lg mx-auto"
                  >
                    {items[current].quote}
                  </motion.p>
                  <motion.div
                    key={`name-${current}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-indigo to-accent-blue flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">
                        {items[current].name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">
                      {items[current].name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {items[current].role}
                    </p>
                  </motion.div>
                </div>

<div className="flex items-center justify-center gap-4 mt-6">
                   <button
                     onClick={prev}
                     className="w-11 h-11 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo/40 transition-all"
                   >
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                   </button>
                   <div className="flex gap-2">
                     {items.map((_, i) => (
                       <button
                         key={i}
                         onClick={() => setCurrent(i)}
                         className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                           i === current
                             ? "bg-accent-indigo w-6"
                             : "bg-white/20 hover:bg-white/40"
                         }`}
                       />
                     ))}
                   </div>
                   <button
                     onClick={next}
                     className="w-11 h-11 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo/40 transition-all"
                   >
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                   </button>
                 </div>
              </motion.div>
            </motion.div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default Testimonials;
