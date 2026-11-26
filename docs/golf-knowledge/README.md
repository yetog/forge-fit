# Forge Fit Golf — Knowledge Audit and Instruction Evidence

**Status:** Sprint 0 working package · 2026-11-26 · **NOT coach-approved instruction**

This directory is an additive golf knowledge layer for the **existing** Forge Fit V2 project. It does not supersede `AGENTS.md`, `docs/SPRINT_PLAN.md`, UX decisions, application types, or art-direction approval gates.

## Why this exists

Forge Fit's training loop is **Assess → Diagnose → Prescribe → Practice → Measure → Reassess**. Evidence must be collected before a corrective prescription is offered. A player's self-reported miss is not a biomechanical diagnosis; video-only observations are not launch-monitor readings; completed practice earns participation XP but does not automatically prove mastery.

## Start here

1. [Source inventory](SOURCE_INVENTORY.md) — material actually inspected and outstanding retrieval.
2. [Knowledge and evidence ledger](KNOWLEDGE_LEDGER.md) — sourced observations, hypotheses and uncertainties.
3. [Swing assessment template](SWING_ASSESSMENT_TEMPLATE.md) — proposed intake for Justin's next lesson.
4. [Coaching roadmap and questions](COACHING_BRIEF.md) — four-lesson working plan, not an instruction to override Justin.
5. [Integration contract](INTEGRATION_CONTRACT.md) — safe path into existing Forge Fit app.
6. [Dated chat-history audit](CHAT_HISTORY_AUDIT_2026-11-26.md) — historical conversation excerpts, provenance and unresolved original-source retrieval.
7. [Knowledge gap comparison](KNOWLEDGE_GAP_COMPARISON_2026-11-26.md) — existing vs newly recovered knowledge, prioritized.
8. [Practice system candidates](PRACTICE_SYSTEM_CANDIDATES.md) — recovered candidate drills and schedule awaiting validation.
9. [Owner review decisions](REVIEW_DECISIONS_2026-11-26.md) — six approved curation choices; explicitly no application integration/merge.
10. [Round 2 source validation](SOURCE_VALIDATION_ROUND_2.md) — independently checked golf terminology and unresolved personalization questions.

## Existing authority and reconciliation

- `AGENTS.md`: read first for agent workflow and brand/design approval gates.
- `docs/UX_FIRST_VISIT_RETURNING_RANGE_JOURNEY_V1.md`: latest explicitly stated user journey: Player Hub FIRST after onboarding; optional calibration from Hub. Overrides earlier ordering.
- `docs/SPRINT_1_V2_REVIEW_2026-11-07.md`: review evidence, not a verified runtime QA pass.
- `docs/PRODUCT_IDEAS_RESEARCH_REGISTER_2026-11-07.md`: exploration backlog, not automatically approved sprint scope.
- `src/types/golfProgression.ts`: existing implementation contracts. Do not silently change or infer that schema is final.
- `GOLF_MVP_PLAN.md`: historical MVP implementation plan, partly predating V2. Reconcile against current code.
- `docs/agents/PROJECT_CONTEXT_AND_LEARNINGS_2026-11-07.md`: portable project context, not a substitute for original sources.

## Evidence levels

- **MEASURED**: verified capture from equipment or scoring, with instrument, session, club, units and provenance; historical recalled figures do not qualify until originals are checked.
- **COACH_CONFIRMED**: explicit attributed feedback from a named instructor, preferably documented by the instructor.
- **SELF_REPORTED**: player's description of feel, result, or practice.
- **VIDEO_OBSERVATION**: visible movement with view, capture limitations and timestamp; cannot by itself confirm face angle/club path.
- **HYPOTHESIS**: explanation under test, not a diagnosis.
- **EXTERNAL_RESEARCH**: research leads pending validation of sources, licenses and applicability.
- **PRODUCT_DECISION**: approved product constraint, not a claim about swing science.

No automatic promotion between levels. Preserve dates, missingness and conflicting assessments.

## Scope and privacy

The player history is **private user-specific learning data**, not generic prescribed golf instruction. The repository is public: do **not** upload identifiable raw videos, coaching records, original chat exports, contact information, raw screenshots, or personalized measurements without an explicit publication decision. This repository contains a non-identifying summary only. Use a private, consented store for sensitive source assets.

## Next gates

- Review source files and conversation exports for completeness.
- Verify original historical TrackMan records and any coach-specific explanations.
- Have Justin evaluate the swing baseline, fault priority and drill assignments.
- Validate data schemas, run UX/content QA, and then implement app ingestion in a separate sprint.
