export interface ProcessStep {
  index: string;
  shortTitle: string;
  duration: string;
  title: string;
  items: string[];
  statementBefore: string;
  statementAccent: string;
  label: string;
  variant: "default" | "featured";
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    shortTitle: "Договор",
    duration: "1 – 2 дня",
    title: "Заключение договора",
    items: [
      "Знакомство с проектом",
      "Сбор требований",
      "Согласование сроков",
      "Заключение договора",
      "Выставление счёта",
    ],
    statementBefore: "Сначала договор —\nпотом ",
    statementAccent: "работа.",
    label: "(Договор)",
    variant: "default",
  },
  {
    index: "02",
    shortTitle: "Прототип",
    duration: "7+ дней",
    title: "Разработка прототипа",
    items: [
      "Анализ конкурентов",
      "Сбор референсов",
      "Структура страниц",
      "Тексты и контент",
      "Wireframes",
    ],
    statementBefore: "Структура и тексты\nдо того, как ",
    statementAccent: "появится дизайн.",
    label: "(Прототип)",
    variant: "default",
  },
  {
    index: "03",
    shortTitle: "Концепция",
    duration: "5+ дней",
    title: "Дизайн концепция",
    items: [
      "Мудборд",
      "Подбор цвета и шрифта",
      "Типографическая система",
      "Концепции по стилю",
      "UI Kit",
    ],
    statementBefore: "Цвет, шрифт, стиль —\nвсё согласовано до ",
    statementAccent: "верстки.",
    label: "(Концепция)",
    variant: "featured",
  },
  {
    index: "04",
    shortTitle: "Верстка",
    duration: "5+ дней",
    title: "Верстка макетов",
    items: [
      "Верстка на Тильде",
      "Микровзаимодействия",
      "Анимация",
      "SEO-разметка",
      "Кроссбраузерное тестирование",
    ],
    statementBefore: "Макет оживает\nв браузере — это ",
    statementAccent: "верстка.",
    label: "(Верстка)",
    variant: "default",
  },
  {
    index: "05",
    shortTitle: "Адаптивы",
    duration: "1 – 2 дня",
    title: "Адаптивы + настройка",
    items: [
      "Адаптив под планшет",
      "Адаптив под мобильный",
      "Посадка на домен",
      "Подключение аналитики",
      "Финальное тестирование",
    ],
    statementBefore: "Сайт работает\nна каждом экране — ",
    statementAccent: "без исключений.",
    label: "(Адаптивы)",
    variant: "default",
  },
];
