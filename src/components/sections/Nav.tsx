"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/nav";

interface Props {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Nav({ activeSection, onNavigate }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasMatch = navLinks.some((l) => l.sectionId === activeSection);
  const effectiveActive = hasMatch ? activeSection : navLinks[0].sectionId;

  return (
    <>
      {/* ── Avatar — top-center of viewport ── */}
      <div
        className="hidden lg:flex fixed top-0 left-0 w-nav z-50 justify-center pt-4"
        aria-hidden="true"
      >
        <div className="sidebar-logo-circle">АК</div>
      </div>

      {/* ── Desktop sidebar ── */}
      <div
        className="navigation hidden lg:flex"
        data-testid="nav-sidebar"
      >
        <nav aria-label="Основная навигация">
          {navLinks.map((link) => {
            const isActive = effectiveActive === link.sectionId;
            return (
              <motion.button
                key={link.sectionId}
                layout
                onClick={() => onNavigate(link.sectionId)}
                aria-current={isActive ? "page" : undefined}
                data-testid={`nav-item-${link.sectionId}`}
                data-ai-action={`navigate-to-${link.sectionId}`}
                className={`nav-item ${link.colorClass}${isActive ? " active" : ""}`}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <span className="nav-item-number">{link.index}</span>
                <span className="nav-item-text">{link.label}</span>
              </motion.button>
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
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-2xl border border-black bg-off-white flex flex-col items-center justify-center gap-1.5"
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
          className="lg:hidden fixed inset-0 z-50 bg-off-white flex flex-col items-start justify-center px-8 gap-4"
        >
          <button
            aria-label="Закрыть меню"
            data-testid="nav-close"
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-near-black text-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => {
                onNavigate(link.sectionId);
                setMobileOpen(false);
              }}
              aria-current={link.sectionId === effectiveActive ? "page" : undefined}
              data-testid={`nav-mobile-item-${link.sectionId}`}
              data-ai-action={`navigate-mobile-${link.sectionId}`}
              className="text-3xl font-normal text-near-black hover:opacity-60 transition-opacity py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
