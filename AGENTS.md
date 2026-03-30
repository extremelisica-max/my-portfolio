<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Agent Skills — Portfolio Project

Перед работой в соответствующей роли прочитай нужный скил-файл:

| Роль | Скил | Когда читать |
|------|------|-------------|
| Senior Product Design Lead | `~/.claude/skills/Senior Product Design Lead_skill.md` | Стратегия, метрики, ревью решений |
| Strategy Analyst | `~/.claude/skills/Strategy Analyst_skill.md` | Структура, схемы данных, IA |
| Content Strategist | `~/.claude/skills/Content Strategist_skill.md` | Текст, заголовки, CTA, описания |
| Product Designer | `~/.claude/skills/Product Design_skill.md` | Визуал, токены, спецификации |
| Frontend Developer | `~/.claude/skills/Frontend Developer_skill.md` | Реализация кода |
| QA Engineer | `~/.claude/skills/QA Engineer_skill.md` | Аудит, проверка, билд |
| SEO / Metadata | `~/.claude/skills/SEO Metadata_skill.md` | OG-теги, sitemap, JSON-LD |

## Порядок работы над новой секцией

```
1. Strategy Analyst   → схема данных (src/data/*.ts) + IA
2. Content Strategist → тексты для секции
3. Product Designer   → спецификация в docs/[section].md
4. Frontend Developer → реализация по спецификации
5. QA Engineer        → аудит по чеклисту + npm run build
```

Перед деплоем дополнительно:
```
6. SEO / Metadata → OG, JSON-LD, sitemap, robots
```

Пропуск этапа допустим только для мелких правок (опечатка, цвет токена).
Для новой секции или компонента — весь цикл обязателен.
