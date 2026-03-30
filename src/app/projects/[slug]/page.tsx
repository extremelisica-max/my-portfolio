import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  return (
    <article
      aria-label={project.title}
      data-testid={`project-page-${project.id}`}
      className="flex flex-col gap-6 py-6"
    >
      {/* ── Hero ── */}
      <div className="work-hero relative rounded-3xl bg-projects border border-cream/15 overflow-hidden mx-6">
        <div className="absolute top-0 left-0 p-6 z-10">
          <p className="text-xs font-mono text-cream/60">{project.index}</p>
        </div>
        <h1 className="absolute bottom-0 left-0 p-6 text-brand-section text-cream">
          {project.title}
        </h1>
      </div>

      {/* ── Задача + Результаты ── */}
      <div className="px-6 grid grid-cols-2 gap-16 border-t border-near-black/10 pt-8">

        {/* Задача */}
        <div className="flex flex-col gap-4">
          <h2 className="text-section-heading font-bold text-near-black">Задача</h2>
          <div className="flex flex-col gap-3">
            {project.challenges.map((item, i) => (
              <p key={i} className="text-base text-near-black/60 leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Результаты */}
        <div className="flex flex-col gap-4">
          <h2 className="text-section-heading font-bold text-near-black">Результаты</h2>
          <div className="flex flex-col gap-3">
            {project.conclusions.map((item, i) => (
              <p key={i} className="text-base text-near-black/60 leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>

      </div>

      {/* ── Экраны ── */}
      {project.screens && project.screens.length > 0 ? (
        <div className="flex flex-col px-6">
          {project.screens.map((screen, i) => (
            <div key={i} className="flex flex-col gap-6 border-t border-near-black/10 pt-8 pb-12">
              {/* Проблема / Решение */}
              <div className="grid grid-cols-2 gap-16">
                <div className="flex flex-col gap-4">
                  <h3 className="text-section-heading font-bold text-near-black">Проблема</h3>
                  <p className="text-base text-near-black/60 leading-snug">{screen.problem}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-section-heading font-bold text-near-black">Решение</h3>
                  <p className="text-base text-near-black/60 leading-snug">{screen.solution}</p>
                </div>
              </div>
              {/* Изображение */}
              <div className="rounded-2xl overflow-hidden border border-near-black/8">
                <Image
                  src={screen.src}
                  alt={screen.problem}
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="mx-6 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${project.accentColor}10`, minHeight: "480px" }}
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
