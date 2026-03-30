# Design System: Raw Materials Portfolio Site

> Полная инструкция для воссоздания дизайна сайта therawmaterials.com.
> Описана структура, типографика, цвета, отступы, компоненты и анимации.
> Контент не включён — только дизайн-система.

---

## 1. Общая концепция

### Философия
- **Горизонтальный скроллинг** — весь сайт скроллится горизонтально (лево-право), а не вертикально
- **Full-viewport секции** — каждая секция занимает 100vw x 100vh
- **Высокая контрастность** — каждая секция имеет свой яркий цвет фона
- **Типографика как дизайн** — огромные заголовки являются главным визуальным элементом
- **Минимализм UI** — никаких декоративных элементов, теней, градиентов; акцент на цвете и шрифте

### Технологии
- React SPA (Single Page Application)
- CSS-in-JS / Styled Components
- Горизонтальный скроллинг через CSS `overflow: hidden` на body и JavaScript-управление

---

## 2. Layout (Макет)

### Общая структура

```
┌─────────────────────────────────────────────┐
│ body: overflow: hidden                       │
│ ┌──────┬────────────────────────────────────┐│
│ │ NAV  │         CONTENT AREA               ││
│ │      │  ┌──────┬──────┬──────┬──────┐    ││
│ │ 226px│  │ sec1 │ sec2 │ sec3 │ ...  │    ││
│ │      │  │100vw │100vw │100vw │      │    ││
│ │fixed │  │100vh │100vh │100vh │      │    ││
│ │      │  └──────┴──────┴──────┴──────┘    ││
│ └──────┴────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

### Контейнер страницы
```css
.page-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
```

### Контентная область
- Горизонтальная лента секций
- Каждая секция — `100vw × 100vh`
- Навигация по секциям через JavaScript (wheel event → horizontal translate)
- Внутри case study секций — собственный вертикальный скроллинг

### Адаптивность
- Desktop-first подход
- Viewport при анализе: 1563×985px
- Навигация на мобильных — переключается на бургер-меню (второй `<nav>`)

---

## 3. Навигация

### Desktop Navigation (Sidebar)

```
┌─────────────────┐
│ 00 Raw Materials │  ← логотип/домой
│ 01 Hello         │  ← активная секция подсвечена
│ 02 Approach      │
│ 03 Work          │
│ 04 Talent        │
│ 05 Careers       │
│ 06 Contact       │
│ 07 Unusual Index │
└─────────────────┘
```

### Стили навигации
```css
nav {
  position: absolute;   /* или fixed */
  width: 226px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: высокий;
  overflow: auto;
}

nav button {
  font-family: "StabilGrotesk", sans-serif;
  font-size: 13.33px;
  font-weight: 400;
  color: #0E0E0E;
  background: #FFFFFF;
  border: 1px solid transparent;
  padding: 0;
  cursor: pointer;
  text-transform: none;
  letter-spacing: normal;
}
```

### Состояния навигации
| Состояние | Background | Text Color |
|-----------|-----------|------------|
| Default | `#FFFFFF` | `#0E0E0E` |
| Active (Hello) | `#FF3D00` | `#F4E9E1` |
| Active (Approach) | `#5900CC` | `#F4E9E1` |
| Active (Work) | `#000000` | `#F4E9E1` |
| Active (Talent) | Секционный цвет | `#F4E9E1` |
| Active (Careers) | Секционный цвет | `#F4E9E1` |
| Active (Contact) | Секционный цвет | `#F4E9E1` |

**Принцип:** активный пункт навигации окрашивается в цвет текущей секции.

### Нумерация
Каждый пункт имеет двузначный префикс: `00`, `01`, `02`, ...
Шрифт номера такой же как текст пункта.

### Mobile Navigation
Вторая навигация (бургер-меню) — тот же набор пунктов без номера `00` (без логотипа).

---

## 4. Типографика

