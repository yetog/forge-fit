# Asset Generation, Review, and Storage Pipeline

## Storage architecture
- **GitHub**: prompts and agent contracts, creative briefs, approval status, component specs, asset manifest, small approved web-optimized assets when practical.
- **Google Drive (optional)**: `Forge Fit / 00_Reference / 01_Generated_Candidates / 02_Approved / 03_Export_Web / 04_Figma_Exports / 05_QA_Comparisons / 99_Archive`. Share with least privilege. Drive cannot be assumed connected just because a link exists.
- **Figma**: editable layout, vector symbols and component variants. Generated imagery is linked/imported as separate layers with a stable asset ID.
- **Gemini Gem**: generate candidate prompts/images using the art director prompt; **Leonardo API** an optional alternate production provider after separate cost/rights review.
- **Code**: web-optimized assets referenced by stable local paths or a versioned CDN asset URL; do not hotlink Drive preview pages as production assets.

## Asset record fields (required)
`asset_id,role,screen,variant,format,ratio,resolution,source_model,model_version,prompt_version,seed,original_reference,rights_status,storage_url,figma_node_id,approval_status,approved_by,approved_on,notes`.
Only approved art may be shipped. `source_model` can be `human_vector`; `seed` may be `unknown` when not exposed.

## Naming
`ff-<screen>-<role>-<variant>-vNN.<ext>`. Examples: `ff-hub-course-dusk-v01.webp`, `ff-hub-golfer-portrait-v01.webp`, `ff-quest-border-ornament-v02.svg`, `ff-achievement-first-range-gold-v01.webp`.

## Production sequence
1. Art Director produces reference-based brief: intent, silhouette, art/material references, exact aspect/crop, focal point, safe space, restrictions, and success criteria.
2. Generate 2–3 candidates changing **one visual variable** per comparison where practical.
3. Independent QA assesses actual imagery against owner reference and the future composite, plus source license, originality and anatomy.
4. Owner selects/approves exact `asset_id + version` or returns a revision request.
5. Designer integrates approved art into editable layers and reruns viewport/contrast checks.
6. Engineer optimizes file size, preserves image credits/provenance, uses lazy-loading / responsive crops and tests overlays.
7. Log final screenshot in QA with measurable layout and fidelity difference.

## Image-vs-code guardrail
**Generate:** landscape photography, golfer portrait, cinematic ambient scenery, original collectible trophy art, optional panel **texture** fragments.  
**Design as vector/Figma/code:** unique logo, text, icons, metallic frame geometry, quest cards, buttons, XP bars, navigation, dynamic data, skill-tree paths, chart axes, swing analysis annotations.  
Never ship an AI-rendered screen screenshot as the app itself, and never flatten labels or stats into background art.

## Prompt specification template
```text
ARTIFACT: <asset_id>
SOURCE: Forge Fit owner-approved 15-screen concept, specifically <screen/crop>.
SUBJECT: <original golf-scene object or environment>.
VISUAL TARGET: cinematic Square Enix-caliber UI *craft* in a wholly original golf setting.
MATERIAL: dark forest, charcoal shadow, restrained gilded accent, hand-crafted texture.
COMPOSITION: <ratio, focal anchor, negative space, overlay-safe areas>.
LIGHTING: <time of day / atmospheric depth / golden reflection>.
EXCLUDE: UI text, logos, fake telemetry, copied game art, distorted golf grip/clubs, neon/casino-gold look.
EXPORT: <dimensions, transparency, format>.
REVIEW: compare with reference for mood/visual hierarchy; owner approval required.
```

## Before enabling Drive
Owner chooses a Drive folder owner, access model, rights/licensing policy and approval process. Never store player-uploaded swing videos in a publicly shared art folder; those need a separate consent/privacy/security design.
