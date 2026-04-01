import { processSteps, type ProcessStep } from "@/data/process";

function CardHeader({ step }: { step: ProcessStep }) {
  return (
    <div className="flex items-start justify-between">
      <h3 className="text-4xl font-black tracking-tighter text-near-black leading-none">
        {step.shortTitle}
      </h3>
      <span
        className="tag font-mono border border-near-black/20 ml-4 shrink-0"
        aria-hidden="true"
      >
        {step.index}
      </span>
    </div>
  );
}

function CardDuration({ duration }: { duration: string }) {
  return (
    <p className="text-xs font-mono text-near-black/40 mt-2">{duration}</p>
  );
}

function CardItems({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={`Этапы: ${label}`} className="list-none mt-6">
      {items.map((item, i) => (
        <li key={i}>
          {i > 0 && (
            <div className="border-t border-near-black/10 my-3" aria-hidden="true" />
          )}
          <p className="text-near-black text-sm">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function DefaultCard({ step, className }: { step: ProcessStep; className?: string }) {
  return (
    <div
      data-testid={`process-card-${step.index}`}
      data-ai-action={`view-process-step-${step.index}`}
      className={`bg-white rounded-3xl p-8 border border-near-black/10 flex flex-col${className ? ` ${className}` : ""}`}
    >
      <CardHeader step={step} />
      <CardDuration duration={step.duration} />
      <CardItems items={step.items} label={step.shortTitle} />
      <div className="mt-auto pt-6">
        <p className="text-sm text-near-black/60 italic">
          {step.statementBefore}
          <span className="text-near-black font-medium not-italic">
            {step.statementAccent}
          </span>
        </p>
      </div>
    </div>
  );
}

function FeaturedCard({ step }: { step: ProcessStep }) {
  return (
    <div
      data-testid={`process-card-${step.index}`}
      data-ai-action={`view-process-step-${step.index}`}
      className="lg:col-start-2 lg:row-start-1 lg:row-span-2 relative rounded-3xl bg-white border border-near-black/10 overflow-hidden flex flex-col min-h-64"
    >
      <div className="p-8">
        <span
          className="tag font-mono border border-near-black/20"
          aria-hidden="true"
        >
          {step.index}
        </span>
      </div>
      <img
        src="/illustration-process.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2/3 w-auto object-contain object-bottom pointer-events-none"
      />
    </div>
  );
}

export default function ProcessGrid() {
  const [s01, s02, s03, s04, s05] = processSteps;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2">
      {/* Col 1, Row 1 — Договор */}
      <div className="lg:col-start-1 lg:row-start-1">
        <DefaultCard step={s01} className="h-full" />
      </div>

      {/* Col 1, Row 2 — Прототип */}
      <div className="lg:col-start-1 lg:row-start-2">
        <DefaultCard step={s02} className="h-full" />
      </div>

      {/* Col 2, Row 1–2 — Концепция (featured, spans 2 rows) */}
      <FeaturedCard step={s03} />

      {/* Col 3, Row 1 — Верстка */}
      <div className="lg:col-start-3 lg:row-start-1">
        <DefaultCard step={s04} className="h-full" />
      </div>

      {/* Col 3, Row 2 — Адаптивы */}
      <div className="lg:col-start-3 lg:row-start-2">
        <DefaultCard step={s05} className="h-full" />
      </div>
    </div>
  );
}