### Шрифты

| Шрифт | Назначение | Начертания |
|-------|-----------|------------|
| **StabilGrotesk** | Основной шрифт — заголовки, текст, навигация | 200 (Light), 400 (Regular), 500 (Medium), 700 (Bold) |
| **RightGrotesk** | Декоративные/дисплейные заголовки | 100 (Thin) |
| **KlarheitKurrent** | Акцентный текст, подписи | 400 (Regular), 500 (Medium) |

Fallback: `sans-serif`

### Шкала типографики

#### Hero-заголовки (секция titles)
```css
.hero-title {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~216px;        /* адаптивно, ~14vw */
  font-weight: 400;
  line-height: 1.0 - 1.03;  /* ~222px при 216px */
  letter-spacing: normal;
  text-transform: none;
  color: #0E0E0E;           /* или #F4E9E1 на тёмном фоне */
}
```

#### Заголовки секций (Hello, Approach, Work...)
```css
.section-title {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~215px;        /* ~14vw */
  font-weight: 400;
  line-height: 1.0;
  letter-spacing: -1%;      /* -2.15px при 215px */
  color: #F4E9E1;
}
```

#### Крупные подзаголовки
```css
.large-heading {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~83px;         /* ~5.3vw */
  font-weight: 300;
  line-height: 1.2;         /* ~99px при 83px */
}
```

#### Средние заголовки (параграф-заголовки, нумерованные блоки)
```css
.medium-heading {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~31px;         /* ~2vw */
  font-weight: 400;
  line-height: 1.0;
}
```

#### Декоративные заголовки (RightGrotesk)
```css
.display-heading {
  font-family: "RightGrotesk", sans-serif;
  font-size: ~120-200px;    /* варьируется */
  font-weight: 100;         /* Thin — ультратонкий */
  line-height: 1.0;
  letter-spacing: normal;
}
```

#### Основной текст
```css
.body-text {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~15-18px;      /* ~1vw */
  font-weight: 400;
  line-height: 1.4 - 1.6;   /* ~21-25px */
  letter-spacing: normal;
  color: #0E0E0E;
}
```

#### Мелкий текст / метки
```css
.small-text {
  font-family: "StabilGrotesk", sans-serif;
  font-size: 12-13px;
  font-weight: 400;
  line-height: 1.0;
  letter-spacing: -0.12px;
}
```

### Текстовые акценты
- Скобки как декоративный элемент: `( Hello )`, `( Approach )`, `( Unified Platform )`
- Курсив/italic через `<em>` для выделения ключевых слов в предложениях
- Верхний регистр `text-transform: uppercase` для категорий и тегов

---

## 5. Цветовая палитра

### Базовые цвета

| Название | HEX | RGB | Использование |
|----------|-----|-----|---------------|
| Cream (основной фон) | `#F4E9E1` | `rgb(244, 233, 225)` | Фон страницы, body background |
| Near-black (основной текст) | `#0E0E0E` | `rgb(14, 14, 14)` | Основной цвет текста |
| Black | `#000000` | `rgb(0, 0, 0)` | Секция Work |
| White | `#FFFFFF` | `rgb(255, 255, 255)` | Фон навигации, карточки |

### Секционные цвета (Primary Palette)

| Секция | HEX | RGB |
|--------|-----|-----|
| Hello | `#FF3D00` | `rgb(255, 61, 0)` |
| Approach | `#5900CC` | `rgb(89, 0, 204)` |
| Work | `#000000` | `rgb(0, 0, 0)` |
| Talent | (использует палитру акцентов) | |
| Careers | (использует палитру акцентов) | |
| Contact | (использует палитру акцентов) | |

### Акцентные цвета (для case studies и декора)

