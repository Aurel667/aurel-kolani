"use client";

import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

const navItems = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Navigation() {
  const t = useTranslations("nav");
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const otherLocale = locale === "fr" ? "en" : "fr";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-sm tracking-wider text-accent hover:text-text transition-colors cursor-pointer"
          >
            AK<span className="text-text-dim">_</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="relative text-sm text-text-muted hover:text-text transition-colors group cursor-pointer"
              >
                {t(item)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Language switcher */}
            <Link
              href={pathname.replace(`/${locale}`, `/${otherLocale}`)}
              className="flex items-center gap-1.5 text-sm text-text-dim hover:text-accent transition-colors ml-4 border border-border hover:border-border-hover rounded-full px-3 py-1.5"
            >
              <Globe size={14} />
              {otherLocale.toUpperCase()}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-muted hover:text-text transition-colors cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className="text-2xl text-text-muted hover:text-text transition-colors cursor-pointer"
                >
                  {t(item)}
                </motion.button>
              ))}
              <Link
                href={pathname.replace(`/${locale}`, `/${otherLocale}`)}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-lg text-text-dim hover:text-accent transition-colors border border-border rounded-full px-4 py-2 mt-4"
              >
                <Globe size={16} />
                {otherLocale.toUpperCase()}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
