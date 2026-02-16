import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aurelkolani.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr`,
          en: `${SITE_URL}/en`,
        },
      },
    },
  ];
}
