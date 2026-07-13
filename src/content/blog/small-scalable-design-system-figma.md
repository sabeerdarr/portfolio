---
title: 'Building a small, scalable design system in Figma'
description: 'How to structure tokens, components, and libraries in Figma for a system that a small team can maintain — and that survives growth.'
publishedDate: 2026-07-05
category: 'Design Systems'
tags: ['figma', 'design systems', 'tokens', 'components']
draft: true
---

> **Draft.** This article is an outline with an introduction. Complete it before setting
> `draft: false`.

Most design-system advice is written by and for teams with a systems squad. If you're one
designer supporting a product team, that advice doesn't scale down — it collapses. A small
team's design system has different success criteria: it must be cheap to maintain, obvious to
navigate, and structured so that growing later means adding, not rebuilding. This is the Figma
architecture I use for exactly that situation.

## Outline

### 1. Right-sizing: what a small system must and must not include

- The 80% rule: components earn their place by usage frequency
- What to deliberately leave bespoke

### 2. Token architecture in Figma variables

- Three tiers: primitive → semantic → component
- Naming that engineers can guess without documentation
- Theming (light/dark) as a variable-mode mapping exercise

### 3. Component construction standards

- Every component ships complete: all states, all sizes, or it doesn't ship
- Slot patterns and nested instances without prop explosions
- Auto layout conventions that survive handoff

### 4. Library structure and publishing

- One library or two? (tokens+core vs. product patterns)
- Versioning discipline for a team of one
- Deprecation: retiring components without breaking every file

### 5. Documentation that lives where people work

- Component descriptions and links instead of a docs site
- The "when to use / when not to" one-liner standard

### 6. Growing it later

- What changes at 2 designers, at 5, at a systems hire
- Signs the system needs promotion to code-first tooling

## Notes for completion

- Add annotated screenshots of the variable structure and library organisation
- Include the component-completeness checklist as a copyable block
- Link to the design-system case study for the full applied story
