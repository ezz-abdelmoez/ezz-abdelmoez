import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { SiteContentProvider } from "@/lib/site-content";
import { site } from "@/lib/site-data";
import { withAvailableDocuments } from "@/lib/with-available-documents";

export default function Home() {
  const content = withAvailableDocuments(site);

  return (
    <SiteContentProvider value={content}>
      <PortfolioPage />
    </SiteContentProvider>
  );
}
