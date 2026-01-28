---
description: How to deploy the wedding RSVP site to Vercel
---

# Deploying to Vercel

## Prerequisites

- A GitHub account (with your code pushed to a repository)
- A Vercel account (free at [vercel.com](https://vercel.com))

---

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Code to GitHub

If not already done, initialize and push your repository:

```bash
cd f:\Wedding\wedding-rsvp
git init
git add .
git commit -m "Initial commit - Wedding RSVP site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wedding-rsvp.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New..."** → **"Project"**
3. Select your `wedding-rsvp` repository
4. Vercel auto-detects Next.js - no configuration needed!
5. Click **"Deploy"**

### Step 3: Configure Environment Variables (for Web3Forms)

In the Vercel dashboard for your project:

1. Go to **Settings** → **Environment Variables**
2. Add your Web3Forms access key:

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Your Web3Forms Access Key |

> **Get your key:** [web3forms.com](https://web3forms.com) → Create Access Key → Copy the key

1. Redeploy after adding variables

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

// turbo

```bash
cd f:\Wedding\wedding-rsvp
vercel
```

Follow the prompts:

- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (for first deploy)
- **Project name?** → wedding-rsvp (or your choice)
- **Directory?** → `./` (current directory)

### Step 4: Deploy to Production

// turbo

```bash
vercel --prod
```

---

## Custom Domain Setup

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain (e.g., `trinath-and-archana.com`)
3. Update DNS records as instructed by Vercel
4. SSL is automatically configured!

---

## Automatic Deployments

Once connected to GitHub:

- **Production deploys**: Every push to `main` branch
- **Preview deploys**: Every pull request gets a unique preview URL

---

## Useful Commands

| Command | Description |
|---------|-------------|
| `vercel` | Deploy to preview |
| `vercel --prod` | Deploy to production |
| `vercel env pull` | Pull env vars to local `.env` |
| `vercel logs` | View deployment logs |
| `vercel domains` | Manage custom domains |

---

## Troubleshooting

### Build Fails

// turbo

```bash
npm run build
```

Run locally first to catch errors before deploying.

### Environment Variables Not Working

- Ensure variables prefixed with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding/changing variables

### Web3Forms RSVP Not Working

- Verify your access key is correct in environment variables
- Check that form submissions are arriving at [web3forms.com/dashboard](https://web3forms.com)
- Ensure the `access_key` field is included in your form data
