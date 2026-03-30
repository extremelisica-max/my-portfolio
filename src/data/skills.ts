export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Исследования",
    items: [
      { name: "Глубинные интервью",     context: "15+ интервью с подрядчиками и заказчиками в Gmini" },
      { name: "CJM & User Personas",    context: "3 персоны для строительной платформы СОД" },
      { name: "Юзабилити-тестирование", context: "коридорное тестирование, AB-тесты новых фичей" },
      { name: "Конкурентный анализ",    context: "стартовая точка для редизайна во всех проектах" },
    ],
  },
  {
    category: "Проектирование",
    items: [
      { name: "Информационная архитектура", context: "каталоги, навигация, системы поиска и фильтрации" },
      { name: "Прототипирование",           context: "интерактивные прототипы в Figma и Principle" },
      { name: "Дизайн-системы",             context: "создание с нуля: цвета, типографика, библиотека компонентов" },
      { name: "Дашборды",                   context: "графики, тепловые карты, таблицы, виджеты для нефтегазовой CRM" },
    ],
  },
  {
    category: "Инструменты",
    items: [
      { name: "Figma",           context: "основной инструмент во всех проектах" },
      { name: "FigJam / Miro",   context: "воркшопы, CJM, брейнштормы с командой" },
      { name: "Adobe Photoshop", context: "графика, иллюстрации, иконки" },
      { name: "Principle",       context: "микроанимации и интерактивные прототипы" },
      { name: "Tilda",           context: "лендинги и промо-страницы" },
    ],
  },
];
