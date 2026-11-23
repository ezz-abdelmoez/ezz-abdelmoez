import type { SectionCopy } from "@/lib/site-types";

export function SectionTitle({ copy }: { copy: SectionCopy }) {
  return (
    <>
      {copy.titleBefore}
      {copy.titleBreak ? <br className="hidden sm:block" /> : null}
      {copy.titlePrefix}
      <span className="text-gradient">{copy.titleAccent}</span>
      {copy.titleAfter}
    </>
  );
}
