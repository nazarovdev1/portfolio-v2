"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

const locales = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

const socialIcons: Record<string, React.ReactNode> = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  telegram: <FaTelegramPlane />,
};

export default function Navbar() {
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#home", label: t("links.home") },
    { href: "#skills", label: t("links.skills") },
    { href: "#projects", label: t("links.projects") },
    { href: "#about", label: t("links.about") },
    { href: "#contact", label: t("links.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "skills", "projects", "about", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      const el = document.getElementById("scroll-progress");
      if (el) el.style.width = progress + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocaleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setShowLangMenu(false);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-18">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-3 group"
            >
            
              <span className="font-bold text-lg text-white hidden sm:block">
                {t("brand")}
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/[0.08]"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <HiOutlineGlobeAlt className="w-4 h-4" />
                  <span className="uppercase font-medium">
                    {locale}
                  </span>
                </button>
                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-1 py-1 min-w-[100px] glass-strong overflow-hidden"
                    >
                      {locales.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => handleLocaleSwitch(l.code)}
                          className={`w-full px-4 py-2 text-sm text-left transition-colors ${
                            locale === l.code
                              ? "text-white bg-accent-indigo/20"
                              : "text-gray-400 hover:text-white hover:bg-white/[0.06]"
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Akbar_Mamanazarov_CV.docx";
                  link.setAttribute("download", "Akbar_Mamanazarov_CV.docx");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="hidden md:flex items-center gap-2 btn-outline text-sm !py-1.5 !px-3"
              >
                <IoDownloadOutline className="w-4 h-4" />
                <span>{t("downloadCv")}</span>
              </button>

              <div className="hidden md:flex items-center gap-2">
                <a
                  href="https://github.com/nazarovdev1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/akbar-nazarov-1a39ab406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/nazarov_49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <FaTelegramPlane className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                {isOpen ? (
                  <HiX className="w-5 h-5" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
<motion.div
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ type: "spring", damping: 30, stiffness: 200 }}
               className="absolute right-0 top-0 bottom-0 w-[75vw] sm:w-[280px] bg-dark-100 border-l border-white/[0.06] p-6"
             >
              <div className="flex flex-col gap-2 mt-20">
                {navLinks.map((link, i) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                        isActive
                          ? "text-white bg-accent-indigo/20 border border-accent-indigo/30 shadow-lg shadow-accent-indigo/10"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className={`text-[10px] uppercase tracking-widest opacity-40 ${isActive ? "opacity-100" : ""}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-auto pb-10 space-y-6">
                <div className="pt-6 border-t border-white/[0.06]">
                  <a
                    href="/Akbar_Mamanazarov_CV.docx"
                    download="Akbar_Mamanazarov_CV.docx"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 btn-primary py-4 text-sm w-full shadow-xl shadow-accent-indigo/20"
                  >
                    <IoDownloadOutline className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-wider">{t("downloadCv")}</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-5">
                  {[
                    { icon: <FaGithub className="w-6 h-6" />, href: "https://github.com/nazarovdev1" },
                    { icon: <FaLinkedinIn className="w-6 h-6" />, href: "https://linkedin.com/in/akbar-nazarov-1a39ab406" },
                    { icon: <FaTelegramPlane className="w-6 h-6" />, href: "https://t.me/nazarov_49" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
