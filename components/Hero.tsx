"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-bg" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-accent-2/5 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-[30%] w-48 h-48 rounded-full bg-accent-3/5 blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Decorative lines */}
      <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-accent mb-6"
        >
          {t("greeting")}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-4"
        >
          <span className="gradient-text">{t("name")}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-text-muted mb-4"
        >
          {t("role")}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-xs sm:text-sm text-text-dim max-w-xl mx-auto mb-12"
        >
          {t("description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative overflow-hidden rounded-full bg-text text-bg px-8 py-3 text-sm font-medium transition-all hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("cta")}
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <a
            href="mailto:aureliuskolani@gmail.com"
            className="group flex items-center gap-2 rounded-full border border-border hover:border-accent/50 px-8 py-3 text-sm text-text-muted hover:text-text transition-all"
          >
            <Mail size={16} />
            {t("contact")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
