export interface ProcessStep {
  index: string;
  shortTitle: string;
  duration: string;
  title: string;
  items: string[];
  statementBefore: string;
  statementAccent: string;
  label: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    shortTitle: "Договор",
    duration: "1 – 2 дня",
    title: "Заключение договора",
    items: ["Бриф", "Согласование условий", "Заключение договора", "Выставление счета"],
    statementBefore: "Сначала договор —\nпотом ",
    statementAccent: "работа.",
    label: "(Договор)",
  },
  {
    index: "02",
    shortTitle: "Прототип",
    duration: "7+ дней",
    title: "Разработка прототипа",
    items: ["Бриф", "Анализ конкурентов", "Структура и тексты", "Прототипирование"],
    statementBefore: "Структура и тексты\nдо того, как ",
    statementAccent: "появится дизайн.",
    label: "(Прототип)",
  },
  {
    index: "03",
    shortTitle: "Концепция",
    duration: "5+ дней",
    title: "Дизайн концепция",
    items: ["Подбор цвета, шрифта", "Концепции по стилю", "Согласование вариантов дизайна"],
    statementBefore: "Цвет, шрифт, стиль —\nвсё согласовано до ",
    statementAccent: "верстки.",
    label: "(Концепция)",
  },
  {
    index: "04",
    shortTitle: "Верстка",
    duration: "5+ дней",
    title: "Верстка макетов",
    items: ["Верстка на Тильде", "Адаптивы", "Анимация"],
    statementBefore: "Макет оживает\nв браузере — это ",
    statementAccent: "верстка.",
    label: "(Верстка)",
  },
  {
    index: "05",
    shortTitle: "Адаптивы",
    duration: "1 – 2 дня",
    title: "Адаптивы + настройка",
    items: ["Создание адаптивов", "Посадка на домен", "Запуск сайта"],
    statementBefore: "Сайт работает\nна каждом экране — ",
    statementAccent: "без исключений.",
    label: "(Адаптивы)",
  },
];
