# Knowledge → Forge Fit Integration Contract v0.1

**Status:** Design contract only. **No application code changed in Sprint 0.**

## Existing compatibility constraints

- V2 is a Vite/React/TypeScript app; do **not** assume native React Native.
- Keep Player Hub first after onboarding and optional swing/bag/data calibration.
- A session is a parent container for media, manually entered observations and instrument data.
- Existing `src/types/golfProgression.ts` has XP, mastery, quest and onboarding types; assess impact before modifying.
- UX requires multi-concern onboarding, while existing type has singular `struggle`; track as reconciliation ticket, not silently transform.
- Do not assert official TrackMan/Five Iron integration.
- No AI-measured swing data without calibrated and appropriate input.

## Suggested content entity

```json
{
  "id": "swing-analysis-baseline",
  "kind": "assessment",
  "version": "0.1.0",
  "status": "draft-coach-review",
  "title": "Swing Analysis Baseline",
  "objective": "Gather comparable evidence before selecting a correction",
  "prerequisites": [],
  "evidence_required": ["club", "contact_class", "sample_count", "source"],
  "source_ids": ["GH-04", "CHAT-01"],
  "reviewed_by_coach": false,
  "success_criteria": null
}
```

## Proposed provenance contract

Any captured reading must include `source_kind` (`manual`, `trackman_screenshot`, `other_launch_monitor`, `video_observation`), `granularity` (`shot`, `multi_shot`, `session_summary`), `units`, `confidence`, `user_confirmed`, and a private `asset_ref` when applicable. Missing values remain null; they do not become zeros. Do not attach screenshots to specific shots without verified mapping.

## Separation of concerns

- **GitHub:** reusable, permission-cleared instructional material, schemas, provenance catalog without sensitive raw records.
- **Private application storage:** personal sessions, uploaded images/videos, coach notes, identified scores, individual progression.
- **Content pipeline:** Markdown/source ledger → human and coach review → validated JSON → app import; log document version/source hashes.
- **Application progression:** participation XP is idempotent; mastery change requires repeated measured/reviewed performance.
- **Research backlog:** pose estimation, pro comparisons and auto-tracing are not MVP requirements merely because referenced historically.

## Acceptance gates for implementation sprint

1. Review all pending source originals and coach feedback.
2. Agree on stable content schema with existing app types and storage strategy.
3. Confirm consent, file access policy, and data retention for videos and measurement screenshots.
4. Unit-test source/provenance/measurement granularity, plus duplicates and unknown values.
5. Validate no-hardware path and user ability to correct extracted metrics.
6. QA first-run, returning range and reassessment journeys.

## Non-goals for this audit

App code migration, new UI, automatic diagnosis, finalized corrective drill prescriptions, large media commits, public sharing of personal coaching records, and claimed validation of uninspected historical sources.
