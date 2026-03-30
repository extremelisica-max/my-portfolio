import { services } from "@/data/content";

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Услуги"
      data-testid="section-services"
      data-ai-action="view-services"
      className="section pt-2 pr-6 pb-6 flex flex-col gap-2 h-screen"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-services border border-cream/15 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">03</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-cream"
          aria-hidden="true"
        >
          Услуги
        </div>
      </div>

      {/* ── Service rows ── */}
      <ul className="flex flex-col gap-2 list-none" aria-label="Список услуг">
        {services.items.map((item) => (
          <li key={item.index}>
            <div
              data-testid={`service-row-${item.index}`}
              data-ai-action="view-service"
              className="bg-services rounded-3xl border border-cream/10 px-6 py-4 flex items-center gap-4"
            >
              <span className="text-xs font-mono text-cream/40 w-6 shrink-0">{item.index}</span>
              <p className="font-medium text-cream text-sm w-48 shrink-0">{item.title}</p>
              <p className="text-sm text-cream/60 flex-1">{item.description}</p>
              <div className="flex flex-wrap gap-1.5 w-56 shrink-0 justify-end">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border border-cream/15 text-cream/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-cream/40 w-32 shrink-0 text-right">{item.forWhom}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
