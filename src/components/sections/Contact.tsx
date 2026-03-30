import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="book"
      aria-label="Связаться"
      data-testid="section-book"
      data-ai-action="view-contact"
      className="section pt-2 pr-6 pb-6 flex flex-col gap-2 h-screen"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-book border border-near-black/10 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-near-black/60">05</p>
        </div>
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-near-black"
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
              className="bg-book rounded-3xl border border-near-black/10 px-6 py-4 flex items-center gap-4 transition-colors duration-300 hover:border-near-black/25"
            >
              <p className="text-xs uppercase tracking-widest text-near-black/50 w-48 shrink-0">{ch.label}</p>
              <p className="font-medium text-near-black text-sm flex-1">{ch.cta}</p>
              <p className="text-sm text-near-black/40 text-right shrink-0">{ch.value}</p>
              <span aria-hidden="true" className="text-near-black/60 shrink-0 ml-2">→</span>
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
