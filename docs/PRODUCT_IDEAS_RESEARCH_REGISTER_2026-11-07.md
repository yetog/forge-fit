# Forge Fit Golf — Product Ideas & UX Research Register

**Date:** 2026-11-07  
**Status:** Exploration backlog — **not committed Sprint 1 scope**  
**Companion:** [Approved UX sitemap and nine user journeys](./UX_SITEMAP_USER_JOURNEYS_V1.md)  
**Product principle:** Research the idea for its contribution to **usability, credible improvement and retention**, not because the feature is exciting in isolation. Preserve a complete first mission loop for players with **no launch monitor or paid facility access**.

## 1. Product direction and constraints

- **Visual direction approved:** mature/cinematic sports RPG in main flows (near-black/charcoal, emerald, restrained gold), expressive RPG effects in the mastery grid, quest unlocks and milestones.
- **Current codebase:** React, TypeScript, Vite, Tailwind, shadcn, responsive web. Native app-store presence is a separate distribution research task, not proof that a full rewrite is necessary.
- **Initial UX north star:** onboarding → calibration optional → automatically assigned first quest → practice session → progress. XP for practice; mastery only with supporting evidence.
- **Asset creation:** user will own a dedicated Gemini Gem as a visual designer / asset generation assistant, with Leonardo API a possible scale/batching alternative. **Do not generate asset prompt packs in this UX workstream**; maintain a separate art-direction brief after layouts are approved.
- **Research policy:** do not copy competitor source, art, trademarks or premium content; identify interaction patterns, permission requirements, usability and licenses.

## 2. Ideas register

| ID | Opportunity | UX hypothesis / user value | Research needed | Timing / decision |
|---|---|---|---|---|
| IDEA-01 | Gemini Gem as art director | Consistent original visual identity, repeatable asset concepts at low incremental cost given existing access | Brief/context, style bible, output consistency, rights/terms, versioning, export format | **Later art-design chat**, after Player Hub wireframe |
| IDEA-02 | Leonardo API production pipeline | Faster batch generation, possible design exploration and systematic A/B variants | API pricing/limits, asset licensing, style control, review workflow and storage | Optional; compare against Gemini first |
| IDEA-03 | Visual A/B tests | Identify readable, motivating onboarding, Hub, avatar and quest treatments | Controlled test variant, sample size, success metrics; avoid changing 6 factors at once | After functional prototypes |
| IDEA-04 | Google Play launch | Make app discoverable/installable on Android | Developer account, distribution type, target API, data safety, privacy, review, signing, testing; PWA vs native/Capacitor | Separate release-readiness research |
| IDEA-05 | Apple App Store launch | iOS discoverability and mobile UX | Apple Developer membership, app review, privacy nutrition labels, SDK/build/signing, in-app purchase rules, entitlement needs; wrapper vs native | Separate release-readiness research |
| IDEA-06 | Competitor UX study | Identify frictionless video editor, club management, metrics views, drill instruction and progression patterns | Screenshots/screen recordings, precise tasks, feature matrix, user feedback, dark patterns | Ongoing UX research |
| IDEA-07 | Exercise/drill YouTube links | Clear short demonstrations inside workouts and drills | Embed availability, approved video rights, attribution, URL health checks, no unsupported downloading | UX prototype, then integration |
| IDEA-08 | Five Iron Golf / TrackMan user workflow | Allow golfers who practice at an equipped facility to bring real range data into Forge Fit | What data users can access/export, permission and terms, potential partnership, compatibility and user journey | Research, **no assumed integration** |
| IDEA-09 | Screenshot import of range stats | Phone screenshot → structured fields → confirmation → session/club attachment; works without official vendor API | OCR/vision accuracy, shot-vs-aggregate, club association, units and consent | UX P1 after baseline |
| IDEA-10 | TrackMan CSV/manual shot data | Better calibration than screenshot alone | User export availability/format and legal access; editable manual alternative | Research |
| IDEA-11 | No-hardware baseline | Similar value for novices and serious golfers without TrackMan | Manual bag mapping, swing video with limitations, standardized shot challenges, coaching reflections | **Core UX requirement** |
| IDEA-12 | Pro/coach comparison | Longitudinal swing improvement, instructive reference viewing | Licensed content, comparable capture setup, phase alignment, owner permissions | Studio P1/P2 |
| IDEA-13 | “19th hole” recap / round clipping | Turn practice and rounds into memories and optional social content | Consent, storage, clip selection UX and export | Future engagement |
| IDEA-14 | Automatic ball tracer | Compelling visual shareable golf content | Real camera constraints, manual override, latency and validity | Future R&D |
| IDEA-15 | Facility-specific journey | “I just practiced at Five Iron” shortcuts without requiring an official integration | Session label, facility opt-in, attach screenshots and videos; avoid venue endorsements without permission | UX exploration |
| IDEA-16 | Club fitting/bag calibration over time | Inform club selection and expose gapping/consistency | Typical carry, sample distributions, half/full swing measurements, evidence confidence | My Bag P1 |
| IDEA-17 | First quest driven by onboarding | Remove Hub dead ends and make personalization feel real | Multiple concerns + primary priority + practice availability mapping | **Sprint 1 UX core** |

## 3. Asset workflow: Gemini Gem / Leonardo (separate creative workstream)

The **Gem should be a project-aware creative director**, not an arbitrary image generator. Supply: approved product promise, cinematic sports RPG style, intended target users, colors/tokens from `COLOR_PALETTE.md`, sitemap/page roles, examples of undesirable clutter, accessibility/readability rules, and asset specs. Ask for **consistent original art** and multiple controlled alternatives. A/B tests should compare the same page/copy with one visual variable changed.

