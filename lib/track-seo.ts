import type { Metadata } from "next";
import type { SiteContent } from "@/lib/site-types";

export const siteUrl = "https://ezz-abdelmoez.vercel.app";

export function trackPageUrl(content: SiteContent) {
  return content.basePath === "/" ? siteUrl : `${siteUrl}${content.basePath}`;
}

export function buildTrackMetadata(content: SiteContent): Metadata {
  const { profile, seo } = content;
  const pageUrl = trackPageUrl(content);
  const title = `${profile.name} — ${seo.jobTitle}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: content.basePath },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: `${profile.name} — ${profile.role}`,
      title,
      description: seo.description,
      locale: "en_US",
      images: [{ url: profile.photo, width: 1240, height: 1240, alt: profile.fullName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      images: [profile.photo],
    },
  };
}

export function buildPersonJsonLd(content: SiteContent) {
  const { profile, seo, contactLinks } = content;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.name,
    url: trackPageUrl(content),
    image: `${siteUrl}${profile.photo}`,
    jobTitle: seo.jobTitle,
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
    knowsAbout: seo.knowsAbout,
    knowsLanguage: ["Arabic", "English", "German"],
    sameAs: [contactLinks.github, contactLinks.linkedin],
  };
}
