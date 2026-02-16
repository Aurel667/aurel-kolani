import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import JsonLd from "@/components/JsonLd";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aurelkolani.dev";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const otherLocale = locale === "fr" ? "en" : "fr";

  return {
    title: {
      default: messages.meta.title,
      template: `%s | Aurel Kolani`,
    },
    description: messages.meta.description,
    keywords: messages.meta.keywords,
    authors: [{ name: "Aurel Kolani", url: SITE_URL }],
    creator: "Aurel Kolani",
    publisher: "Aurel Kolani",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/fr`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      url: `${SITE_URL}/${locale}`,
      siteName: "Aurel Kolani — Portfolio",
      title: messages.meta.ogTitle,
      description: messages.meta.ogDescription,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: messages.meta.ogTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.ogTitle,
      description: messages.meta.ogDescription,
      images: [`${SITE_URL}/og-image.png`],
      creator: "@aurelkolani",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
    verification: {
      // google: "your-google-verification-code",
    },
    category: "technology",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        <JsonLd locale={locale} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased grain`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
