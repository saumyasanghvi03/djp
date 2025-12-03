# Jain Vibes Website Structure Documentation

## Project Overview

**Project Name:** Jain Vibes  
**Tagline:** Jain Emotional Wellness for Today's Generation  
**Creator:** Saumya Sanghvi  
**Design Philosophy:** Devotional Minimalism with Sacred Geometry  
**Target Audience:** Gen-Z users seeking spiritual wellness and emotional support through Jain principles

---

## Design System

### Color Palette

| Color Name | RGB Value | Usage |
|---|---|---|
| **Sandalwood** | rgb(223, 196, 158) | Primary accent, buttons, highlights |
| **Soft White** | rgb(250, 250, 245) | Background, breathing space |
| **Warm Maroon** | rgb(115, 55, 55) | CTA sections, emotional depth |
| **Devotional Gold** | rgb(218, 188, 120) | Secondary accent, spiritual elements |
| **Calm Grey** | rgb(200, 200, 200) | Muted text, secondary elements |
| **Deep Stone** | rgb(95, 90, 85) | Primary text, headings |

### Typography

- **Heading Font:** Playfair Display (serif) - Weights: 600, 700
  - H1: 48px-72px
  - H2: 32px-48px
  - H3: 24px-32px
  
- **Body Font:** Poppins (sans-serif) - Weights: 400, 500, 600
  - Body text: 16px-18px
  - Labels: 14px
  - Fine print: 12px

### Spacing & Components

- **Base spacing:** 8px
- **Section spacing:** 48px (mobile), 64px (tablet), 96px (desktop)
- **Card padding:** 20px-32px
- **Rounded corners:** 16px-24px
- **Card shadow:** Soft, subtle (0 4px 6px rgba(0,0,0,0.1))
- **Button padding:** 12px-16px (mobile), 16px-24px (desktop)

---

## Website Pages & Structure

### 1. Home Page (`/`)
**File:** `client/src/pages/Home.tsx`

**Sections:**
- **Hero Section:** Full-screen hero with background image, title, subtitle, and dual CTAs
- **Three-Feature Overview:** Grid of 3 feature cards highlighting AI Coach, Music Engine, and 30-Day Challenge
- **AI Coach Modes Preview:** 4-column grid showing Friendly, Coach, Soulmate, and Anxiety Shield modes
- **Music Engine Preview:** 6-column grid of playlist cards (Morning Calm, Focus and Study, Girnar Devotion, Bhajan Club, Aadinath Grounding, Night Calm Down)
- **30-Day Challenge Preview:** 7-day grid showing first week of challenge
- **One-Tap SOS Section:** Call-to-action for SOS support
- **CTA Panel:** Warm maroon section with call-to-action to start the journey
- **Footer:** Company info and links

### 2. Features Page (`/features`)
**File:** `client/src/pages/Features.tsx`

**Sections:**
- **Hero Section:** Features page hero with background image
- **Complete Feature Grid:** 10 feature cards including:
  - AI Jain Spiritual Coach
  - Jain Music Engine
  - Mood Log & Journaling
  - Voice Mode
  - Exam Mode
  - Crisis Safe Mode
  - Prebuilt Wellness Kits
  - One-Tap SOS
  - Daily Rituals
  - Personalized Recommendations
- **Jain Philosophy Section:** 5-column grid explaining Ahimsa, Aparigraha, Awareness, Meditation, Purity
- **Closing CTA Panel:** Call-to-action to get started
- **Footer**

### 3. Music Engine Page (`/music`)
**File:** `client/src/pages/Music.tsx`

**Sections:**
- **Hero Section:** Music page hero with background image
- **Curated Playlists Grid:** 6 playlist cards with track counts and durations
- **Featured Tracks Section:** 6 track highlights with play buttons
- **Why Jain Music Heals:** 3-column section on vibrational healing, spiritual connection, emotional release
- **Listen Everywhere:** External music platform buttons (Spotify, Apple Music, YouTube Music, Amazon Music)
- **Closing CTA Panel**
- **Footer**

### 4. Coach Modes Page (`/coach`)
**File:** `client/src/pages/Coach.tsx`