**Generate as illustrations:** player avatars (6–12 consistent portraits), welcome/Hub golf environments, achievement base medallions, optional discipline emblem concepts.  
**Build as code:** primary navigation, cards/forms/CTAs, XP and mastery meters, scorecards, dynamic Sphere Grid, club data visualizations, video trim/compare, charts and pose overlays, responsive animation.  
**Quality gate:** no embedded text/metrics in generated images, no imitation of protected franchise characters/assets, predictable crop/negative space, 1x/2x sizing, mobile-safe contrast, compression and clear usage rights.

**Follow-up:** Create a separate Gemini Gem system brief, visual style bible, approved first asset matrix and text-to-image prompts in a future chat. This register intentionally contains no ready-to-run generation prompts.

## 4. App store research: future decision checklist

**Do not assume current Vite/PWA build is immediately App Store or Play Store ready.** Compare three approaches: (A) improve mobile responsive web/PWA first; (B) package the web app using a supported native shell (e.g. Capacitor, subject to store rules and native functionality); (C) migrate/create React Native screens only if product needs justify it.

Review:
1. In-app camera, video upload and timeline editor capabilities on both platforms.
2. Performance and reliability for offline practice; media library permissions.
3. Store program fees and current policies from official Apple/Google documentation **at execution time** (amounts/policies can change).
4. Identity of publisher (LLC vs individual), store listing metadata, screenshots, localization, terms/privacy and age/content disclosures.
5. User-generated video, permissions, personal data, content moderation if social is added, deletion/export and privacy policy.
6. Payments/subscriptions and app-review obligations if a premium tier is introduced.
7. TestFlight / Google Play testing tracks, release rollback, analytics and crash reporting.

**Decision criterion:** choose the simplest approach that satisfies camera/media, performance, privacy and review requirements; do not rebuild V2 solely for store eligibility.

## 5. Competitor research protocol

Review **Swing AI / GolfCam, TheGrint, 18Birdies, V1 Golf, Arccos, Shot Scope, TrackMan app, Five Iron experience, and other relevant products** as *candidates for UX research*, not assertions of current feature support.

For each: record date/version/platform; user goal; first-run path; number of taps to the task; success and failure states; upload/trim performance; comparison controls; bag metrics; progress visualization; user paywalls; data-export and privacy controls; exact screenshot/video evidence; original interaction idea; legal/licensing considerations.

Suggested reusable test tasks:
- Select two separate improvement concerns and name the primary one.
- Start and finish a practice session without equipment data.
- Add one club and one typical carry sample.
- Import a screenshot and correct a misread number.
- Trim and save one swing; compare it with an earlier swing.
- Return after seven days and identify what actually improved.

Judge each by **time to first value**, completion, clarity, player confidence in data, and desire to return—not animation polish alone.

## 6. Five Iron Golf + TrackMan: realistic opportunity framing

Potential distribution and data source, **not** an existing partnership or API connection. The approachable first journey:

```text
Practice at Five Iron or another simulator/range
  → get user-accessible session metrics/screenshots if permitted
  → open Forge Fit → import/confirm values
  → attach club(s), session date and optional swing video
  → update bag estimates with provenance
  → choose relevant practice quest and track change over time
```

Explore availability and terms of actual facility/session exports; whether users can retrieve data on their own phones; whether data is per-shot or aggregated; possible official developer/partner channels; branding permissions. **Do not scrape private systems, bypass access controls, or promise a vendor integration.**

The experience remains equivalent for non-TrackMan users via manual entries, self-reported baselines, guided challenges, swing uploads and practice logs.

## 7. UX experiments that could be worth testing

| Experiment | A | B | Primary metric |
|---|---|---|---|
| Calibration choice | Optional four-choice screen | First quest first; calibration prompt afterward | First quest started, second-session return |
| Hub presentation | Player/quest hero | Data-first with compact quest card | Start mission rate, task comprehension |
| Concerns | Multi-select grid | Multi-select grid + priority ranking on next step | Completion rate and accuracy of primary concern |
| Bag setup | Choose all clubs first | Start with one commonly used club | First club calibrated |
| Training rewards | Small completion animation | Quiet inline completion state | Next mission rate, user preference |
| Studio import | Upload as primary | Record as primary | First usable swing saved |

**A/B testing rule:** measure one hypothesis at a time; use qualitative interviews initially if sample sizes are small. Do not imply statistical significance from a handful of beta users.

## 8. UX design priorities vs future engineering

**Now / approved sitemap:** five-tab IA, nine canonical journeys, page purpose/primary CTA, optional calibration, multi-select concerns, first quest, meaningful empty/error states, responsive outdoor-first hierarchy.

**Design next:** full novice first-session wireframes; Player Hub high-fidelity north star; My Bag and calibration wireframes; Swing Studio video handling states; reusable component tokens.

**Not Sprint 1 blockers:** direct TrackMan API, Five Iron agreement, Leonardo integration, App Store/Play Store approval, GPU coaching, shot tracer, social feed, paid subscription funnel. These each require a future specification and explicit scope decision.

## 9. Owner requests (non-blocking)

To start the asset chat, creative team needs a preference for portrait style (photoreal or lightly illustrated) and a chosen Hub wireframe. To investigate distribution, product needs intended launch market, platform strategy and business publisher. To evaluate simulator workflow, provide one anonymized example of user-owned TrackMan output and confirm whether the user can download data in that environment.

**No additional user input is required to commit these planning documents.**

Related: [Approved UX blueprint](./UX_SITEMAP_USER_JOURNEYS_V1.md), [V2 Sprint 1 review](./SPRINT_1_V2_REVIEW_2026-11-07.md), [UX design research](./SQUARE_ENIX_UI_RESEARCH.md), [RPG vision](./RPG_VISION.md).
