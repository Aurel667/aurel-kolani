import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aurel Kolani — Développeur FullStack",
    short_name: "Aurel Kolani",
    description:
      "Portfolio de Aurel Kolani, Développeur FullStack orienté Backend. TypeScript, Node.js, React, Laravel.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#6ee7b7",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
