import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../public/Inter-Regular.ttf",
  variable: "--font-inter",
  display: "swap",
});

const META_TITLE = "Александр Карсунцев — Product Designer";
const META_DESCRIPTION =
  "Проектирую сложные B2B-интерфейсы: SaaS-платформы, CRM, строительные системы. 5+ лет опыта. Самара, удалённо.";
const SITE_URL = "https://karsuncev.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: META_TITLE,
    template: "%s — Александр Карсунцев",
  },
  description: META_DESCRIPTION,
  keywords: [
    "Product Designer",
    "UX Designer",
    "B2B",
    "SaaS",
    "CRM",
    "Figma",
    "Самара",
    "портфолио",
    "дизайнер интерфейсов",
  ],
  authors: [{ name: "Александр Карсунцев" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Александр Карсунцев — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Александр Карсунцев",
  jobTitle: "Product Designer",
  url: SITE_URL,
  email: "extremelisica@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Самара",
    addressCountry: "RU",
  },
  knowsAbout: ["Product Design", "UX Design", "B2B SaaS", "CRM", "Figma"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
