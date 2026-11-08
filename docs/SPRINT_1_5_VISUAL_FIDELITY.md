# Forge Fit — Sprint 1.5: Visual Fidelity & Multi-Agent Operationalization

**Date created:** 2026-11-07  
**Status:** PLANNED / DOCUMENTED — execution pending original high-resolution reference and approval.  
**Placement:** Between Sprint 1 (owner reports complete) and Sprint 2 (High-Fidelity Prototype).  
**Objective:** Establish a *visually approved*, original Square Enix-caliber **golf RPG design language** and demonstrate one reproducible art → UX → QA → code handoff without building more generic screens.

> Sprint 1.5 does not replace Sprints 2–4 and does not claim any additional app functionality is built. This sprint inserts an **art-direction approval dependency** before the high-fidelity Sprint 2 UI implementation. Prior brand token files and Figma studies are exploratory, not owner-approved production art.

## Why this sprint exists

Sprint 1 delivered valuable UX/navigation/progression groundwork, but early generated concept art and programmatic Figma implementation diverged significantly. The 15-screen reference has atmosphere, metallic/ceremonial menu treatment, unique insignia, layered image composition and game-world identity. Figma wireframes established layout but lacked those materials and storytelling. Starting Sprint 2 without fixing that would propagate a visual standard the product owner explicitly rejected.

The owner will curate/provide the high-quality 15-screen source image. In parallel, the orchestration function is accountable for agent workflow setup, reference access protocol, tickets, quality gates, storage design and a demonstrable test run.

## Boundaries and prerequisites

**In scope:** Reference intake; art direction comparison; 2–3 variants of the *same* quest panel; original approved landscape/portrait/ornamental assets or detailed asset-ready briefs; Player Hub high-fidelity target; brand system draft v2; editable Figma prototype on top of approved imagery; independent QA and a documented frontend handoff; small FE proof-of-concept only after dual approval.

**Out of scope:** 15 high-fidelity screens, production backend/auth, video AI pipelines, TrackMan APIs, formal App Store releases, new scorecard features, large new UI architecture, claiming an integrated Google Drive pipeline without actual connection.

**Inputs:** 
- Original 15-screen composite — **BLOCKED until an accessible high-resolution owner-designated file is linked and recorded**; existing Figma schematic is *not* a substitute.
- Relevant FFVII Rebirth / FFXV menu UI references — originals are third-party research, not licensed production art; record sources and extracted transferable properties.
- Existing [sitemap](./UX_SITEMAP_USER_JOURNEYS_V1.md), [sprint plan](./SPRINT_PLAN.md), [role docs](./agents/README.md) and [project learnings](./agents/PROJECT_CONTEXT_AND_LEARNINGS_2026-11-07.md).
- Figma project: https://www.figma.com/design/F3xK2e2i2lFYBt1rZZ1p5J (existing structural screens not visually approved).

## Parallel worktracks and tickets

**Estimates are planning-sized work units (not commitments or verified velocity); total 32 planning points.** Work may run in parallel only when upstream approval prerequisites are respected.

| ID | Owner | Pts | Initial status | Dependency | Deliverable and acceptance |
|---|---|---:|---|---|---|
| SP15-01 | Orchestrator | 2 | DONE (docs) | none | Agent prompts, handoff contract, QA gate, documented roles; verify from `docs/agents/` |
| SP15-02 | Orchestrator | 2 | DONE (docs) | none | Sprint 1.5 baseline, dependency graph, scope and retrospective |
| SP15-03 | Owner + Orchestrator | 2 | BLOCKED (owner ref) | High-res composite | Registered `REFERENCE-001` asset with readable crop, provenance and accessible URL, no secrets |
| SP15-04 | Art Director | 3 | READY AFTER SP15-03 | SP15-03 | Annotated true-reference decomposition of Hub, quest and tree; source-linked FF UI comparison |
| SP15-05 | Art Director + independent QA | 5 | BLOCKED | SP15-04 | 2–3 controlled quest-panel material treatments, fidelity matrix and QA critique |
| SP15-06 | Owner + Art Director | 3 | BLOCKED | SP15-05 | Owner-selected visual treatment with dated artifact/version approval; if rejected, revise |
| SP15-07 | Art Director | 4 | BLOCKED | SP15-06 | Original asset kit (Hub scene, golfer portrait, icon/ornament direction, reusable quest texture), IDs/rights and brand v2 proposal |
| SP15-08 | UX Designer | 5 | BLOCKED | SP15-07 | One high-fidelity editable Hub at 390/320px, playable Hub→first quest and returning-session entry, variants/states, no flattened UI |
| SP15-09 | Independent QA + owner | 3 | BLOCKED | SP15-08 | Source-side visual QA, contrast/flow review, revision log, owner UX approval |
| SP15-10 | Frontend Engineer + QA | 3 | BLOCKED | SP15-09 | Feasibility spike: reusable quest/XP component and correct image layering, optional short-lived branch/PR, tests/screenshot, QA; no main merge without approval |

**Critical path:** SP15-03 → 04 → 05 → 06 → 07 → 08 → 09 → 10.  
**Can happen while waiting on the image:** SP15-01/02, reference intake template, permissions/manifest design, verifying Figma access, preparing test scripts and reviewing existing component architecture without writing high-fidelity UI.

## Deliverables at sprint close

