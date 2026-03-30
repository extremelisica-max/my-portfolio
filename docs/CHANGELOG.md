# CHANGELOG

Все значимые изменения в проекте фиксируются здесь.
Формат: [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/)
Версионирование: [SemVer](https://semver.org/lang/ru/)

---

## [Unreleased] — 2026-03-27

Сессия: реализация портфолио-сайта Александра Карсунцева (Product Designer).
Все 6 шагов выполнены: Strategy → Content → Design → Frontend → QA → SEO. Сайт готов к деплою.

---

### Шаг 1 — Strategy Analyst: архитектура информации

#### Added

**Sitemap — 7 секций с цветовой идентификацией:**

| ID | Секция | Фон |
|----|--------|-----|
| 00 | Landing | `#F4E9E1` cream |
| 01 | Hello | `#5900CC` фиолетовый |
| 02 | Подход | `#0D1B8E` тёмно-синий |
| 03 | Работы | `#0E0E0E` чёрный |
| 04 | Навыки | `#FF5C00` оранжевый |
| 05 | Опыт | `#20DB70` зелёный |
| 06 | Контакт | `#FF3D00` красный |

**`src/data/owner.ts`** — интерфейс `SiteOwner` и константа `owner`:
- Поля: `name`, `nameShort`, `role`, `tagline`, `location`, `email`, `phone`, `behance`, `whatsapp`, `yearsOfExp`, `openToWork`
- Значения: Александр Карсунцев, Product Designer, Самара · Удалённо, `openToWork: true`

**`src/data/nav.ts`** — 7 пунктов навигации с полями `index`, `label`, `sectionId`, `accentColor`

**`src/data/projects.ts`** — интерфейс `Project` и массив `projects` (4 кейса):
- `gmini-sod` — СОД, Gmini, 2025, outcome: −40% время согласования документов
- `effaliya` — туристический сервис, OnePix, 2023–2024, редизайн для B2C и B2B, Drag&Drop шахматка
- `control-systems-crm` — нефтегазовая CRM, Control Systems, 2021–2023, дашборды для Газпром / Лукойл
- `vnish` — агрегатор майнинг-оборудования, OnePix, 2023–2024, редизайн Pulse / калькуляторов
- Все 4 кейса: `placeholder: true` — ожидают реальных скринов

**`src/data/experience.ts`** — интерфейс `Job` и массив `jobs` (4 позиции):
- Gmini, Продуктовый дизайнер, фев 2025 — дек 2025, 11 месяцев
- OnePix, Продуктовый дизайнер, фев 2023 — янв 2025, 2 года
- Control Systems, Продуктовый дизайнер, сен 2021 — янв 2023, 1 год 5 месяцев
- Фриланс, UX/UI Дизайнер, окт 2020 — фев 2022, 1 год 5 месяцев

**`src/data/skills.ts`** — интерфейсы `SkillItem` / `SkillGroup` и массив `skillGroups` (3 группы):
- Исследования: Глубинные интервью, CJM & User Personas, Юзабилити-тестирование, Конкурентный анализ
- Проектирование: ИА, Прототипирование, Дизайн-системы, Дашборды
- Инструменты: Figma, FigJam / Miro, Adobe Photoshop, Principle, Tilda
- Формат: каждый навык с полем `context` — конкретный проект или задача, без % и баров

#### Decisions

- Зарплата на сайте: не указывается
- Язык сайта: русский

---

### Шаг 2 — Content Strategist: UX-копирайт

#### Added

**`src/data/content.ts`** — тексты всех 7 секций в одной типизированной константе `siteContent`:

| Секция | Ключевые тексты |
|--------|----------------|
| `landing` | `"Карсунцев"` / `"Product Designer"` |
| `hello` | 3 тезиса + bio "5 лет в B2B-интерфейсах" |
| `approach` | 4 шага (Исследование → Архитектура → Прототип → Тест) + 4 ценности |
| `work` | заголовок секции + CTA "Посмотреть на Behance" |
| `skills` | подпись "Без шкал — только реальные проекты" |
| `experience` | "5 лет · 4 компании · 10+ продуктов" |
| `contact` | `"Обсудим проект."` + 3 канала (почта / WhatsApp / Behance) |

---

### Шаг 3 — Product Designer: дизайн-система и спецификации

#### Added

**`src/app/globals.css`** — полный `@theme inline` с дизайн-токенами:
- Шрифты: `--font-sans`, `--font-display` → Space Grotesk
- Базовые цвета: `--color-cream #F4E9E1`, `--color-near-black #0E0E0E`, `--color-white`
- Акцентные цвета секций: `--color-hello`, `--color-approach`, `--color-work`, `--color-skills`, `--color-experience`, `--color-contact`
- Спейсинг (8px base): `--spacing-xs 3px` / `sm 8px` / `md 24px` / `lg 40px` / `xl 64px` / `2xl 80px`
- Лейаут: `--nav-width: 226px`
- CSS-классы: `.text-hero` (clamp 56px→216px, 14vw), `.text-display` (clamp 28px→84px, 5.3vw), `.text-section-heading`, `.sections-track`, `.section`, `.pl-nav`, `.left-nav`, `.w-nav`

**`docs/ds/`** — 12 файлов документации дизайн-системы:
- `01-concept.md` — концепция и идеология
- `02-layout.md` — горизонтальный full-screen layout
- `03-navigation.md` — sidebar навигация
- `04-typography.md` — типографическая шкала
- `05-colors.md` — цветовая система
- `06-spacing.md` — спейсинг и отступы
- `07-components.md` — атомарные компоненты
- `08-animations.md` — анимации и переходы
- `09-sections.md` — структура секций
- `10-patterns.md` — паттерны интерфейса
- `11-implementation.md` — инструкции реализации
- `12-tokens.md` — полный реестр токенов
- `README.md` — индекс папки

**Спецификации секций в `docs/`:**
- `spec-nav.md` — sidebar навигация, 226px, акцентный цвет = цвет активной секции
- `spec-00-landing.md` — cream фон, имя как hero-типографика
- `spec-01-hello.md` — фиолетовый фон, 2-колоночная сетка
- `spec-02-approach.md` — тёмно-синий фон, 4 шага + 4 ценности
- `spec-03-work.md` — чёрный фон, карточки проектов
- `spec-04-skills.md` — оранжевый фон, 3 группы навыков
- `spec-05-experience.md` — зелёный фон, accordion
- `spec-06-contact.md` — красный фон, 3 канала

---

### Шаг 4 — Frontend Developer: реализация

#### Added

**`src/components/sections/Nav.tsx`** (`"use client"`):
- Fixed sidebar 226px, только `lg:` breakpoint
- Активный пункт: `backgroundColor = accentColor` секции, цвет текста `#F4E9E1`
- Мобильный drawer: кнопка-гамбургер с цветом активной секции
- `aria-label="Основная навигация"`, `aria-current="page"` для активного пункта
- `data-testid="nav-sidebar"`, `data-ai-action` на каждой кнопке

**`src/components/sections/Landing.tsx`** — секция 00:
- Фон `bg-cream`, текст `text-near-black`
- Имя "Карсунцев" через класс `.text-hero` (clamp 56px→216px)
- Роль и теглайн через `.text-display`

**`src/components/sections/Hello.tsx`** — секция 01:
- Фон `bg-hello` (фиолетовый)
- 2-колоночная сетка: тезисы слева, bio справа

**`src/components/sections/Approach.tsx`** — секция 02:
- Фон `bg-approach` (тёмно-синий)
- 4 шага процесса + 4 ценности из `siteContent.approach`

**`src/components/sections/Work.tsx`** — секция 03:
- Фон `bg-work` (чёрный)
- 4 карточки из `projects`, у каждой собственный `accentColor`
- Скрины: заглушки (поле `placeholder: true`)

**`src/components/sections/Skills.tsx`** — полная перезапись под схему `SkillGroup[]`:
- Фон `bg-skills` (оранжевый)
- 3 колонки по группам, каждый навык с `context`

**`src/components/sections/Experience.tsx`** (`"use client"`):
- Фон `bg-experience` (зелёный)
- Accordion: первый пункт (Gmini) открыт по умолчанию
- `useState` для управления открытым индексом

**`src/components/sections/Contact.tsx`** — секция 06:
- Фон `bg-contact` (красный)
- 3 канала (email / WhatsApp / Behance) со стрелками-ссылками
- Данные из `owner` и `siteContent.contact`

#### Changed

**`src/app/layout.tsx`**:
- Подключён Space Grotesk через `next/font/google`, веса 300 / 400 / 500 / 700, `display: "swap"`
- Метаданные: `title = "Александр Карсунцев — Product Designer"`, описание с ключевыми словами B2B SaaS CRM

**`src/app/page.tsx`** (`"use client"`):
- Горизонтальный скролл: `translateX(calc(-N * 100vw))` через CSS-трансформ без `scroll-snap`
- 3 способа навигации: wheel (debounce 700ms), клавиши (ArrowRight / ArrowLeft / ArrowDown / ArrowUp), touch swipe (порог 50px)
- Активная секция передаётся в `<Nav>` для синхронизации цвета
- `<main className="sections-track" aria-label="Разделы портфолио">`

**`src/components/sections/Header.tsx`** — заменён на `Nav.tsx`, файл сохранён как заглушка

#### Build

```
npm run build  →  успешно, 0 ошибок
Route (app): /  →  Static (статическая генерация)
```

---

---

### Шаг 5 — QA Engineer: аудит и правки

#### Fixed

**`src/app/layout.tsx`**:
- Убран массив `weight: ["300", "400", "500", "700"]` из конфига Space Grotesk — Turbopack генерировал 12 отдельных `@font-face` с запросами к fonts.gstatic.com, что роняло билд без сети. Space Grotesk — variable font, `weight` не нужен

**`src/app/globals.css`**:
- `--spacing-xs: 3px` → `4px` (кратно 4px — выровнено по 8px-сетке)
- Добавлен CSS-класс `.text-role { font-size: clamp(24px, 3vw, 48px); font-weight: 300; }` — роль на Landing
- Добавлена утилита `.scrollbar-hidden { scrollbar-width: none; }` + webkit-правило

**`src/components/sections/Landing.tsx`**:
- Убран `style={{ fontSize: "clamp(24px, 3vw, 48px)" }}` → заменён на класс `.text-role`

**`src/components/sections/Work.tsx`**:
- Убран `style={{ scrollbarWidth: "none" }}` → заменён на класс `.scrollbar-hidden`

**`src/components/sections/Contact.tsx`**:
- Footer: `text-cream/40` → `text-cream/70` (улучшена контрастность: было ~1.8:1, стало ~3.2:1)

**`src/components/sections/Nav.tsx`**:
- Мобильный drawer: добавлен `aria-current="page"` на активный пункт
- Кнопка закрытия drawer: добавлен `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`
- Мобильные кнопки навигации: добавлен `focus-visible:outline-*`

#### Build

```
rm -rf .next && npm run build  →  успешно, 0 ошибок (чистый билд без кэша)
Route (app): /  →  Static (статическая генерация)
```

---

### Шаг 6 — SEO / Metadata

#### Added

**`src/app/sitemap.ts`** — генерирует `/sitemap.xml`:
- Единственная запись: `https://karsuncev.ru`, `changeFrequency: "monthly"`, `priority: 1`

**`src/app/robots.ts`** — генерирует `/robots.txt`:
- `userAgent: "*"`, `allow: "/"`, ссылка на sitemap

**`src/app/opengraph-image.tsx`** — OG-превью 1200×630 через `ImageResponse`:
- Фон `#F4E9E1`, имя "Карсунцев" 112px, роль "Product Designer" 36px
- Теглайн "B2B · SaaS · CRM · Figma", бейдж "Открыт к предложениям"
- Шрифт: `SpaceGrotesk-Regular.ttf` → `public/SpaceGrotesk-Regular.ttf`

**`public/SpaceGrotesk-Regular.ttf`** — шрифт для OG-рендера (TTF требуется `ImageResponse`)

#### Changed

**`src/app/layout.tsx`** — расширены метаданные:
- `metadataBase: new URL("https://karsuncev.ru")`
- `title.template: "%s — Александр Карсунцев"`
- `keywords`: Product Designer, UX Designer, B2B, SaaS, CRM, Figma, Самара, портфолио, дизайнер интерфейсов
- `authors`, `robots: { index: true, follow: true }`
- `openGraph`: type, locale, url, title, description, image `/opengraph-image`
- `twitter`: `summary_large_image`, title, description
- JSON-LD `Person` schema в `<head>`: name, jobTitle, url, email, address Самара/RU, knowsAbout

#### Build

```
npm run build  →  успешно, 0 ошибок
Routes: /  /opengraph-image  /robots.txt  /sitemap.xml  →  Static
```

---

## Pending — отложено до готовности контента

- [ ] Реальные скрины проектов — сейчас `placeholder: true`, заменить на `imageSrc: string` когда будут файлы
- [ ] Ссылки на Behance-кейсы — добавить поле `behanceUrl` в `Project` когда будут опубликованы кейсы
- [ ] Реальный домен — заменить `https://karsuncev.ru` в `layout.tsx`, `sitemap.ts`, `robots.ts` перед деплоем

---

[Unreleased]: https://github.com/username/portfolio/compare/HEAD
