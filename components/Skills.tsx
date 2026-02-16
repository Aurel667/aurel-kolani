"use client";

import { useTranslations } from "next-intl";
import RevealSection from "./RevealSection";
import TechLogos from "./TechLogos";
import {
  Code2,
  Database,
  Network,
  Container,
  Shield,
  Palette,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code2 size={18} />,
  databases: <Database size={18} />,
  architecture: <Network size={18} />,
  devops: <Container size={18} />,
  security: <Shield size={18} />,
  frontend: <Palette size={18} />,
};

const categoryColors: Record<string, string> = {
  languages: "text-accent border-accent/20 hover:border-accent/50",
  databases: "text-accent-2 border-accent-2/20 hover:border-accent-2/50",
  architecture: "text-accent-3 border-accent-3/20 hover:border-accent-3/50",
  devops: "text-accent border-accent/20 hover:border-accent/50",
  security: "text-accent-2 border-accent-2/20 hover:border-accent-2/50",
  frontend: "text-accent-3 border-accent-3/20 hover:border-accent-3/50",
};

interface SkillCategory {
  title: string;
  items: string[];
}

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Record<string, SkillCategory>;

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([key, category], i) => (
            <RevealSection key={key} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-bg-card p-6 hover:border-border-hover transition-all duration-500 h-full glow">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`${categoryColors[key]?.split(" ")[0] || "text-accent"}`}>
                    {categoryIcons[key]}
                  </div>
                  <h3 className="font-semibold text-text text-sm">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1.5 rounded-full border bg-bg transition-all duration-300 cursor-default ${
                        categoryColors[key] || "text-accent border-accent/20 hover:border-accent/50"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Tech Logos */}
        <TechLogos />
      </div>
    </section>
  );
}
