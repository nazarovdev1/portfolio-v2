"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineExclamation,
} from "react-icons/hi";
import { IoSendOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail className="w-5 h-5" />,
      label: t("info.email"),
      value: t("info.emailValue"),
      href: `mailto:${t("info.emailValue")}`,
    },
    {
      icon: <HiOutlineLocationMarker className="w-5 h-5" />,
      label: t("info.location"),
      value: t("info.locationValue"),
    },
    {
      icon: <HiOutlineClock className="w-5 h-5" />,
      label: t("info.availability"),
      value: "",
    },
  ];

  const socials = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/nazarovdev1", label: "GitHub" },
    { icon: <FaLinkedinIn className="w-5 h-5" />, href: "https://linkedin.com/in/akbar-nazarov-1a39ab406", label: "LinkedIn" },
    { icon: <FaTelegramPlane className="w-5 h-5" />, href: "https://t.me/nazarov_49", label: "Telegram" },
  ];

  return (
    <section id="contact" className="section-padding relative">
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

<div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
                <motion.div
                  variants={slideInFromLeft(0.3)}
                  className="flex-1 space-y-6"
                >
                  {contactInfo.map((info, i) => (
                    <div key={i} className="glass-card p-4 sm:p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-indigo/10 flex items-center justify-center text-accent-indigo flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
{info.href ? (
                            <a
                              href={info.href}
                              className="text-white font-medium text-sm hover:text-accent-indigo transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium text-sm">
                              {info.value}
                            </p>
                          )}
                      </div>
                    </div>
                  ))}

                  <div className="glass-card p-4 sm:p-5">
                    <p className="text-sm text-gray-400 mb-4">Social</p>
                    <div className="flex gap-3">
                      {socials.map((s, i) => (
                        <a
                          key={i}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-indigo/20 transition-all duration-200"
                          aria-label={s.label}
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight(0.3)}
                  className="flex-1"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="glass-card p-4 sm:p-6 space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 ml-1">
                          {t("form.name")}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-indigo/40 focus:bg-white/[0.06] transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1.5 ml-1">
                          {t("form.email")}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-indigo/40 focus:bg-white/[0.06] transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 ml-1">
                        {t("form.subject")}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-indigo/40 focus:bg-white/[0.06] transition-all"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 ml-1">
                        {t("form.message")}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-indigo/40 focus:bg-white/[0.06] transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed py-3.5 sm:py-3"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t("form.sending")}
                        </>
                      ) : (
                        <>
                          <IoSendOutline className="w-4 h-4" />
                          {t("form.send")}
                        </>
                      )}
                    </button>

                    {status === "success" && (
                      <div className="flex items-center gap-2 text-green-400 text-sm mt-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        {t("form.success")}
                      </div>
                    )}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                        <HiOutlineExclamation className="w-5 h-5" />
                        {t("form.error")}
                      </div>
                    )}
                  </form>
                </motion.div>
              </div>
            </motion.div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default Contact;
