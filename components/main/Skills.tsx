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

type Skill = {
  name: string;
  icon: string;
  level: number;
};

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

const categoryAccents: Record<string, string> = {
  Frontend: "from-yellow-400/70 to-orange-400/70",
  Backend: "from-emerald-400/70 to-green-400/70",
  DevOps: "from-cyan-400/70 to-blue-400/70",
  AI: "from-pink-400/70 to-purple-400/70",
};

function clampLevel(level: number) {
  if (Number.isNaN(level)) return 0;
  return Math.max(0, Math.min(100, level));
}

function levelLabel(level: number) {
  const v = clampLevel(level);
  if (v >= 85) return "Advanced";
  if (v >= 65) return "Intermediate";
  return "Basic";
}

function SkillTile({
  skill,
  accent,
}: {
  skill: Skill;
  accent: string;
}) {
  const level = clampLevel(skill.level);
  const label = levelLabel(level);

  return (
    <div
      className="group relative rounded-2xl p-3 bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.14] focus-within:border-white/[0.18] transition-all duration-300 overflow-hidden outline-none"
      title={`${skill.name} — ${label} (${level}%)`}
      aria-label={`${skill.name}, ${label}, ${level}%`}
      role="img"
    >
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent-indigo/10 via-accent-blue/10 to-transparent" />

      <div className="relative flex flex-col items-center text-center gap-2">
        <div className="relative">
          <div
            className={`w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-300 transition-all duration-300 group-hover:text-white group-hover:scale-[1.03]`}
          >
            <span className="text-[18px]">
              {iconMap[skill.icon] || <HiOutlineCube className="w-5 h-5" />}
            </span>
          </div>
          <div
            className={`pointer-events-none absolute -inset-2 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r ${accent}`}
            aria-hidden="true"
          />
        </div>

        <span className="text-[11px] sm:text-[12px] leading-tight text-white/70 group-hover:text-white/85 transition-colors duration-200 line-clamp-2 min-h-[2.2em]">
          {skill.name}
        </span>

        <div className="w-full pt-1">
          <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${accent}`}
              style={{ width: `${level}%` }}
              role="progressbar"
              aria-valuenow={level}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[10px] text-white/40">{label}</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => {
                const filled =
                  (i === 0 && level >= 50) ||
                  (i === 1 && level >= 70) ||
                  (i === 2 && level >= 85);
                return (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      filled ? "bg-white/55" : "bg-white/18"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Skills = () => {
  const t = useTranslations("skills");

  const categories = [
    { name: t("categories.frontend"), skills: FrontendSkills as Skill[], key: "Frontend" },
    { name: t("categories.backend"), skills: BackendSkills as Skill[], key: "Backend" },
    { name: t("categories.devops"), skills: DevOpsSkills as Skill[], key: "DevOps" },
    { name: t("categories.ai"), skills: AISkills as Skill[], key: "AI" },
  ];

  return (
    <section id="skills" className="section-padding relative" suppressHydrationWarning>
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
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[cat.key]} flex items-center justify-center`}
                      >
                        <span className="text-white/80 text-sm font-bold">
                          {cat.name.charAt(0)}
                        </span>
                      </div>
<div className="min-w-0">
                          <h3 className="text-lg font-semibold text-white">
                            {cat.name}
                          </h3>
                          <p className="text-xs text-white/45">
                            {cat.skills.length} skills
                          </p>
                        </div>
                       </div>
                       <div className="hidden sm:flex items-center gap-1.5">
                         <span className="text-[11px] text-white/45">
                           avg
                         </span>
                         <span className="text-[11px] text-white/60 tabular-nums" suppressHydrationWarning>
                           {Math.round(
                             cat.skills.reduce((sum, s) => sum + clampLevel(s.level), 0) /
                               Math.max(1, cat.skills.length)
                           )}
                           %
                         </span>
                       </div>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {cat.skills.map((skill) => (
                        <SkillTile
                          key={skill.name}
                          skill={skill}
                          accent={categoryAccents[cat.key] || "from-accent-indigo/70 to-accent-blue/70"}
                        />
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
