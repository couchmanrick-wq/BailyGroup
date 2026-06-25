# SETUP_GUIDE.md

## Final Setup Steps for Cloudflare Deployment

### ✅ Already Done
- GitHub Actions workflow created
- `wrangler.toml` configured
- `.gitignore` configured
- `package.json` created
- Next.js configuration ready

### 🔐 Step 1: Add GitHub Secrets

Go to: `https://github.com/couchmanrick-wq/BailyGroup/settings/secrets/actions`

Add these secrets:

1. **CLOUDFLARE_API_TOKEN**
   - Visit: https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Choose "Edit Cloudflare Workers" template
   - Copy the token

2. **CLOUDFLARE_ACCOUNT_ID**
   - Visit: https://dash.cloudflare.com/
   - Look at the right sidebar under your account name
   - Copy your Account ID

3. **NEXT_PUBLIC_API_URL** (optional)
   - Example: `https://bailly-group.example.com/api`

### 🚀 Step 2: Create Cloudflare Pages Project

1. Go to: https://dash.cloudflare.com/
2. Click "Pages" in the left sidebar
3. Click "Connect to Git"
4. Authorize GitHub and select `BailyGroup` repository
5. Set build command: `npm run build`
6. Set build output directory: `.next`
7. Deploy!

### 📝 Step 3: Update Configuration

1. **Update `wrangler.toml`:**
   ```toml
   projectName = "your-actual-project-name"  # Change this
   
   [env.production]
   routes = [
     { pattern = "your-domain.com/api/*", zone_name = "your-domain.com" }
   ]
   ```

2. **Update `.github/workflows/deploy.yml`:**
   - Change `projectName` to match your Cloudflare Pages project

### 💻 Step 4: Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Test build
npm run build
npm start
```

### 🔄 Step 5: First Deployment

1. Initialize git (if not done):
   ```bash
   cd c:\Users\Rick\Projects\BailyGroup
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin https://github.com/couchmanrick-wq/BailyGroup.git
   git branch -M main
   git push -u origin main
   ```

3. GitHub Actions will automatically:
   - Build your Next.js app
   - Deploy to Cloudflare Pages
   - Deploy Workers

### ✨ Workflow

After setup, here's the automatic workflow:

```
You make changes
    ↓
git push to main
    ↓
GitHub Actions triggers
    ↓
npm run build
    ↓
Deploy to Cloudflare Pages (static site)
    ↓
Deploy to Cloudflare Workers (API)
    ↓
✅ Live!
```

### 🆘 Troubleshooting

- **Build fails:** Check `npm run build` locally first
- **Deployment fails:** Check GitHub Secrets are set correctly
- **API not working:** Verify routes in `wrangler.toml`
- **Pages not loading:** Check `.next` directory exists after build

### 📚 Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Next.js Docs](https://nextjs.org/docs)
