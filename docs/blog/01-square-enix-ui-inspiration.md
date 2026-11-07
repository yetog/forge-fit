---
title: "What Final Fantasy Taught Me About Golf App Design"
subtitle: "Revisiting Square Enix games with UX designer eyes"
date: 2026-11-07
author: Isayah Young-Burke
tags: [design, ux, gaming, golf, final-fantasy, kingdom-hearts]
featured_image: /images/blog/ff10-sphere-grid.jpg
---

# What Final Fantasy Taught Me About Golf App Design

*Revisiting Square Enix games with UX designer eyes*

---

It's probably been 5+ years since I've played Final Fantasy X. Yet I still remember the excitement I felt navigating through the Sphere Grid, watching my characters grow stronger with each node I unlocked. At the time of playing, I didn't really think about the UI of the game—I just sort of... played it.

But since getting into the UX world, I decided to revisit these games with new eyes.

And what I found changed how I think about designing my golf improvement app.

---

## The Problem with Most Golf Apps

Before diving into what I learned, let me explain what I'm building. **Forge Fit Golf** is meant to be an RPG-style golf improvement platform—a place where every practice session, swing analysis, and round you play contributes to your progression as a golfer.

The problem? Most golf apps feel like spreadsheets with a green color scheme.

They throw numbers at you. Handicap trends. Shot dispersion charts. GIR percentages. All useful data, but none of it *feels* like progress. None of it makes you want to come back tomorrow.

I wanted something different. I wanted golfers to feel the same excitement I felt unlocking abilities in Final Fantasy.

---

## The Sphere Grid: A Masterclass in Visual Progression

Let's start with Final Fantasy X's Sphere Grid—arguably one of the most iconic skill progression systems in gaming history.

### What It Is

The Sphere Grid is a massive interconnected web of nodes. Each node represents a stat boost or ability. Your character moves along paths, activating nodes with spheres you collect throughout the game.

### Why It Works

**1. You Can See Everything**

Unlike traditional leveling systems where you just watch a number go up, the Sphere Grid shows you the *entire* landscape of possibility. You can see abilities you haven't unlocked yet. You can see paths you haven't explored. The locked nodes aren't hidden—they're motivation.

**2. Color Creates Identity**

Each character has their own section of the grid, marked by distinct colors:
- **Tidus** (Yellow) — Speed and agility
- **Auron** (Red) — Raw power
- **Lulu** (Purple) — Black magic
- **Yuna** (White) — White magic and healing

You don't need to read labels to know where you are. The color *is* the identity.

**3. Progress Is Physical**

Your character literally moves through the grid. You're not filling a bar—you're *traveling*. There's a position marker showing exactly where you are in your journey. Each session of play moves you forward in space, not just in stats.

### How I'm Applying This to Golf

For Forge Fit, I'm building a Skill Tree with six branches:

| Branch | Color | Inspired By |
|--------|-------|-------------|
| Driving | Red | Auron (power) |
| Irons | Blue | Kimahri (precision) |
| Woods | Green | Rikku (versatility) |
| Short Game | Purple | Lulu (finesse) |
| Putting | Yellow | Tidus (timing) |
| Course Management | Orange | Wakka (strategy) |

Each branch shows your mastery percentage. You can see locked milestones ahead. Your current position glows. When you complete a drill or achieve a milestone, the node animates—just like in FF10.

---

## Kingdom Hearts: Context Changes Everything

Kingdom Hearts has this subtle but brilliant UI pattern that most players never consciously notice.

### The Command Menu

In the bottom-left corner of the screen, there's a menu with options like Attack, Magic, Items. Simple enough. But here's what's clever:

**The menu changes color based on context.**

- **Blue** — Exploration, non-combat
- **Yellow** — Regular combat
- **Red** — Boss battles or story-critical fights

You don't need a notification saying "BOSS BATTLE STARTED." Your peripheral vision catches the color shift, and your brain understands the stakes have changed.