**Sections:**
- **Hero Section:** Coach modes page hero
- **8 Coaching Modes Grid:** Cards for:
  - Friendly Mode
  - Romantic Mode
  - Soulmate Mode
  - Coach Mode
  - Hype Mode
  - Anxiety Shield Mode
  - Exam Mode
  - Crisis Safe Mode
- **How to Choose Your Coach:** 4-column section with guidance
- **Powered by Jain Wisdom & AI:** 3-column section on intelligent adaptation, spiritual grounding, natural conversation
- **Voice Mode Feature:** Highlighted card with voice technology information
- **Closing CTA Panel**
- **Footer**

### 5. 30-Day Challenge Page (`/30day`)
**File:** `client/src/pages/Challenge30Day.tsx`

**Sections:**
- **Hero Section:** Challenge page hero
- **Challenge Overview:** 4-column grid showing weekly themes:
  - Week 1: Foundation & Awareness
  - Week 2: Discipline & Ritual
  - Week 3: Compassion & Ahimsa
  - Week 4: Clarity & Transformation
- **Daily Rituals:** 7 essential practices displayed in 2-column grid
- **30-Day Timeline:** Full timeline organized by week with day cards
- **Recommended Music:** 3-column section with music playlists
- **What You'll Gain:** 4-column benefits section
- **Closing CTA Panel**
- **Footer**

### 6. SOS Page (`/sos`)
**File:** `client/src/pages/SOS.tsx`

**Sections:**
- **Hero Section:** SOS page hero
- **Large SOS Button:** Central interactive button (32x32 rem) for activating support
- **Five-Step Calming Flow:** Vertical timeline showing:
  1. Breathing
  2. Chanting
  3. Grounding
  4. Reassurance
  5. Continue
- **Crisis Safe Mode Notice:** Important information box with crisis resources
- **Additional Grounding Techniques:** 5 techniques in 2-column grid
- **When to Use SOS:** 2-column section with guidance
- **Self-Care Reminders:** 6 compassionate reminders
- **Closing CTA Panel**
- **Footer**

### 7. About Page (`/about`)
**File:** `client/src/pages/About.tsx`

**Sections:**
- **Hero Section:** About page hero
- **Mission Statement:** Text block explaining Jain Vibes' purpose
- **Why Jain Vibes Exists:** 2-column section with challenge and response
- **Jain Spiritual Wellness Principles:** 5-column grid (Ahimsa, Aparigraha, Awareness, Meditation, Purity)
- **Creator Story:** Card with information about Saumya Sanghvi
- **Core Values:** 6-column grid of values (Authenticity, Accessibility, Compassion, Innovation, Community, Growth)
- **Closing CTA Panel**
- **Footer**

### 8. Contact Page (`/contact`)
**File:** `client/src/pages/Contact.tsx`

**Sections:**
- **Hero Section:** Contact page hero
- **Contact Info:** 3-column grid with email, phone, location
- **Contact Form:** Form with fields for name, email, message
- **FAQ Section:** 6 frequently asked questions with answers
- **Support Resources:** 2-column section with documentation and community links
- **Closing CTA Panel**
- **Footer**

### 9. 404 Page (`/404`)
**File:** `client/src/pages/NotFound.tsx`

- Large 404 heading
- "Page Not Found" message
- Return to home button

---

## Component Library

**File:** `client/src/components/JainVibesComponents.tsx`

### Core Components

1. **HeroSection**
   - Props: backgroundImage, title, subtitle, primaryCTA, secondaryCTA
   - Full-screen hero with overlay and centered content

2. **FeatureCard**
   - Props: icon, title, description, onClick
   - Card with icon, title, and description

3. **CoachModeCard**
   - Props: name, description, emoji, onClick
   - Card with emoji, name, description, and "Choose Mode" button

4. **PlaylistCard**
   - Props: title, description, trackCount, duration, onClick
   - Card displaying playlist information

5. **ChallengeDayCard**
   - Props: day, title, ritual, completed
   - Card showing daily challenge progress

6. **SOSStep**
   - Props: step, title, description, icon
   - Vertical timeline step for SOS flow

