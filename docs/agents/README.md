# Forge Fit — Multi-Agent Production System v1

**Status:** Active workflow proposal; design fidelity awaiting owner approval.  
**Project:** Forge Fit / Road to Scratch. **Repository:** `yetog/forge-fit`, feature branch `feature/forge-fit-golf-v2-sprint1`.  
**Start here for any agent or human teammate.**

## Mission
Build **the Square Enix-caliber golf RPG**: cinematic, emotionally distinctive quest and progression interfaces *with credible, practical golf training*. The reference is the owner's 15-screen Forge Fit composite, supported by UI research from Final Fantasy VII Rebirth and Final Fantasy XV. Those games are inspiration for hierarchy, layering, mood and interaction—not artwork to copy.

## Critical correction (Nov 7, 2026)
Existing Figma structural screens and `docs/brand/BRAND_CODE_V1.md` are **provisional**. The first-pass green/gold sports dashboard and the visually annotated study board did not reach reference-level polish. No agent may describe them as approved high-fidelity masters. Preserve them as **UX / architecture artifacts**. The gold/green token set is a starting palette, NOT an irrevocable art-direction lock. Final typography, panel material, imagery, logo and ornate quest language require visual approval first. The old `AGENTS.md` wording was superseded by this correction.

## Roles and boundaries
| Agent | Owns | Does NOT own | Primary contract |
|---|---|---|---|
| Art Director / Visual Fidelity | Reference studies, art bible, original assets, visual direction, objective comparison | Navigation or shipped code | [01](./01_ART_DIRECTOR.md) |
| Product / UI / UX Designer | Sitemap, screen interactions, Figma components and prototypes, edge states | Independent rebranding or code implementation | [02](./02_UX_DESIGNER.md) |
| Frontend / Design Systems Engineer | React/Vite/Tailwind implementation, design tokens, accessibility, responsiveness | Inventing visual direction, changing UX rules | [03](./03_FRONTEND_ENGINEER.md) |
| Independent Brand + Product QA | Blind fidelity check, accessibility, flow correctness, regression gates | Unreviewed creative direction changes | [04](./04_BRAND_QA.md) |
| Orchestrator (human/product owner + coordinator) | Briefs, scopes, shared state, resolving disagreements, releases | Bypassing approval gates | [Orchestration](./ORCHESTRATION.md) |

**Operational principle:** Distinct roles can run in separate products (Gemini Gem, ChatGPT/Codex, Claude Code) as long as they share the **same versioned repo context and handoff schema**. Platforms do not share chat memory or proprietary context automatically.

## Canonical reading order (every new session)
1. [Project context + decisions](./PROJECT_CONTEXT_AND_LEARNINGS_2026-11-07.md).
2. This document + [orchestration](./ORCHESTRATION.md).
3. The assigned role's system prompt.
4. [Handoff contract](./HANDOFF_CONTRACT.md) and [asset registry spec](./ASSET_PIPELINE.md) if relevant.
5. Current work ticket, repository files, Figma link, approved asset manifest, and the relevant product specs:
   - [sitemap and journeys](../UX_SITEMAP_USER_JOURNEYS_V1.md)
   - [sprint plan](../SPRINT_PLAN.md)
   - [RPG direction](../RPG_VISION.md)
   - [UI references](../UI_VISUAL_REFERENCES.md)
   - [legacy brand guidance — provisional](../brand/BRAND_CODE_V1.md)
6. Original 15-screen user-supplied reference (image attachment in original chat; **not yet a canonical checked-in asset**), or a rights-approved accessible copy designated by the owner.

## What is approved vs. not approved
- **Approved product direction:** Player Hub first; first assigned quest; optional calibration; range practice → media/data import → XP + grounded feedback → progress; hardware-independent path.
- **Approved visual aspiration:** Cinematic Final Fantasy-like world/menu quality, original golf-specific materials, graphic sophistication and emotional progress.
- **Not yet approved:** Prior generic Figma Player Hub as final visual, final typography pair, exact panel ornaments, final logo, exact hero art, final medal set, skill-tree aesthetic.
- **Not assumed built:** Automated screenshot parsing, production voice/AI coaching, hardware API integrations, native app release or complete backend.

## Development gate sequence
Reference → Art direction studies → **owner selects visual direction** → original asset kit → UX component designs → **QA & owner approval** → frontend implementation → visual-regression & product QA → release.

Use [Orchestration](./ORCHESTRATION.md) for state transitions and [Handoff Contract](./HANDOFF_CONTRACT.md) for non-optional output fields.

## Figma workspaces
- Existing design file: https://www.figma.com/design/F3xK2e2i2lFYBt1rZZ1p5J
- Initial wireframes: structural reference, NOT approved fidelity.
- Visual DNA board: https://www.figma.com/design/F3xK2e2i2lFYBt1rZZ1p5J?node-id=11-3 (research/exploration)
- Keep future experiments separate from `APPROVED` components.

## Sprint 1.5 — active planning bridge
The current milestone is [Sprint 1.5: Visual Fidelity & Multi-Agent Operationalization](../SPRINT_1_5_VISUAL_FIDELITY.md). It follows owner-reported Sprint 1 completion and precedes Sprint 2 implementation. Intake checklist: [REFERENCE_INTAKE_SP15.md](./REFERENCE_INTAKE_SP15.md); QA gates: [SPRINT_1_5_QA_WORKSHEET.md](./SPRINT_1_5_QA_WORKSHEET.md). Documented workflow readiness is **not** completion of the artistic, UX, or engineering gates.

## Immediate prioritized assignment
**VF-001: Artistically reconstruct one Player Hub** faithful to the original 15-screen creative reference. Study panel metalwork, cinematic scene, avatar, marks, controls and skill progression; produce 2–3 variants with a critique matrix; seek owner approval before handing it to UX and code. This is **not** another generic first-pass Figma redraw.

## Definition of done
Not “file created,” “screenshot looks passable,” or “works in code.” Requires reference-aligned visual language, explicit asset provenance, editable UX, implemented states, accessible/mobile behavior, honest data sourcing, an independent QA pass and owner sign-off. Any unmet gate stays `NEEDS_REVISION` or `BLOCKED`.
