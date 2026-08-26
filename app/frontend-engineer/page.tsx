import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { frontendEngineerSite } from "@/lib/frontend-engineer-data";
import { SiteContentProvider } from "@/lib/site-content";
import { buildPersonJsonLd, buildTrackMetadata } from "@/lib/track-seo";
import { withAvailableDocuments } from "@/lib/with-available-documents";

export const metadata = buildTrackMetadata(frontendEngineerSite);

const personJsonLd = buildPersonJsonLd(frontendEngineerSite);

export default function FrontendEngineerPage() {
  const content = withAvailableDocuments(frontendEngineerSite);

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