| Название | HEX | RGB |
|----------|-----|-----|
| Electric Blue | `#2835F8` | `rgb(40, 53, 248)` |
| Yellow | `#FFD93E` | `rgb(255, 217, 62)` |
| Neon Yellow | `#FFFF00` | `rgb(255, 255, 0)` |
| Orange | `#FF5C00` | `rgb(255, 92, 0)` |
| Green | `#20DB70` | `rgb(32, 219, 112)` |
| Neon Green | `#05FF00` | `rgb(5, 255, 0)` |
| Red-Pink | `#FF003D` | `rgb(255, 0, 61)` |
| Cyan | `#00C2FF` | `rgb(0, 194, 255)` |
| Gray-Blue | `#B6C9CE` | `rgb(182, 201, 206)` |

### Case Study цвета

| Проект | HEX | RGB |
|--------|-----|-----|
| 7-Eleven Red | `#EE2526` | `rgb(238, 37, 38)` |
| 7-Eleven Teal | `#008163` | `rgb(0, 129, 99)` |
| 7-Eleven Orange | `#FF643E` | `rgb(255, 100, 62)` |
| Volta Blue | `#01A4F5` | `rgb(1, 164, 245)` |
| Volta Pink | `#FD7FA8` | `rgb(253, 127, 168)` |

### Принцип применения цветов
1. **Каждая секция** имеет свой доминирующий цвет фона
2. **Текст на тёмном/ярком фоне** — всегда `#F4E9E1` (cream)
3. **Текст на светлом фоне** — всегда `#0E0E0E` (near-black)
4. **Навигация** динамически окрашивается цветом текущей секции
5. **Case studies** используют фирменные цвета клиента

---

## 6. Отступы и пространство

### Система отступов (Spacing Scale)

Отступы на сайте адаптивны (vw-based), ниже — значения при viewport 1563px:

| Токен | Значение | Где используется |
|-------|---------|------------------|
| `space-xs` | ~3px | Минимальные зазоры |
| `space-sm` | ~6-8px | Внутренние отступы мелких элементов |
| `space-md` | ~18-24px | Отступы между блоками текста |
| `space-lg` | ~32-38px | Padding секций, gap между колонками |
| `space-xl` | ~48-63px | Крупные вертикальные отступы |
| `space-2xl` | ~77px | Горизонтальные padding контейнера |

### Ключевые паттерны отступов

```css
/* Вертикальный padding секции */
.section {
  padding: 33px 0 66px;       /* top - 0 sides - bottom */
}

/* Горизонтальный padding контента */
.section-content {
  padding: 0 63px;             /* ~4vw горизонтальный */
}

/* Padding тегов/пилюль */
.tag {
  padding: 6px 12px;
}

/* Padding текстовых блоков */
.text-block {
  padding: 19px 38px;         /* ~1.2vw ~2.4vw */
}

/* Gap между элементами */
.flex-container {
  gap: 24px;                   /* стандартный gap */
}
```

### Контейнеры

```css
/* Нет max-width — секции full-viewport */
.section {
  width: 100vw;
  height: 100vh;
  /* Контент ограничивается padding */
}
```

---

## 7. Компоненты

### 7.1 Section Indicator (индикатор секции/слайда)

Показывает текущую позицию: `● 01 / 05`

```css
.section-indicator {
  font-family: "StabilGrotesk", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: inherit;  /* от секции */
  letter-spacing: normal;
}
```

Формат: `● {номер_секции} / {номер_слайда}`

### 7.2 Section Label (метка секции)

Текст в скобках: `(Hello)`, `(Approach)`, `(Raw)`, `(Materials)`

```css
.section-label {
  font-family: "StabilGrotesk", sans-serif;
  font-size: 12-14px;
  font-weight: 400;
  /* Скобки — часть текста, не декоративный элемент */
}
```

### 7.3 Numbered Block (нумерованный блок)

Формат: `01Challenge`, `02Goal` — номер + заголовок слитно.

