"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";

export default function ProjectNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
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

      {/* ── Mobile burger ── */}
      <button
        aria-label="Открыть меню"
        aria-expanded={mobileOpen}
        data-testid="nav-burger"
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-2xl border border-near-black bg-off-white flex flex-col items-center justify-center gap-1.5"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} aria-hidden="true" className="w-5 h-px bg-near-black block" />
        ))}
      </button>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Меню навигации"
          className="lg:hidden fixed inset-0 z-50 bg-off-white flex flex-col items-start justify-center px-8 gap-4 overflow-y-auto"
        >
          <button
            aria-label="Закрыть меню"
            data-testid="nav-close"
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-near-black text-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            ✕
          </button>

          {/* Home link */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-base font-mono text-near-black/50 hover:text-near-black transition-colors py-1"
          >
            ← На главную
          </Link>

          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              onClick={() => setMobileOpen(false)}
              aria-current={project.id === activeSlug ? "page" : undefined}
              data-testid={`nav-mobile-item-${project.id}`}
              data-ai-action={`navigate-mobile-${project.id}`}
              className={`text-2xl font-normal hover:opacity-60 transition-opacity py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
                project.id === activeSlug ? "text-near-black font-semibold" : "text-near-black"
              }`}
            >
              <span className="font-mono text-sm opacity-50 mr-2">{project.index}</span>
              {project.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
