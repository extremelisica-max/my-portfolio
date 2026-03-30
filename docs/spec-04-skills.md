# Спецификация: 04 Skills (Навыки)

> Файл: `src/components/sections/Skills.tsx`

---

## Назначение
Три группы навыков без шкал и процентов. Каждый навык — с реальным контекстом применения.

## Данные
```typescript
import { skillGroups } from "@/data/skills";
import { skills } from "@/data/content";
```

---

## Визуальная спецификация

### Layout
```
[section.section — bg: #FF5C00, color: #F4E9E1]
  ├── [верх лево] — section label + indicator
  │
  ├── [лево — 35%]
  │     ├── H2: "Навыки"  ← .text-hero
  │     └── note (подпись)  ← text-sm, #F4E9E1/60, mt-auto pb-12
  │
  └── [право — 60%] — 3 колонки навыков
        ├── Колонка: Исследования
        ├── Колонка: Проектирование
        └── Колонка: Инструменты
```

### SkillColumn

```
[column]
  ├── category heading  ← text-xs uppercase tracking-widest, #F4E9E1/60, mb-6
  └── [список item-ов]
        ├── name        ← text-lg font-medium
        └── context     ← text-xs leading-relaxed, #F4E9E1/60, mt-1
            [divider между items]
```

### Размеры и отступы

| Элемент            | Свойство      | Tailwind / значение       |
|--------------------|---------------|---------------------------|
| Section wrapper    | padding-left  | `pl-[226px]`              |
| Inner content      | padding       | `px-16 py-12`             |
| Columns grid       | gap           | `gap-12`                  |
| Column items       | gap           | `gap-6`                   |
| Item divider       | margin        | `my-4`                    |
| Category heading   | margin-bottom | `mb-6`                    |

### Типографика

| Элемент          | Класс                               | Цвет          |
|------------------|-------------------------------------|---------------|
| "Навыки" H2      | `.text-hero font-normal`            | `#F4E9E1`     |
| Note             | `text-sm leading-relaxed`           | `#F4E9E1/60`  |
| Category label   | `text-xs uppercase tracking-widest` | `#F4E9E1/60`  |
| Skill name       | `text-lg font-medium`               | `#F4E9E1`     |
| Skill context    | `text-xs leading-relaxed`           | `#F4E9E1/60`  |

### Item divider
```css
border-top: 1px solid rgba(244,233,225,0.15);
```

### Адаптивность

| Брейкпоинт      | Поведение                                 |
|-----------------|-------------------------------------------|
| `base` (<768px) | Один столбец: заголовок → 3 группы стеком |
| `lg` (1024px+)  | Два блока: левый (title) + правый (3 col) |

---

## Доступность
- `role="region"` `aria-label="Навыки"`
- `data-testid="section-skills"`
- Контраст #F4E9E1 на #FF5C00: проверить, при необходимости #0E0E0E

## Зависимости
- нет ui-компонентов
