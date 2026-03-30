export interface NavLink {
  index: string;
  label: string;
  sectionId: string;
  colorClass: string;
}

export const navLinks: NavLink[] = [
  { index: "01", label: "Обо мне",       sectionId: "landing",  colorClass: "whiteBackground"  },
  { index: "02", label: "Проекты",       sectionId: "projects", colorClass: "blackBackground"  },
  { index: "03", label: "Как я работаю", sectionId: "process",  colorClass: "yellowBackground" },
  { index: "04", label: "Услуги и цены", sectionId: "services", colorClass: "redBackground"    },
  { index: "05", label: "Карьера",       sectionId: "career",   colorClass: "orangeBackground" },
  { index: "06", label: "Записаться",    sectionId: "book",     colorClass: "greenBackground"  },
];
