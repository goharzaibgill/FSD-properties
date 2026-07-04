# FSD Properties 🏠 — Complete Project Requirements
> Faisalabad Ka #1 Property Portal
> Developer: Gohar Zaib Gill | Version 1.0 | July 2026

---

## PROJECT OVERVIEW

Build a complete real estate website called **FSD Properties** — Faisalabad's first dedicated premium property portal. Connects buyers, sellers, renters, and agents in Faisalabad with a luxury, professional web experience.

**Tagline:** *"Faisalabad Ka #1 Property Portal"*

---

## TECH STACK

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5 + CSS3 + Vanilla JavaScript |
| Storage | localStorage (saved properties) |
| Fonts | Playfair Display + Poppins (Google Fonts) |
| Icons | Font Awesome CDN |
| Hosting | Netlify |

No React, no npm, no build tools. Pure HTML + CSS + JS.

---

## DESIGN THEME — Luxury Real Estate

```
Primary Black:    #1a1a1a
Accent Gold:      #c9a84c
Gold Light:       #e8c97a
Secondary:        #2c2c2c
Background:       #f8f5f0  (warm cream)
Card BG:          #ffffff
Text Primary:     #1a1a1a
Text Muted:       #6b6b6b
Border:           #e8e0d0
Success:          #10b981
Font Heading:     Playfair Display (elegant serif)
Font Body:        Poppins (clean sans-serif)
Style:            Luxury premium real estate — Zameen.com meets international portals
```

---

## FILE STRUCTURE

```
fsd-properties/
├── index.html          → Homepage
├── properties.html     → Property listing + filters
├── detail.html         → Property detail page
├── agents.html         → Agents listing
├── calculator.html     → Mortgage + rent calculator
├── saved.html          → Saved/favorite properties
├── submit.html         → Submit property form
├── admin.html          → Admin panel
├── css/
│   └── style.css       → Complete styling
└── js/
    ├── data.js         → All properties + agents data
    └── main.js         → All functionality
```

---

## PAGES — DETAILED REQUIREMENTS

### 1. HOMEPAGE (index.html)

**NAVBAR:**
- Logo: 🏠 FSD Properties (black + gold)
- Links: Home | Properties | Agents | Calculator | Submit Property
- "Saved (0)" with heart icon (updates dynamically)
- Mobile hamburger menu
- Sticky with shadow on scroll

**HERO SECTION:**
- Full screen height (100vh)
- Background: dark overlay on Faisalabad city/property image
- Heading (Playfair Display, large):
  "Find Your Dream Property in Faisalabad"
- Subheading: "Faisalabad's most trusted property portal"
- Search bar (large, white, rounded):
  - Dropdown: Buy | Rent | Sell
  - Dropdown: All Areas (25 Faisalabad areas)
  - Input: Budget range
  - Search button (gold)

**STATS ROW:**
- 4 animated count-up stats:
  500+ Properties | 50+ Verified Agents | 25+ Areas | 1000+ Happy Clients

**FEATURED PROPERTIES:**
- Section heading: "Featured Properties"
- 6 property cards in 3-column grid (2 on tablet, 1 on mobile)
- Each card:
  - Property image (placeholder gradient if no image)
  - "Featured" gold badge (top left)
  - Property type badge (House/Plot/Shop etc.)
  - Price (large, gold color)
  - Title
  - Location (📍 Area, Faisalabad)
  - Details row: 🛏 Beds | 🚿 Baths | 📐 Size
  - Agent mini profile (photo + name)
  - Heart icon (save to favorites)
  - "View Details" button

**PROPERTY CATEGORIES:**
- 6 category cards with icons:
  🏠 Houses | 🏢 Apartments | 📐 Plots | 🏪 Commercial | 🏭 Warehouses | 🌾 Agricultural
- Click filters properties page

**POPULAR AREAS IN FAISALABAD:**
- Area cards with property count:
  Susan Road | Peoples Colony | Gulberg | Madina Town | Jinnah Colony |
  Canal Road | Satyana Road | GMA | Millat Road | Kohinoor City

**FEATURED AGENTS:**
- 4 agent cards: Photo, Name, Listings, Rating, WhatsApp button

**WHY CHOOSE US:**
- 4 points with icons:
  ✅ Verified Listings | 🔒 Secure Transactions | 👨‍💼 Expert Agents | 📱 Easy Contact

