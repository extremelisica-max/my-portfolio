import { type ReactNode } from "react";

export interface NavLink {
  index: string;
  label: string;
  sectionId: string;
  colorClass: string;
  icon: ReactNode;
}

export const navLinks: NavLink[] = [
  {
    index: "01", label: "Обо мне", sectionId: "landing", colorClass: "whiteBackground",
    // Contact card — identity, portfolio owner
    icon: (
      <>
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <circle cx="9" cy="10" r="3" />
        <path d="M15 8h3M15 12h3M9 16h9" />
      </>
    ),
  },
  {
    index: "02", label: "Проекты", sectionId: "projects", colorClass: "blackBackground",
    // Browser / layout — digital product work
    icon: (
      <>
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 9h20M9 21V9" />
      </>
    ),
  },
  {
    index: "03", label: "Как я работаю", sectionId: "process", colorClass: "yellowBackground",
    // Compass — methodology, direction
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
  },
  {
    index: "04", label: "Навыки", sectionId: "skills", colorClass: "redBackground",
    // Zap — power, capability
    icon: (
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    ),
  },
  {
    index: "05", label: "Карьера", sectionId: "career", colorClass: "orangeBackground",
    // Trending up — career growth trajectory
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  },
  {
    index: "06", label: "Записаться", sectionId: "book", colorClass: "greenBackground",
    // Send — action, CTA
    icon: (
      <>
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9l20-7z" />
      </>
    ),
  },
];
