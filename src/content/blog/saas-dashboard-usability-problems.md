---
title: 'Common usability problems in SaaS dashboards'
description: 'The recurring failures I find when auditing SaaS dashboards — why they happen, how to spot them, and what to do instead.'
publishedDate: 2026-07-05
category: 'Product Design'
tags: ['saas', 'dashboards', 'usability', 'data visualisation']
draft: true
---

> **Draft.** This article is an outline with an introduction. Complete it before setting
> `draft: false`.

Dashboards fail in predictable ways. After enough audits you stop being surprised: the same
dozen problems appear across products that have nothing else in common, because they grow from
the same root — dashboards get built as _displays of available data_ rather than _answers to
user questions_. This article catalogues the recurring failures and the questions that expose
them.

## Outline

### 1. The root cause: data-out instead of questions-in

- How dashboards accrete: every stakeholder adds, nobody subtracts
- The diagnostic question: "what decision does this screen support?"

### 2. The catalogue of recurring problems

- **The wall of equal weight** — twenty metrics, no hierarchy, nothing is the answer
- **Vanity defaults** — the default view shows what's flattering, not what's actionable
- **Mystery deltas** — "+12%" with no baseline, timeframe, or target
- **Chart-type mismatch** — pies for trends, lines for categories
- **The refresh trap** — no indication of data freshness, silently stale
- **Filter amnesia** — filters reset on every visit, users rebuild context daily
- **Empty-state abandonment** — new accounts see a graveyard of zero-charts
- **Export as escape hatch** — when everyone exports to spreadsheets, the dashboard has failed

### 3. Severity: which of these actually matter

- Ranking by decision damage, not aesthetic offence

### 4. A better default: the answer-first dashboard

- Lead with the one number or state the user came to check
- Progressive disclosure for investigation
- Letting users mark what "normal" looks like

## Notes for completion

- Add before/after figure for the "wall of equal weight" fix
- Each problem needs a one-line "how to spot it" heuristic
- Close with the audit checklist as a copyable list
