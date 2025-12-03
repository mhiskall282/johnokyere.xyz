# 📋 Portfolio Codebase Index

Complete reference guide for the John Okyere Portfolio codebase.

---

## 📁 Directory Structure

### `/app` - Next.js App Router (Main Application)

#### Core Files
- **`layout.tsx`** - Root layout with SEO metadata, fonts, and AI provider
  - Configures 3 fonts: Inter, Source Code Pro, Gloria Hallelujah
  - Extensive SEO metadata with 100+ keywords
  - Open Graph and Twitter card configuration
  - AI provider wrapper for chat functionality

- **`page.tsx`** - Homepage with hero section
  - Dynamic statistics counter (38 projects, 116 PRs, 4 ecosystems)
  - Three expertise areas (Cloud/DevOps, ZK/Crypto, Web3 Security)
  - Achievement highlights with external links
  - WebGL light ray effects
  - JSON-LD structured data for SEO

- **`globals.css`** - Global styles and CSS variables
  - Dark theme color palette
  - Custom scrollbar styles
  - Tailwind CSS base imports
  - Animation utilities

- **`action.tsx`** - AI action configurations (Server Actions)

- **`robots.ts`** - SEO robots configuration
- **`sitemap.ts`** - Dynamic sitemap generation

#### `/app/api/chat/route.ts`
- **Purpose:** AI chat API endpoint
- **Tech:** OpenAI GPT-4, Vercel AI SDK
- **Method:** POST
- **Features:**
  - Streaming responses
  - System prompt integration
  - Max 30s duration
  - Returns `TextStreamResponse`

#### `/app/ask/page.tsx`
- **Purpose:** AI chat interface page
- **Features:**
  - URL parameter support for initial prompts
  - Floating navigation
  - Mobile-responsive layout
  - Suspense boundary for loading states

#### `/app/projects/page.tsx`
- **Purpose:** Projects showcase
- **Features:**
  - Category filtering (All, Web3, AI)
  - Search functionality
  - Grid/List view toggle
  - Hover animations
  - Dynamic project cards
  - 12 featured projects displayed

#### `/app/opensource/page.tsx`
- **Purpose:** Open source contributions showcase
- **Features:**
  - Statistics display (projects, PRs, ecosystems)
  - Ecosystem breakdown with logos
  - Notable contributions
  - Animated counters
  - Integration with project data

#### `/app/contact/page.tsx`
- **Purpose:** Contact information and methods
- **Features:**
  - 4 contact methods (Email, X, Telegram, GitHub)
  - Interactive cards with hover effects
  - Call-to-action section
  - Links to chat interface

---

### `/components` - React Components

#### `/components/Native/` - Core UI Components

##### `Hero.tsx`
- **Purpose:** Landing page hero section
- **Size:** ~500 lines
- **Features:**
  - Professional introduction
  - Dynamic statistics counter
  - 3 expertise area cards
  - 3 achievement cards with external links
  - Responsive design (mobile/tablet/desktop)
  - GSAP animations
  - Visibility animations on scroll

##### `FloatingNav.tsx`
- **Purpose:** Desktop sidebar navigation
- **Features:**
  - Auto-expanding on hover
  - Active route highlighting
  - 5 navigation items (Home, Projects, Open Source, Contact, Chat)
  - Smooth transitions
  - Logo/brand display
  - Icon-based navigation

##### `MobileNav.tsx`
- **Purpose:** Mobile bottom navigation
- **Features:**
  - Fixed bottom positioning
  - Active state indicators
  - Touch-friendly sizing
  - Same 5 navigation items

##### `ChatInterface.tsx`
- **Purpose:** AI chat UI
- **Tech:** Vercel AI SDK `useChat` hook
- **Features:**
  - Auto-submit for URL prompts
  - Streaming message display
  - Suggestion chips
  - Scroll-to-bottom on new messages
  - Loading states
  - HTML rendering in AI responses

##### `ProjectCard.tsx`
- **Purpose:** Reusable project display card
- **Props:**
  - `title`, `description`, `techStack`, `category`
  - `liveDemoUrl`, `githubUrl`, `imageUrl`
- **Features:**
  - Category badges
  - Tech stack tags
  - Hover effects
  - External link icons
  - Responsive image display

##### `Contact.tsx`
- **Purpose:** Contact information display
- **Status:** Referenced but not shown in main contact page
- **Likely Features:** Contact form or profile card

##### `PageNavigation.tsx`
- **Purpose:** Page-level navigation component
- **Status:** Created but implementation details not visible

#### Animation Components

