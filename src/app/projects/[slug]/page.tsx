import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, type TeamMember } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

function groupByDepartment(team: TeamMember[]): Record<string, TeamMember[]> {
  return team.reduce<Record<string, TeamMember[]>>((acc, member) => {
    if (!acc[member.department]) acc[member.department] = [];
    acc[member.department].push(member);
    return acc;
  }, {});
}

const DEPT_MAX_VISIBLE: Record<string, number> = {
  "Дизайн": 1,
};
const DEFAULT_MAX_VISIBLE = 3;

function TeamGroup({ label, members }: { label: string; members: TeamMember[] }) {
  const maxVisible = DEPT_MAX_VISIBLE[label] ?? DEFAULT_MAX_VISIBLE;
  const visible = members.slice(0, maxVisible);
  const overflow = members.length - maxVisible;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex -space-x-2">
        {visible.map((m) => (
          <div
            key={m.name}
            title={`${m.name} — ${m.role}`}
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ring-2 ring-white shrink-0"
            style={{ backgroundColor: m.color, color: m.textColor }}
          >
            {m.initials}
          </div>
        ))}
        {overflow > 0 && (
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ring-2 ring-white shrink-0 bg-near-black/8 text-near-black/50">
            +{overflow}
          </div>
        )}
      </div>
      <div>
        <p className="text-xs font-semibold text-near-black leading-tight">{label}</p>
        <p className="text-xs text-near-black/40 leading-tight">{members.length} {members.length === 1 ? "сотрудник" : members.length < 5 ? "сотрудника" : "сотрудников"}</p>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  const teamGroups = project.team ? groupByDepartment(project.team) : {};

  return (
    <article
      aria-label={project.title}
      data-testid={`project-page-${project.id}`}
      className="flex flex-col gap-6"
    >
      {/* ── Hero ── */}
      <div className="work-hero relative rounded-3xl bg-projects border border-cream/15 overflow-hidden">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">{project.index}</p>
        </div>
        <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-1">
          <h1 className="text-brand-section text-cream normal-case">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-sm text-cream/50 leading-snug">{project.subtitle}</p>
          )}
        </div>
      </div>

      {/* ── Meta: описание + команда + инструменты ── */}
      <div className="bg-white rounded-3xl border border-near-black/10 p-6 flex flex-col gap-6">

        {/* Description */}
        {project.description && (
          <p className="text-base text-near-black/60 leading-relaxed">{project.description}</p>
        )}

        <div className="flex flex-wrap items-end justify-between gap-6 pt-4 border-t border-near-black/10">

          {/* Team groups */}
          {Object.keys(teamGroups).length > 0 && (
            <div className="flex items-end gap-8">
              {Object.entries(teamGroups).map(([dept, members]) => (
                <TeamGroup key={dept} label={dept} members={members} />
              ))}
            </div>
          )}

          {/* Tools + site */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="tag bg-near-black/5 text-near-black/50">
                  {tool}
                </span>
              ))}
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ai-action="view-live-site"
                className="tag bg-near-black text-white hover:bg-accent transition-colors duration-200 no-underline"
              >
                Сайт ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Задача + Результаты ── */}
      <div className="bg-white rounded-3xl border border-near-black/10 p-6 flex flex-col gap-8">

        {/* Задача */}
        <div className="flex flex-col gap-4">
          <h2 className="heading-2 text-near-black">Задача</h2>
          <div className="flex flex-col gap-3">
            {project.challenges.map((item, i) => (
              <p key={i} className="text-base text-near-black/60 leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Результаты */}
        <div className="flex flex-col gap-6 border-t border-near-black/10 pt-6">
          <h2 className="heading-2 text-near-black">Результаты</h2>
          {project.metrics ? (
            <div className="grid grid-cols-3 gap-6">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p className="text-display font-semibold text-near-black leading-none">{m.value}</p>
                  <p className="text-sm text-near-black/50 leading-snug whitespace-pre-line">{m.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {project.conclusions.map((item, i) => (
                <p key={i} className="text-base text-near-black/60 leading-snug">
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* ── Экраны ── */}
      {project.screens && project.screens.length > 0 ? (
        <div className="flex flex-col gap-6">
          {project.screens.map((screen, i) => (
            <div key={i} className="bg-white rounded-3xl border border-near-black/10 p-6 flex flex-col gap-6">

              {/* Заголовок + номер */}
              <div className="flex items-center justify-between gap-4">
                <h2 className="heading-2 text-near-black">{screen.title}</h2>
                <span className="text-xs font-mono text-near-black/40 border border-near-black/15 rounded-full px-3 py-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Проблема */}
              <div className="flex flex-col gap-2">
                <h3 className="heading-3 text-near-black">Проблема</h3>
                <p className="text-base text-near-black/60 leading-snug">{screen.problem}</p>
              </div>

              {/* Решение */}
              <div className="flex flex-col gap-2">
                <h3 className="heading-3 text-near-black">Решение</h3>
                <p className="text-base text-near-black/60 leading-snug">{screen.solution}</p>
              </div>

              {/* Результат */}
              <div className="flex flex-col gap-2">
                <h3 className="heading-3 text-near-black">Результат</h3>
                <p className="text-base text-near-black/60 leading-snug">{screen.result}</p>
              </div>

              {/* Изображение */}
              <div className="w-full rounded-2xl bg-near-black/5 flex items-center justify-center" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div className="w-4/5 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={screen.src}
                    alt={screen.problem}
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div
          className="rounded-2xl flex items-center justify-center min-h-hero"
          style={{ backgroundColor: `${project.accentColor}10` }}
          aria-hidden="true"
        >
          <span className="font-mono text-xs" style={{ color: `${project.accentColor}60` }}>
            screens placeholder
          </span>
        </div>
      )}

    </article>
  );
}