1. **Approved reference pack**: exact designated original Forge Fit image plus annotated source crops; external menu references for inspiration only.
2. **Art direction comparison**: three or fewer controlled material studies with objective criteria, risk list, and independent critique.
3. **Approved Brand Code v2**: explicitly recorded owner approval; tokens/materials/typography/ornaments marked as approved, plus generative image constraints and asset roles. Keep v1 archived/provisional.
4. **Asset manifest**: `asset_id`, prompt and model/version, crop/dimensions, license review, Drive or approved storage locator, Figma node, status, owner approver. No public sharing of player footage.
5. **Player Hub**: one approved high-fidelity composition, editable Figma hierarchy, component variants, functioning navigation to first mission and returning log entry, 390px and 320px checks.
6. **Independent QA report**: reference-versus-candidate evidence, explicit severity-ranked issues and gate dispositions, not a self-grade.
7. **Engineering proof and handoff**: React component feasibility, performance/accessibility notes, tests and screenshots, small PR only if visual/UX gates passed; ownership of unfinished Sprint 2 work identified.

## Art/UX/engineering contract — blocking gates

| Gate | Who signs | Pass condition | Fail condition |
|---|---|---|---|
| G0 Reference integrity | Orchestrator | Original image usable, exact identity and rights documented; key crops readable | Figma schematic or low-resolution substitute silently used |
| G1 Visual fidelity | Independent QA recommends; owner approves | Original composition, mood, materially distinctive menu frame/iconography, clear golf context, original art | Generic dark sports SaaS dashboard; unapproved icon/font/logo; screenshot masquerades as app |
| G2 Usable production design | QA recommends; owner approves | Editable components with states; contrast/320/390 mobile; first quest + returning CTA genuinely navigable; valid asset IDs | Figma only a bitmap, no route/state/empty-error definitions |
| G3 Implementation quality | QA and owner | Faithful reusable React/CSS/SVG implementation; build/tests and responsive evidence; no invented metrics; source provenance | FE “improves” style independently, flat image UI, dead actions, fake XP/mastery |

**Non-negotiable:** No self-approval. A numerical score alone cannot override brand mismatch. Each approved state records the human, timestamp, exact asset/design version and link in `docs/agents/DECISION_LOG.md`.

## Product journey preserved

```text
First visit: welcome → identity / goal / multiple concerns → optional calibration or skip
            → Player Hub (active first quest) → guided quest / session

Returning: Player Hub → practice log → optional video/launch monitor
           → source confirmation → save → participation XP exactly once
           → credible feedback → progression

Serious player: Studio / Bag → data or swing comparison
                → actionable training priority → measured mastery
```

**XP is not mastery.** No TrackMan hardware is required for meaningful use. All design work must preserve these invariants.

## Brand source-of-truth migration plan

- **Now:** original composite (if accessible) is the creative target; `docs/brand/BRAND_CODE_V1.md` and `brand.tokens.json` are provisional; `AGENTS.md` points to the updated role workflow.
- **During G1:** art director proposes a new `docs/brand/BRAND_CODE_V2_CANDIDATE.md` (name and draft status explicit) with defined hierarchy, ornament, typography, image grading, and approved asset IDs.
- **After owner G1 decision:** mark approved baseline and record exact version; designer adopts it in Figma; engineer synchronizes semantic tokens. Do not silently mutate previous designs as though approved.

## Cross-platform orchestration

- GitHub: canonical context, docs, task tickets, decisions and approval IDs.
- Gemini Gem: **art director role**, provided bootstrap, source images and exact ticket. Leonardo may serve as generator after a separate rights/cost evaluation.
- ChatGPT/Codex: coordinator or UX/code role when assigned; not simultaneous editors of same artifacts.
- Claude Code: scoped engineering task or independent QA; no assumed memory of ChatGPT.
- Figma: authoring space for editable design, candidate/approved pages separated.
- Drive or alternative: owner-managed original/reference/assets; agent handoffs include durable URLs or `BLOCKED` if inaccessible.

Each new session begins with `docs/agents/AGENT_BOOTSTRAP.md` and ends with `HANDOFF_CONTRACT.md`. The owner remains final brand arbiter.

## Quality metrics (not fabricated outcomes)

**Target checks:** 100% of candidate screens have reference comparisons; 100% of production assets have provenance and explicit status; 100% of code-facing visual specs have owner/QA approval; no new unapproved arbitrary UI branding; documented accessibility on 320/390 px; one playable first-mission flow.

Review art with 0–4 QA rubric from `docs/agents/04_BRAND_QA.md`, prioritize fidelity dimensions 1–4, and return the work on failure. Metrics are targets until actual tests are performed.

## Retrospective and change-control notes

**What stays:** Sprint 1's user journeys, progressive calibration, XP/mastery distinction, engineering groundwork and original 15-screen product map.  
**What changes:** Art director and independent QA sit ahead of new high-fidelity implementation; the original reference controls the creative quality gate; design system tokens are not promoted to final without approval.  
**What is deferred:** full screen rollouts and original Sprint 2 feature implementation until G1/G2 produce the source-of-truth kit.

**Roadmap consequence:** Sprint 2's high-fidelity work consumes the approved Sprint 1.5 brand system and reusable component language; Sprint 3/4 remain as originally scoped, subject to later planning and security/technical validation. Sprint 1.5 planning points are tracked **separately**, not silently added to inconsistent historical sprint point totals.

## Ownership split while user prepares reference

**User:** Select the best-quality copy of original 15-screen composite; preserve full image and, if possible, individual Player Hub, Quest and Skill Tree crops; provide source/provenance and access method for authorized agents; give creative feedback at G1 and G2.

**Orchestrator:** Maintain sprint definition, agent bootstrap, tickets, intake/QA templates, gate policies, existing plan cross-reference and the next ready-to-execute art-agent brief. Do not claim to be conducting background work after this chat ends.

## Launch instruction (once source arrives)
Read `docs/agents/AGENT_BOOTSTRAP.md` and `docs/agents/01_ART_DIRECTOR.md`; assign `VF-001 / SP15-04` with a verified source link, approved source crop and exact scope. Generate a reference deconstruction **before** inventing new screens. Do not hand to Figma or frontend until G1 owner approval.