```css
.numbered-block-number {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~31px;
  font-weight: 400;
  /* Номер визуально меньше/тоньше текста заголовка */
}

.numbered-block-title {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~31px;
  font-weight: 400;
  line-height: 1.0;
}
```

### 7.4 Case Study Card (карточка кейса)

```
┌─────────────────────────────────────────┐
│  [project-image: full-bleed]            │
│                                          │
│  H2: Project Name                        │
│  H3: Project Type                        │
│  H3: Project Type (дублируется)          │
│                                          │
│  H4: Краткое описание                    │
│                                          │
│  → Далее: полноэкранный case study       │
└─────────────────────────────────────────┘
```

**Image:** Full-bleed, `object-fit: cover`, занимает значительную часть экрана.

### 7.5 Case Study Slide

Внутри case study — полноэкранные слайды:

```
┌──────────────────────────────────┐
│  (Project Name)                   │  ← section label
│  ● 03 / 23                       │  ← indicator
│                                   │
│         HUGE TITLE                │  ← hero heading ~200px
│                                   │
│  Body text paragraph...           │
│                                   │
└──────────────────────────────────┘
```

### 7.6 Quote / Testimonial Card

```
┌──────────────────────────────────────────┐
│                                           │
│  H2: Project Name                         │
│  H3: Project Subtitle                     │
│                                           │
│  "Quote text in large size..."            │  ← ~83px, weight 300
│                                           │
│  TAG1    TAG2                             │  ← категории uppercase
│                                           │
│  from                                     │
│  Person Name                              │  ← bold
│  Title,                                   │
│  Company                                  │
│                                           │
└──────────────────────────────────────────┘
```

```css
.quote-text {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~83px;      /* desktop */
  font-weight: 300;
  line-height: 1.2;
  font-style: normal;
  color: #0E0E0E;
}

.quote-attribution-name {
  font-weight: 500;
}

.quote-attribution-title {
  font-weight: 400;
  font-size: ~14px;
}
```

### 7.7 Inline Highlight (выделение в скобках)

Ключевые слова в предложениях оборачиваются в `( скобки )`:

> We set out to design one ( Unified Platform ) that would define...

```css
.inline-highlight {
  /* Визуально — тот же шрифт, но выделен скобками */
  /* Может иметь italic или другой weight */
  font-style: italic;  /* опционально */
}
```

### 7.8 Category Tags

```css
.category-tag {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5-1px;
  /* Нет фона, нет бордера — просто uppercase текст */
}
```

### 7.9 Team Member Block

```
┌────────────────────────┐
│  H4: Title             │  ← "Chief Operating Officer"
│  H3: Name              │  ← "Jennifer Allen"
└────────────────────────┘
```

### 7.10 Capabilities List

Три колонки: DESIGN | STRATEGY | TECHNOLOGY

```css
.capabilities-section {
  display: flex | grid;
  /* 3 колонки */
}

.capabilities-heading {
  font-family: "StabilGrotesk", sans-serif;
  font-weight: 500-700;
  text-transform: uppercase;
  font-size: ~18px;
  margin-bottom: 16px;
}

.capabilities-item {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~14-16px;
  font-weight: 400;
  line-height: 1.8;  /* щедрый межстрочный */
}
```

### 7.11 Job Listing Card

```
┌──────────────────────────────────┐
│  H3: Job Title                    │
│  H4: ( CATEGORY )                 │  ← в скобках, uppercase
│                                   │
│  Description paragraph 1...       │
│  Description paragraph 2...       │
│  Description paragraph 3...       │
│                                   │
│  Location                         │
│  ( Remote )                       │
│                                   │
│  [Connect with us →]              │  ← mailto link
└──────────────────────────────────┘
```

### 7.12 Contact CTA Buttons

```css
.cta-button {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~14px;
  font-weight: 400;
  background: transparent;
  border: none;
  cursor: pointer;
  /* Текст формата: "Talk with {Name}" */
}
```

### 7.13 Newsletter Form

