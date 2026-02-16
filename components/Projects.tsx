"use client";

import { useTranslations } from "next-intl";
import RevealSection from "./RevealSection";
import { ExternalLink, Github } from "lucide-react";

interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
}

export default function Projects() {
  const t = useTranslations("projects");
  const projects = t.raw("items") as ProjectItem[];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">03.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-border bg-bg-card overflow-hidden hover:border-border-hover transition-all duration-500 h-full flex flex-col glow gradient-border">
                {/* Top accent line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-mono text-xs text-accent mb-2 tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-xl font-bold text-text group-hover:gradient-text transition-all duration-500">
                        {project.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-dim hover:text-accent transition-colors p-1"
                          aria-label={t("viewProject")}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-dim hover:text-accent transition-colors p-1"
                          aria-label={t("viewCode")}
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-full border border-border text-text-dim group-hover:border-accent/30 group-hover:text-accent/80 transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-2/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
