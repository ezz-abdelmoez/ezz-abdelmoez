import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { backendEngineerSite } from "@/lib/backend-engineer-data";
import { SiteContentProvider } from "@/lib/site-content";
import { buildPersonJsonLd, buildTrackMetadata } from "@/lib/track-seo";
import { withAvailableDocuments } from "@/lib/with-available-documents";

export const metadata = buildTrackMetadata(backendEngineerSite);

const personJsonLd = buildPersonJsonLd(backendEngineerSite);

export default function BackendEngineerPage() {
  const content = withAvailableDocuments(backendEngineerSite);

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
