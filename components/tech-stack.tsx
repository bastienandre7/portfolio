"use client";

import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skillGroups: {
  label: string;
  skills: { name: string; icon: IconType; color: string }[];
}[] = [
  {
    label: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "React", icon: FaReact, color: "text-[#149ECA]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#4F9D45]" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-hero-accent" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#6699cc]" },
    ],
  },
  {
    label: "Outils",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground" },
    ],
  },
];

export default function TechStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="tech-stack"
      aria-label="Technologies utilisées"
      className="mx-auto max-w-[100rem] px-6 pb-20 pt-4 sm:px-10 sm:pb-24 lg:px-12 lg:pb-28"
    >
      <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.55,
              delay: prefersReducedMotion ? 0 : index * 0.08,
              ease: "easeOut",
            }}
            className="group relative overflow-hidden rounded-3xl bg-hero-accent/[0.06] p-7 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-9"
          >
            <div className="mb-6 h-1 w-12 rounded-full bg-hero-accent" />
            <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.16em] text-hero-accent sm:text-xl">
              {group.label}
            </h2>
            <ul className="flex flex-col gap-5">
              {group.skills.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-4 text-lg font-medium text-hero-subtitle sm:text-xl"
                >
                  <Icon
                    className={`h-6 w-6 shrink-0 ${color}`}
                    aria-hidden="true"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
