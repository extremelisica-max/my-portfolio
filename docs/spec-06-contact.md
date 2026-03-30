# Спецификация: 06 Contact (Контакт)

> Файл: `src/components/sections/Contact.tsx`

---

## Назначение
Финальный CTA. Три канала связи. Минимальный барьер к действию.

## Данные
```typescript
import { contact } from "@/data/content";
import { owner } from "@/data/owner";
```

---

## Визуальная спецификация

### Layout
```
[section.section — bg: #FF3D00, color: #F4E9E1]
  ├── [верх лево] — section label + indicator
  │
  ├── [лево — 40%]
  │     ├── H2: "Контакт"   ← .text-hero
  │     ├── headline: "Обсудим проект."  ← .text-display, mt-8
  │     └── subheadline     ← text-sm, #F4E9E1/70, mt-4
  │
  └── [право — 55%] — три канала связи (вертикальный стек)
        ├── ChannelLink 01 — Почта
        ├── ChannelLink 02 — WhatsApp
        └── ChannelLink 03 — Behance
```

### ChannelLink

```
[a — href, display: flex, justify-content: space-between, align-items: center]
  ├── [лево]
  │     ├── label    ← text-xs uppercase tracking-widest, #F4E9E1/50
  │     └── cta      ← text-xl font-normal mt-1
  │
  └── [право] — стрелка "→"  ← text-2xl, transition: translateX on hover

[border-bottom: 1px solid #F4E9E1/20]
[padding: py-6]
```

### Hover состояние ChannelLink
```
transition: all 0.3s ease-in-out
hover: background rgba(244,233,225,0.05)
hover arrow: translateX(8px)
```

### Footer (внутри секции, абсолютно внизу)
```
[absolute bottom-10 left-[226px] right-0 px-16]
  ├── [flex between]
  │     ├── status: "Открыт к предложениям · Удалённо · Самара"
  │     └── copyright: "© 2025 Александр Карсунцев"
```

### Размеры и отступы

| Элемент            | Свойство       | Tailwind / значение       |
|--------------------|----------------|---------------------------|
| Section wrapper    | padding-left   | `pl-[226px]`              |
| Inner content      | padding        | `px-16 py-12`             |
| Channels list      | gap            | `gap-0` (dividers)        |
| Channel item       | padding        | `py-6`                    |
| Footer             | position       | `absolute bottom-10`      |

### Типографика

| Элемент         | Класс                               | Цвет          |
|-----------------|-------------------------------------|---------------|
| "Контакт" H2    | `.text-hero font-normal`            | `#F4E9E1`     |
| Headline        | `.text-display font-light`          | `#F4E9E1`     |
| Subheadline     | `text-sm leading-relaxed`           | `#F4E9E1/70`  |
| Channel label   | `text-xs uppercase tracking-widest` | `#F4E9E1/50`  |
| Channel CTA     | `text-xl font-normal`               | `#F4E9E1`     |
| Arrow           | `text-2xl`                          | `#F4E9E1`     |
| Footer text     | `text-xs`                           | `#F4E9E1/40`  |

### Адаптивность

| Брейкпоинт      | Поведение                                      |
|-----------------|------------------------------------------------|
| `base` (<768px) | Один столбец: заголовок → headline → каналы    |
| `lg` (1024px+)  | Два блока: левый (title+headline) + правый     |

---

## Доступность
- `role="region"` `aria-label="Контакты"`
- Каждая ссылка: `aria-label="Написать на почту"` (конкретно)
- `rel="noopener noreferrer"` для внешних ссылок
- `data-testid="section-contact"`
- `data-ai-action="contact-email"` / `"contact-whatsapp"` / `"contact-behance"`
- Контраст #F4E9E1 на #FF3D00: ≥ 4.5:1 ✓

## Зависимости
- нет ui-компонентов
