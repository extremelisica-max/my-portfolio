import { landing } from "@/data/content";

export default function Landing() {
  return (
    <section
      id="landing"
      aria-label="Главная страница портфолио Александра Карсунцева"
      data-testid="section-landing"
      data-ai-action="view-portfolio-home"
      className="section bg-cream pt-2 pr-6 pb-6 flex flex-col h-screen"
    >
      {/* ── Main hero card ── */}
      <div className="landing-hero relative rounded-3xl border border-near-black/10 overflow-hidden bg-white">

        {/* Top: heading + tags */}
        <div className="relative z-10">
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-medium text-near-black">{landing.hero}</p>
            <ul className="flex flex-wrap gap-2" aria-label="Специализация">
              {landing.tags.map((tag) => (
                <li key={tag}>
                  <span className="tag bg-near-black text-cream font-medium">
                    #{tag}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-near-black/50">5+ лет опыта · 10+ реализованных проектов</p>
          </div>
        </div>

        {/* Bottom: KARS brand text */}
        <div
          className="absolute bottom-0 left-0 w-full text-brand text-near-black"
          aria-hidden="true"
        >
          {landing.title}
        </div>
      </div>


    </section>
  );
}
