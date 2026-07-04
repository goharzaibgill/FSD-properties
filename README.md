# FSD Properties — Faisalabad Ka #1 Property Portal

A premium, production-ready real estate website for Faisalabad, Pakistan. Pure HTML5 + CSS3 + Vanilla JavaScript — no frameworks, no build tools, no dependencies.

## Live Preview

Open `index.html` in any browser to view the site.

---

## Features

### Property Listings
- **24 properties** across 6 types: Houses, Apartments, Plots, Shops, Offices, Warehouses
- **Real Unsplash images** — 3 images per property (72 total)
- Grid/List view toggle on listing page
- **8 advanced filters**: Search, Type, Area, Purpose, Price, Beds, Size, Sort
- Pagination with 6 properties per page
- Property cards with zoom-on-hover, gold glow "View Details", save/heart button

### Property Detail Page
- Photo gallery with thumbnail navigation — click thumb to change main image
- Lightbox zoom with smooth scale-in animation
- Key details grid (beds, baths, size, floor, furnishing, date, views, parking)
- Full description, features checklist, location map placeholder
- Agent sidebar with Call, WhatsApp, Schedule Visit buttons
- Similar properties section
- Copy link & share on WhatsApp

### 20 Real Estate Agents
- Pakistani names with realistic Faisalabad area specializations
- Experience: 2–15 years | Rating: 3.8–5.0 | Reviews: 28–312
- Urdu/English bio for each agent
- Agent cards with search + area filter
- Detail pages with contact actions

### Mortgage Calculator
- Home loan calculator (principal, rate, tenure → monthly EMI)
- Rent affordability calculator (income → max affordable rent)
- Amortization summary
- Area-wise price reference table for 10 Faisalabad areas

### Saved Properties
- Heart/save button on every card and detail page
- Saved count in navbar
- Dedicated saved properties page (localStorage)

### Submit Property
- 4-step form wizard: Basic Info → Location → Features → Photos
- Form validation with progress indicator
- Success confirmation in Urdu/English

### Admin Panel
- Password protected (password: `admin123`)
- Dashboard with stats: properties, agents, listings, views
- Add/Edit/Delete properties and agents
- Table with horizontal scroll on mobile

### Custom SVG Icons
- **60+ custom SVG icons** (Heroicons-style) — zero Font Awesome dependency
- 6 colorful illustration-style category icons (House, Apartment, Plot, Commercial, Office, Warehouse)
- All icons inline SVG — no external requests

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, clamp()) |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | localStorage |
| Fonts | Google Fonts (Playfair Display + Poppins) |
| Icons | Custom inline SVG |
| Images | Unsplash CDN |

**No React, no npm, no build tools, no frameworks.**

---

## File Structure

```
fsd-properties/
├── index.html              # Homepage
├── properties.html         # Property listing with filters
├── detail.html             # Property detail page
├── agents.html             # Agent listing
├── calculator.html         # Mortgage calculator
├── saved.html              # Saved properties
├── submit.html             # Submit property form
├── admin.html              # Admin panel
├── favicon.svg             # SVG favicon (gold house icon)
├── css/
│   └── style.css           # Complete theme (53KB)
├── js/
│   ├── data.js             # All data: 24 properties, 20 agents, 25 areas
│   ├── icons.js            # 60+ SVG icon definitions + category illustrations
│   └── main.js             # Shared JS: navbar, cards, save/unsave, animations
└── README.md               # This file
```

---

## Pages

### Homepage (`index.html`)
- Hero section with real estate background image + search bar
- Stats counter (500+ Properties, 24 Agents, 50 Agents, 25 Areas, 1000+ Clients)
- 4 featured properties in 2-column grid
- 6 property categories with colorful SVG icons
- 10 popular areas grid
- 8 agent cards
- "Why Choose Us" section with SVG icons
- Full footer with contact info

### Properties (`properties.html`)
- Page hero with title
- 8-filter bar (search, type, area, purpose, price, beds, size, sort)
- Grid/List view toggle
- Property cards with real images
- Pagination
- Empty state with SVG illustration

### Property Detail (`detail.html`)
- Breadcrumb navigation
- Photo gallery with thumbnails + lightbox
- Key details grid
- Description section
- Features & amenities checklist
- Location section with map placeholder
- Save, WhatsApp, Copy Link actions
- Agent sidebar card
- Similar properties

### Agents (`agents.html`)
- Agent search + area filter
- Agent cards with avatar, rating stars, experience, specialization
- Verified badge for trusted agents

