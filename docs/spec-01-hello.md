# Спецификация: 01 Hello

> Файл: `src/components/sections/Hello.tsx`

---

## Назначение
Знакомство. Три тезиса — кто такой, что даёт, чем отличается. Bio и статус.

## Данные
```typescript
import { hello } from "@/data/content";
import { owner } from "@/data/owner";
```

---

## Визуальная спецификация

### Layout (два столбца)
```
[section.section — bg: #5900CC, color: #F4E9E1]
  ├── [лево, верх] — section label "(Hello)" + indicator "● 01"
  │
  ├── [лево, центр — 45% ширины]
  │     └── H2: "Hello"  ← .text-hero, цвет: #F4E9E1
  │
  └── [право, центр — 50% ширины]
        ├── Bio-heading: "5 лет в B2B-интерфейсах"
        ├── Bio-text
        ├── [divider: 1px solid #F4E9E1/20]
        └── Manifesto list (3 пункта)
              ├── index "01"
              ├── heading
              └── body text
```

### Размеры и отступы

| Элемент             | Свойство       | Tailwind / значение              |
|---------------------|----------------|----------------------------------|
| Section wrapper     | padding-left   | `pl-[226px]`                     |
| Inner content       | padding        | `px-16 py-12`                    |
| Left col            | width          | `w-[45%]`                        |
| Right col           | width          | `w-[50%] ml-auto`                |
| Manifesto item gap  | gap            | `gap-8`                          |
| Index number        | margin-bottom  | `mb-1`                           |
| Heading             | margin-bottom  | `mb-2`                           |
| Divider             | margin         | `my-8`                           |

### Типографика

| Элемент          | Класс                                    | Цвет             |
|------------------|------------------------------------------|------------------|
| "Hello" H2       | `.text-hero font-normal`                 | `#F4E9E1`        |
| Bio heading      | `.text-section-heading`                  | `#F4E9E1`        |
| Bio text         | `text-base font-normal leading-relaxed`  | `#F4E9E1/80`     |
| Manifesto index  | `text-xs font-normal`                    | `#F4E9E1/40`     |
| Manifesto heading| `text-lg font-medium`                    | `#F4E9E1`        |
| Manifesto body   | `text-sm font-normal leading-relaxed`    | `#F4E9E1/70`     |
| Section label    | `text-xs uppercase tracking-widest`      | `#F4E9E1/40`     |
| Status badge     | `text-xs` + border `#F4E9E1/30`          | `#F4E9E1`        |

### Divider
```css
border-top: 1px solid rgba(244,233,225,0.2);
```

### Адаптивность

| Брейкпоинт      | Поведение                                    |
|-----------------|----------------------------------------------|
| `base` (<768px) | Один столбец, Hero → Bio → Manifesto сверху  |
| `lg` (1024px+)  | Два столбца                                  |

---

## Доступность
- `role="region"` `aria-label="О себе"`
- `data-testid="section-hello"`
- `data-ai-action="view-about"`
- Контраст #F4E9E1 на #5900CC: ≥ 4.5:1 ✓

## Зависимости
- нет ui-компонентов
