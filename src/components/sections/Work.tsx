import Link from "next/link";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section
      id="projects"
      aria-label="Проекты"
      data-testid="section-projects"
      data-ai-action="view-projects"
      className="section pt-2 pr-6 pb-6 flex flex-col gap-2"
    >
      {/* ── Hero card ── */}
      <div className="work-hero relative rounded-3xl bg-projects border border-cream/15 overflow-hidden">

        {/* Top-left: section index */}
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">02</p>
        </div>

        {/* Bottom: section title */}
        <div
          className="absolute bottom-0 left-0 p-6 text-brand-section text-cream"
          aria-hidden="true"
        >
          Проекты
        </div>
      </div>

      {/* ── Project rows ── */}
      <ul className="flex flex-col gap-2 list-none" aria-label="Список проектов">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              data-testid={`project-row-${project.id}`}
              data-ai-action="view-project"
              className="group bg-projects rounded-3xl border border-cream/10 px-6 py-4 flex items-center gap-4 cursor-pointer transition-all duration-200 hover:bg-cream hover:border-near-black hover:-translate-y-px"
            >
              <span className="text-xs font-mono text-cream/40 w-6 shrink-0 transition-colors duration-200 group-hover:text-near-black/40">{project.index}</span>
              <p className="font-medium text-cream text-sm flex-1 text-center transition-colors duration-200 group-hover:text-near-black">{project.title}</p>
              <p className="text-sm text-cream/60 flex-1 text-center transition-colors duration-200 group-hover:text-near-black/60">{project.subtitle}</p>
              <p className="text-sm text-cream/40 w-32 shrink-0 text-right transition-colors duration-200 group-hover:text-near-black/40">{project.client}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
