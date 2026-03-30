import { serviceCategories, services } from "@/data/content";

export default function ServicesPricing() {
  return (
    <section
      id="services"
      aria-label="Услуги и цены"
      data-testid="section-services-pricing"
      data-ai-action="view-services-pricing"
      className="section pt-2 pr-6 pb-6 flex flex-col gap-2"
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
          Услуги и цены
        </div>
      </div>

      {/* ── Categories grid ── */}
      <div className="grid grid-cols-3 gap-2">
        {serviceCategories.map((category) => (
          <div
            key={category.index}
            data-testid={`service-category-${category.index}`}
            data-ai-action="view-service-category"
            className="bg-cream rounded-3xl p-8 border border-near-black/10"
          >
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-near-black leading-none">
                {category.title}
              </h2>
              <span
                className="text-xs font-mono border border-near-black/25 rounded-full px-3 py-1 shrink-0 ml-4"
                aria-hidden="true"
              >
                {category.index}
              </span>
            </div>
            <ul className="list-none" aria-label={`Услуги: ${category.title}`}>
              {category.items.map((item, i) => (
                <li key={item}>
                  {i > 0 && (
                    <div className="border-t border-near-black/10 my-3" aria-hidden="true" />
                  )}
                  <p className="text-near-black text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Service cards ── */}
      <div className="grid grid-cols-3 gap-2">
        {services.items.filter((item) => item.index !== "04").map((item) => (
          <div
            key={item.index}
            data-testid={`service-card-${item.index}`}
            data-ai-action="view-service"
            className="bg-cream rounded-3xl p-8 border border-near-black/10"
          >
            <div className="flex items-start justify-between mb-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-near-black leading-none">
                {item.title}
              </h3>
              <span
                className="text-xs font-mono border border-near-black/25 rounded-full px-3 py-1 shrink-0 ml-4"
                aria-hidden="true"
              >
                {item.index}
              </span>
            </div>
            <ul className="list-none" aria-label={`Состав: ${item.title}`}>
              <li>
                <p className="text-near-black/60 text-sm">{item.description}</p>
              </li>
              {item.tags.map((tag) => (
                <li key={tag}>
                  <div className="border-t border-near-black/10 my-3" aria-hidden="true" />
                  <p className="text-near-black text-sm">{tag}</p>
                </li>
              ))}
              <li>
                <div className="border-t border-near-black/10 my-3" aria-hidden="true" />
                <p className="text-near-black/40 text-xs">{item.forWhom}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
