import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { SiteContentProvider } from "@/lib/site-content";
import { softwareEngineerSite } from "@/lib/software-engineer-data";
import { contactLinks } from "@/lib/site-data";
import { withAvailableDocuments } from "@/lib/with-available-documents";

const siteUrl = "https://ezz-abdelmoez.vercel.app";
const pageUrl = `${siteUrl}/software-engineer`;
const { profile, seo } = softwareEngineerSite;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/software-engineer" },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: `${profile.name} — Software Engineer`,
    title: `${profile.name} — ${seo.jobTitle}`,
    description: seo.description,
    locale: "en_US",
    images: [{ url: profile.photo, width: 1240, height: 1240, alt: profile.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${seo.jobTitle}`,
    description: seo.description,
    images: [profile.photo],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  url: pageUrl,
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
  knowsAbout: [
    "Software Engineering",
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "React",
    "Next.js",
    "TypeScript",
    "REST APIs",
  ],
  knowsLanguage: ["Arabic", "English", "German"],
  sameAs: [contactLinks.github, contactLinks.linkedin],
};

export default function SoftwareEngineerPage() {
  const content = withAvailableDocuments(softwareEngineerSite);

  return (
    <SiteContentProvider value={content}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PortfolioPage />
    </SiteContentProvider>
  );
}