7. **SectionHeader**
   - Props: title, subtitle, centered
   - Heading with divider accent

8. **PhilosophyBlock**
   - Props: title, description, icon
   - Centered block for philosophy principles

9. **ContactForm**
   - Props: onSubmit
   - Form with name, email, message fields

10. **Navigation**
    - Props: links, currentPath, onNavigate
    - Sticky navigation with mobile menu support

11. **Footer**
    - Static footer with company info and links

---

## Visual Assets

**Location:** `client/public/images/`

### Hero Background Images

1. **hero-home.png** - Home page hero with mandala patterns
2. **hero-features.png** - Features page hero with geometric shapes
3. **hero-music.png** - Music engine page hero with sound waves
4. **hero-30day.png** - 30-day challenge hero with upward flow
5. **hero-sos.png** - SOS page hero with grounding elements

---

## Styling & CSS

**File:** `client/src/index.css`

### Key Custom Classes

- `.hero-section` - Full-screen hero container
- `.card-spiritual` - Spiritual card styling with shadow and hover effects
- `.button-spiritual` - Primary button with sandalwood background
- `.button-secondary` - Secondary button with border
- `.section-spacing` - Responsive section padding
- `.divider-spiritual` - Accent divider line

### Google Fonts

- Playfair Display (serif) - Headings
- Poppins (sans-serif) - Body text

---

## Routing Structure

**File:** `client/src/App.tsx`

```
/                 → Home
/features         → Features
/music            → Music Engine
/coach            → Coach Modes
/30day            → 30-Day Challenge
/sos              → SOS Support
/about            → About
/contact          → Contact
/404              → Not Found
(any other path)  → Not Found
```

---

## Key Features

### 1. AI Spiritual Coach
- 8 different coaching modes
- Personalized guidance
- Voice mode support
- Context-aware responses

### 2. Jain Music Engine
- 6 curated playlists
- Mood-based selection
- External music platform integration
- Track highlights

### 3. 30-Day Healing Challenge
- 4-week structured journey
- Weekly themes
- Daily rituals
- Progress tracking

### 4. One-Tap SOS
- 5-step calming process
- Grounding techniques
- Crisis resources
- Immediate support

### 5. Journaling & Mood Tracking
- Daily mood logging
- Reflection prompts
- Progress visualization

### 6. Daily Rituals
- Meditation practices
- Spiritual exercises
- Jain principle-based activities

---

## Responsive Design

The website is fully responsive with breakpoints:

- **Mobile:** 0px-640px
- **Tablet:** 640px-1024px
- **Desktop:** 1024px+

All components adapt layout and sizing based on screen size.

---

## Accessibility Features

- Semantic HTML structure
- Color contrast compliance (WCAG AA)
- Keyboard navigation support
- Focus states on interactive elements
- Alt text for images
- Proper heading hierarchy

---

## Performance Optimizations

- Lazy-loaded images
- Optimized CSS with Tailwind
- Minified production build
- Efficient component rendering
- Smooth animations (400-600ms)

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements

- Mobile app (iOS/Android)
- User authentication
- Personalized dashboard
- Advanced analytics
- Community features
- Multi-language support
- Offline mode

---

## Project Statistics

- **Total Pages:** 9 (including 404)
- **Components:** 11 reusable components
- **Color Tokens:** 6 primary colors
- **Hero Images:** 5 custom-generated images
- **Typography:** 2 font families, 5 weight variations
- **Responsive Breakpoints:** 3 main breakpoints

---

## Credits

**Created by:** Saumya Sanghvi  
**Design Philosophy:** Devotional Minimalism with Sacred Geometry  
**Built with:** React 19, Tailwind CSS 4, TypeScript, Wouter  
**Year:** 2025

---

## Notes for Developers

1. All colors are defined in `client/src/index.css` as CSS variables
2. Component styling uses inline styles with RGB color values for consistency
3. Animations use Tailwind utilities with 400-600ms durations
4. Navigation uses Wouter for client-side routing
5. All pages include proper SEO metadata in comments
6. Footer appears on every page for consistent branding
7. Mobile menu is implemented in the Navigation component
8. Forms use controlled components with React state

---

End of Documentation
