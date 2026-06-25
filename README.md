# BailyGroup

A Next.js application deployed to Cloudflare Pages and Workers.

## Setup Instructions

### 1. Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### 2. GitHub Secrets Configuration

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Your Cloudflare API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare Account ID |
| `NEXT_PUBLIC_API_URL` | Your API URL (optional) |

**How to get your Cloudflare credentials:**

1. **API Token:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Account → API Tokens
   - Create Token → Edit Cloudflare Workers
   - Copy the token

2. **Account ID:**
   - Dashboard → Right sidebar under Account
   - Copy your Account ID

### 3. Update Cloudflare Configuration

Edit `wrangler.toml`:
- Change `projectName` to your actual Cloudflare Pages project name
- Update `routes` with your actual domain

### 4. Build & Deploy

**Local deployment:**
```bash
npm run build
npx wrangler deploy
```

**Automatic deployment:**
Push to `main` branch and GitHub Actions will automatically:
1. Build your Next.js app
2. Deploy to Cloudflare Pages
3. Deploy Workers (if applicable)

## Project Structure

```
├── .github/workflows/     # GitHub Actions automation
├── src/
│   ├── pages/            # Next.js pages
│   ├── components/       # React components
│   └── styles/           # CSS modules
├── functions/            # Cloudflare Workers (optional)
├── wrangler.toml         # Cloudflare configuration
└── next.config.js        # Next.js configuration
```

## Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
