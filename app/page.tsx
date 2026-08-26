import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { SiteContentProvider } from "@/lib/site-content";
import { site } from "@/lib/site-data";

export default function Home() {
  return (
    <SiteContentProvider value={site}>
      <PortfolioPage />
    </SiteContentProvider>
  );
}
