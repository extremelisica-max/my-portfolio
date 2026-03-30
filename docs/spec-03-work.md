# Спецификация: 03 Work (Работы)

> Файл: `src/components/sections/Work.tsx`

---

## Назначение
Галерея из 4 кейсов. Каждый кейс — отдельная карточка с заглушкой вместо скрина.

## Данные
```typescript
import { projects } from "@/data/projects";
import { work } from "@/data/content";
```

---

## Визуальная спецификация

### Layout
```
[section.section — bg: #0E0E0E, color: #F4E9E1]
  ├── [верх лево] — section label + indicator
  ├── [лево — 30%] — H2: "Работы"  ← .text-hero, вертикально по центру
  │
  └── [право — 65%] — горизонтальный ряд карточек (overflow-x: auto, скрытый scrollbar)
        ├── ProjectCard 01 — СОД
        ├── ProjectCard 02 — Effaliya
        ├── ProjectCard 03 — CRM
        └── ProjectCard 04 — Vnish
```

### ProjectCard

```
[card — ширина: 320px, высота: 440px, flex-shrink-0]
  ├── [верх — 260px] ЗАГЛУШКА
  │     └── div bg: accentColor, opacity-20
  │           + centered text: "→ Скрин появится позже"  ← text-xs, #F4E9E1/40
  │
  └── [низ — 180px] INFO BLOCK, padding: p-6
        ├── index      ← text-xs, #F4E9E1/40
        ├── title      ← text-2xl font-normal mt-1
        ├── subtitle   ← text-sm font-normal mt-1, opacity-60
        ├── [tags row] ← mt-4, gap-2
        └── outcome    ← text-xs mt-4, #F4E9E1/60, border-top pt-3
```

### Размеры и отступы

| Элемент              | Свойство       | Tailwind / значение            |
|----------------------|----------------|--------------------------------|
| Section wrapper      | padding-left   | `pl-[226px]`                   |
| Inner content        | padding        | `px-16 py-12`                  |
| Cards row            | gap            | `gap-6`                        |
| Cards row            | overflow       | `overflow-x-auto`              |
| Cards row            | padding-bottom | `pb-4` (для scrollbar отступа) |
| Card                 | width          | `w-80` (320px)                 |
| Card                 | height         | `h-[440px]`                    |
| Card                 | border-radius  | `rounded-lg` (8px)             |
| Card info block      | padding        | `p-6`                          |
| Tags                 | gap            | `gap-2`                        |

### Типографика

| Элемент        | Класс                        | Цвет          |
|----------------|------------------------------|---------------|
| "Работы" H2    | `.text-hero font-normal`     | `#F4E9E1`     |
| Card index     | `text-xs font-normal`        | `#F4E9E1/40`  |
| Card title     | `text-2xl font-normal`       | `#F4E9E1`     |
| Card subtitle  | `text-sm font-normal`        | `#F4E9E1/60`  |
| Outcome        | `text-xs leading-snug`       | `#F4E9E1/60`  |

### Tag (категория)
```
text-[10px] font-normal uppercase tracking-wider
border: 1px solid #F4E9E1/20
border-radius: rounded-full
padding: px-2 py-0.5
color: #F4E9E1/60
```

### Placeholder блок
```
background: accentColor из project (opacity 15%)
display: flex, align-items: center, justify-content: center
text: "→ Behance" — text-xs, #F4E9E1/30
```

### Hover состояние карточки
```
transition: transform 0.3s ease-in-out
hover: scale-[1.02], cursor: pointer
```

### Адаптивность

| Брейкпоинт      | Поведение                                        |
|-----------------|--------------------------------------------------|
| `base` (<768px) | Вертикальный стек карточек вместо горизонтального|
| `lg` (1024px+)  | Горизонтальный ряд с overflow-x                  |

---

## Доступность
- `role="region"` `aria-label="Проекты"`
- Каждая карточка: `role="article"` `aria-label={project.title}`
- `data-testid="section-work"`
- `data-testid="project-card-{project.id}"`
- `data-ai-action="view-project"`

## Зависимости
- нет внешних ui-компонентов