##### `LightRays.tsx`
- **Purpose:** WebGL-based light ray effects
- **Tech:** OGL (WebGL library)
- **Props:**
  - `raysOrigin`, `raysColor`, `raysSpeed`
  - `lightSpread`, `rayLength`
  - `followMouse`, `mouseInfluence`
  - `noiseAmount`, `distortion`

##### `BlurText.tsx`
- **Purpose:** Text blur animation effect

##### `SplitText.tsx`
- **Purpose:** Text split animation (character-by-character)

##### `TextType.tsx`
- **Purpose:** Typewriter effect animation

##### `TiltedCard.tsx`
- **Purpose:** 3D tilt card effect on hover

##### `FaultyTerminal.tsx`
- **Purpose:** Terminal-style glitch effect

##### `ProfileCard.tsx` + `ProfileCard.css`
- **Purpose:** Animated profile card component

---

### `/lib` - Utilities and Data

#### `constants.ts`
- **Purpose:** Application-wide constants
- **Exports:**
  - `suggestions`: Chat suggestion prompts array
  - `bubbleBase`: Chat bubble CSS classes

#### `types.ts`
- **Purpose:** TypeScript type definitions
- **Types:**
  - `ChatMessage`: `{ id, role, content }`
  - `ProjectData`: Complete project interface
  - `ServerMessage`: Server-side message format
  - `ClientMessage`: Client-side message with React nodes

#### `project.ts`
- **Purpose:** Project data repository
- **Content:** 12 projects total
  - **Web3 Projects:**
    - Coloniz (Horuslabs)
    - Starknet Tokenbound SDK
    - TBA Explorer
    - Evenly
    - Fundable (Opensource)
    - Artpiece (Opensource)
    - Fortichain (Opensource)
    - StarkScaffold (Opensource)
    - StarkFinder (Opensource)
    - Medialano (Opensource)
  - **AI Projects:**
    - Zintarh AI (this portfolio)
    - Dissertation Scaffold
- **Export:** `getProjects()` function

#### `utils.ts`
- **Purpose:** Utility functions
- **Likely contains:**
  - `cn()` - Class name merger
  - `decodeFromHex()` - Used in chat for URL params
  - Other helper functions

#### `/lib/ai/`

##### `prompt.ts`
- **Purpose:** AI system prompt for GPT-4
- **Size:** ~200 lines
- **Content:**
  - Role definition (speaks as John Okyere)
  - Personal background
  - Technical skills
  - Work experience
  - Contact information
  - Behavioral rules
  - Example conversation flows
  - HTML formatting guidelines
- **Export:** `AssistantPrompt` string

##### `tools.ts`
- **Purpose:** AI tools for function calling
- **Status:** Currently empty (needs implementation)
- **Planned tools:**
  - `projects` - Show projects by category
  - `about` - Personal info
  - `skills` - Technical skills
  - `experience` - Work history
  - `contact` - Contact methods

---

### `/public` - Static Assets

- `bg3.jpg` - Background image (used across all pages)
- `bg0.jpg`, `bg1.jpg`, `bg2.jpg`, `bg4.jpg` - Alternative backgrounds
- `6077eb35ce9331889dc9af8a14f8cd32.jpg` - Additional image
- `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` - Icon assets

---

## 🔧 Configuration Files

### `package.json`
- **Name:** zintarh
- **Version:** 0.1.0
- **Scripts:**
  - `dev`: Next.js dev with Turbopack
  - `build`: Production build with Turbopack
  - `start`: Production server
  - `lint`: ESLint

**Key Dependencies:**
- Next.js 15.5.5
- React 19.1.0
- TypeScript 5
- Tailwind CSS 4
- Vercel AI SDK 5.0.72
- OpenAI SDK 6.3.0
- GSAP 3.13.0
- Framer Motion 12.23.24

### `next.config.ts`
- TypeScript configuration for Next.js
- Turbopack enabled
- Custom build settings

### `tailwind.config.ts`
- Tailwind CSS v4 configuration
- Custom color schemes
- Dark theme settings

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (@/* → ./* )
- Strict mode enabled

### `eslint.config.mjs`
- ESLint v9 flat config
- Next.js recommended rules

### `postcss.config.mjs`
- PostCSS configuration
- Tailwind CSS plugin

### `components.json`
- shadcn/ui configuration
- Component styling preferences

---

## 🎨 Design System

### Color Palette (from globals.css)
```css
:root {
  --background: 0 0% 3.9%;        /* Near black */
  --foreground: 0 0% 98%;         /* Near white */
  --primary: 180 100% 50%;        /* Cyan/Teal */
  --border: 0 0% 14.9%;           /* Dark gray */
  --muted: 0 0% 96.1%;
  --accent: 0 0% 96.1%;
}
```

### Fonts
1. **Inter** - Primary UI font
2. **Source Code Pro** - Code/technical content
3. **Gloria Hallelujah** - Handwritten accent (used for "John Okyere")

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🔌 API Integration Points

### Current
- **OpenAI API** - GPT-4 chat via `/api/chat`

### Planned (from IMPROVEMENTS.md)
- GitHub API - Real stats
- Email service (Resend/EmailJS)
- Analytics (Google Analytics 4, Vercel Analytics)
- Upstash Redis - Rate limiting

---

## 📊 Data Flow

### AI Chat Flow
```
User Input (ChatInterface.tsx)
  ↓
