"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

interface Props {
  src: string;
  title: string;
  description: string;
  tags?: string[];
}

const ProjectCard = ({ src, title, description, tags = [] }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden bg-dark-200">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
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
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-3">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent-indigo/10 text-accent-indigo/80 border border-accent-indigo/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
