import { pricing } from "@/data/content";

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Цены"
      data-testid="section-pricing"
      data-ai-action="view-pricing"
      className="section pt-2 pb-6 flex flex-col gap-2 h-screen"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-pricing border border-near-black/10 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-near-black/60">04</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-near-black"
          aria-hidden="true"
        >
          Цены
        </div>
      </div>

      {/* ── Pricing rows ── */}
      <ul className="flex flex-col gap-2 list-none" aria-label="Тарифные планы">
        {pricing.tiers.map((tier) => (
          <li key={tier.index}>
            <div
              data-testid={`pricing-tier-${tier.index}`}
              data-ai-action={`view-pricing-tier-${tier.index}`}
              className={`rounded-3xl border px-6 py-4 flex items-center gap-4 transition-colors duration-300 ${
                tier.highlighted
                  ? "bg-near-black border-near-black"
                  : "bg-pricing border-near-black/10 hover:border-near-black/25"
              }`}
            >
              <span
                className={`text-xs font-mono w-6 shrink-0 ${
                  tier.highlighted ? "text-cream/40" : "text-near-black/40"
                }`}
              >
                {tier.index}
              </span>
              <p
                className={`font-semibold text-sm w-40 shrink-0 ${
                  tier.highlighted ? "text-cream" : "text-near-black"
                }`}
              >
                {tier.name}
              </p>
              <p
                className={`text-sm flex-1 ${
                  tier.highlighted ? "text-cream/60" : "text-near-black/60"
                }`}
              >
                {tier.description}
              </p>
              <div className="flex flex-wrap gap-1.5 w-64 shrink-0 justify-end">
                {tier.includes.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      tier.highlighted
                        ? "border border-cream/15 text-cream/60"
                        : "border border-near-black/15 text-near-black/50"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="w-36 shrink-0 text-right">
                <p
                  className={`text-sm font-semibold ${
                    tier.highlighted ? "text-cream" : "text-near-black"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    tier.highlighted ? "text-cream/50" : "text-near-black/50"
                  }`}
                >
                  {tier.duration}
                </p>
              </div>
              <a
                href="/#book"
                data-ai-action={`pricing-cta-${tier.index}`}
                className={`text-sm font-semibold w-20 shrink-0 text-right transition-opacity hover:opacity-70 ${
                  tier.highlighted ? "text-cream" : "text-near-black"
                }`}
              >
                {tier.cta} →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
