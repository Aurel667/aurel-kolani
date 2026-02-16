"use client";

import { useTranslations } from "next-intl";
import RevealSection from "./RevealSection";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">05.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Message */}
          <RevealSection delay={0.1}>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-text leading-tight mb-6">
                {t("subtitle")}
              </p>
              <a
                href="mailto:aureliuskolani@gmail.com"
                className="group inline-flex items-center gap-3 text-lg sm:text-xl gradient-text-subtle font-semibold hover:opacity-80 transition-opacity"
              >
                {t("cta")}
                <ArrowUpRight
                  size={20}
                  className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </RevealSection>

          {/* Right - Contact info */}
          <RevealSection delay={0.2}>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:aureliuskolani@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-card p-5 hover:border-border-hover transition-all duration-500 glow"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs text-text-dim uppercase tracking-wider mb-0.5">
                    {t("email")}
                  </div>
                  <div className="text-text group-hover:text-accent transition-colors">
                    aureliuskolani@gmail.com
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>

              {/* Phone */}
              <a
                href="tel:+221773491210"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-card p-5 hover:border-border-hover transition-all duration-500 glow"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-2/10 text-accent-2">
                  <Phone size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs text-text-dim uppercase tracking-wider mb-0.5">
                    {t("phone")}
                  </div>
                  <div className="text-text group-hover:text-accent-2 transition-colors">
                    +221 77 349 12 10
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-text-dim group-hover:text-accent-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>

              {/* Socials */}
              <div className="font-mono text-xs text-text-dim uppercase tracking-wider pt-4 mb-2">
                {t("socials")}
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/christian-aurel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-bg-card hover:border-accent/50 hover:bg-accent/5 transition-all duration-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={18}
                    className="text-text-dim group-hover:text-accent transition-colors"
                  />
                </a>
                <a
                  href="https://github.com/Aurel667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-bg-card hover:border-accent/50 hover:bg-accent/5 transition-all duration-500"
                  aria-label="GitHub"
                >
                  <Github
                    size={18}
                    className="text-text-dim group-hover:text-accent transition-colors"
                  />
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