POST /api/chat/route.ts
  ↓
Vercel AI SDK (streamText)
  ↓
OpenAI GPT-4
  ↓
Stream Response
  ↓
Display in ChatInterface
```

### Project Display Flow
```
lib/project.ts (static data)
  ↓
getProjects() function
  ↓
Projects Page (filtering/search)
  ↓
ProjectCard components
```

---

## 🚀 Performance Characteristics

### Build Time
- Uses Turbopack for faster builds
- Static generation where possible

### Runtime
- Client-side filtering and search
- Streaming AI responses
- Lazy-loaded animations
- Image optimization pending

### Bundle Size
- GSAP: ~50KB
- Framer Motion: ~40KB
- OpenAI SDK: ~100KB
- Total: Needs optimization (see IMPROVEMENTS.md)

---

## 🔒 Security Considerations

### Current
- Environment variables for API keys
- No sensitive data in client code
- HTTPS only (enforced by Vercel)

### Needed
- Rate limiting on AI chat
- CORS configuration
- Security headers
- Input validation
- XSS prevention in AI responses

---

## 🧪 Testing Status

### Current State
- ❌ No unit tests
- ❌ No integration tests
- ❌ No E2E tests
- ✅ Manual browser testing

### Recommended (from IMPROVEMENTS.md)
- Vitest for unit tests
- React Testing Library
- Playwright for E2E

---

## 📈 SEO Implementation

### Current Features
- ✅ Dynamic metadata in all pages
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ JSON-LD structured data
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ 100+ targeted keywords
- ✅ Semantic HTML

### Missing
- ❌ Blog/content section
- ❌ Dynamic OG images per page
- ❌ Breadcrumb schema
- ❌ FAQ schema

---

## 🎯 Component Reusability

### Highly Reusable
- `ProjectCard` - Used across Projects and Open Source pages
- `FloatingNav` / `MobileNav` - Used on all pages
- Animation components - Can be used anywhere

### Page-Specific
- `Hero` - Homepage only
- `ChatInterface` - Chat page only

---

## 🗂️ File Naming Conventions

- **Pages:** `page.tsx`
- **Layouts:** `layout.tsx`
- **Components:** PascalCase (e.g., `Hero.tsx`)
- **Utils:** camelCase (e.g., `utils.ts`)
- **Types:** camelCase (e.g., `types.ts`)
- **API routes:** `route.ts`

---

## 📝 Code Statistics

### Total Files
- TypeScript/TSX: ~25 files
- CSS: 2 files (globals.css, ProfileCard.css)
- Config: 8 files
- Public assets: 11 files

### Lines of Code (Estimated)
- Components: ~3,500 lines
- Pages: ~1,500 lines
- Lib/Utils: ~800 lines
- Styles: ~400 lines
- Total: ~6,200 lines

---

## 🔄 State Management

### Current Approach
- React `useState` for local component state
- URL search params for chat prompts
- No global state manager (Redux, Zustand, etc.)
- AI SDK manages chat state

### Could Benefit From
- Global theme state (dark/light mode)
- User preferences persistence
- Chat history persistence

---

## 🌐 Internationalization (i18n)

### Current
- English only
- No i18n framework

### Potential
- Could add with `next-intl`
- Support for French, Spanish (target markets)

---

## 📱 Responsive Design Implementation

### Strategy
- Mobile-first approach
- Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- Different navigation for mobile vs desktop
- Conditional rendering based on screen size

### Breakpoints Usage
```tsx
className="text-sm sm:text-base md:text-lg lg:text-xl"
```

---

## 🎭 Animation Strategy

### Libraries Used
1. **GSAP** - Complex timeline animations
2. **Framer Motion** - React-specific animations
3. **Tailwind CSS** - Utility animations
4. **CSS transitions** - Simple state changes

### Performance
- `will-change` CSS property
- GPU acceleration
- Reduced motion support needed

---

This index serves as a comprehensive reference for navigating and understanding the codebase. For specific implementation details, refer to individual files or the IMPROVEMENTS.md document.

**Last Updated:** December 3, 2025
