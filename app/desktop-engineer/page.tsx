import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { desktopEngineerSite } from "@/lib/desktop-engineer-data";
import { SiteContentProvider } from "@/lib/site-content";
import { buildPersonJsonLd, buildTrackMetadata } from "@/lib/track-seo";
import { withAvailableDocuments } from "@/lib/with-available-documents";

export const metadata = buildTrackMetadata(desktopEngineerSite);

const personJsonLd = buildPersonJsonLd(desktopEngineerSite);

export default function DesktopEngineerPage() {
  const content = withAvailableDocuments(desktopEngineerSite);

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
