"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
import Image from "next/image";

const allTags = ["All", "Next.js", "React", "Node.js", "TypeScript"];

const Projects = () => {
  const t = useTranslations("projects");
  const [filter, setFilter] = useState("All");

  const projects = [0, 1, 2, 3].map((i) => {
    const tags = [
      t(`items.${i}.tags.0`),
      t(`items.${i}.tags.1`),
      t(`items.${i}.tags.2`),
      t(`items.${i}.tags.3`),
    ];

    const imageByIndex = [
      "/luxx.png",
      "/CardImage.png",
      "/NextWebsite.png",
      "/SpaceWebsite.png",
    ];

    const liveUrlByIndex = [
      "https://luxx.uz",
      "#",
      "#",
      "#",
    ];

    const codeUrlByIndex = [
      "#",
      "#",
      "#",
      "#",
    ];

    return {
      index: i,
      title: t(`items.${i}.title`),
      description: t(`items.${i}.description`),
      tags,
      image: imageByIndex[i],
      liveUrl: liveUrlByIndex[i],
      codeUrl: codeUrlByIndex[i],
    };
  });

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((item) => item.tags.includes(filter));

  return (
    <section id="projects" className="section-padding relative">
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
                className="text-gray-400 text-sm md:text-base text-center mb-8 max-w-md"
              >
                {t("subtitle")}
              </motion.p>

              <motion.div
                variants={fadeInUp(0.3)}
                className="flex flex-wrap gap-2 mb-10"
              >
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      filter === tag
                        ? "bg-accent-indigo/20 text-white border border-accent-indigo/40"
                        : "text-gray-400 border border-white/[0.08] hover:text-white hover:border-white/20 bg-white/[0.02]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={`${project.index}-${project.title}`}
                    variants={staggerItem}
                    className="glass-card overflow-hidden group cursor-pointer"
                    onClick={() => {
                      if (project.liveUrl && project.liveUrl !== "#") {
                        window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    <div className="relative h-48 overflow-hidden bg-dark-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                      {/* Hover overlay with Visit Site button */}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-blue text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-accent-indigo/25 hover:shadow-accent-indigo/40 transition-shadow duration-300">
                            <HiOutlineExternalLink className="w-4 h-4" />
                            Visit Site →
                          </span>
                        </div>
                      )}
                      {/* Top-right icon links */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.liveUrl || "#"}
                          target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : undefined}
                          rel={project.liveUrl && project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                          className="w-8 h-8 rounded-lg glass-strong flex items-center justify-center text-white hover:bg-accent-indigo/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <HiOutlineExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.codeUrl || "#"}
                          target={project.codeUrl && project.codeUrl !== "#" ? "_blank" : undefined}
                          rel={project.codeUrl && project.codeUrl !== "#" ? "noopener noreferrer" : undefined}
                          className="w-8 h-8 rounded-lg glass-strong flex items-center justify-center text-white hover:bg-accent-indigo/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <HiOutlineCode className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent-indigo/10 text-accent-indigo/80 border border-accent-indigo/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Projects;
