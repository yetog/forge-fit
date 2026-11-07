# Strict Cross-Agent Handoff Contract v1

Agents are stateless across products. Every handoff must be standalone, source-linked and testable.

## Required Markdown frontmatter
```yaml
---
artifact_id: VF-001
title: "Player Hub Visual Fidelity Study"
role: art_director  # art_director | ux_designer | frontend_engineer | brand_qa
status: CANDIDATE  # DRAFT | CANDIDATE | NEEDS_REVISION | APPROVED | BLOCKED
version: "0.1.0"
date: "YYYY-MM-DD"
branch: "feature/forge-fit-golf-v2-sprint1"
source_commit: "<exact SHA or NOT_VERIFIED>"
source_reference: "<image id / accessible link or MISSING>"
figma_nodes: []
asset_ids: []
owner_approval: null # only populate after recorded human approval
upstream_artifacts: []
---
```

## Required sections
1. **Goal and user outcome** — What should change for the golfer?
2. **Scope / non-goals** — Exclude unapproved extra features.
3. **Inputs actually reviewed** — exact GitHub paths/refs, original visual file, source screenshots, dated Figma nodes. State what couldn't be accessed.
4. **Decisions vs proposed choices** — distinguish human-approved rules, product hypotheses, creative experiments and unresolved questions.
5. **Deliverables** — links/IDs, editable source, exports, descriptions, dependencies.
6. **Acceptance tests** — observable, binary checks plus visual fidelity comparison method.
7. **Self-evaluation + evidence** — side-by-side annotated comparisons, dimensions, accessibility and flow screenshots as relevant.
8. **Risks, unknowns, blockers** — IP, accessibility, performance, integration or data provenance.
9. **What the next agent must do** — exact task, prioritized changes, what they must NOT redesign.
10. **Owner approval request** — explicit question, no fake approval.

## Quality criteria by stage
- Art: composition/atmosphere/ornament/typography/insignia, contrast-safe asset crops, original rights and **faithful comparison** with owner reference.
- UX: semantic component hierarchy, screen states, 320px/390px layouts, clickable prototype, no fake screens/flows.
- Code: build/test results, real component state transitions, mobile screenshots, no hallucinated data, accessible UI.
- QA: issue severity, evidence, reference links, disposition, no self-grading bypass.

## Evidence file convention
`evidence/<artifact_id>/<version>/reference.png`, `candidate.png`, `comparison.md`, `qa-report.md`. Store large binaries in approved Drive folders and register source IDs in `assets/manifest.csv` or the registry schema; do not paste access tokens, confidential user videos, credentials, personal info or secrets into GitHub.

## Example valid status progression
`VF-001 CANDIDATE` → QA says `REVISE` → `VF-001 v0.2 CANDIDATE` → QA says `PASS` → owner explicitly records `ART_APPROVED` → UX receives the exact approved revision. No silent handoff.
