# Knowledge Review — Round 1 (2026-11-26)

**Review state:** Editorial review proposed; awaiting owner confirmation. **No app integration or merge authorized.**

Reviewed against the nine files in `docs/golf-knowledge/`, V2 `docs/UX_FIRST_VISIT_RETURNING_RANGE_JOURNEY_V1.md`, and `src/types/golfProgression.ts`.

## Decision matrix

| Knowledge family | Assessment | Recommendation | Gate |
|---|---|---|---|
| Golf concepts and terminology | Curation-ready | Draft educational content with technical citations | External technical accuracy review |
| Assess → Diagnose → Prescribe → Practice → Measure → Reassess | Methodology-ready | Use as high-level training architecture | Owner approval |
| One-variable experiment protocol | Methodology-ready | Keep baseline/intervention/retest, comparable conditions and denominator | Owner approval |
| Personal 12-stage routine | Personal reference ready | Preserve all steps; do not generalize to every golfer | Owner approval, verbatim original check |
| Swing assessment | Coach-review ready | Use as Justin's intake worksheet, not diagnostic engine | Justin review |
| Six drill candidates | Provisional | Keep in draft instructional library; no prescription automation | Coach/technical review |
| Historical TrackMan numbers | Unverified reports | Keep separated from verified measured shots | Original screenshot/export |
| Swing-plane hoop model | Visualization proposal | Draft conceptual diagram with explicit limitations | Technical accuracy review |
| Miss → cause lookup | Unsafe to approve as deterministic coaching | Replace certainty with competing hypotheses, evidence and escalation | Coach/product review |
| Road to Scratch tracing/social | Research archive | No implicit product commitment | Owner product decision |
| XP and mastery | Current V2 product invariant | Practice participation ≠ demonstrated mastery | App regression tests during later integration |

## Specific conflicts and gaps

1. Current `src/types/golfProgression.ts` stores a singular onboarding `struggle`; the newer UX describes `selectedConcerns[]` plus `primaryConcern`. Define migration and backwards compatibility before implementation.
2. Historical MVP miss-correction lookup must not produce certain cause/prescription from a ball-flight label or single video.
3. Drills and short sample results must not automatically grant mastery; evidence criteria remain provisional until a documented review.
4. Complete original conversation transcripts and key assets remain unavailable for full forensic verification.
5. This is a **content review**, not runtime QA, scientific validation, instructor endorsement or a merge decision.

## Proposed review gate order

- **Gate A — Owner editorial scope:** confirm categories, coaching roadmap, personal-vs-general separation, and provisional content handling.
- **Gate B — Source/provenance:** retrieve and verify original logs, media and reports; resolve ambiguous dates and quotes.
- **Gate C — Technical and coach validation:** compare causes and drill safety with Justin and credible research; mark approval explicitly.
- **Gate D — Data contracts and tests:** map content schema to existing app state, preserve XP/mastery invariants, privacy and missingness.
- **Gate E — Explicit owner integration authorization:** only then create app-code PR or merge content into working V2.

## Open owner decisions

1. Keep the 12-step routine as a personal reference and optionally develop a separate, shorter adaptation after coach approval?
2. Treat candidate drills as educational drafts visible in the repository, but not eligible for automatic prescriptions until coach review?
3. Keep unverified historical TrackMan readings confined to research/history rather than app-calibrated metrics?
4. Approve modular practice plans over a hardcoded Monday–Friday schedule?
5. Approve later private storage for personal media/coaching records rather than this public GitHub repo?

**Current authorization:** Review/documentation only; **do not merge** `docs/golf-knowledge-audit-v2` or integrate into application without a new explicit user confirmation.
