# Square Enix UI Design Research

> Design patterns and visual elements from Final Fantasy and Kingdom Hearts games.
> Research compiled: November 2026

---

## Overview

Forge Fit Golf will adopt Square Enix's RPG UI aesthetic, specifically drawing from:
- **Final Fantasy 7 Rebirth** - Modern menu systems
- **Final Fantasy 15** - Sleek HUD and quest tracking
- **Final Fantasy 10** - Sphere Grid (skill tree)
- **Kingdom Hearts** - Command menus and ability systems

---

## Final Fantasy 10: Sphere Grid

The primary inspiration for our Skill Tree feature.

### Visual Layout
- **Shape:** Roughly circular grid of interconnected nodes
- **Structure:** Smaller circular clusters containing abilities
- **Scale:** 828 nodes (Standard) / 792 nodes (Expert)
- **Sections:** 7 areas, one per party member

### Node Types
| Node Type | Visual | Purpose |
|-----------|--------|---------|
| Stat Node | Circular icon | HP, MP, Strength, etc. |
| Ability Node | Highlighted icon | Spells, skills |
| Empty Node | Hollow circle | Placeholder |
| Lock Node | Special marker | Requires specific sphere |

### Color System
| Color | Character/Section |
|-------|-------------------|
| Red | Auron (strength) |
| Yellow | Tidus (speed) |
| Green | Rikku (agility) |
| Blue | Kimahri (magic) |
| Purple | Lulu (black magic) |
| White | Yuna (white magic) |
| Orange | Wakka (accuracy) |

### Visual States
| State | Appearance |
|-------|------------|
| Available | Highlighted ring, accessible |
| Activated | Filled/glowing, learned |
| Locked | Dimmed, needs sphere |
| Current Position | Glowing orb marker |
| Reachable Path | Animated glowing lines |

### UI Elements
- **Pan/Zoom:** Navigate large grid
- **Cursor Path:** Highlighted path showing options
- **Position Marker:** Character's current location
- **Connection Lines:** Show paths between nodes

### Implementation Notes (from recreation project)
```
Components:
- Graph Manager/Controller (coordinates UI)
- Graph View (animations, connections, drag-drop)
- CharacterCursor (selection and movement)
- Node Templates (stat/ability definitions)
- State Tracking (unlocked nodes per character)
```

---

## Final Fantasy 15: HUD & Menus

### UI Style Classification
- **Style:** Flat 2.0 (modern flat with subtle depth)
- **Aesthetic:** 3D Realistic game context
- **Color Theme:** Subtle blue accents (FF tradition)

### UI Components Used
| Component | Description |
|-----------|-------------|
| 3D Space | UI integrated with game world |
| Diegetic Icons | In-world markers |
| Image Grid | Photo/item displays |
| List Menu | Vertical scrolling lists |
| Radial Menu | Quick-select wheel |
| Right Side Menu | Stats/info panels |
| Tabs | Category organization |
| Tile Menu | Grid-based selection |
| Tooltips | Contextual information |

### Visual Characteristics
- **Clean/Minimalist:** Reduced clutter
- **Blue Accent:** Tradition in FF games
- **Sleek/Modern:** Contemporary feel
- **Transparent Overlays:** Non-intrusive HUD

### Critiques to Avoid
- Health bar placement (bottom-right is inconvenient)
- Inventory not at top of menu (JRPG convention)
- Crafting menu prominence over inventory

---

## Final Fantasy 7 Rebirth: Menu Systems

### UI Organization (Lessons Learned)
| Issue | Our Solution |
|-------|--------------|
| Confusing verb naming ("Upgrade Weapons") | Use clear, descriptive labels |
| Party menu doesn't match expectation | Match label to function |
| Crafting menu at top | Prioritize most-used features |
| No loadout saving | Implement preset system |

### Visual Design
- **Polished feel:** High production value
- **Modern JRPG:** Contemporary with classic elements
- **Character-focused:** Stats prominently displayed

---

## Kingdom Hearts: Command Systems

### Two Command Systems

#### 1. Command Menu (KH1, KH2, KH3)
- **Position:** Lower-left corner
- **Structure:** Vertical list
- **Options:** Attack, Magic, Items, etc.
- **Color Change:** Blue (non-combat) → Red (combat)
- **World Theming:** Unique design per world

#### 2. Command Deck (BBS, DDD)
- **Position:** Bottom of screen
- **Structure:** Horizontal deck
- **Color Change:** Blue (non-combat) → Yellow (combat)
- **Cooldowns:** Visual gauge above deck
- **Customization:** Player-arranged abilities

