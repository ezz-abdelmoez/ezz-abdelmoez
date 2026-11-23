import type { Metadata } from "next";
import { PreviewLab } from "@/components/preview/preview-lab";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { SiteContentProvider } from "@/lib/site-content";
import { site } from "@/lib/site-data";
import { withAvailableDocuments } from "@/lib/with-available-documents";
import "./preview.css";

export const metadata: Metadata = {
  title: "Preview",
  description: "Experimental preview of portfolio motion. Not indexed.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  alternates: { canonical: "/" },
};

export default function PreviewPage() {
  const content = withAvailableDocuments(site);

  return (
    <SiteContentProvider value={content}>
      <PreviewLab>
        <PortfolioPage />
      </PreviewLab>
    </SiteContentProvider>
  );
}
