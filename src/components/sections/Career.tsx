"use client";

import { useState } from "react";
import { jobs } from "@/data/experience";

type WordPill = { kind: "word"; text: string; accent?: "orange" | "black"; grow?: boolean };
type EmptyPill = { kind: "empty"; shape: "pill" | "circle"; grow?: boolean };
type Pill = WordPill | EmptyPill;

const rows: Pill[][] = [
  // Row 1: "Пять" [grow empty] "лет" [fixed empty]
  [
    { kind: "word",  text: "Пять" },
    { kind: "empty", shape: "pill",   grow: true },
    { kind: "word",  text: "лет" },
    { kind: "empty", shape: "pill" },
  ],
  // Row 2: ["в продуктовом" grow] [circle] [circle] "дизайне"
  [
    { kind: "word",  text: "в продуктовом", grow: true },
    { kind: "empty", shape: "circle" },
    { kind: "empty", shape: "circle" },
    { kind: "word",  text: "дизайне" },
  ],
  // Row 3: "B2B" ["SaaS · ERP · CRM" orange grow]
  [
    { kind: "word",  text: "B2B" },
    { kind: "word",  text: "SaaS · ERP · CRM", accent: "orange", grow: true },
  ],
  // Row 4: ["4 компании · 10+ продуктов" black grow orange text] [fixed empty]
  [
    { kind: "word",  text: "4 компании · 10+ продуктов", accent: "black", grow: true },
    { kind: "empty", shape: "pill" },
  ],
];

export default function Career() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (index: string) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section
      id="career"
      aria-label="Карьера"
      data-testid="section-career"
      data-ai-action="view-career"
      className="section pt-2 pr-6 pb-6 flex flex-col gap-2"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-career border border-cream/15 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">05</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-cream"
          aria-hidden="true"
        >
          Карьера
        </div>
      </div>

      {/* ── Pill intro ── */}
      <div
        className="flex flex-col gap-3"
        aria-label="Вступление"
      >
        {rows.map((row, ri) => (
          <div key={ri} className="flex items-stretch gap-3">
            {row.map((pill, pi) => {
              if (pill.kind === "empty") {
                if (pill.shape === "circle") {
                  return (
                    <span
                      key={pi}
                      aria-hidden="true"
                      className="w-20 h-20 rounded-full border border-near-black/15 shrink-0"
                    />
                  );
                }
                return (
                  <span
                    key={pi}
                    aria-hidden="true"
                    className={`${pill.grow ? "flex-1" : "w-32"} rounded-3xl border border-near-black/15 shrink-0`}
                  />
                );
              }

              const base = `rounded-3xl px-8 py-5 text-6xl font-bold leading-none whitespace-nowrap flex items-center ${pill.grow ? "flex-1" : "shrink-0"}`;

              if (pill.accent === "orange") {
                return (
                  <span key={pi} className={`${base} bg-orange text-near-black`}>
                    {pill.text}
                  </span>
                );
              }
              if (pill.accent === "black") {
                return (
                  <span key={pi} className={`${base} bg-near-black text-orange`}>
                    {pill.text}
                  </span>
                );
              }
              return (
                <span key={pi} className={`${base} border border-near-black/20 text-near-black`}>
                  {pill.text}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      {/* ── Accordion ── */}
      <ul className="flex flex-col gap-2 list-none" aria-label="Опыт работы">
        {jobs.map((job) => {
          const isOpen = openIndex === job.index;
          return (
            <li key={job.index}>
              <div className="rounded-3xl border border-near-black/10 bg-cream overflow-hidden">
                {/* Header row */}
                <button
                  onClick={() => toggle(job.index)}
                  aria-expanded={isOpen}
                  data-testid={`career-item-${job.index}`}
                  data-ai-action={`toggle-career-${job.index}`}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-near-black/5 transition-colors"
                >
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <span className="text-xs font-mono text-near-black/40 shrink-0">
                      {job.index}
                    </span>
                    <span className="text-lg font-semibold text-near-black truncate">
                      {job.company}
                    </span>
                    <span className="text-sm text-near-black/50 hidden md:block truncate">
                      {job.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-sm text-near-black/40 hidden lg:block">
                      {job.period}
                    </span>
                    <span className="text-sm text-near-black/40">
                      {job.duration}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-xs font-mono text-near-black/40 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-8 pb-8 flex flex-col gap-6 border-t border-near-black/10 pt-6">
                    <div className="flex flex-wrap gap-3">
                      <span className="tag border border-near-black/15 text-near-black/60">
                        {job.role}
                      </span>
                      <span className="tag border border-near-black/15 text-near-black/60">
                        {job.location}
                      </span>
                      {job.url && (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tag border border-near-black/15 text-near-black/60 hover:border-near-black/40 transition-colors"
                        >
                          {job.url.replace("https://", "")} ↗
                        </a>
                      )}
                    </div>

                    <p className="text-near-black/70 text-sm leading-relaxed max-w-2xl">
                      {job.description}
                    </p>

                    <ul className="flex flex-col gap-2 list-none">
                      {job.achievements.map((ach, i) => (
                        <li key={i} className="flex gap-3 text-sm text-near-black">
                          <span className="text-near-black/30 shrink-0 font-mono">—</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <span
                          key={tool}
                          className="tag bg-near-black/5 text-near-black/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
