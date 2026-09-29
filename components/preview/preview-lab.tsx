"use client";

import Link from "next/link";

export function PreviewLab({ children }: { children: React.ReactNode }) {
  return (
    <div className="preview-lab">
      <div className="preview-banner">
        <span className="preview-banner-dot" aria-hidden="true" />
        <span className="preview-banner-kicker">Preview</span>
        <span className="preview-banner-sep" aria-hidden="true">
          ·
        </span>
        <span className="preview-banner-label">Scroll transitions</span>
        <Link href="/" className="preview-banner-link">
          Live site
        </Link>
      </div>
      {children}
    </div>
  );
}