```css
.newsletter-input {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~14px;
  background: transparent;
  border: none;
  border-bottom: 1px solid currentColor;  /* подчёркивание */
  padding: 8px 0;
  text-transform: uppercase;
}

.newsletter-button {
  font-family: "StabilGrotesk", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
}
```

### 7.14 Footer

```css
.footer {
  /* Минималистичный footer */
}

.footer-title {
  font-family: "StabilGrotesk", sans-serif;
  font-size: ~26px;
  font-weight: 400;
}

.footer-links {
  /* Ссылки: Contact Us, Instagram, Twitter, Linkedin */
  /* mailto и внешние ссылки */
}

.footer-copyright {
  font-size: 12px;
  /* "© 2023" */
}
```

---

## 8. Анимации и переходы

### Основные transitions

```css
/* Глобальный transition (на большинстве элементов) */
* {
  transition: all 0.3s ease-in-out;
}

/* Высота (аккордеоны, раскрытие) */
.expandable {
  transition: height 0.3s ease-in-out;
}

/* Цвета навигации */
nav button {
  transition: background 0.3s ease-in-out,
              border 0.3s ease-in-out,
              color 0.3s ease-in-out,
              filter 0.3s ease-in-out;
}

/* Ширина (прогресс-бары, индикаторы) */
.progress {
  transition: width 0.5s ease-out;
}

/* Кастомный easing для плавных анимаций */
.smooth {
  transition: 0.3s cubic-bezier(0.85, 0, 0.15, 1);
}

/* Background color смена секции */
.section-bg {
  transition: background-color 0.5s ease-in-out;
}

/* Opacity (появление/исчезновение) */
.fade {
  transition: opacity 0.2s;
}
```

### Transforms
- Элементы активно используют `transform: matrix(...)` для позиционирования
- Это указывает на JavaScript-управляемые анимации (parallax, scroll-linked)
- Заголовки и декоративные элементы анимируются при скролле

### Scroll-linked анимации
- Заголовки появляются с translate при входе в viewport
- Parallax-эффект на фоновых элементах
- Case study изображения имеют subtle zoom/pan

### Shadow (единственная тень на сайте)
```css
.card-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 40px 80px 0px;
}
```
Используется **крайне редко** — только на выделенных карточках.

---

## 9. Структура секций

### Полная карта сайта

```
00 ── Landing (Hero)
       ├── Logo: "RawMaterials"
       └── Subtitle: "An Unusual Design Company"

01 ── Hello (5 слайдов)
       ├── 01/01: Section title "Hello"
       ├── 01/02: Hero text "We Are Raw Materials" + описание
       ├── 01/03: Numbered manifesto (01, 02, 03 тезиса)
       ├── 01/04: Mission block (01 Challenge, 02 Goal)
       ├── 01/04: "Unusual Wins" — таблица/статистика
       └── 01/05: Team founders + quotes

02 ── Approach (4 слайда)
       ├── 02/01: Section title "Approach"
       ├── 02/02: Challenge & Goal blocks
       ├── 02/03: "Independent in Ownership & Spirit" — декоративная типографика
       ├── 02/03: Values grid (One Team, Creator Led, Phase Zero, Anti Transactional)
       └── 02/04: Capabilities list (Design, Strategy, Technology)

03 ── Work (case studies)
       ├── 03/01: Section title "Work"
       ├── Case Study: 7-Eleven Mobile (~23 слайда)
       ├── Case Study: Volta Charging (~35 слайдов)
       ├── Case Study: Meta AI (~40 слайдов)
       ├── Case Study: 855-HOW-TO-QUIT (~50 слайдов)
       ├── Coming Soon: AR Design
       ├── Coming Soon: NBC Universal
       ├── Coming Soon: Unity
       └── Coming Soon: Grammarly

04 ── Talent (5 слайдов)
       ├── 04/01: Section title "Talent"
       ├── 04/02: Manifesto quote
       ├── 04/03: "Raw Talent Network" — декоративная типографика
       ├── 04/04: Duplicate (мобильная версия?)
       └── 04/05: How We Work (Everywhere Company, Academy, Creative Community)

05 ── Careers
       ├── 05/01: Section title "Careers"
       ├── "We Are Looking For The Unusually Talented" — декоративная типографика
       ├── Job: Creative, Product Design (CREATIVE)
       ├── Job: Creative, Motion Design (DELIVERY)
       └── Job: For the Too Unusual (DATA)

06 ── Contact
       ├── 06/01: Section title "Contact"
       ├── "Let's Talk Creativity."
       ├── CTA: New Business → Talk with John
       ├── CTA: News & Press → Talk with Jennifer
       ├── CTA: Join The Team → Talk with Pablo
       └── "One Company, 100 Studios"

07 ── Unusual Index
       ├── 07/01: Section title
       ├── 07/02: Description
       ├── 07/03: Newsletter subscribe form
       └── Footer
```

