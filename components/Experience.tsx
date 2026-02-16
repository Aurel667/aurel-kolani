"use client";

import { useTranslations } from "next-intl";
import RevealSection from "./RevealSection";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
}

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string;
}

export default function Experience() {
  const t = useTranslations();

  const experiences = t.raw("experience.items") as ExperienceItem[];
  const education = t.raw("education.items") as EducationItem[];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("experience.title")}
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </RevealSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <RevealSection key={i} delay={i * 0.15}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-bg border-2 border-accent" />
                  </div>

                  {/* Card */}
                  <div className="group rounded-2xl border border-border bg-bg-card p-6 sm:p-8 hover:border-border-hover transition-all duration-500 glow gradient-border">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-accent" />
                          <span className="font-mono text-xs text-accent uppercase tracking-wider">
                            {exp.company}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-text">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="font-mono text-xs text-text-dim">
                          {exp.period}
                        </span>
                        <span className="text-xs text-text-dim">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <RevealSection delay={0.2}>
          <div className="flex items-center gap-4 mt-24 mb-12">
            <span className="font-mono text-accent text-sm">02.5</span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {t("education.title")}
            </h3>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <RevealSection key={i} delay={i * 0.15}>
              <div className="group rounded-2xl border border-border bg-bg-card p-6 sm:p-8 hover:border-border-hover transition-all duration-500 h-full glow gradient-border">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={16} className="text-accent-2" />
                  <span className="font-mono text-xs text-accent-2 uppercase tracking-wider">
                    {edu.school}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-text mb-2">
                  {edu.degree}
                </h4>
                <p className="font-mono text-xs text-text-dim mb-3">
                  {edu.period}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
