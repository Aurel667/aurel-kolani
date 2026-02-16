"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-text-dim">
            &copy; {year} &mdash; {t("made")}{" "}
            <span className="gradient-text-subtle font-semibold">Aurel Kolani</span>
          </div>
          <div className="font-mono text-xs text-text-dim">
            {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
