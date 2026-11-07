# Forge Fit — Repository Agent Entry Point

> Mandatory for all coding, image generation, art direction, UX and QA agents. Read this **before** generating work.

## Where to start
1. [Multi-agent production system](docs/agents/README.md) — roles, reading order, provisional vs approved.
2. [Shared product context and Nov 7 learnings](docs/agents/PROJECT_CONTEXT_AND_LEARNINGS_2026-11-07.md) — portable history for Claude Code, Gemini and Codex.
3. [Orchestration and human approval gates](docs/agents/ORCHESTRATION.md).
4. [Strict handoff schema](docs/agents/HANDOFF_CONTRACT.md).
5. [Role-specific prompts](docs/agents/AGENT_BOOTSTRAP.md).

## Visual direction — current authority
The **owner's original 15-screen Forge Fit composite** is the creative benchmark. This project aims for the emotional, cinematic, distinctive interface craft of a **Square Enix-caliber golf RPG**, with FFVII Rebirth / FFXV *menus* as external interaction/art-direction references (without copying protected art or trademarks).

**Important correction, Nov 7:** Earlier Figma Player Hub designs and [Brand Code v1](docs/brand/BRAND_CODE_V1.md) are **PROVISIONAL**, NOT visually approved. Their green/gold card layouts did not meet the original reference's fidelity. Do not describe a wireframe, existing Figma frame, brand token JSON or Visual DNA diagram as a high-fidelity approved design. Do not mechanically enforce v1 typography/palette as final art authority until the owner approves a revised visual language. Preserve structural wireframes for user journeys and Figma component planning only.

Current Figma exploration: https://www.figma.com/design/F3xK2e2i2lFYBt1rZZ1p5J . Visual DNA study: https://www.figma.com/design/F3xK2e2i2lFYBt1rZZ1p5J?node-id=11-3 . An agent needing the original reference **must request a verified accessible file** if it is not provided.

## Non-negotiable product guardrails
- Player Hub is the first screen after onboarding and contains an actionable personalized starter quest.
- Video analysis, bag mapping and launch-monitor screenshot calibration are optional. A complete path must exist for golfers without TrackMan equipment.
- Returning range golfer logs practice, optionally attaches video/metrics, gets evidence-aware feedback and participation XP exactly once. Mastery is separate from XP and requires demonstrated improvement.
- Never claim official TrackMan/Five Iron integration without confirming availability and rights; never invent golf metrics or imply inferred video data is hardware-measured.
- Generate original photographic/environmental/achievement assets; interactive UI must stay editable Figma/React/SVG, not a baked screenshot.

## Work and approval rules
- Each agent works within its role and produces complete handoff Markdown with source links, states, QA evidence, known limitations and explicit owner approval request.
- Independent QA compares outputs **side by side with the real user reference** and can reject generic off-brand work.
- No agent may self-approve creative work or silently modify brand authority.
- Maintain exact artifact versions, Git SHA references, Figma node links and asset provenance. Large images may reside in approved Drive storage with manifest references.
- Before coding a visual design, demand an **owner-approved art variant plus approved Figma UX handoff**.
- Changes to this orchestration or visual direction require explicit human decision-log entries, not casual prompt drift.

**First priority:** `VF-001`: faithful high-fidelity original Player Hub; then quest-panel and skill-tree materials; independent quality gate, owner approval, then product design/code.
