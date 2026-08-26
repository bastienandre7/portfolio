import type { IconType } from "react-icons";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
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
      { name: "Next.js", icon: SiNextdotjs, color: "text-[#1F2A1F]" },
      { name: "React", icon: FaReact, color: "text-[#149ECA]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#4F9D45]" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-[#2D3748]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
    ],
  },
  {
    label: "Outils",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-[#1F2A1F]" },
      { name: "Vercel", icon: SiVercel, color: "text-[#1F2A1F]" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-white py-24 text-[#1F2A1F] md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#5E6B52]">
            Tech stack & skills
          </p>
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2A1F] sm:text-5xl">
            Les outils qui donnent vie aux projets.
          </h2>
        </div>

        <div className="grid gap-12 border-t border-[#1F2A1F]/10 pt-8 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F2A1F]/50">
                {group.label}
              </h3>
              <ul>
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <li
                      key={skill.name}
                      className="flex items-center gap-4 border-b border-[#1F2A1F]/10 py-4 first:border-t"
                    >
                      <Icon
                        className={`h-6 w-6 shrink-0 ${skill.color}`}
                        aria-hidden="true"
                      />
                      <span className="text-base font-medium">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
