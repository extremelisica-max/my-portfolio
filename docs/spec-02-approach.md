# Спецификация: 02 Approach (Подход)

> Файл: `src/components/sections/Approach.tsx`

---

## Назначение
Методология работы: 4 шага + 4 ценности. Показывает процесс, а не результат.

## Данные
```typescript
import { approach } from "@/data/content";
```

---

## Визуальная спецификация

### Layout
```
[section.section — bg: #0D1B8E, color: #F4E9E1]
  ├── [верх лево] — section label + indicator
  │
  ├── [лево — 40%] — H2: "Подход"  ← .text-hero
  │
  └── [право — 55%]
        ├── [верхняя половина] — 4 шага в 2 колонки (2×2 grid)
        │     ├── 01 Исследование
        │     ├── 02 Архитектура
        │     ├── 03 Прототип
        │     └── 04 Тест и аргумент
        │
        └── [нижняя половина] — разделитель + 4 ценности в ряд
              ├── Системность
              ├── Контекст B2B
              ├── Цикл целиком
              └── Коммуникация
```

### Размеры и отступы

| Элемент             | Свойство      | Tailwind / значение         |
|---------------------|---------------|-----------------------------|
| Section wrapper     | padding-left  | `pl-[226px]`                |
| Inner content       | padding       | `px-16 py-12`               |
| Steps grid          | gap           | `gap-8`                     |
| Step item           | padding-bottom| `pb-6` + border-bottom      |
| Values row          | gap           | `gap-6`                     |
| Values block        | margin-top    | `mt-8`                      |

### Типографика

| Элемент         | Класс                                  | Цвет         |
|-----------------|----------------------------------------|--------------|
| "Подход" H2     | `.text-hero font-normal`               | `#F4E9E1`    |
| Step index      | `text-xs font-normal`                  | `#F4E9E1/40` |
| Step title      | `text-lg font-medium`                  | `#F4E9E1`    |
| Step body       | `text-sm leading-relaxed`              | `#F4E9E1/70` |
| Value title     | `text-base font-medium uppercase tracking-wide` | `#F4E9E1` |
| Value body      | `text-xs leading-relaxed`              | `#F4E9E1/60` |

### Step divider
```css
border-bottom: 1px solid rgba(244,233,225,0.15);
```

### Values divider (над блоком ценностей)
```css
border-top: 1px solid rgba(244,233,225,0.2);
padding-top: 32px;
```

### Адаптивность

| Брейкпоинт      | Поведение                               |
|-----------------|-----------------------------------------|
| `base` (<768px) | Один столбец: заголовок → шаги → ценности |
| `lg` (1024px+)  | Два столбца                             |

---

## Доступность
- `role="region"` `aria-label="Подход к работе"`
- `data-testid="section-approach"`
- Контраст #F4E9E1 на #0D1B8E ≥ 4.5:1 ✓
