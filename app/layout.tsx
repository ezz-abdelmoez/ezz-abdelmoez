import React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { contactLinks, profile } from "@/lib/site-data";
import "./globals.css";

/**
 * Fonts are self-hosted (subset to latin) rather than fetched from Google:
 * one less third-party request, no build-time network dependency, no CLS.
 */
const instrumentSans = localFont({
  src: "./fonts/InstrumentSans-Variable.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
  variable: "--font-instrument",
});

const instrumentSerif = localFont({
  src: "./fonts/InstrumentSerif-Regular.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  variable: "--font-instrument-serif",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  weight: "100 800",
  style: "normal",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  variable: "--font-jetbrains",
});

const siteUrl = "https://ezz-abdelmoez.vercel.app";
const title = `${profile.name} — Full Stack Developer (.NET & React)`;
const description =
  "Full Stack Developer from Luxor, Egypt, building web applications end to end with ASP.NET Core, Entity Framework Core, SQL Server and React.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Ezz Abdelmoez",
    "Full Stack Developer",
    ".NET Developer",
    "ASP.NET Core",
    "React Developer",
    "Next.js",
    "C#",
    "Entity Framework Core",
    "SQL Server",
    "Egypt",
    "Luxor",
  ],
  authors: [{ name: profile.fullName, url: siteUrl }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_US",
    images: [{ url: profile.photo, width: 1240, height: 1240, alt: profile.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [profile.photo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: "Full Stack Developer (.NET / React)",
  description: profile.summary,
  email: `mailto:${contactLinks.email}`,
  telephone: contactLinks.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Luxor",
    addressCountry: "EG",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Luxor University" },
    { "@type": "EducationalOrganization", name: "Information Technology Institute (ITI)" },
  ],
  knowsAbout: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "React",
    "Next.js",
    "TypeScript",
    "REST APIs",
    "React Native",
  ],
  knowsLanguage: ["Arabic", "English", "German"],
  sameAs: [contactLinks.github, contactLinks.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
