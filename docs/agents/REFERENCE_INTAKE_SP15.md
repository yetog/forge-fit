# SP15-03 — Visual Reference Intake & Asset Registration

**Status:** BLOCKED — owner preparing high-resolution 15-screen visual reference. No original-image hash or storage link is verified yet.

## Reference record template

```yaml
reference_id: REFERENCE-001
title: Forge Fit 15-screen owner-selected creative concept
owner: project_owner
category: original_creative_reference
file_name: TBD
location: TBD # Drive link or verified GitHub/accessible asset
file_hash_sha256: TBD
dimensions_px: TBD
aspect_ratio: TBD
source_and_rights: owner-provided concept; verify permission for downstream reuse
access: TBD # named users/agents; avoid public player footage
uploaded_at: TBD
design_status: CREATIVE_TARGET
crop_ids:
  - REF-001-HUB
  - REF-001-QUEST
  - REF-001-SKILLTREE
```

## Checks before G0 passes

- [ ] Confirm original source/copy is the **same owner-chosen 15-screen composite** used in discussions.
- [ ] Verify file can be opened by **Art Director and QA**, not only a logged-in owner's browser.
- [ ] Record pixel dimensions and make legible crops at sufficient resolution; do not upscale and pretend to gain source detail.
- [ ] Keep the untouched original; store separately any annotated review crops.
- [ ] Confirm any third-party FFVII Rebirth/FFXV screenshots are used as **research references**, not copied production assets.
- [ ] Add stable reference URL or repository pointer in the active SP15 ticket and manifest.
- [ ] Document the permitted redistribution scope (private team vs publicly accessible preview).
- [ ] Explicitly flag blurry details as uncertainties rather than inventing material geometry.

## Source-of-truth warning

Current Figma Visual DNA board includes a schematic index because direct source-image placement failed. That diagram is **not** the input art reference for any fidelity pass.

## When completed

Change SP15-03 to READY_FOR_G0, update asset/reference manifest and send the Art Director a handoff with source ID, exact node/screen crops, review goals, permitted outputs, and owner contact for creative questions.
