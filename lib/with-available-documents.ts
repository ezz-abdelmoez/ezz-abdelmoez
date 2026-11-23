import fs from "node:fs";
import path from "node:path";
import type { SiteContent } from "@/lib/site-types";

/** Server-only: flip document cards on once the PDFs land in /public. */
export function withAvailableDocuments(content: SiteContent): SiteContent {
  const documents = content.documents.map((doc) => {
    const relative = doc.href.replace(/^\//, "");
    return {
      ...doc,
      available: fs.existsSync(path.join(process.cwd(), "public", relative)),
    };
  });

  const cv = documents.find((doc) => doc.kind === "cv" && doc.available);

  return {
    ...content,
    documents,
    profile: {
      ...content.profile,
      resume: cv?.href ?? content.profile.resume,
    },
  };
}
