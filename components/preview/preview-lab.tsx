"use client";

import { createContext, useContext, type ReactNode } from "react";
import Link from "next/link";

const PreviewContext = createContext(false);

export function usePreviewLab() {
  return useContext(PreviewContext);
}

export function PreviewLab({ children }: { children: ReactNode }) {
  return (
    <PreviewContext.Provider value={true}>
      <div className="preview-lab">
        <div className="preview-banner">
          <span className="preview-banner-dot" aria-hidden="true" />
          <span className="preview-banner-kicker">Preview</span>
          <span className="preview-banner-sep" aria-hidden="true">
            ·
          </span>
          <span className="preview-banner-label">Hero plate</span>
          <Link href="/" className="preview-banner-link">
            Live site
          </Link>
        </div>
        {children}
      </div>
    </PreviewContext.Provider>
  );
}