### Паттерн секции

Каждая основная секция следует паттерну:

```
[Transition slide: "You are now entering ( Section ) section"]
        ↓
[Section title — огромный заголовок на цветном фоне]
        ↓
[Content slides — горизонтальный скроллинг внутри секции]
        ↓
[Transition to next section]
```

---

## 10. Специальные дизайн-паттерны

### Переход между секциями
Перед каждой секцией — слайд-анонс:
```
"You are now entering ( Hello ) section"
```
- Шрифт: StabilGrotesk, 12px
- Скобки вокруг имени секции
- Cream text на цветном фоне

### Декоративная типографика
В секциях Talent и Careers буквы заголовков разбиты на отдельные строки с огромным размером:
```
W e
  A r e
L o o k i n g
  F o r
T h e
U n u s u a l l y
T a l e n t e d
```
Каждое слово — отдельный `<h1>` или `<h2>` с пустыми heading-элементами между ними для создания ритма.

### Скобки как бренд-элемент
Скобки `( )` — ключевой визуальный приём:
- Навигация: `( CREATIVE )`, `( DELIVERY )`
- Инлайн-акценты: `( Unified Platform )`, `( Charging Stations )`
- Секционные метки: `(Hello)`, `(Approach)`, `(Raw)`, `(Materials)`

### Нумерация
Двузначные номера (`01`, `02`, `03`) используются повсеместно:
- Навигация: `00`-`07`
- Блоки контента: `01Challenge`, `02Goal`
- Слайды: `● 01 / 05`
- Главы case study: `01`, `02`, `03`...

### Case Study структура
Каждый case study — мини-сайт с десятками слайдов:
1. **Cover slide** — изображение + название + тип
2. **Intro slide** — большой заголовок + описание
3. **Content slides** — микс из:
   - Полноэкранные изображения
   - Текст + типографика слайды
   - Inline-highlight слайды со скобками
   - Статистика / данные
4. **Quote slide** — цитата от основателя + теги

### Дублирование контента
Некоторые элементы на странице дублируются (два quote-блока, два набора value-карточек) — это паттерн для **адаптивности**: одна версия для desktop, другая для mobile, переключаемые через `display: none`.

---

## 11. Рекомендации по реализации

### Стек технологий
- **React** + **Next.js** или **Vite**
- **Styled Components** или **CSS Modules** для стилей
- **Framer Motion** или **GSAP** для scroll-linked анимаций
- **Locomotive Scroll** или кастомный horizontal scroll

### Горизонтальный скроллинг
```jsx
// Концепция:
// body: overflow: hidden
// Контейнер: flex row, width = N * 100vw
// Mouse wheel → translateX через JS
// Touch: swipe → translateX

const handleWheel = (e) => {
  // deltaY wheel → horizontal scroll
  scrollPosition += e.deltaY;
  container.style.transform = `translateX(-${scrollPosition}px)`;
};
```