### World-Specific Designs

Even more impressive—in Kingdom Hearts II and III, the Command Menu has a unique visual design for *each world*. Halloween Town has a spooky style. The Pirates of the Caribbean world has a weathered look.

This isn't just decoration. It reinforces where you are emotionally. It makes each world feel distinct without requiring the player to consciously process it.

### How I'm Applying This to Golf

In Forge Fit, I'm implementing similar contextual shifts:

- **Practice Mode** — Calm blue tones, focused on improvement
- **Active Round** — Warmer tones, competition energy
- **Quest Complete** — Gold and celebration colors

The app should *feel* different when you're grinding drills versus playing a tournament round. The UI tells that story without a single word.

---

## Final Fantasy XV: Learning from Mistakes

Not everything Square Enix does is perfect. Final Fantasy XV has a notoriously polarizing UI, and studying its mistakes was just as valuable as studying the successes.

### The Health Bar Problem

In FFXV, the health bar is in the **bottom-right corner**. This goes against decades of gaming convention (top-left is standard) and puts critical information in a place your eyes don't naturally go during combat.

As one UX redesign I studied put it: "Having all the most needed things in one location lets the player make quick changes without dividing attention."

### The Lesson

Just because something looks sleek doesn't mean it's usable. The UI needs to respect where human attention naturally flows, especially in high-intensity moments.

For golf, this means:
- Current hole and score need to be immediately visible during a round
- The "Record Swing" button needs to be reachable with one hand
- Critical stats shouldn't require scrolling

---

## The Philosophy: You Shouldn't Think About the UI

Here's the paradox of great game UI design:

**The best interfaces are invisible.**

When I was 16 playing Final Fantasy X, I wasn't thinking "wow, this skill tree has excellent information architecture." I was thinking "I need three more levels to get Haste for Tidus."

The UI disappeared. What remained was the *experience*—the feeling of growth, the anticipation of the next unlock, the satisfaction of seeing my character's path expand.

That's what I want for Forge Fit. I don't want golfers thinking about the app. I want them thinking about their game.

---

## Bringing It All Together

So what does a Square Enix-inspired golf app actually look like?

### Visual Identity
- **Dark charcoal backgrounds** — Like FF15's menus
- **Muted greens** — Golf context without being cliché
- **Metallic gold accents** — Achievement and progress
- **Glowing effects** — Available actions and unlocks

### Core Patterns
- **Skill Tree** — FF10 Sphere Grid style, showing the full landscape of mastery
- **Quest Log** — FF15 style, daily and weekly missions with clear progress
- **Command Deck** — Kingdom Hearts style, quick actions that change based on context
- **Color-Coded States** — Kingdom Hearts style, the app feels different in different modes

### The Feeling
When a golfer opens the app, they should feel like they're about to continue their adventure. Not check a spreadsheet.

---

## What's Next

I'm currently in the early design sprints for Forge Fit Golf. The documents are written—the vision, the color palette, the component patterns. Now comes the hard part: building it.

If you're interested in following the journey, I'll be documenting the process here. Design decisions, technical challenges, and hopefully some wins along the way.

And if you're a golfer who wishes their practice felt more like leveling up a character—you're exactly who I'm building this for.

---

*Have thoughts on game UI design or golf apps? I'd love to hear from you.*

---

## References

- [Game UI Database - Final Fantasy X](https://www.gameuidatabase.com/gameData.php?id=474)
- [Game UI Database - Final Fantasy XV](https://www.gameuidatabase.com/gameData.php?id=123)
- [Kingdom Hearts Wiki - Commands](https://www.khwiki.com/Commands)
- [Final Fantasy XV UI Redesign (Medium)](https://medium.com/design-bootcamp/final-fantasy-xv-ui-redesign-188d9adadd7)
- [FFX Sphere Grid Recreation (GitHub)](https://github.com/aleksandra1617/FFXSkillUnlockSystem)