### Calculator (`calculator.html`)
- Two tabs: Mortgage Calculator & Rent Affordability
- Input fields with real-time calculation
- Result card with monthly payment breakdown
- Amortization summary table
- Area-wise price reference for 10 Faisalabad areas

### Saved Properties (`saved.html`)
- Shows all saved/hearted properties
- Empty state when no properties saved

### Submit Property (`submit.html`)
- 4-step wizard form
- Step 1: Property type, purpose, title, price, size, beds, baths
- Step 2: Area, address, city
- Step 3: Features checkboxes
- Step 4: Photos, description, agent contact
- Progress bar + validation

### Admin Panel (`admin.html`)
- Login screen (password: `admin123`)
- Dashboard with stat cards
- Add/Edit/Delete properties and agents
- Tables with horizontal scroll on mobile

---

## Design System

### Colors
```css
--black: #1a1a1a        /* Primary dark */
--gold: #c9a84c         /* Primary accent */
--gold-light: #e8c97a   /* Light gold */
--secondary: #2c2c2c    /* Secondary dark */
--bg-cream: #f8f5f0     /* Page background */
--card-bg: #ffffff       /* Card background */
--border: #e8e0d0       /* Borders */
--success: #10b981      /* Green */
--whatsapp: #25d366     /* WhatsApp green */
--danger: #ef4444       /* Red */
```

### Typography
- **Headings**: Playfair Display (serif) — luxury feel
- **Body**: Poppins (sans-serif) — clean readability
- Font sizes use `clamp()` for responsive scaling

### Components
- Property cards with hover zoom + gradient overlay
- Agent cards with avatar, rating, verified badge
- Category cards with colorful SVG illustrations
- Gold glow "View Details" links
- Toast notifications
- Modal dialogs
- Form step wizard
- Lightbox image viewer

---

## Responsive Design

Tested at 375px (iPhone SE), 576px, 768px, 1024px.

| Breakpoint | Layout |
|-----------|--------|
| Desktop (>1024px) | 3-col property grid, 4-col agents, full navbar |
| Tablet (768-1024px) | 2-col grids, hamburger menu |
| Mobile (<576px) | 1-col grid, stacked layouts, 44px touch targets |

**Key responsive features:**
- `box-sizing: border-box` on all elements
- `overflow-x: hidden` on body — zero horizontal scroll
- `clamp()` font sizes for smooth scaling
- Hamburger menu with slide-from-right animation + overlay backdrop
- All inputs/buttons min 44px height for touch
- Detail page stacks vertically on mobile
- Filter bar stacks vertically on mobile
- Footer single column on mobile
- Admin table horizontal scroll on mobile

---

## Data

### Properties (24)
| # | Title | Type | Area | Price |
|---|-------|------|------|-------|
| 1 | Modern 10 Marla House | House | Susan Road | 1.2 Crore |
| 2 | Luxury 1 Kanal House | House | Gulberg Colony | 3.5 Crore |
| 3 | Affordable 5 Marla House | House | Peoples Colony | 65 Lakh |
| 4 | Commercial Plot 4 Marla | Plot | Canal Road | 45 Lakh |
| 5 | Furnished 2 Bed Apartment | Apartment | Madina Town | 45,000/mo |
| 6 | 3 Marla Residential Plot | Plot | Batala Colony | 25 Lakh |
| 7 | Shop in Main Market | Shop | Susan Road | 1.8 Crore |
| 8 | Office Space 1500 sqft | Office | D-Ground | 85,000/mo |
| 9 | 8 Marla House near Canal | House | Canal Road | 1.5 Crore |
| 10 | Warehouse 3000 sqft | Warehouse | Satyana Road | 1,20,000/mo |
| 11–24 | ... | Various | Various | Various |

### Agents (20)
Pakistani names with Faisalabad area specializations, 2-15 years experience, ratings 3.8-5.0, Urdu/English bios.

### Areas (25)
Susan Road, Peoples Colony No.1 & No.2, Gulberg Colony, Madina Town, Jinnah Colony, Canal Road, Satyana Road, GMA, Millat Road, Kohinoor City, Samanabad, D-Ground, Batala Colony, Sitara Colony, Jaranwala Road, Sargodha Road, Sheikhupura Road, Sammundri Road, Jhang Road, Civil Lines, Officers Colony, Gulshan-e-Iqbal, Eden Valley, Other.

---

## How to Run

1. Download or clone the project
2. Open `index.html` in any modern browser
3. No server required — works offline (except Unsplash images)

**Admin Panel:** Go to `admin.html` → Enter password `admin123`

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

---

## License

This is a demo/educational project. All property data is fake and for demonstration purposes only.
