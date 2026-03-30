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
      className="section h-screen flex flex-col lg:flex-row lg:items-center px-6 lg:px-16 py-12"
      style={{ backgroundColor: "#5900CC", color: "#F4E9E1" }}
    >
      {/* Section label — скрыт на мобильном, чтобы не уходить за экран */}
      <div
        className="hidden lg:block absolute top-10 left-nav text-xs uppercase tracking-widest"
        style={{ color: "rgba(244,233,225,0.4)" }}
        aria-hidden="true"
      >
        {hello.sectionLabel} <span className="ml-2">● 01</span>
      </div>

      {/* Левая колонка: заголовок */}
      <div className="w-full lg:w-2/5 flex items-end lg:items-center">
        <h2
          className="text-hero font-normal"
          style={{ color: "#F4E9E1" }}
        >
          {hello.sectionTitle}
        </h2>
      </div>

      {/* Правая колонка: bio + manifesto */}
      <div className="w-full lg:w-3/5 lg:ml-auto flex flex-col gap-8 mt-8 lg:mt-0">
        {/* Bio */}
        <div>
          <h3
            className="text-section-heading mb-2"
            style={{ color: "#F4E9E1" }}
          >
            {hello.bioHeading}
          </h3>
          <p
            className="text-base font-normal leading-relaxed"
            style={{ color: "rgba(244,233,225,0.8)" }}
          >
            {hello.bio}
          </p>
        </div>

        {/* Divider */}
        <hr
          aria-hidden="true"
          style={{ borderTop: "1px solid rgba(244,233,225,0.2)" }}
        />

        {/* Manifesto */}
        <ul className="flex flex-col gap-8" role="list">
          {hello.manifesto.map((item) => (
            <li key={item.index}>
              <span
                className="text-xs font-normal block mb-1"
                style={{ color: "rgba(244,233,225,0.4)" }}
              >
                {item.index}
              </span>
              <h4
                className="text-lg font-medium mb-2"
                style={{ color: "#F4E9E1" }}
              >
                {item.heading}
              </h4>
              <p
                className="text-sm font-normal leading-relaxed"
                style={{ color: "rgba(244,233,225,0.7)" }}
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
              className="tag border"
              style={{
                color: "#F4E9E1",
                borderColor: "rgba(244,233,225,0.3)",
              }}
            >
              {hello.openToWork}
            </span>
          )}
          <span
            className="tag border"
            style={{
              color: "#F4E9E1",
              borderColor: "rgba(244,233,225,0.3)",
            }}
          >
            {hello.location}
          </span>
        </div>
      </div>
    </section>
  );
}
