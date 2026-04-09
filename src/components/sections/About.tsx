import { hello } from "@/data/content";
import { owner } from "@/data/owner";

export default function About() {
  return (
    <section
      id="about"
      role="region"
      aria-label="О себе"
      data-testid="section-hello"
      data-ai-action="view-about"
      className="section !min-h-0 flex flex-col lg:flex-row lg:items-center lg:px-16 py-12 bg-about-bg text-about-fg"
    >
      {/* Section label — скрыт на мобильном, чтобы не уходить за экран */}
      <div
        className="hidden lg:block absolute top-10 left-nav text-xs uppercase tracking-widest text-about-fg-muted"
        aria-hidden="true"
      >
        {hello.sectionLabel} <span className="ml-2">● 01</span>
      </div>

      {/* Левая колонка: заголовок */}
      <div className="w-full lg:w-2/5 flex items-end lg:items-center">
        <h2
          className="text-hero font-normal text-about-fg"
        >
          {hello.sectionTitle}
        </h2>
      </div>

      {/* Правая колонка: bio + manifesto */}
      <div className="w-full lg:w-3/5 lg:ml-auto flex flex-col gap-8 mt-8 lg:mt-0">
        {/* Bio */}
        <div>
          <h3
            className="text-section-heading mb-2 text-about-fg"
          >
            {hello.bioHeading}
          </h3>
          <p
            className="text-base font-normal leading-relaxed text-about-fg-dim"
          >
            {hello.bio}
          </p>
        </div>

        {/* Divider */}
        <hr
          aria-hidden="true"
          className="border-t border-about-divider"
        />

        {/* Manifesto */}
        <ul className="flex flex-col gap-8" role="list">
          {hello.manifesto.map((item) => (
            <li key={item.index}>
              <span
                className="text-xs font-normal block mb-1 text-about-fg-muted"
              >
                {item.index}
              </span>
              <h4
                className="heading-4 mb-2 text-about-fg"
              >
                {item.heading}
              </h4>
              <p
                className="text-sm font-normal leading-relaxed text-about-fg-dim"
              >
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Status badges */}
        <div className="flex flex-wrap gap-3 pt-2">
          {owner.openToWork && (
            <span
              className="tag border text-about-fg border-about-divider"
            >
              {hello.openToWork}
            </span>
          )}
          <span
            className="tag border text-about-fg border-about-divider"
          >
            {hello.location}
          </span>
        </div>

        {/* Ideal fit */}
        {hello.idealFit && (
          <p className="text-sm text-about-fg-muted leading-relaxed border-t border-about-divider pt-6">
            {hello.idealFit}
          </p>
        )}
      </div>
    </section>
  );
}
