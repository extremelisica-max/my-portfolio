# Спецификация: Sidebar Navigation

> Файл: `src/components/sections/Nav.tsx`

---

## Назначение
Фиксированная боковая навигация. Активный пункт окрашивается в цвет текущей секции.

## Данные
```typescript
import { navLinks } from "@/data/nav";
// activeSection: string — передаётся из page.tsx через intersection observer
```

---

## Визуальная спецификация

### Layout
```
[nav — position: fixed, left: 0, top: 0, width: 226px, height: 100vh]
  ├── bg: #FFFFFF
  ├── z-index: 50
  │
  └── [flex column, align-items: center, justify-content: center, gap: 4px]
        ├── NavItem "00 Карсунцев"  ← логотип/домой
        ├── NavItem "01 Hello"
        ├── NavItem "02 Подход"
        ├── NavItem "03 Работы"
        ├── NavItem "04 Навыки"
        ├── NavItem "05 Опыт"
        └── NavItem "06 Контакт"
```

### NavItem

```
[button — display: flex, align-items: center, gap: 6px]
  ├── index  ← text-[13.33px], #0E0E0E/40
  └── label  ← text-[13.33px], #0E0E0E

Ширина: 180px, padding: px-4 py-2, border-radius: rounded-sm
```

### Состояния

| Состояние | Background          | Text color | Border              |
|-----------|---------------------|------------|---------------------|
| Default   | `transparent`       | `#0E0E0E`  | `1px solid transparent` |
| Hover     | `rgba(0,0,0,0.04)`  | `#0E0E0E`  | `1px solid transparent` |
| Active    | `accentColor` из navLinks | `#F4E9E1` | `none`          |

**Transition:** `background 0.3s ease-in-out, color 0.3s ease-in-out`

### Активация
- Текущая секция определяется через `IntersectionObserver` в `page.tsx`
- `activeSection` передаётся как prop в Nav
- При смене секции — плавная смена цвета кнопки

### Mobile (< 768px)
- Nav скрыт
- Появляется бургер-кнопка (fixed top-4 left-4)
- Drawer: тот же список без индексов, белый фон, full-height

---

## Доступность
- `<nav>` с `aria-label="Основная навигация"`
- `<button aria-current="page">` для активного пункта
- `data-testid="nav-sidebar"`
- `data-testid="nav-item-{sectionId}"`
- `data-ai-action="navigate-to-{sectionId}"`
- Focus-visible: `outline: 2px solid currentColor, outline-offset: 2px`

## Зависимости
- `"use client"` — нужен для activeSection state
