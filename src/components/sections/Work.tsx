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
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">02</p>
        </div>
        <div className="absolute bottom-0 left-0 p-6 text-brand-section text-cream" aria-hidden="true">
          Проекты
        </div>
      </div>

      {/* ── Project cards ── */}
      <ul className="flex flex-col gap-2 list-none" aria-label="Список проектов">
        {projects.map((project) => (
          <li key={project.id}>
            <div
              data-testid={`project-card-${project.id}`}
              className="group relative bg-white rounded-3xl border border-near-black/10 p-6 flex flex-col gap-4 transition-all duration-200 hover:border-near-black/25 hover:shadow-sm"
            >
              {/* ── Stretched link overlay ── */}
              <Link
                href={`/projects/${project.id}`}
                aria-label={project.title}
                tabIndex={-1}
                className="absolute inset-0 rounded-3xl z-0"
              />

              {/* ── Top row: meta ── */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-near-black/30 mt-0.5 shrink-0">{project.index}</span>
                  <div>
                    <p className="font-semibold text-near-black leading-tight">{project.title}</p>
                    <p className="text-sm text-near-black/50 mt-0.5">{project.subtitle}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-near-black/40">{project.client}</p>
                  <p className="text-xs text-near-black/30 mt-0.5">{project.period}</p>
                </div>
              </div>

              {/* ── Description ── */}
              <p className="text-sm text-near-black/60 leading-relaxed">{project.description}</p>

              {/* ── Footer: tools + team + actions ── */}
              <div className="flex flex-wrap items-end justify-between gap-4 pt-2 border-t border-near-black/10">

                {/* Tools (max 3) */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="tag bg-near-black/5 text-near-black/50 text-xs">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Team + actions */}
                <div className="flex items-center gap-3 ml-auto">

                  {/* Team avatars */}
                  {project.team && project.team.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {project.team.map((member) => (
                          <div
                            key={member.name}
                            title={`${member.name} — ${member.role}`}
                            aria-label={`${member.name}, ${member.role}`}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ring-2 ring-white shrink-0"
                            style={{ backgroundColor: member.color, color: member.textColor }}
                          >
                            {member.initials}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Live URL */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ai-action="view-live-site"
                      className="relative z-10 tag bg-near-black text-white hover:bg-accent transition-colors duration-200 no-underline"
                    >
                      Сайт ↗
                    </a>
                  )}

                  {/* Case study link */}
                  <Link
                    href={`/projects/${project.id}`}
                    data-testid={`project-link-${project.id}`}
                    data-ai-action="view-project"
                    className="relative z-10 tag border border-near-black/20 text-near-black/60 hover:bg-near-black hover:text-white hover:border-near-black group-hover:bg-near-black group-hover:text-white group-hover:border-near-black transition-colors duration-200 no-underline"
                  >
                    Кейс →
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
