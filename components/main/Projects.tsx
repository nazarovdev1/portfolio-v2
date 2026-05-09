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
      "/wareflow.png",
      "/clinic.png",
      "/SpaceWebsite.png",
    ];

    const liveUrlByIndex = [
      "https://luxx.uz",
      "https://ware-flow-pink.vercel.app/",
      "https://medix-8b97ud9sn-akbarnazarov888-6282s-projects.vercel.app/",
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
                className="w-full overflow-x-auto scrollbar-hidden pb-4 mb-6"
              >
                <div className="flex flex-nowrap sm:flex-wrap gap-2 justify-start sm:justify-center min-w-max sm:min-w-0 px-4">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setFilter(tag)}
                      className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                        filter === tag
                          ? "bg-accent-indigo text-white shadow-lg shadow-accent-indigo/25 border border-accent-indigo"
                          : "text-gray-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.05] bg-white/[0.02]"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={`${project.index}-${project.title}`}
                    variants={staggerItem}
                    className="glass-card overflow-hidden group flex flex-col h-full"
                  >
                    <div className="relative aspect-video overflow-hidden bg-dark-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-80" />
                      
                      {/* Mobile-friendly action buttons */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                        <a
                          href={project.liveUrl || "#"}
                          target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : undefined}
                          rel={project.liveUrl && project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                          className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-white hover:bg-accent-indigo transition-colors shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <HiOutlineExternalLink className="w-5 h-5" />
                        </a>
                        <a
                          href={project.codeUrl || "#"}
                          target={project.codeUrl && project.codeUrl !== "#" ? "_blank" : undefined}
                          rel={project.codeUrl && project.codeUrl !== "#" ? "noopener noreferrer" : undefined}
                          className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-white hover:bg-accent-indigo transition-colors shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <HiOutlineCode className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-indigo transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/[0.03] text-gray-400 border border-white/[0.05]"
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
