"use client";

import { useTranslations } from "next-intl";
import RevealSection from "./RevealSection";
import { MapPin, Sparkles } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">01.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t("title")}</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <RevealSection delay={0.1}>
              <p className="text-lg leading-relaxed text-text-muted">
                {t("p1")}
              </p>
            </RevealSection>
            <RevealSection delay={0.2}>
              <p className="text-lg leading-relaxed text-text-muted">
                {t("p2")}
              </p>
            </RevealSection>
            <RevealSection delay={0.3}>
              <p className="text-lg leading-relaxed text-text-muted">
                {t("p3")}
              </p>
            </RevealSection>
          </div>

          <div className="lg:col-span-2">
            <RevealSection delay={0.3}>
              <div className="space-y-4">
                {/* Info cards */}
                <div className="group rounded-2xl border border-border bg-bg-card p-6 hover:border-border-hover transition-all duration-500 glow">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={16} className="text-accent" />
                    <span className="font-mono text-xs text-text-dim uppercase tracking-wider">Location</span>
                  </div>
                  <p className="text-text">{t("location")}</p>
                </div>

                <div className="group rounded-2xl border border-border bg-bg-card p-6 hover:border-border-hover transition-all duration-500 glow">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles size={16} className="text-accent" />
                    <span className="font-mono text-xs text-text-dim uppercase tracking-wider">Status</span>
                  </div>
                  <p className="text-text flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-dot-pulse" />
                    {t("status")}
                  </p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 rounded-2xl border border-border bg-bg-card">
                    <div className="text-2xl font-bold gradient-text-subtle">3+</div>
                    <div className="font-mono text-xs text-text-dim mt-1">
                      {t("title") === "À propos" ? "Expériences" : "Experiences"}
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-2xl border border-border bg-bg-card">
                    <div className="text-2xl font-bold gradient-text-subtle">4+</div>
                    <div className="font-mono text-xs text-text-dim mt-1">
                      {t("title") === "À propos" ? "Projets" : "Projects"}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
