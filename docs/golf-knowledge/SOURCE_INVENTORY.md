# Source Inventory v0.1

**Audit date:** 2026-11-26. Distinguish *inspected* from *referenced but not recovered*. This is **not** a claim of exhaustive chat or asset retrieval.

| ID | Source | Status | Contribution | Risk / follow-up |
|---|---|---|---|---|
| GH-01 | `AGENTS.md` on `feature/forge-fit-golf-v2-sprint1` | Inspected | Agent gates, optional data inputs, XP vs mastery, no invented metrics | Retain as authority |
| GH-02 | `GOLF_MVP_PLAN.md` | Inspected (opening implementation sections) | MVP: dashboard, training path, clubs, sessions, misses; early types | Historical planning; current code may differ |
| GH-03 | `docs/SPRINT_PLAN.md` | Inspected (core sections) | RPG roadmap, training quests, Swing Studio, XP/mastery | Todo states not proof of implementation |
| GH-04 | `docs/UX_FIRST_VISIT_RETURNING_RANGE_JOURNEY_V1.md` | Inspected (core sections) | Hub-first and optional calibration, grouped session media, verification of imports | UX proposal, not runtime proof |
| GH-05 | `docs/SPRINT_1_V2_REVIEW_2026-11-07.md` | Inspected (core sections) | Code-review findings, video/data provenance, existing logger/bag editing | Explicitly not production QA |
| GH-06 | `docs/agents/PROJECT_CONTEXT_AND_LEARNINGS_2026-11-07.md` | Inspected | Multi-agent decisions, provisional design, project context | Not original chat transcript |
| GH-07 | `docs/PRODUCT_IDEAS_RESEARCH_REGISTER_2026-11-07.md` | Inspected (core sections) | Optional TrackMan import, no-hardware baseline, future R&D | Ideas not committed sprint scope |
| GH-08 | `src/types/golfProgression.ts` | Inspected | Existing types for XP, mastery, quests, onboarding | One `struggle` property; UX calls for multi-select |
| CHAT-01 | Current project discussion: swing troubleshooting and fitting recap (Nov 2026) | Available in conversation | Clean vs chunk, heel-strike report, setup variability, long-club plans, four lessons | Player report; coach explanation not yet obtained |
| CHAT-02 | Prior project context: swing-plane arc model, drills, TrackMan history, ForgeFit design (Apr–Nov 2026) | Summarized/referenced; not all original messages re-opened | Retrieval leads and hypotheses only | Recheck original texts and screenshot measurements |
| LIB-01 | Library: `Pasted text.txt` (uploaded Nov 5; golf tech research excerpts) | Search excerpts inspected | Open-source tracer/pose references, earlier Road to Scratch concepts | Secondary research; verify technical assertions and licensing before reuse |
| ASSET-01 | Recent swing clips `IMG_9364.mp4`, `IMG_9365.mp4` | Previously reviewed in conversation | Visual comparison candidates | No reliable per-shot clubface/path data; originals must be consented/verified before storage |
| ASSET-02 | TrackMan screenshots, club-fitting sheet, complete swing diagrams, original 15-screen reference | Not fully recovered for this audit | Priority evidence / product reference | Locate exact originals; do not invent links or metrics |
| GH-09 | Remaining `docs/specs/*`, `src/context/GolfContext.tsx`, `src/pages/GolfSessions.tsx` and full app code | Identified in GH-05, not exhaustively audited here | Future schema/code reconciliation | Read exact current files before implementing |

## Cross-project extraction policy

1. Record source identity, date, scope and whether the source was directly inspected.
2. Record exact figures only after source verification; label historical recollections as unverified.
3. Keep prior app ideas (e.g., social Yaps, automatic tracing) distinct from current Forge Fit decisions.
4. Do not copy full chats or media into a public Git repository.
5. Reconcile all knowledge entries to `src/types/golfProgression.ts` and other live code before import.

## Retrieval queue

- Original swing-plane / hula-hoop diagram and explanatory conversation.
- Historical launch-monitor readings and shot-level data, including their club, units, date and screenshot.
- Justin's exact comments from fitting and a documented strike-pattern diagnosis.
- Coach Ryan's original instruction notes, if available.
- Source of the owner's approved 15-screen visual reference.
- Complete project conversation export for coverage/deduplication *after* targeted retrieval.
