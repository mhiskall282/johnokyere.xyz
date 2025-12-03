# 🚀 John Okyere - Portfolio & Interactive AI Assistant

[![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-Latest-black)](https://sdk.vercel.ai/)

> An innovative, interactive portfolio showcasing my work as a **Software Engineer**, **Blockchain Developer**, and **DevOps Specialist**. Features an AI-powered chat assistant that engages visitors and answers questions about my experience, projects, and technical skills.

**Live Demo:** [johnokyere.vercel.app](https://johnokyere.vercel.app)

---

## 👤 About Me

I'm **John Okyere** (professionally known as **Mhiskall**), a passionate technologist specializing in:

- 🛠️ **Cloud Architecture & DevOps** - Multi-cloud infrastructure (AWS, GCP, Azure)
- 🔐 **Zero-Knowledge Proofs & Cryptography** - Privacy-preserving circuits and verifiable computation
- 🌐 **Web3 Security & Protocol Engineering** - Smart contract development on Sui, ICP, and Ethereum

### 📊 Open Source Impact
- **38+** Projects contributed to across Web3 ecosystems
- **116** Pull requests merged
- **4** Active ecosystems (Ethereum, Lisk, Scroll, Optimism)
- **2+ years** deep involvement in blockchain development

### 🏆 Achievements
- **Ethereum Devconnect Volunteer (2025)** & ETHGlobal Hacker
- **Dev3Pack ZK Fellow** - Zero-Knowledge Proofs & Cryptography
- **Co-Founder - Kayaba Labs** - Web3 Incubator & Accelerator
- **Africa Onchain Collective Devconnect Scholarship Recipient**

### 🎓 Education
- **B.Sc. Computer Science** - University of the People (2025)

---

## ✨ Features

### 🎨 Modern, Responsive Design
- **Glassmorphic UI** with backdrop blur effects
- **Smooth animations** powered by GSAP and Framer Motion
- **Dark theme** optimized for developer aesthetics
- **Mobile-first** responsive design

### 🤖 AI-Powered Chat Assistant
- Interactive AI assistant that answers questions about my work
- Powered by **OpenAI GPT-4** via Vercel AI SDK
- Contextual responses about projects, experience, and skills
- Streaming responses for real-time interaction

### 📱 Navigation
- **Floating sidebar navigation** (desktop)
- **Bottom tab navigation** (mobile)
- Auto-expanding menu on hover
- Active route highlighting

### 🎯 Core Sections

#### 1️⃣ Home (`/`)
- Hero section with professional introduction
- Dynamic statistics counter
- Three expertise areas:
  - Cloud Architecture & DevOps
  - Zero-Knowledge & Cryptography
  - Web3 Security & Protocol Engineering
- Achievement highlights with external links

#### 2️⃣ Projects (`/projects`)
- Filter by category (All, Web3, AI)
- Search functionality
- Grid/List view toggle
- Featured projects:
  - **Coloniz** - Community platform on Starknet
  - **Starknet Tokenbound SDK** - ERC-6551 implementation
  - **TBA Explorer** - Token Bound Account explorer
  - **Zintarh AI** - This portfolio with AI assistant
  - **Dissertation Scaffold** - AI-powered research tool

#### 3️⃣ Open Source (`/opensource`)
- Open source contribution statistics
- Ecosystem involvement breakdown
- Featured contributions
- Notable projects showcase

#### 4️⃣ Contact (`/contact`)
- Multiple contact methods (Email, X/Twitter, Telegram, GitHub)
- Direct links with hover effects
- Call-to-action for collaborations

#### 5️⃣ AI Chat (`/ask`)
- Full-screen chat interface
- Suggestion prompts for easy interaction
- Streaming AI responses
- Chat history management

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.5.5** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variants
- **tw-animate-css** - Animation utilities

### AI & Chat
- **Vercel AI SDK 5.0.72** - AI integration
- **OpenAI SDK 6.3.0** - GPT-4 model
- **Zod 4.1.12** - Schema validation

### Animations & Effects
- **GSAP 3.13.0** - Professional-grade animations
- **Framer Motion (motion) 12.23.24** - React animations
- **OGL 1.0.11** - WebGL library for custom effects

### UI Components
- **Lucide React** - Icon library
- **Custom components** - Hand-crafted UI elements

### Development Tools
- **ESLint 9** - Code linting
- **pnpm** - Package manager
- **Turbopack** - Fast bundler

---

## 📁 Project Structure

```
zintarh-portfolio/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles
│   ├── action.tsx                # AI actions
│   ├── robots.ts                 # SEO robots config
│   ├── sitemap.ts                # SEO sitemap
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── ask/
│   │   └── page.tsx              # AI chat page
│   ├── contact/
│   │   ├── page.tsx              # Contact page
│   │   └── layout.tsx            # Contact layout
│   ├── projects/
│   │   ├── page.tsx              # Projects showcase
│   │   └── layout.tsx            # Projects layout
│   └── opensource/
│       ├── page.tsx              # Open source contributions
│       └── layout.tsx            # Open source layout
├── components/
│   ├── Native/                   # Core components
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── FloatingNav.tsx       # Desktop navigation
│   │   ├── MobileNav.tsx         # Mobile navigation
│   │   ├── ChatInterface.tsx     # AI chat UI
│   │   ├── ProjectCard.tsx       # Project display card
│   │   └── Contact.tsx           # Contact form
│   ├── BlurText.tsx              # Text blur effect
│   ├── SplitText.tsx             # Text split animation
│   ├── TextType.tsx              # Typewriter effect
│   ├── LightRays.tsx             # WebGL light effects
│   └── TiltedCard.tsx            # 3D tilt card
├── lib/
│   ├── constants.ts              # App constants
│   ├── types.ts                  # TypeScript types
│   ├── utils.ts                  # Utility functions
│   ├── project.ts                # Project data
│   └── ai/
│       ├── prompt.ts             # AI system prompt
│       └── tools.ts              # AI tools (planned)
├── public/                       # Static assets
│   ├── bg3.jpg                   # Background image
│   └── *.svg                     # SVG assets
├── components.json               # shadcn/ui config
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 20+** installed
- **pnpm** package manager (recommended)
- **OpenAI API Key** for chat functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zintarh/zintarh-portfolio.git
   cd zintarh-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # OpenAI API Key (required for AI chat)
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Site URL (for SEO and metadata)
   NEXT_PUBLIC_SITE_URL=https://johnokyere.vercel.app
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

---

## 🎨 Key Components

### AI Chat System

The AI assistant is powered by OpenAI's GPT-4 and uses streaming responses for real-time interaction.

**System Prompt Location:** `lib/ai/prompt.ts`

The AI is trained to:
- Respond as John Okyere in first person
- Provide detailed information about experience and projects
- Guide users through the portfolio
- Encourage contact and collaboration

**API Endpoint:** `app/api/chat/route.ts`

```typescript
// Streaming AI responses
const result = await streamText({
  model: openai("gpt-4o"),
  system: AssistantPrompt,
  messages: convertToModelMessages(messages),
});
```

### Interactive Components

#### LightRays Component
Custom WebGL-based light ray effects that follow mouse movement:
```tsx
<LightRays
  raysOrigin="top-center"
  raysColor="#00ffff"
  followMouse={true}
  mouseInfluence={0.1}
/>
```

#### ProjectCard Component
Reusable card for displaying projects with:
- Technology badges
- Live demo links
- GitHub repository links
- Category filtering

---

## 🎯 Customization Guide

### Update Personal Information

1. **Edit constants** in `lib/constants.ts`
2. **Update metadata** in `app/layout.tsx`
3. **Modify AI prompt** in `lib/ai/prompt.ts`
4. **Change projects** in `lib/project.ts`

### Add New Projects

Edit `lib/project.ts`:

```typescript
{
  title: "Your Project Name",
  description: "Project description",
  techStack: ["React", "Next.js", "TypeScript"],
  category: "web3", // or "ai"
  liveDemoUrl: "https://demo.com",
  githubUrl: "https://github.com/username/repo",
  imageUrl: "/project-image.jpg"
}
```

### Customize Theme

Colors are defined using CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 180 100% 50%; /* Cyan/Teal */
  --border: 0 0% 14.9%;
}
```

### Modify AI Personality

Edit the system prompt in `lib/ai/prompt.ts` to change:
- Tone and personality
- Areas of expertise
- Response style
- Contact information

---

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for GPT-4 chat | ✅ Yes |
| `NEXT_PUBLIC_SITE_URL` | Your portfolio URL for SEO | ✅ Yes |

---

## 🌐 SEO & Performance

### SEO Features
- **Dynamic metadata** with Open Graph and Twitter cards
- **JSON-LD structured data** for rich search results
- **Sitemap generation** (`/sitemap.xml`)
- **Robots.txt** configuration
- **Semantic HTML** with proper heading hierarchy
- **100+ targeted keywords** for visibility

### Performance Optimizations
- **Turbopack** for faster builds
- **Image optimization** with Next.js Image component
- **Font optimization** with `next/font`
- **Code splitting** and lazy loading
- **Streaming SSR** for AI responses

---

## 📱 Responsive Design

The portfolio is fully responsive across all devices:

- **Mobile (< 640px):** Bottom tab navigation, single column layouts
- **Tablet (640px - 1024px):** Optimized spacing, grid layouts
- **Desktop (> 1024px):** Floating sidebar, multi-column grids, hover effects

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/suggestion`)
3. Commit your changes (`git commit -m 'Add suggestion'`)
4. Push to the branch (`git push origin feature/suggestion`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

- **Email:** [0xmhiskall@gmail.com](mailto:0xmhiskall@gmail.com)
- **X (Twitter):** [@0xmhiskall](https://x.com/0xmhiskall)
- **Telegram:** [@mhiskall](https://t.me/mhiskall)
- **GitHub:** [@mhiskall282](https://github.com/mhiskall282)
- **LinkedIn:** [johnokyere](https://www.linkedin.com/in/johnokyere)

---

## 🙏 Acknowledgments

- **Vercel** for the AI SDK and hosting platform
- **OpenAI** for GPT-4 model
- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **GSAP** for professional animations
- **Lucide** for beautiful icons

---

## 🔮 Future Enhancements

See [IMPROVEMENTS.md](IMPROVEMENTS.md) for planned features and integrations.

---

<div align="center">

**Built with ❤️ by John Okyere**

[![Portfolio](https://img.shields.io/badge/Portfolio-johnokyere.vercel.app-cyan)](https://johnokyere.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-mhiskall282-black)](https://github.com/mhiskall282)
[![Twitter](https://img.shields.io/badge/Twitter-@0xmhiskall-1DA1F2)](https://x.com/0xmhiskall)

</div>
