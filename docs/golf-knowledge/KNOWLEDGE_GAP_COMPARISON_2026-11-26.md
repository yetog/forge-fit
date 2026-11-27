# Comparative Knowledge Gap Audit — Chat Recovery vs Sprint 0 / V2

**Question:** What did prior golf conversations contain that is missing, compressed or only proposed in the current knowledge package?

Classification: **IN KB** = represented in the Sprint 0 / V2 docs; **PARTIAL** = incomplete detail or provenance; **NEW CANDIDATE** = worth adding after review; **BLOCKED** = source/coach verification required; **ARCHIVE** = retain context, do not promote to current requirement.

| Domain | Chat finding | Existing coverage | Classification | Recommended treatment |
|---|---|---|---|---|
| First lesson foundations | Grip/interlock, posture, hands slightly forward, brush grass, lead-side stability, half swings | K-ledger general swing entries; no first-lesson training history | **NEW CANDIDATE** | Build lesson-history summary with attributed origin; ask coach to validate current relevance |
| Learning process | Fighter training-mode analogy, A/B testing, one-variable hypotheses, skill staging | K-008 methodology | **PARTIAL** | Formalize practice experiment record with baseline/retest, one changed factor |
| Pre-shot routine | Ordered 12-step user-authored routine | K-007 compresses to one sentence | **PARTIAL** | Preserve all twelve ordered steps; do not substitute five-stage cue mnemonic |
| Swing-plane pedagogy | Nested tilted semicircular hoops depend on club length; model axes, not literal swing path | K-010 mentions knee but no plane education concept | **NEW CANDIDATE** | Concept document and labeled diagram requirements; distinguish plane/path/attack/release |
| Driver path chronology | Wide negative reported path, improved near −2°, ball still right | K-009 generic historical recollection | **BLOCKED** | Store recovered figures as unverified, separately retrieve original TrackMan |
| Strike and chunk patterns | 3/5 clean, two misses; heel strike in fitting; inconsistent ball spacing | K-001–K-005 | **PARTIAL** | Require strike-vs-turf observations and hypothesis falsification, not preselected wrist fix |
| Knee motion and balance | User questions lead-knee flex/vertical level | K-010 | **IN KB** | Continue observational status; avoid locking knee/torso |
| Full swing / club controls | Shorter irons tend straighter, driver/longer clubs more right curvature | K-005, K-006 broad | **PARTIAL** | Split club/lie-conditioned data and distinguish clubface vs strike vs path |
| Training schedule | Assistant-created Mon–Fri 30/60-minute plan | V2 quest specs, but not reproduced as instruction candidate | **NEW CANDIDATE** | Archive as draft template, require load/skill coach adjustment |
| First drill mechanics | Brush Grass, Stick Finish, partial swing control | MVP plan and K-008 broad | **NEW CANDIDATE** | Build sourced drill candidates, with coach review and adjustable thresholds |
| Shot log semantics | Contact, start, curve, carry, confidence, setup, video, coach feedback | K-008, integration contract + UX | **PARTIAL** | Add type definitions and per-shot/aggregate provenance |
| Approach / chipping | User wants more reliable chips and partial wedges | Coaching brief | **IN KB** | Needs first measured baseline and Justin's planned approach content |
| Four lessons | Analysis → approaches → irons → long clubs | Coaching brief | **IN KB** | Keep owner preference; coach may refine |
| Amateur event readiness | Event aspiration | K-012 and coaching brief | **IN KB** | Separate real-round scoring, putting, rules and handicap eligibility |
| Golf product evolution | Earlier AI/video deferred; later V2 optional Swing Studio and future CV | GH-01, GH-03, UX notes | **PARTIAL** | Version the scope decision and prevent feature creep |
| Social Yaps/tracer app | Prior Road to Scratch research explored scorecards, tracer/social | Ideas register + library text | **ARCHIVE** | Research lead only; no implicit feature approval |
| Cosmetic RPG fidelity | FF-style identity, original 15-screen reference, art approval gates | AGENTS, Sprint 1.5 documentation | **IN KB** | Link to product authority, don't duplicate |
| App XP/mastery integrity | Participation XP distinct from validated mastery | GH-01, GH-04, GH-08 | **IN KB** | Preserve idempotency and provenance |
| Full personal media and chat exports | Several assets and transcripts not fully opened | Inventory indicates pending | **BLOCKED** | Secure originals, do not publish private bulk history |

## Prioritization for the next knowledge-base version

**P0 now:** ordered pre-shot routine; deliberate-practice protocol; comparative swing-plane model; candidate session plans; dated recovery/source index.

**P0 before prescription/automated feedback:** exact original measurement evidence, instructor evaluation of causal claims, shot/video mapping and app content schema review.

**P1 after validation:** curated reusable drills, user-specific adaptive practice targets and progression rules for specific skill nodes.

**Do not import:** arbitrary historical numbers as verified TrackMan records, single-frame wrist or face diagnoses, default “miss → one guaranteed cause” rules, proprietary research code/art from earlier competitors.

## Correction opportunities found

1. `KNOWLEDGE_LEDGER.md` currently compresses 12 pre-shot stages and does not contain exact coach-provenanced first-lesson notes.
2. `SWING_ASSESSMENT_TEMPLATE.md` is a good baseline form, but needs an explicit paired good/miss comparison and source confidence for every key field.
3. `GOLF_MVP_PLAN.md` lists a direct miss-correction lookup; future training logic should use multiple competing causes and measured evidence before prescribing.
4. The older planning text might imply any practice logging increases mastery; the V2 canonical rule is evidence-backed mastery vs participation XP.
5. Older visual or product ideas are provisional until explicitly approved; this audit must not override design authority.

## Decision log requests

- Do we keep the 12-step sequence as an educational checklist and develop a separate short on-course version only after coach approval?
- Should the practice-plan template begin as flexible sessions rather than hardcoded Monday–Friday schedules?
- Which public/private location is approved for full player swing history, original transcript and instructor notes?
- Confirm which lesson sources the coach is comfortable having shared in app training content.

## Completion definition

Audit is **comparison-ready** when every candidate concept has source class, original retrieval status, document destination, relevance, and verification gate. This file meets that standard for material recovered so far, but the overall historical archive remains **partially recovered**.