**FOOTER:**
- Dark background (#1a1a1a)
- Gold accents
- 4 columns: About | Quick Links | Areas | Contact
- Contact: Phone, WhatsApp, Email, Address (Faisalabad)
- Social icons
- Copyright: "© 2026 FSD Properties — Faisalabad Ka #1 Property Portal"

---

### 2. PROPERTIES PAGE (properties.html)

**SEARCH & FILTER BAR (sticky):**
- Search input (real-time)
- Property Type: All | House | Apartment | Plot | Shop | Office | Warehouse
- Area: All + 25 Faisalabad areas dropdown
- Purpose: All | Buy | Rent
- Price Range: dropdown ranges (in PKR)
- Bedrooms: Any | 1 | 2 | 3 | 4 | 5+
- Size: Any | Under 5 Marla | 5-10 Marla | 10 Marla-1 Kanal | 1 Kanal+
- Sort: Newest | Price Low-High | Price High-Low | Most Popular
- Grid/List view toggle
- Results count: "Showing X properties"
- Clear filters button

**PROPERTY CARDS GRID:**
- 3 columns desktop, 2 tablet, 1 mobile
- Same card design as homepage
- Pagination: 12 per page

**EMPTY STATE:**
- "Koi property nahi mili"
- "Apne filters adjust karein"
- Clear filters button

---

### 3. PROPERTY DETAIL PAGE (detail.html)

**HEADER:**
- Property title (Playfair Display)
- Price (large, gold)
- Location breadcrumb: Faisalabad > Susan Road > Property Name
- Purpose badge: FOR SALE / FOR RENT
- Property type badge

**PHOTO GALLERY:**
- Main large image
- 4 thumbnail images below
- Click to expand (lightbox style)
- "View All Photos" button

**KEY DETAILS GRID:**
- 🛏 Bedrooms | 🚿 Bathrooms | 📐 Size | 🏢 Floor
- 🚗 Parking | 🪑 Furnishing | 📅 Posted Date | 👁 Views

**DESCRIPTION:**
- Full property description (3-4 paragraphs)
- Features/Amenities checklist:
  ✅ Gas | ✅ Electricity | ✅ Water | ✅ Internet
  ✅ Generator | ✅ Security | ✅ Boundary Wall | ✅ Garden

**AGENT CONTACT CARD (sticky sidebar):**
- Agent photo, name, verified badge
- "Call Agent" button
- "WhatsApp Inquiry" button (green)
  Pre-filled: "I'm interested in [Property Title] at [Price]. Please contact me."
- "Schedule Visit" button (gold)

**LOCATION:**
- Area name + Google Maps embed placeholder
- Nearby landmarks

**SIMILAR PROPERTIES:**
- 3 property cards

**SAVE & SHARE:**
- Heart button (save to localStorage)
- Share: WhatsApp | Copy Link

---

### 4. AGENTS PAGE (agents.html)

**FILTER:**
- Search by name
- Filter by area specialization

**AGENT CARDS GRID:**
- 4 columns desktop, 2 mobile
- Each card:
  - Profile photo (colored initials if no photo)
  - Name + Verified badge ✅
  - Specialization area
  - Experience (years)
  - Total listings count
  - Rating (stars)
  - "WhatsApp" button (green)
  - "View Listings" button

**AGENT DETAIL (modal or page):**
- Full bio
- All listings by this agent
- Contact options

---

### 5. CALCULATOR PAGE (calculator.html)

**TAB 1 — MORTGAGE CALCULATOR:**
```
Property Price:    [____________] PKR
Down Payment:      [  20  ] %  = PKR [auto-calculated]
Loan Amount:       PKR [auto-calculated]
Loan Tenure:       [  10  ] Years
Interest Rate:     [  12  ] % per annum

[Calculate Monthly Payment]

Result:
Monthly Installment: PKR 45,230
Total Payment:       PKR 54,27,600
Total Interest:      PKR 14,27,600
```

**TAB 2 — RENT AFFORDABILITY:**
```
Monthly Income:    [____________] PKR
Recommended Rent:  30% = PKR [auto]

"Aap PKR X tak rent afford kar sakte hain"

[Show Properties in this Budget] → links to filtered properties page
```

**POPULAR PROPERTY PRICES IN FAISALABAD:**
- Reference table: Area | Avg Buy Price | Avg Rent

---

### 6. SAVED PROPERTIES (saved.html)

- Grid of saved property cards
- Remove from saved button on each
- "Clear All Saved" button
- Empty state: "Koi saved property nahi — dil chahay wali property pe ❤️ karein"
- All data from localStorage key: 'fsd_saved_properties'

---

### 7. SUBMIT PROPERTY (submit.html)

**MULTI-STEP FORM:**

Step 1 — Basic Info:
- Property Type (dropdown)
- Purpose: Buy/Rent/Sell
- Title
- Price (PKR)
- Area/Location (Faisalabad area dropdown)
- Full Address

Step 2 — Details:
- Bedrooms, Bathrooms
- Size (Marla/Kanal)
- Floor number
- Furnishing status
- Available from date

Step 3 — Features:
- Amenities checkboxes (Gas, Electricity, Water, etc.)
- Description textarea

Step 4 — Contact:
- Owner/Agent name
- Phone number
- WhatsApp number
- Email

**SUBMIT BUTTON:**
- Success message: "Shukriya! Aapki property 24 ghante mein publish ho jayegi."
- Note: Form data saved to localStorage for demo

---

### 8. ADMIN PANEL (admin.html)

**PASSWORD PROTECTION:**
- Password: admin123
- Simple prompt on page load

**DASHBOARD:**
- Stats: Total Properties, Total Agents, Saved Count, Submissions
- Quick Actions: Add Property, Add Agent

**PROPERTIES TABLE:**
- All properties with: Title, Area, Price, Type, Actions (Edit/Delete)
- Search/filter
- Add New Property button → modal form

**AGENTS TABLE:**
- All agents with: Name, Area, Listings, Actions
- Add New Agent button

---

## PROPERTIES DATA (js/data.js)

Include 24 realistic Faisalabad properties:

```javascript
const properties = [
  {
    id: 1,
    title: "Modern 10 Marla House",
    type: "House",
    purpose: "Buy",
    price: 12000000,
    priceDisplay: "1.2 Crore",
    area: "Susan Road",
    city: "Faisalabad",
    address: "Block A, Susan Road, Faisalabad",
    bedrooms: 4,
    bathrooms: 3,
    size: "10 Marla",
    sizeValue: 10,
    floor: "Ground",
    furnishing: "Semi-Furnished",
    description: "Beautiful modern house in the heart of Susan Road...",
    features: ["Gas", "Electricity", "Water", "Internet", "Parking", "Garden"],
    agentId: 1,
    images: [],
    featured: true,
    views: 245,
    postedDate: "2026-06-15",
    color: "#c9a84c"
  },
  // ... 23 more properties covering all areas and types
];
```

**Areas to cover:** Susan Road, Peoples Colony, Gulberg, Madina Town, Jinnah Colony, Canal Road, Satyana Road, GMA, Millat Road, Kohinoor City, Samanabad, D-Ground, Batala Colony, Sitara Colony

**Property types:** Houses, Apartments, Plots, Shops, Offices, Warehouses

**Price ranges:**
- Houses: 60 Lakh — 5 Crore
- Plots: 25 Lakh — 2 Crore
- Apartments: 40 Lakh — 1.5 Crore
- Shops: 80 Lakh — 3 Crore (buy) | 25,000 — 1,50,000/month (rent)
- Houses for Rent: 20,000 — 1,50,000/month

---

## AGENTS DATA (js/data.js)

Include 8 realistic agents:

```javascript
const agents = [
  {
    id: 1,
    name: "Muhammad Asif Khan",
    verified: true,
    experience: 8,
    specialization: "Susan Road, Peoples Colony",
    phone: "0300-1234567",
    whatsapp: "923001234567",
    rating: 4.8,
    reviews: 124,
    bio: "8 saal se Faisalabad real estate mein kaam kar raha hun...",
    color: "#1a1a1a"
  },
  // ... 7 more agents
];
```

---

## ANIMATIONS & INTERACTIONS

| Element | Animation |
|---------|-----------|
| Stats numbers | Count-up on page load |
| Property cards | Fade-in-up on scroll |
| Hero search | Slide down on load |
| Heart button | Pop animation on click |
| Navbar | Shadow appears on scroll |
| Price display | Gold shimmer effect |
| Hover on cards | translateY(-6px) + shadow |
| Gallery images | Smooth lightbox transition |

---

## FAISALABAD AREAS LIST (for all dropdowns)

Susan Road, Peoples Colony No.1, Peoples Colony No.2, Gulberg Colony,
Madina Town, Jinnah Colony, Canal Road, Satyana Road,
Ghulam Muhammad Abad, Millat Road, Kohinoor City, Samanabad,
D-Ground, Batala Colony, Sitara Colony, Jaranwala Road,
Sargodha Road, Sheikhupura Road, Sammundri Road, Jhang Road,
Civil Lines, Officers Colony, Gulshan-e-Iqbal, Eden Valley, Other

---

## RESPONSIVE BREAKPOINTS

| Screen | Layout |
|--------|--------|
| 375px (Mobile) | 1 column, stacked |
| 768px (Tablet) | 2 column grid |
| 1024px+ (Desktop) | 3 column grid, sidebar |

---

## SEO

- Unique title per page: "[Page] — FSD Properties | Faisalabad Ka #1 Property Portal"
- Meta descriptions for all pages
- Open Graph tags
- Canonical URLs
- Structured data (RealEstateListing schema)

---

## DEVELOPMENT ORDER

1. js/data.js — all properties + agents data first
2. css/style.css — complete theme
3. index.html — homepage
4. properties.html — listing with filters
5. detail.html — property detail
6. agents.html — agents page
7. calculator.html — mortgage calculator
8. saved.html — saved properties
9. submit.html — submit form
10. admin.html — admin panel

---

## DEVELOPER NOTE

> "Faisalabad is Pakistan's industrial capital — a city of hardworking people with big dreams. Yet finding property still relies on word of mouth and WhatsApp groups. FSD Properties changes that."
> — Gohar Zaib Gill

---

*FSD Properties — Faisalabad Ka #1 Property Portal 🏠*
