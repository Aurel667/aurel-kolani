"use client";

import RevealSection from "./RevealSection";
import {
  siTypescript,
  siJavascript,
  siNodedotjs,
  siExpress,
  siReact,
  siNextdotjs,
  siPhp,
  siLaravel,
  siMongodb,
  siPostgresql,
  siMysql,
  siRedis,
  siDocker,
  siGit,
  siGithub,
  siTailwindcss,
  siPrisma,
  siSocketdotio,
  siLinux,
  siPostman,
  siReactrouter,
  siShadcnui,
} from "simple-icons";

interface TechLogo {
  name: string;
  icon: {
    path: string;
    hex: string;
  };
}

const techLogos: TechLogo[] = [
  { name: "TypeScript", icon: { path: siTypescript.path, hex: siTypescript.hex } },
  { name: "JavaScript", icon: { path: siJavascript.path, hex: siJavascript.hex } },
  { name: "Node.js", icon: { path: siNodedotjs.path, hex: siNodedotjs.hex } },
  { name: "Express", icon: { path: siExpress.path, hex: siExpress.hex } },
  { name: "React", icon: { path: siReact.path, hex: siReact.hex } },
  { name: "Next.js", icon: { path: siNextdotjs.path, hex: siNextdotjs.hex } },
  { name: "PHP", icon: { path: siPhp.path, hex: siPhp.hex } },
  { name: "Laravel", icon: { path: siLaravel.path, hex: siLaravel.hex } },
  { name: "MongoDB", icon: { path: siMongodb.path, hex: siMongodb.hex } },
  { name: "PostgreSQL", icon: { path: siPostgresql.path, hex: siPostgresql.hex } },
  { name: "MySQL", icon: { path: siMysql.path, hex: siMysql.hex } },
  { name: "Redis", icon: { path: siRedis.path, hex: siRedis.hex } },
  { name: "Docker", icon: { path: siDocker.path, hex: siDocker.hex } },
  { name: "Git", icon: { path: siGit.path, hex: siGit.hex } },
  { name: "GitHub", icon: { path: siGithub.path, hex: siGithub.hex } },
  { name: "TailwindCSS", icon: { path: siTailwindcss.path, hex: siTailwindcss.hex } },
  { name: "Prisma", icon: { path: siPrisma.path, hex: siPrisma.hex } },
  { name: "Socket.io", icon: { path: siSocketdotio.path, hex: siSocketdotio.hex } },
  { name: "Linux", icon: { path: siLinux.path, hex: siLinux.hex } },
  { name: "Postman", icon: { path: siPostman.path, hex: siPostman.hex } },
  { name: "React Router", icon: { path: siReactrouter.path, hex: siReactrouter.hex } },
  { name: "Shadcn UI", icon: { path: siShadcnui.path, hex: siShadcnui.hex } },
];

export default function TechLogos() {
  return (
    <RevealSection delay={0.3}>
      <div className="mt-16 pt-12 border-t border-border">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {techLogos.map((tech, i) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center gap-3"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Logo */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border border-border bg-bg-card group-hover:border-border-hover transition-all duration-500 glow p-2.5 bg-white/90">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-full h-full transition-all duration-300 group-hover:scale-110"
                  style={{ fill: `#${tech.icon.hex}` }}
                >
                  <title>{tech.name}</title>
                  <path d={tech.icon.path} />
                </svg>
              </div>

              {/* Tooltip */}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs text-text-dim whitespace-nowrap pointer-events-none">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
