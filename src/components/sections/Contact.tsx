import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="book"
      aria-label="Связаться"
      data-testid="section-book"
      data-ai-action="view-contact"
      className="section !min-h-0 pt-2 pb-6 flex flex-col gap-2"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-near-black border border-cream/15 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">05</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-cream"
          aria-hidden="true"
        >
          {contact.sectionTitle}
        </div>
      </div>

      {/* ── Contact rows ── */}
      <ul className="flex flex-col gap-2 list-none" aria-label="Способы связи">
        {contact.channels.map((ch) => (
          <li key={ch.label}>
            <a
              href={ch.href}
              target={ch.href.startsWith("mailto") ? undefined : "_blank"}
              rel={ch.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={ch.cta}
              data-testid={`contact-row-${ch.label.toLowerCase().replace(/\s+/g, "-")}`}
              data-ai-action={`contact-${ch.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`rounded-3xl border px-6 py-4 flex flex-col gap-1 md:flex-row md:items-center md:gap-4 transition-colors duration-300 ${ch.primary ? "bg-near-black border-near-black text-cream hover:bg-near-black/80" : "bg-white border-near-black/10 hover:border-near-black/25"}`}
            >
              <p className={`text-xs uppercase tracking-widest md:w-48 md:shrink-0 ${ch.primary ? "text-cream/50" : "text-near-black/50"}`}>{ch.label}</p>
              <div className="flex items-center gap-2 md:contents">
                <p className={`font-semibold text-sm flex-1 ${ch.primary ? "text-cream" : "text-near-black"}`}>{ch.cta}</p>
                <p className={`text-sm md:text-right md:shrink-0 ${ch.primary ? "text-cream/50" : "text-near-black/40"}`}>{ch.value}</p>
                <span aria-hidden="true" className={`shrink-0 md:ml-2 ${ch.primary ? "text-cream/60" : "text-near-black/60"}`}>→</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between px-2 mt-auto pt-2">
        <p className="text-xs text-near-black/50">{contact.status}</p>
        <p className="text-xs text-near-black/50">{contact.copyright}</p>
      </div>
    </section>
  );
}
