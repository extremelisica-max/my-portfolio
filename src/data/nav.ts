export interface NavLink {
  index: string;
  label: string;
  sectionId: string;
  colorClass: string;
  icon: string; // SVG path d=
}

export const navLinks: NavLink[] = [
  {
    index: "01", label: "Обо мне", sectionId: "landing", colorClass: "whiteBackground",
    icon: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z",
  },
  {
    index: "02", label: "Проекты", sectionId: "projects", colorClass: "blackBackground",
    icon: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z",
  },
  {
    index: "03", label: "Как я работаю", sectionId: "process", colorClass: "yellowBackground",
    icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A8.01 8.01 0 0 1 4.07 11H4a1 1 0 0 1 0-2h.07A8.01 8.01 0 0 1 11 4.07V4a1 1 0 0 1 2 0v.07A8.01 8.01 0 0 1 19.93 11H20a1 1 0 0 1 0 2h-.07A8.01 8.01 0 0 1 13 16.93zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  },
  {
    index: "04", label: "Навыки", sectionId: "skills", colorClass: "redBackground",
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  },
  {
    index: "05", label: "Карьера", sectionId: "career", colorClass: "orangeBackground",
    icon: "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zm8 16H4V8h16v12zM8 13h8v2H8v-2zm0-4h8v2H8V9z",
  },
  {
    index: "06", label: "Записаться", sectionId: "book", colorClass: "greenBackground",
    icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7z",
  },
];
