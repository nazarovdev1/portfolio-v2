"use client";

import { useTranslations } from "next-intl";

import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaHeart,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  const t = useTranslations("footer");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-dark-100/50">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex-1 text-center md:text-left max-w-sm">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-blue flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
              <span className="font-bold text-lg text-white">AKBAR MAMANAZAROV</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
              <a
                href="https://t.me/nazarov_49"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-indigo/20 transition-all"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/akbar-nazarov-1a39ab406"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-indigo/20 transition-all"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/nazarov_49"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-indigo/20 transition-all"
              >
                <FaTelegramPlane className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <h4 className="font-semibold text-white text-sm mb-3">
              {t("quickLinks")}
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex-shrink-0">
            <h4 className="font-semibold text-white text-sm mb-3">
              {t("builtWith")}
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              {[SiNextdotjs, SiTypescript, SiTailwindcss].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-400"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            {t("copyright")} — Made with{" "}
            <FaHeart className="w-3 h-3 text-red-400 inline" /> & AI
          </p>
        </div>
      </div>
    </footer>
  );
}
