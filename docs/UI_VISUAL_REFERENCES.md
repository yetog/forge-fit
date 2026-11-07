# UI Visual References: Square Enix Game Design

> High-quality visual references and design patterns from Final Fantasy and Kingdom Hearts games.
> For Forge Fit Golf RPG-style UI implementation.
> Compiled: November 2026

---

## Table of Contents

1. [Final Fantasy X - Sphere Grid](#final-fantasy-x---sphere-grid)
2. [Final Fantasy XV - HUD & Menus](#final-fantasy-xv---hud--menus)
3. [Final Fantasy VII Rebirth - Menu System](#final-fantasy-vii-rebirth---menu-system)
4. [Kingdom Hearts - Command Menu](#kingdom-hearts---command-menu)
5. [Final Fantasy XVI - Modern Reference](#final-fantasy-xvi---modern-reference)
6. [Extracted Color Palettes](#extracted-color-palettes)
7. [Design Patterns to Adapt](#design-patterns-to-adapt)
8. [Animation & Transition Notes](#animation--transition-notes)
9. [Forge Fit Golf Adaptations](#forge-fit-golf-adaptations)

---

## Final Fantasy X - Sphere Grid

The primary inspiration for Forge Fit's skill tree system.

### Screenshot Sources

| Description | Source URL |
|-------------|------------|
| Sphere Grid Main View | [Final Fantasy Wiki - Sphere Grid Images](https://finalfantasy.fandom.com/wiki/Category:Final_Fantasy_X_Sphere_Grid_Images) |
| Standard Sphere Grid (Full) | [Final Fantasy Wiki - Sphere Grid Article](https://finalfantasy.fandom.com/wiki/Sphere_Grid) |
| HD Remaster Sphere Grid | [Nexus Mods - HD Sphere Grid](https://www.nexusmods.com/finalfantasyxx2hdremaster/mods/19) |
| HD Textures (Original Style) | [Nexus Mods - HD Spheres Re-texture](https://www.nexusmods.com/finalfantasyxx2hdremaster/mods/65) |
| Pinterest Reference | [Pinterest - FFX Sphere Grid](https://www.pinterest.com/pin/final-fantasy-x-sphere-grid--122652789843428289/) |
| Game UI Database | [Game UI Database - FFX](https://www.gameuidatabase.com/gameData.php?id=474) |

### Visual Files Available (Wiki)

- `FFXSphereGrid.jpg` - Overview of full grid
- `Expert sphere grid.jpg` - Expert mode layout
- `FFX Sphere Grid Yuna.png` - Yuna's section detail
- `Sphere-Grid-FFX-HD.JPG` - HD Remaster version
- `Zoomed-out-Expert-Sphere-Grid-FFX-HD.JPG` - Full expert grid (HD)
- `Zoomed-out-Standard-Sphere-Grid-FFX-HD.jpg` - Full standard grid (HD)

### Character Color System

Each character has a unique color that marks activated nodes:

| Character | Color Name | Approximate Hex | Role/Focus |
|-----------|------------|-----------------|------------|
| Tidus | Ocean Blue / Aqua | `#00CED1` | Speed, evasion |
| Yuna | White | `#F5F5F5` | White magic, healing |
| Auron | Red | `#8B0000` | Strength, break abilities |
| Lulu | Purple | `#800080` | Black magic |
| Wakka | Yellow / Orange | `#FFD700` | Accuracy, status effects |
| Kimahri | Blue | `#4169E1` | Flexible, can go anywhere |
| Rikku | Green | `#32CD32` | Agility, theft |

### Node Types & Visual States

| Node Type | Visual Description | State Indicators |
|-----------|-------------------|------------------|
| **Stat Node** | Circular icon (HP, MP, Str, Def, etc.) | Gray when locked, colored when available |
| **Ability Node** | Highlighted circular icon | Glows when selectable |
| **Empty Node** | Hollow circle outline | Can be filled with spheres |
| **Lock Node (Lv 1-4)** | Special marker with level indicator | Requires matching Key Sphere |
| **Current Position** | Glowing orb/marker | Bright pulsing effect |

### Connection Line Styles

| Line State | Visual Treatment |
|------------|------------------|
| Unlocked Path | Solid line, subtle glow |
| Locked Path | Dimmed/grayed line |
| Available Movement | Animated glow effect |
| Activated Section | Character-colored line |

### Key Design Elements to Steal

1. **Circular Node Clusters** - Nodes grouped in small circular arrangements
2. **Glowing Path Lines** - Animated paths showing available movement
3. **Character Color Coding** - Each skill category has distinct color
4. **Position Marker** - Glowing orb shows current location
5. **Zoom Levels** - Support for zoomed-out overview and zoomed-in detail
6. **Node State Transitions** - Visual feedback when unlocking nodes
7. **Diamond Markers** - Small diamonds showing which character activated a node

### Implementation Reference

GitHub project attempting recreation: [FFXSkillUnlockSystem](https://github.com/aleksandra1617/FFXSkillUnlockSystem)

Components documented:
- Graph Manager/Controller (coordinates UI)
- Graph View (animations, connections, drag-drop)
- CharacterCursor (selection and movement)
- Node Templates (stat/ability definitions)
- State Tracking (unlocked nodes per character)

---

## Final Fantasy XV - HUD & Menus

Modern sleek UI with subtle blue accents.

### Screenshot Sources

| Description | Source URL |
|-------------|------------|
| Full UI Database | [Game UI Database - FFXV](https://www.gameuidatabase.com/gameData.php?id=123) |
| Menu Images Category | [Final Fantasy Wiki - FFXV Menu Images](https://finalfantasy.fandom.com/wiki/Category:Final_Fantasy_XV_menu_images) |
| Menu System Article | [Final Fantasy Wiki - Menu (FFXV)](https://finalfantasy.fandom.com/wiki/Menu_(Final_Fantasy_XV)) |
| UI Redesign Analysis | [Medium - FFXV UI Redesign](https://medium.com/design-bootcamp/final-fantasy-xv-ui-redesign-188d9adadd7) |

### Color Palette

FFXV uses a "black and blue" signature palette:

| Element | Color | Hex |
|---------|-------|-----|
| Primary Background | Deep Black | `#0A0A0A` |
| Secondary Background | Dark Charcoal | `#1A1A1A` |
| Primary Accent | Steel Blue | `#4682B4` |
| Secondary Accent | Dark Blue | `#1E3A5F` |
| Text Primary | White | `#FFFFFF` |
| Text Secondary | Silver Gray | `#C0C0C0` |
| Active/Selected | Bright Blue | `#00BFFF` |
| Warning/Danger | Muted Red | `#CD5C5C` |

### Logo Color Reference (Official)

| Color | Description |
|-------|-------------|
| Steel-blue through black | Character outlines in logo |
| Royal attire coloring | Steel-blue shades |
| Extended clothing | Black |

### UI Components

| Component | Description | Screenshot Available |
|-----------|-------------|---------------------|
| 3D Space Integration | UI elements in game world | Yes (Game UI Database) |
| Radial Menu | Weapon wheel selection | Yes (Default-Wheel-FFXV.png) |
| List Menu | Vertical scrolling inventory | Yes |
| Tab Navigation | Category organization | Yes |
| Tile Menu | Grid-based item display | Yes |
| Tooltips | Contextual information | Yes |
| Image Grid | Photo viewing interface | Yes |

### Weapon Wheel Variants (Wiki Files)

- `Default-Wheel-FFXV.png`
- `Metallic-Amethyst-Wheel-FFXV.png`
- `Metallic-Cerulean-Wheel-FFXV.png`
- `Metallic-Charcoal-Wheel-FFXV.png`
- `Metallic-Copper-Wheel-FFXV.png`
- `Metallic-Emerald-Wheel-FFXV.png`
- `Metallic-Gold-Wheel-FFXV.png`
- `Metallic-Silver-Wheel-FFXV.png`
- `Nightstar-Blue-Wheel-FFXV.png`
- `Nightstar-Gold-Wheel-FFXV.png`

### Key Design Elements to Steal

1. **Radial Menu Design** - Quick-select wheel for items/weapons
2. **Transparent Overlays** - Non-intrusive HUD elements
3. **Blue Accent System** - Consistent blue highlighting
4. **Tab Organization** - Clean category switching
5. **Tooltip System** - Contextual help on hover/focus

### Design Critiques to Avoid

| Issue | Our Solution |
|-------|--------------|
| Health bar in bottom-right | Place important stats in natural eye path (top-left) |
| Scattered information | Group related info together |
| Hidden button mappings | Always show controls |
| Combat menu doesn't pause fully | Ensure pause menu actually pauses |

---

## Final Fantasy VII Rebirth - Menu System

Modern JRPG menu system with materia-based customization.

### Screenshot Sources

| Description | Source URL |
|-------------|------------|
| Menu System Wiki | [Final Fantasy Wiki - Menu (FFVII)](https://finalfantasy.fandom.com/wiki/Menu_(Final_Fantasy_VII)) |
| Materia Guide | [The Gamer - Materia FAQ](https://www.thegamer.com/final-fantasy-7-vii-rebirth-materia-faq-guide/) |
| Equipment Menu Guide | [RPGSite - Materia Guide](https://www.rpgsite.net/guide/15536-final-fantasy-vii-rebirth-materia-guide-full-materia-list-unlock-locations) |
| Game8 Materia List | [Game8 - Materia List](https://game8.co/games/Final-Fantasy-VII-Rebirth/archives/Materia) |

### Materia Color System

Iconic color-coded orb system:

| Materia Type | Color | Hex | Description |
|--------------|-------|-----|-------------|
| Magic | Green | `#32CD32` | Spells (Fire, Ice, Lightning, etc.) |
| Command | Yellow | `#FFD700` | Special actions (Steal, Enemy Skill) |
| Support | Blue | `#4169E1` | Link effects (All, Magnify) |
| Independent | Purple | `#9370DB` | Passive buffs (HP Plus, MP Plus) |
| Summon | Red | `#DC143C` | Summon creatures |

### Menu Structure

| Menu Section | Purpose |
|--------------|---------|
| Materia & Equipment | Character loadout management |
| Items | Consumables and key items |
| Abilities | View learned skills |
| Assess | Enemy information database |
| Settings | Game options |

### Equipment Screen Elements

| Element | Visual |
|---------|--------|
| Weapon slots | Up to 6 materia slots per weapon |
| Armor slots | 2-8 slots depending on armor |
| Linked slots | Connected slots show interaction |
| Summon slot | Single dedicated slot per character |
| Stat changes | Blue text indicates stat improvements |

### Key Design Elements to Steal

1. **Color-Coded Orbs** - Instant visual category recognition
2. **Linked Slots** - Visual connection between paired items
3. **Stat Preview** - Show changes before confirming
4. **Character Silhouettes** - Identity in menus
5. **Overview vs Detail** - Quick view + deep dive options

### UX Lessons

| Issue Noted | Our Adaptation |
|-------------|----------------|
| Swapping via equipment, not materia menu | Clear, direct paths to common actions |
| No loadout saving | Implement preset system for drills |
| Tedious one-at-a-time changes | Bulk editing where possible |

---

## Kingdom Hearts - Command Menu

Dynamic action-oriented menu system with contextual design.

### Screenshot Sources

| Description | Source URL |
|-------------|------------|
| KH2 Command Menu Images | [KH Wiki - KH2 Command Menu Images](https://www.khwiki.com/Category:Kingdom_Hearts_II_Command_Menu_images) |
| KH3 Command Menu Images | [KH Wiki - KH3 Command Menu Images](https://www.khwiki.com/Category:Kingdom_Hearts_III_Command_Menu_images) |
| Commands Article | [KH Wiki - Commands](https://www.khwiki.com/Commands) |
| Situation Command | [KH Wiki - Situation Command](https://www.khwiki.com/Situation_Command) |
| KH UI Database | [Game UI Database - KH](https://www.gameuidatabase.com/gameData.php?id=676) |
| DeviantArt Recreations | [DeviantArt - KH Command Menu](https://www.deviantart.com/fieryexplosion/art/Kingdom-Hearts-III-First-Command-Menu-2-0-832571698) |
| Nexus Mods Expanded UI | [Nexus Mods - KH3 Expanded Command Menu](https://www.nexusmods.com/kingdomhearts3/mods/2305) |
| Sprite Resources | [Spriters Resource - KH 358/2 Days](https://www.spriters-resource.com/ds_dsi/kh358/asset/25495/) |

### Color State System

The Command Menu changes color based on context:

| State | Color | Hex (Approximate) | Context |
|-------|-------|-------------------|---------|
| Non-Combat | Blue | `#4169E1` | Exploration, safe areas |
| Regular Combat | Yellow | `#FFD700` | Standard enemy encounters |
| Story Battle / Boss | Red | `#DC143C` | Mandatory battles, bosses |
| Ability Ready | Cyan/Teal | `#00CED1` | Special moves charged |

### Kingdom Hearts Palette (Fan Extracted)

From color-hex.com Kingdom Hearts palette:

| Color | Hex | RGB |
|-------|-----|-----|
| Sora Red | `#E15239` | 225, 82, 57 |
| Gold/Yellow | `#F8C169` | 248, 193, 105 |
| Pink/Light Purple | `#DBA8CD` | 219, 168, 205 |
| Green | `#8EBC4F` | 142, 188, 79 |
| Blue | `#185FAD` | 24, 95, 173 |

### World-Specific Command Menu Designs

**Kingdom Hearts II worlds with unique menus:**
- Twilight Town (multiple variants)
- Mysterious Tower
- Hollow Bastion / Radiant Garden
- Land of Dragons
- Beast's Castle
- Olympus Coliseum
- Disney Castle
- Port Royal
- Halloween Town
- Christmas Town
- Atlantica
- 100 Acre Wood
- Space Paranoids
- Pride Lands
- Underworld
- The World That Never Was

**Kingdom Hearts III worlds:**
- Olympus
- Toy Box
- Kingdom of Corona
- Monstropolis
- Arendelle
- The Caribbean
- San Fransokyo
- 100 Acre Wood
- Keyblade Graveyard
- Scala ad Caelum

### Command Menu Structure

| Position | Element |
|----------|---------|
| Top | Attack / Current action |
| Second | Magic |
| Third | Items |
| Fourth | Special / Drive / Form |
| Above Menu | Situation Commands (KH3) |

### Hidden Mickey Element

In Kingdom Hearts II, each world's Command Menu design features a Hidden Mickey symbol (requires opening sub-menus or watching animations to see).

### Situation Commands (KH3)

| Element | Description |
|---------|-------------|
| Position | Above main command menu |
| Activation | Triangle / Y button |
| Timer | Visual gauge showing time until expiration |
| Cycling | L2/LT to switch between multiple options |
| Types | Attraction Flow, Grand Magic, Formchanges, Team Attacks |

### Key Design Elements to Steal

1. **Contextual Color Changes** - Menu color reflects state (training vs competition)
2. **World/Theme Customization** - Different visual themes per course/mode
3. **Situation Commands** - Context-sensitive action prompts
4. **Smooth Animations** - Transitions between menu states
5. **Timer Gauges** - Visual countdown for timed actions
6. **D-pad Navigation** - One-handed menu control
7. **Hidden Details** - Easter eggs for engaged users

---

## Final Fantasy XVI - Modern Reference

The most recent mainline FF game with refined UI design.

### Screenshot Sources

| Description | Source URL |
|-------------|------------|
| Game UI Database | [Game UI Database - FFXVI](https://www.gameuidatabase.com/gameData.php?id=1784) |
| Menu Images Category | [Final Fantasy Wiki - FFXVI Menu Images](https://finalfantasy.fandom.com/wiki/Category:Menu_images_from_Final_Fantasy_XVI) |
| UI Analysis Article | [Medium - FFXVI Interface Analysis](https://medium.com/@I_am_PD/the-final-fantasy-xvi-interface-a-cabinet-of-curiosities-c0fc7fc554b1) |

### UI Designer

**Hiroshi Minagawa** - Art Director on FFXVI
- Previous: Lead UI Designer on FFXIV (A Realm Reborn, Heavensward)
- Previous: Art Director on FFXIV (Stormblood, Shadowbringers)

### Design Philosophy

"Dark fantasy" aesthetic blending:
- Character designer's light art style
- Dark Game of Thrones-inspired tone
- Heavy focus on lighting and post-processing effects

### Menu Categories (Wiki Files)

- Bestiary screen
- Journal interface
- Lay of the Land (map)
- Missives (quests)
- Mysteries of the Realm
- Persons of Interest
- Title screen
- Wall of Memories

### Key Features

| Feature | Description |
|---------|-------------|
| Dynamic Background | Character in field shown behind menus |
| Camera Pivoting | Different camera angles for each menu section |
| 60fps Menus | Responsive and snappy interface |
| Overlay Design | Menus overlay gameplay, not separate screen |
| Standard Mapping | Shoulder buttons for tabs, X/O for navigation |

---

## Extracted Color Palettes

### Forge Fit Recommended Palette (Inspired by Square Enix)

#### Primary Colors

| Purpose | Color Name | Hex | Usage |
|---------|------------|-----|-------|
| Background Primary | Deep Charcoal | `#1A1A2E` | Main app background |
| Background Secondary | Slate Blue | `#16213E` | Cards, overlays |
| Background Tertiary | Dark Navy | `#0F3460` | Highlighted sections |

#### Accent Colors

| Purpose | Color Name | Hex | Usage |
|---------|------------|-----|-------|
| Golf Green | Forest Green | `#2E7D32` | Primary brand, success |
| Gold Accent | Metallic Gold | `#FFD700` | Achievements, XP |
| Action Blue | Royal Blue | `#4169E1` | Primary actions, links |
| Warning | Amber Orange | `#FF8C00` | Warnings, attention |
| Danger | Crimson | `#DC143C` | Errors, critical |

#### Skill Tree Section Colors (FFX Inspired)

| Section | Color | Hex | Golf Skill Category |
|---------|-------|-----|---------------------|
| Driving | Crimson Red | `#DC143C` | Power, distance |
| Iron Play | Ocean Blue | `#00CED1` | Ball striking |
| Short Game | Royal Purple | `#9370DB` | Touch, finesse |
| Putting | Gold Yellow | `#FFD700` | Green reading |
| Course Strategy | Lime Green | `#32CD32` | Mental game |
| Fitness | Orange | `#FF6B35` | Physical conditioning |

#### State Colors

| State | Color | Hex | Usage |
|-------|-------|-----|-------|
| Available | Bright Cyan | `#00CED1` | Unlockable, ready |
| Activated | Gold Glow | `#FFD700` | Completed, achieved |
| Locked | Dim Gray | `#4A4A4A` | Not yet accessible |
| In Progress | Pulsing Blue | `#4169E1` | Currently working on |
| Combat/Active | Warm Red | `#E15239` | Active session |
| Rest/Passive | Cool Blue | `#185FAD` | Review mode |

### Materia-Inspired Color System (for Drill Categories)

| Drill Type | Color | Hex | Inspired By |
|------------|-------|-----|-------------|
| Swing Drills | Green | `#32CD32` | Magic Materia |
| Challenge Drills | Yellow | `#FFD700` | Command Materia |
| Combo Drills | Blue | `#4169E1` | Support Materia |
| Stat Boosters | Purple | `#9370DB` | Independent Materia |
| Special Events | Red | `#DC143C` | Summon Materia |

---

## Design Patterns to Adapt

### From FFX Sphere Grid

| Pattern | Implementation |
|---------|----------------|
| **Node Graph Canvas** | Pan/zoom skill tree with touch support |
| **Character Color Coding** | Each golf skill area has signature color |
| **Path Highlighting** | Show available upgrades with glowing lines |
| **Position Marker** | Current skill level indicator |
| **Cluster Organization** | Related skills grouped visually |
| **Lock/Unlock Animation** | Satisfying visual feedback on achievement |

### From FFXV HUD

| Pattern | Implementation |
|---------|----------------|
| **Radial Quick Menu** | Quick-access drill selection |
| **Transparent Overlays** | Non-intrusive session tracking |
| **Blue Accent System** | Consistent highlighting |
| **Tab Organization** | Clean category navigation |

### From FF7 Rebirth

| Pattern | Implementation |
|---------|----------------|
| **Color-Coded Orbs** | Drill type indicators |
| **Stat Preview** | Show improvements before completing |
| **Linked Elements** | Related drills/skills connection |
| **Overview + Detail** | Quick view and deep dive options |

### From Kingdom Hearts

| Pattern | Implementation |
|---------|----------------|
| **Contextual Color Change** | UI adapts to session type (practice vs competition) |
| **Situation Commands** | Context-sensitive action prompts |
| **Theme Variations** | Different visuals per course/mode |
| **Timer Gauges** | Visual countdown for timed drills |

---

## Animation & Transition Notes

### Node Unlock Animation (FFX Style)

```
Sequence:
1. Node glows brighter (0.3s ease-in)
2. Particle burst from center (0.2s)
3. Color fills from edge to center (0.4s)
4. Connecting lines illuminate (0.3s)
5. Adjacent nodes pulse briefly (0.2s)
```

### Menu Transition (KH Style)

```
Sequence:
1. Current menu fades slightly (0.15s)
2. New menu slides in from direction (0.25s)
3. Focus element highlights (0.1s)
```

### State Change (FFXV Style)

```
Non-combat to Combat:
1. Color shift from blue to warm (0.3s)
2. UI elements sharpen/brighten (0.2s)
3. Optional sound effect
```

### Achievement Popup

```
Sequence:
1. Slide in from edge with gold glow
2. Particle shower behind badge
3. Hold for 2-3 seconds
4. Fade out with shrink
```

### Recommended Easing Functions

| Animation Type | Easing |
|----------------|--------|
| Menu transitions | `ease-out` |
| Node unlocks | `ease-in-out` |
| Hover effects | `ease` |
| Progress bars | `linear` |
| Popups | `cubic-bezier(0.34, 1.56, 0.64, 1)` (overshoot) |

---

## Forge Fit Golf Adaptations

### Skill Tree Sections (FFX Character Zones)

| Golf Category | Color | Nodes Include |
|---------------|-------|---------------|
| **Driving** (Red) | `#DC143C` | Driver distance, accuracy, consistency, tee shots |
| **Iron Play** (Blue) | `#00CED1` | Ball striking, trajectory, distance control |
| **Short Game** (Purple) | `#9370DB` | Chipping, pitching, bunker play, lob shots |
| **Putting** (Gold) | `#FFD700` | Speed control, read, stroke mechanics, lag putting |
| **Course Strategy** (Green) | `#32CD32` | Club selection, shot planning, risk management |
| **Fitness** (Orange) | `#FF6B35` | Flexibility, strength, endurance, mobility |

### Command Menu Adaptation

| KH Command | Golf Equivalent |
|------------|-----------------|
| Attack | Start Session |
| Magic | Record Swing |
| Items | View Tips |
| Special | Analyze |
| Situation Command | Quick Actions (based on context) |

### Color State Mapping

| Game State | Color | Golf Context |
|------------|-------|--------------|
| Blue (Non-Combat) | `#4169E1` | Browsing, reviewing stats |
| Yellow (Combat) | `#FFD700` | Active practice session |
| Red (Boss) | `#DC143C` | Competition round |
| Cyan (Ready) | `#00CED1` | Skill ready to unlock |

### Quest Log Adaptation

| Quest Type | Visual Style |
|------------|--------------|
| Daily Missions | Gold accent, expires indicator |
| Weekly Challenges | Blue accent, progress bar |
| Achievement Quests | Purple accent, milestone markers |
| Special Events | Red accent, animated border |

---

## Additional Resources

### Online UI Databases

- [Game UI Database](https://www.gameuidatabase.com/) - 55,000+ UI screenshots
- [Final Fantasy Wiki](https://finalfantasy.fandom.com/) - Official FF image archives
- [Kingdom Hearts Wiki](https://www.khwiki.com/) - KH-specific resources

### Design Recreation Projects

- [FFX Skill Unlock System](https://github.com/aleksandra1617/FFXSkillUnlockSystem) - Unity recreation
- [Neon Skill Tree UI Pack](https://mickyboy9.itch.io/neon-skill-tree-ui-pack-html5-css-rebrand-resell) - HTML/CSS skill tree
- [RPG Skill Tree Generator](https://www.rpgskilltreegenerator.com/) - Online tool

### Tutorials & Guides

- [Making a Skill-Tree With D3 and Vue](https://levelup.gitconnected.com/building-a-rpg-like-skill-tree-98bfdbef01de) - Technical implementation
- [How to Design Skill Trees](https://gamineai.com/blog/how-to-design-skill-trees-and-progression-systems-that-keep-players-hooked) - Design principles

### Mod Resources (High-Quality Textures)

- [Nexus Mods - FFX HD Sphere Grid](https://www.nexusmods.com/finalfantasyxx2hdremaster/mods/19)
- [Nexus Mods - KH3 Expanded Command Menu](https://www.nexusmods.com/kingdomhearts3/mods/2305)

---

## Implementation Checklist

### Phase 1: Visual Foundation
- [ ] Implement color palette CSS variables
- [ ] Create glowing/metallic effect utilities
- [ ] Design node component with 3 states
- [ ] Build progress bar variants

### Phase 2: Skill Tree
- [ ] Implement pan/zoom canvas (react-zoom-pan-pinch)
- [ ] Create node components with state transitions
- [ ] Add path highlighting with SVG
- [ ] Build unlock animations (framer-motion)

### Phase 3: Command/Action UI
- [ ] Design quick-action floating menu
- [ ] Create session control deck
- [ ] Build context-sensitive prompts
- [ ] Add contextual color system

### Phase 4: Polish
- [ ] Add particle effects for achievements
- [ ] Implement smooth screen transitions
- [ ] Create loading animations
- [ ] Add sound design hooks

---

*This document serves as a visual reference guide. Actual screenshots should be downloaded from the linked sources for design reference.*
