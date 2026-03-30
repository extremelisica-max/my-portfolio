import type React from "react";
import { landing } from "@/data/content";
import { owner } from "@/data/owner";

const stats: { label: string; icon: React.ReactNode }[] = [
  {
    label: `${owner.yearsOfExp} лет в дизайне`,
    icon: (
      // P — blue
      <svg width="36" height="46" viewBox="0 0 36 46" fill="none" aria-hidden="true">
        <path d="M0 0H26Q36 0 36 14Q36 28 26 28H8V46H0Z" fill="#0E0E0E"/>
        <path d="M8 8H24Q28 8 28 14Q28 20 24 20H8Z" fill="#1A6FFF"/>
      </svg>
    ),
  },
  {
    label: "10+ продуктов",
    icon: (
      // Q — green
      <svg width="44" height="48" viewBox="0 0 44 48" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="18" fill="#0E0E0E"/>
        <circle cx="18" cy="18" r="10" fill="#4ADE80"/>
        <path d="M23 26L44 46L37 48L17 28Z" fill="#0E0E0E"/>
      </svg>
    ),
  },
  {
    label: "4 компании",
    icon: (
      // U — orange
      <svg width="36" height="46" viewBox="0 0 36 46" fill="none" aria-hidden="true">
        <path
          d="M0 0H10V30Q10 46 18 46Q26 46 26 30V0H36V30Q36 54 18 54Q0 54 0 30Z"
          fill="#0E0E0E"
        />
        <path
          d="M10 8H26V30Q26 38 18 38Q10 38 10 30Z"
          fill="#FF6B00"
        />
      </svg>
    ),
  },
  {
    label: "B2B · Enterprise",
    icon: (
      // Y — red
      <svg width="36" height="46" viewBox="0 0 36 46" fill="none" aria-hidden="true">
        <circle cx="18" cy="24" r="11" fill="#FF1744"/>
        <path d="M0 0H12L22 24H10Z" fill="#0E0E0E"/>
        <path d="M24 0H36L26 24H14Z" fill="#0E0E0E"/>
        <rect x="13" y="22" width="10" height="24" fill="#0E0E0E"/>
      </svg>
    ),
  },
];

export default function Landing() {
  return (
    <section
      id="landing"
      aria-label="Главная страница портфолио Александра Карсунцева"
      data-testid="section-landing"
      data-ai-action="view-portfolio-home"
      className="section bg-cream pt-2 pr-6 pb-6 flex flex-col gap-2 h-screen"
    >
      {/* ── Main hero card ── */}
      <div className="landing-hero relative rounded-3xl border border-near-black/10 overflow-hidden">

        {/* Top: heading + tags */}
        <div className="relative z-10">
          <div className="flex flex-col gap-4">
            <ul className="flex flex-wrap gap-2" aria-label="Специализация">
              {landing.tags.map((tag) => (
                <li key={tag}>
                  <span className="tag bg-near-black text-cream font-medium">
                    #{tag}
                  </span>
                </li>
              ))}
            </ul>
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

      {/* ── Stat cards ── */}
      <ul
        className="landing-stats flex gap-2 list-none"
        aria-label="Ключевые показатели"
      >
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="landing-card rounded-3xl border border-near-black/10"
          >
            <div className="kars-card-safe-zone">
              {stat.icon}
              <p className="text-sm font-medium text-near-black">{stat.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
