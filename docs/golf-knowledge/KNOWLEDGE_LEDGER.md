# Golf Knowledge Ledger v0.1

This is a **triage ledger**, not a library of proven mechanical causes. Each record contains provenance and a validation action. The player's personal records are examples for testing information architecture; they must not be shipped as general prescriptions.

| ID | Topic | Finding / proposed model | Evidence class | Origin | Next verification |
|---|---|---|---|---|---|
| K-001 | Inconsistent iron contact | Player reports approximately 3 flushed of 5 in a recent practice sequence, with occasional chunks | SELF_REPORTED | Nov 2026 current discussion | Film matched good/miss swings; log turf-before-ball vs thin |
| K-002 | Heel strike | Player reports coach/fitting discussion identified heel-biased misses | SELF_REPORTED secondhand coaching | Nov 2026 fitting recap | Obtain original impact tape/face spray result and Justin's explanation |
| K-003 | Address spacing | Player notices inconsistent distance from ball may change delivery | SELF_REPORTED / HYPOTHESIS | Nov 2026 fitting recap | Use identical reference setup; compare 10 strikes; coach evaluate |
| K-004 | Low point | Ball-first contact and consistent low point are plausible focus areas for chunked irons; no confirmed cause | HYPOTHESIS | Swing troubleshooting discussion | Identify strike/turf order with camera or turf marks |
| K-005 | Wrist/face/path | Wrist release or leftward path may contribute to right-curving shots, but not confirmed from video | HYPOTHESIS | Swing troubleshooting discussion | Use shot start/curve + face/path hardware measurements where available |
| K-006 | Longer clubs | Player intends to concentrate on hybrid, 3-wood and fitted driver; reliable stock shots not established | SELF_REPORTED | Fitting recap | Separate tee and turf conditions; capture dispersion |
| K-007 | Pre-shot process | Detailed personal routine covers target visualization, spacing/alignment, posture, clubface, grip, two rehearsals, committed swing, eyes, tempo, release, follow-through and held balance | SELF_REPORTED strategy | Prior project practice discussions | Preserve all 12 stages; ask coach to simplify ON-COURSE execution without deleting source |
| K-008 | Training methodology | Compare baseline, change one variable, retest; track clean/thin/fat, start and curve, carry and confidence | PRODUCT/METHOD proposal | Current troubleshooting and learning discussions | Run repeatability A/B trial; predefine sample count |
| K-009 | Historical TrackMan metrics | Prior discussions mention wide negative club path and later improvements; figures are not verified against original screenshots in this audit | UNVERIFIED HISTORICAL RECOLLECTION | Prior project context | Recover image; write date/club/units/shot-level vs summary |
| K-010 | Lead-knee movement | Player questioned knee flex and vertical motion; no basis to say normal knee extension itself is a fault | SELF_REPORTED concern / HYPOTHESIS | Prior project swing discussion | Face-on video, dynamic assessment with coach |
| K-011 | Fitting | New driver order and possible two-driver idea are equipment decisions, not proof of two-driver benefit | SELF_REPORTED | Fitting recap | Compare loft, shaft, shot dispersion, cost and bag composition |
| K-012 | Competition | Player aims toward an amateur competition | SELF_REPORTED GOAL | Fitting recap | Establish scored-round baseline, handicap and event eligibility |
| K-013 | App onboarding | Player Hub first after onboarding; calibration optional; no-hardware path always usable | PRODUCT DECISION (documented UX) | GH-04 / GH-01 | Implement and QA, no forced TrackMan |
| K-014 | Evidence integrity | Keep shot vs session summary distinct; screenshot fields must be verified by user | PRODUCT DECISION (documented UX) | GH-04 | Provenance contract and tests |
| K-015 | Progression | Participation XP once for substantive session; mastery needs repeatable performance evidence | PRODUCT DECISION | GH-01 / GH-04 / GH-08 | Regression tests, anti-duplicate event keys |
| K-016 | Original golf research | Open source ball-tracer, pose and scorecard technologies were explored under earlier Road to Scratch concept | EXTERNAL_RESEARCH LEAD | LIB-01 | Verify library licenses, limitations, freshness before implementation |

## Competing explanations for a chunk

A chunk is **an observation of ground-first contact**, not a diagnosis. Possibilities include shifted low point, release timing, posture changes, ball position, excessive effort, uneven turf or another factor. Never infer a specific wrist or knee fault solely from outcome. Request coach verification and paired video.

## Learning-loop contract

**Assess:** baseline shot sample, club and lie, camera views, miss classification, optional measured data.  
**Diagnose:** distinguish observed evidence vs candidate causal explanations; coach or user verification.  
**Prescribe:** one specific coach-approved experiment; include safety and equipment requirements.  
**Practice:** repeatable drill definition with intended shot and conditions.  
**Measure:** before/after success rate, dispersion, carry, strike point and reliability with sample count.  
**Reassess:** compare equivalent conditions, update confidence, either retain drill, change one variable or escalate to instructor.

## Shot intake (candidate, not yet implemented)

`shot_id, session_id, club_id, club_type, lie, swing_length, contact_class, impact_region, start_direction, curve_direction, carry_yards?, club_path_deg?, face_angle_deg?, face_to_path_deg?, attack_angle_deg?, source, evidence_granularity, source_asset_id?, manually_confirmed, captured_at?, notes`

Never conflate manually estimated carry with TrackMan-measured carry. Do not infer a matched video ↔ measurement unless the user identifies the matching shot.
