"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";

export default function ProjectNav() {
  const params = useParams();
  const activeSlug = params?.slug as string;

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <div className="navigation hidden lg:flex" data-testid="nav-sidebar">
        <nav aria-label="Навигация по проектам">
          <Link
            href="/"
            aria-label="На главную"
            data-testid="nav-home-link"
            className="nav-item nav-item-project"
          >
            <span className="nav-item-number">←</span>
            <span className="nav-item-text">Главная</span>
          </Link>

          {projects.map((project) => {
            const isActive = activeSlug === project.id;
            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                aria-current={isActive ? "page" : undefined}
                data-testid={`nav-item-${project.id}`}
                data-ai-action={`navigate-to-project-${project.id}`}
                className={`nav-item nav-item-project${isActive ? " active" : ""}`}
              >
                <span className="nav-item-number">{project.index}</span>
                <span className="nav-item-text">{project.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ── Mobile: кнопка «← Главная» ── */}
      <Link
        href="/"
        aria-label="На главную"
        data-testid="nav-back-home"
        data-ai-action="navigate-back-home"
        className="lg:hidden fixed top-4 left-4 z-50 h-10 px-4 rounded-2xl border border-near-black bg-off-white flex items-center gap-2 text-sm font-medium text-near-black hover:bg-near-black hover:text-off-white transition-colors"
      >
        <span aria-hidden="true">←</span>
        <span>Главная</span>
      </Link>
    </>
  );
}
