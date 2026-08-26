"use client";

import { createContext, useContext, type ReactNode } from "react";
import { site } from "@/lib/site-data";
import type { SiteContent } from "@/lib/site-types";

const SiteContentContext = createContext<SiteContent>(site);

export function SiteContentProvider({
  value,
  children,
}: {
  value: SiteContent;
  children: ReactNode;
}) {
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
