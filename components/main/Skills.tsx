"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiVisualstudiocode,
  SiNpm,
  SiLinux,
  SiOpenai,
} from "react-icons/si";
import {
  HiOutlineCube,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { TbApi, TbBrain } from "react-icons/tb";

const iconMap: Record<string, React.ReactNode> = {
  js: <SiJavascript />,
  ts: <SiTypescript />,
  react: <SiReact />,
  next: <SiNextdotjs />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  tailwind: <SiTailwindcss />,
  nodejs: <SiNodedotjs />,
  express: <SiExpress />,
  postgresql: <SiPostgresql />,
  mongodb: <SiMongodb />,
  redis: <SiRedis />,
  git: <SiGit />,
  github: <SiGithub />,
  docker: <SiDocker />,
  vscode: <SiVisualstudiocode />,
  npm: <SiNpm />,
  linux: <SiLinux />,
  chatgpt: <SiOpenai />,
  copilot: <HiOutlineLightningBolt />,
  claude: <TbBrain />,
  ai: <HiOutlineCube />,
  api: <TbApi />,
};

import {
  FrontendSkills,
  BackendSkills,
  DevOpsSkills,
  AISkills,
} from "@/constants";

const categoryColors: Record<string, string> = {
  Frontend: "from-yellow-500/20 to-orange-500/20",
  Backend: "from-green-500/20 to-emerald-500/20",
  DevOps: "from-blue-500/20 to-cyan-500/20",
  AI: "from-purple-500/20 to-pink-500/20",
};

const categoryBorders: Record<string, string> = {
  Frontend: "border-yellow-500/20 hover:border-yellow-500/40",
  Backend: "border-green-500/20 hover:border-green-500/40",
  DevOps: "border-blue-500/20 hover:border-blue-500/40",
  AI: "border-purple-500/20 hover:border-purple-500/40",
};

const Skills = () => {
  const t = useTranslations("skills");

  const categories = [
    { name: t("categories.frontend"), skills: FrontendSkills, key: "Frontend" },
    { name: t("categories.backend"), skills: BackendSkills, key: "Backend" },
    { name: t("categories.devops"), skills: DevOpsSkills, key: "DevOps" },
    { name: t("categories.ai"), skills: AISkills, key: "AI" },
  ];

  return (
    <section id="skills" className="section-padding relative">
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
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
              >
                {categories.map((cat) => (
                  <motion.div
                    key={cat.key}
                    variants={staggerItem}
                    className={`glass-card p-6 transition-all duration-300 ${categoryBorders[cat.key] || ""}`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[cat.key]} flex items-center justify-center`}
                      >
                        <span className="text-white/80 text-sm font-bold">
                          {cat.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {cat.name}
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/[0.04] transition-all duration-200 cursor-default"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center text-gray-400 group-hover:text-accent-indigo transition-colors duration-200 text-lg">
                            {iconMap[skill.icon] || (
                              <HiOutlineCube className="w-5 h-5" />
                            )}
                          </div>
                          <span className="text-[11px] text-gray-400 group-hover:text-white/80 transition-colors duration-200 text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      ))}
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

export default Skills;
