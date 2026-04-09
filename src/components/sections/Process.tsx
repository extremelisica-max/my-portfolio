import ProcessGrid from "@/components/ui/ProcessGrid";

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Как я работаю"
      data-testid="section-process"
      data-ai-action="view-process"
      className="section pt-2 pb-6 flex flex-col gap-2"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-near-black border border-cream/15 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">03</p>
        </div>
        <div className="absolute top-0 right-0 p-6 z-10 text-right">
          <p className="text-xs text-cream/40">Сроки на примере<br />одностраничника</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-cream"
          aria-hidden="true"
        >
          Как я работаю
        </div>
      </div>

      {/* ── Process grid ── */}
      <ProcessGrid />
    </section>
  );
}
