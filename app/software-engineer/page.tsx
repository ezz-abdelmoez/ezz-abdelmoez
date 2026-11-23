import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { SiteContentProvider } from "@/lib/site-content";
import { softwareEngineerSite } from "@/lib/software-engineer-data";
import { buildPersonJsonLd, buildTrackMetadata } from "@/lib/track-seo";
import { withAvailableDocuments } from "@/lib/with-available-documents";

export const metadata = buildTrackMetadata(softwareEngineerSite);

const personJsonLd = buildPersonJsonLd(softwareEngineerSite);

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
