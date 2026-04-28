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

  const items = [0, 1, 2, 3].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    tags: [t(`items.${i}.tags.0`), t(`items.${i}.tags.1`), t(`items.${i}.tags.2`), t(`items.${i}.tags.3`)],
  }));

  const filtered =
    filter === "All"
      ? items
      : items.filter((item) => item.tags.includes(filter));

  const projectImages = [
    "/NextWebsite.png",
    "/CardImage.png",
    "/SpaceWebsite.png",
    "/SpaceWebsite.png",
  ];

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
                    key={project.title}
                    variants={staggerItem}
                    className="glass-card overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden bg-dark-200">
                      <Image
                        src={projectImages[i]}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href="#"
                          className="w-8 h-8 rounded-lg glass-strong flex items-center justify-center text-white hover:bg-accent-indigo/30 transition-colors"
                        >
                          <HiOutlineExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-lg glass-strong flex items-center justify-center text-white hover:bg-accent-indigo/30 transition-colors"
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
