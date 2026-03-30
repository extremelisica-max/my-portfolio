# Спецификация: 00 Landing

> Файл: `src/components/sections/Landing.tsx`

---

## Назначение
Первый экран. Имя как бренд. Устанавливает тон — крупная типографика, минимализм.

## Данные
```typescript
import { owner } from "@/data/owner";
import { landing } from "@/data/content";
```

---

## Визуальная спецификация

### Layout
```
[section.section — bg: #F4E9E1, 100vw × 100vh]
  ├── [верхний левый] — section label "(Портфолио)"
  ├── [центр вертикально] — блок имени
  │     ├── H1: "Карсунцев"           ← .text-hero, color: #0E0E0E
  │     └── p:  "Product Designer"   ← text-[clamp(24px,3vw,48px)], font-weight:300
  └── [нижний правый] — tagline + статус
        ├── "B2B SaaS · CRM · Строительные платформы"  ← text-sm, opacity-60
        └── badge "Открыт к предложениям"              ← см. Badge ниже
```

### Размеры и отступы

| Элемент            | Свойство       | Tailwind / значение             |
|--------------------|----------------|---------------------------------|
| Section wrapper    | padding-left   | `pl-[226px]` (nav offset)       |
| Section wrapper    | padding        | `px-16 py-12` (внутренний)      |
| Имя (H1)           | font-size      | `.text-hero`                    |
| Role               | margin-top     | `mt-4`                          |
| Tagline            | position       | `absolute bottom-12 right-16`   |
| Section label      | position       | `absolute top-10 right-16`      |

### Типографика

| Элемент       | Класс                                          | Цвет       |
|---------------|------------------------------------------------|------------|
| H1 имя        | `.text-hero font-normal tracking-tight`        | `#0E0E0E`  |
| Role          | `text-[clamp(24px,3vw,48px)] font-light`       | `#0E0E0E`  |
| Domain tagline| `text-sm font-normal`                          | `#0E0E0E/60`|
| Section label | `text-xs uppercase tracking-widest`            | `#0E0E0E/40`|

### Badge "Открыт к предложениям"
```
bg: transparent
border: 1px solid #0E0E0E/30
border-radius: 999px (rounded-full)
padding: px-3 py-1
text: text-xs font-medium
```

### Адаптивность

| Брейкпоинт      | Поведение                                      |
|-----------------|------------------------------------------------|
| `base` (<768px) | pl-0, padding-top для навбара (бургер)         |
| `lg` (1024px+)  | pl-[226px], полный вид                         |

---

## Доступность
- `<h1>` — единственный на странице
- `aria-label="Главная страница портфолио Александра Карсунцева"`
- `data-testid="section-landing"`
- `data-ai-action="view-portfolio-home"`

## Зависимости
- нет ui-компонентов
