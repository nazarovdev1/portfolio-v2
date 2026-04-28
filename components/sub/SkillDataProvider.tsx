"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

interface Props {
  icon: string;
  name: string;
  index: number;
}

const SkillDataProvider = ({ icon, name, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/[0.04] transition-all duration-200 cursor-default"
    >
      <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center text-gray-400 group-hover:text-accent-indigo transition-colors duration-200 text-lg">
        {iconMap[icon] || <HiOutlineCube className="w-5 h-5" />}
      </div>
      <span className="text-[11px] text-gray-400 group-hover:text-white/80 transition-colors duration-200 text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
};

export default SkillDataProvider;
