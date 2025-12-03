# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

---

## 🚀 Immediate Setup (Required)

### Step 1: Install Dependencies
```powershell
cd c:\Users\user\Desktop\johnokyere-portfolio
pnpm install
```

### Step 2: Create Environment File
Create `.env.local` in the root directory:

```env
# Get your API key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-your-api-key-here

# Your website URL
NEXT_PUBLIC_SITE_URL=https://johnokyere.vercel.app
```

### Step 3: Run Development Server
```powershell
pnpm dev
```

Visit: http://localhost:3000

---

## ✅ First Things to Fix

### 1. Test AI Chat (PRIORITY 1)
1. Go to http://localhost:3000/ask
2. Type a message
3. If it works ✅ - you're good!
4. If it fails ❌ - check your `OPENAI_API_KEY`

### 2. Add Project Images (PRIORITY 2)
```powershell
# Create directory
mkdir public\projects

# Add your screenshots there, then update lib/project.ts:
# imageUrl: "/projects/coloniz.png"
```

### 3. Add Your Resume (PRIORITY 3)
```powershell
# Add PDF to public folder
# Update link in components/Native/Hero.tsx
# Change from: href="https://github.com/mhiskall282/"
# To: href="/John_Okyere_Resume.pdf" download
```

---

## 🛠️ Common Commands

```powershell
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Run production build
pnpm lint             # Check for errors

# Check what's using port 3000
netstat -ano | findstr :3000
```

---

## 📝 Quick Customization

### Update Your Info
Edit these files in order:

1. **`lib/ai/prompt.ts`** - AI personality
2. **`app/layout.tsx`** - SEO metadata
3. **`lib/project.ts`** - Your projects
4. **`components/Native/Hero.tsx`** - Homepage stats

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 180 100% 50%; /* Change this! */
}
```

---

## 🐛 Troubleshooting

### "Module not found" Error
```powershell
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### AI Chat Not Working
1. Check `.env.local` exists
2. Verify `OPENAI_API_KEY` is correct
3. Restart dev server
4. Check API quota: https://platform.openai.com/usage

### Build Errors
```powershell
# Clear Next.js cache
rm -rf .next
pnpm dev
```

### Port 3000 Already in Use
```powershell
# Use different port
pnpm dev -- -p 3001
```

---

## 📦 Deploy to Vercel

1. Push to GitHub:
```powershell
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to https://vercel.com
3. Import your repository
4. Add environment variables:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy!

---

## 🎯 Week 1 Checklist

- [ ] ✅ Install dependencies
- [ ] ✅ Add `.env.local` with OpenAI key
- [ ] ✅ Test AI chat locally
- [ ] 📷 Add project images
- [ ] 📄 Upload resume PDF
- [ ] 🔧 Implement AI tools (see IMPROVEMENTS.md #4)
- [ ] 🚀 Deploy to Vercel
- [ ] 📊 Add Vercel Analytics
- [ ] 🧪 Test on mobile devices
- [ ] 🔗 Share with friends for feedback

---

## 📚 Learn More

- **Full README:** `README.md`
- **Improvements List:** `IMPROVEMENTS.md`
- **Codebase Guide:** `CODEBASE_INDEX.md`
- **Environment Template:** `.env.example`

---

## 💬 Need Help?

1. Check `IMPROVEMENTS.md` for detailed guides
2. Read component code - it's well-structured!
3. Search the codebase for examples
4. Check Next.js docs: https://nextjs.org/docs

---

## 🎉 You're All Set!

Your portfolio is now running. Focus on:
1. Adding real content (images, resume)
2. Testing the AI chat
3. Deploying to production
4. Gathering feedback

Happy coding! 🚀