### UI Elements
| Element | Purpose |
|---------|---------|
| Command Menu | Main action selection |
| HP/MP Bars | Character status |
| Command Gauge | Ability charging |
| D-Link Gauge | Dimension Link meter |
| Focus Gauge | Special ability meter |
| Situation Commands | Context-sensitive prompts |

### Visual Patterns
- **Stained Glass:** World-specific decorative elements
- **Glowing Edges:** Active selection highlights
- **Animated Transitions:** Smooth menu changes
- **Icon-based:** Clear ability representation

---

## Design Patterns for Forge Fit

### Skill Tree (FF10 Sphere Grid Style)
```
Visual Elements:
├── Node Graph (pan/zoom)
├── Node States (available, activated, locked)
├── Color-coded Sections (per golf skill)
├── Current Position Marker
├── Path Highlighting
└── Unlock Animations
```

### Color Palette
| Element | Color | Hex (TBD) |
|---------|-------|-----------|
| Background | Deep charcoal | #1A1A2E |
| Primary accent | Muted green (golf) | #2E7D32 |
| Secondary accent | Metallic gold | #FFD700 |
| Combat/Active | Warm orange | #FF6B35 |
| Passive/Ready | Cool blue | #4A90D9 |
| Locked | Gray | #4A4A4A |
| Achievement | Gold shimmer | #DAA520 |

### Component Patterns
| Pattern | Use In Forge Fit |
|---------|------------------|
| Radial Menu | Quick drill selection |
| Command Deck | Training session actions |
| Progress Bars | XP, mastery, quest progress |
| Tile Menu | Swing library, drill library |
| Tabs | Analysis results, settings |
| Tooltips | Stat explanations, help |

### Animation Principles
- Smooth transitions between screens
- Glowing effects for achievements/unlocks
- Subtle particle effects for level-ups
- Path highlighting for skill tree navigation
- Pulsing for available actions

### Layout Principles
- Character/stats prominently displayed
- Most-used actions easily accessible
- Clear visual hierarchy
- Consistent navigation patterns
- One-handed mobile operation

---

## Implementation Priority

### Phase 1: Core Visual Identity
- [ ] Define color palette with hex values
- [ ] Create glowing/metallic effects in CSS
- [ ] Design node states for skill tree
- [ ] Build progress bar variants

### Phase 2: Skill Tree
- [ ] Implement pan/zoom canvas
- [ ] Create node components with states
- [ ] Add path highlighting
- [ ] Build unlock animations

### Phase 3: Command/Action UI
- [ ] Design quick-action components
- [ ] Create drill selection interface
- [ ] Build session control deck
- [ ] Add context-sensitive prompts

### Phase 4: Polish
- [ ] Add particle effects for achievements
- [ ] Implement smooth transitions
- [ ] Create loading animations
- [ ] Add sound design hooks

---

## References

### Sources
- [Game UI Database - Final Fantasy XV](https://www.gameuidatabase.com/gameData.php?id=123)
- [Kingdom Hearts Wiki - Commands](https://www.khwiki.com/Commands)
- [FFX Sphere Grid Recreation (GitHub)](https://github.com/aleksandra1617/FFXSkillUnlockSystem)
- [GameFAQs - FF7 Rebirth Menu Discussion](https://gamefaqs.gamespot.com/boards/371123-final-fantasy-vii-rebirth/80713470)

### Screenshot Sources (to gather)
- [ ] FF10 Sphere Grid screenshots
- [ ] FF15 menu/HUD screenshots
- [ ] FF7R menu screenshots
- [ ] Kingdom Hearts command menu screenshots
- [ ] KH skill/ability screens

---

## Golf-Specific Adaptations

### Skill Tree Sections (like FF10 characters)
| Section | Color | Skills |
|---------|-------|--------|
| Driving | Red | Distance, accuracy, consistency |
| Irons | Blue | Ball striking, trajectory control |
| Woods | Green | Fairway woods, hybrids |
| Short Game | Purple | Chipping, pitching, bunkers |
| Putting | Yellow | Speed control, read, stroke |
| Course Mgmt | Orange | Strategy, club selection |

### Quest Log (like FF15)
- Active quest prominently displayed
- Daily missions listed
- Progress tracked visually
- Rewards previewed

### Command Deck (like Kingdom Hearts)
- Quick session start
- Record swing shortcut
- View analysis
- Log round