### Адаптивные размеры шрифтов
```css
/* Использовать vw для масштабирования */
.hero-title {
  font-size: clamp(60px, 14vw, 220px);
}

.section-title {
  font-size: clamp(50px, 14vw, 216px);
}

.large-heading {
  font-size: clamp(30px, 5.3vw, 84px);
}

.body-text {
  font-size: clamp(14px, 1.1vw, 18px);
}
```

### Загрузка шрифтов
```css
@font-face {
  font-family: 'StabilGrotesk';
  font-weight: 200;
  font-style: normal;
  src: url('/fonts/StabilGrotesk-Light.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'StabilGrotesk';
  font-weight: 400;
  font-style: normal;
  src: url('/fonts/StabilGrotesk-Regular.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'StabilGrotesk';
  font-weight: 500;
  font-style: normal;
  src: url('/fonts/StabilGrotesk-Medium.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'StabilGrotesk';
  font-weight: 700;
  font-style: normal;
  src: url('/fonts/StabilGrotesk-Bold.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'RightGrotesk';
  font-weight: 100;
  font-style: normal;
  src: url('/fonts/RightGrotesk-Thin.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'KlarheitKurrent';
  font-weight: 400;
  font-style: normal;
  src: url('/fonts/KlarheitKurrent-Regular.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'KlarheitKurrent';
  font-weight: 500;
  font-style: normal;
  src: url('/fonts/KlarheitKurrent-Medium.woff2') format('woff2');
  font-display: swap;
}
```

### CSS Reset рекомендация
```css
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #F4E9E1;
  color: #0E0E0E;
  font-family: 'StabilGrotesk', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

## 12. Сводка дизайн-токенов

```css
:root {
  /* Colors */
  --color-cream: #F4E9E1;
  --color-near-black: #0E0E0E;
  --color-black: #000000;
  --color-white: #FFFFFF;

  --color-hello: #FF3D00;
  --color-approach: #5900CC;
  --color-work: #000000;

  --color-blue: #2835F8;
  --color-yellow: #FFD93E;
  --color-neon-yellow: #FFFF00;
  --color-orange: #FF5C00;
  --color-green: #20DB70;
  --color-neon-green: #05FF00;
  --color-red-pink: #FF003D;
  --color-cyan: #00C2FF;
  --color-gray-blue: #B6C9CE;

  /* Typography */
  --font-primary: 'StabilGrotesk', sans-serif;
  --font-display: 'RightGrotesk', sans-serif;
  --font-accent: 'KlarheitKurrent', sans-serif;

  --font-weight-thin: 100;
  --font-weight-light: 200;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Font Sizes (desktop) */
  --text-hero: clamp(60px, 14vw, 220px);
  --text-section: clamp(50px, 14vw, 216px);
  --text-large: clamp(30px, 5.3vw, 84px);
  --text-medium: clamp(18px, 2vw, 31px);
  --text-body: clamp(14px, 1.1vw, 18px);
  --text-small: clamp(11px, 0.8vw, 13px);
  --text-nav: 13.33px;

  /* Spacing */
  --space-xs: 3px;
  --space-sm: 6px;
  --space-md: 24px;
  --space-lg: 38px;
  --space-xl: 63px;
  --space-2xl: 77px;

  /* Transitions */
  --transition-default: all 0.3s ease-in-out;
  --transition-color: background 0.3s ease-in-out, color 0.3s ease-in-out;
  --transition-width: width 0.5s ease-out;
  --transition-smooth: 0.3s cubic-bezier(0.85, 0, 0.15, 1);
  --transition-fast: 0.2s ease;

  /* Shadows */
  --shadow-card: rgba(0, 0, 0, 0.15) 0px 40px 80px 0px;

  /* Layout */
  --nav-width: 226px;
  --section-width: 100vw;
  --section-height: 100vh;
}
```
