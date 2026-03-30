# Спецификация: 05 Experience (Опыт)

> Файл: `src/components/sections/Experience.tsx`

---

## Назначение
Хронология 4 мест работы. Акцент на достижениях, не на обязанностях.

## Данные
```typescript
import { jobs } from "@/data/experience";
import { experience } from "@/data/content";
```

---

## Визуальная спецификация

### Layout
```
[section.section — bg: #20DB70, color: #0E0E0E]
  ├── [верх лево] — section label + indicator
  │
  ├── [лево — 30%]
  │     ├── H2: "Опыт"  ← .text-hero, color: #0E0E0E
  │     └── total exp: "5 лет 3 месяца"  ← text-sm, #0E0E0E/60
  │
  └── [право — 65%] — вертикальный стек job-карточек
        ├── Job 01 — Gmini
        ├── Job 02 — OnePix
        ├── Job 03 — Control Systems
        └── Job 04 — Фриланс
```

### JobCard

```
[job-card — border-bottom: 1px solid #0E0E0E/15]
  ├── [header row — flex between]
  │     ├── [лево]
  │     │     ├── index        ← text-xs, #0E0E0E/40
  │     │     ├── company      ← text-xl font-medium
  │     │     └── role         ← text-sm, #0E0E0E/70, mt-0.5
  │     │
  │     └── [право]
  │           ├── period       ← text-xs, #0E0E0E/50, text-right
  │           └── duration     ← text-xs, #0E0E0E/40, text-right
  │
  └── [accordion body — collapsed by default]
        ├── description   ← text-sm leading-relaxed, mt-3
        ├── achievements list  ← mt-3, gap-1
        │     └── "— achievement"  ← text-sm, #0E0E0E/80
        └── tools row     ← mt-3, gap-2
```

### Accordion поведение
- По умолчанию: job 01 (Gmini) раскрыт, остальные — закрыты
- Toggle по клику на header
- Анимация: `max-height` transition 0.3s ease-in-out
- Индикатор: "+" / "−" справа от duration

### Размеры и отступы

| Элемент            | Свойство       | Tailwind / значение       |
|--------------------|----------------|---------------------------|
| Section wrapper    | padding-left   | `pl-[226px]`              |
| Inner content      | padding        | `px-16 py-12`             |
| Jobs list          | gap            | `gap-0` (dividers)        |
| JobCard header     | padding        | `py-6`                    |
| JobCard body       | padding-bottom | `pb-6`                    |
| Achievement item   | padding-left   | `pl-3`                    |
| Tool tag           | padding        | `px-2 py-0.5`             |

### Типографика

| Элемент       | Класс                    | Цвет          |
|---------------|--------------------------|---------------|
| "Опыт" H2     | `.text-hero font-normal` | `#0E0E0E`     |
| Total exp     | `text-sm`                | `#0E0E0E/60`  |
| Job index     | `text-xs font-normal`    | `#0E0E0E/40`  |
| Company       | `text-xl font-medium`    | `#0E0E0E`     |
| Role          | `text-sm font-normal`    | `#0E0E0E/70`  |
| Period        | `text-xs`                | `#0E0E0E/50`  |
| Achievement   | `text-sm leading-snug`   | `#0E0E0E/80`  |

### Tool tag (внутри карточки)
```
text-xs border: 1px solid #0E0E0E/20
border-radius: rounded-full
padding: px-2 py-0.5
color: #0E0E0E/60
```

### Адаптивность

| Брейкпоинт      | Поведение                                      |
|-----------------|------------------------------------------------|
| `base` (<768px) | Один столбец: заголовок → список сверху вниз   |
| `lg` (1024px+)  | Два блока: левый (title) + правый (jobs)       |

---

## Доступность
- `role="region"` `aria-label="Опыт работы"`
- JobCard header: `role="button"` `aria-expanded={isOpen}` `aria-controls="job-{index}-body"`
- Body: `id="job-{index}-body"` `aria-hidden={!isOpen}`
- `data-testid="section-experience"`
- `data-testid="job-card-{index}"`
- `data-ai-action="toggle-job"`

## Зависимости
- `"use client"` — нужен для accordion state
