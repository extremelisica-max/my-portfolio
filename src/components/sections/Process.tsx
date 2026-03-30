import ProcessTabs from "@/components/ui/ProcessTabs";

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Как я работаю"
      data-testid="section-process"
      data-ai-action="view-process"
      className="section pt-2 pr-6 pb-6 flex flex-col gap-2"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-pricing border border-near-black/10 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-near-black/60">03</p>
        </div>
        <div className="absolute top-0 right-0 p-6 z-10 text-right">
          <p className="text-xs text-near-black/40">Сроки на примере<br />одностраничника</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-near-black"
          aria-hidden="true"
        >
          Как я работаю
        </div>
      </div>

      {/* ── Illustration card ── */}
      <div className="work-hero relative rounded-3xl bg-cream border border-near-black/10 overflow-hidden">
        <img
          src="/illustration-process.svg"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom"
        />
      </div>

      {/* ── Process tabs ── */}
      <ProcessTabs />
    </section>
  );
}
