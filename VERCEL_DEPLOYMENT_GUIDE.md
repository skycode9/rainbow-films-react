# 🚀 Vercel Deployment Guide - Frontend & Backend

Complete step-by-step guide to deploy Rainbow Films on Vercel.

---

## 📋 Pre-Deployment Checklist

### 1. Prepare Backend for Vercel

Backend ko Vercel pe deploy karne ke liye kuch changes chahiye.

#### Create `vercel.json` in Backend

```bash
cd backend
```

Create file: `backend/vercel.json`

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/app.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

#### Update `package.json` in Backend

Add this to `backend/package.json`:

```json
{
  "engines": {
    "node": "18.x"
  }
}
```

### 2. Prepare Frontend for Vercel

Frontend already ready hai, but check karo:

#### Create `vercel.json` in Frontend (Optional)

```bash
cd frontend
```

Create file: `frontend/vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎯 Step 1: Deploy Backend First

### A. Push Code to GitHub

```bash
cd /Users/sky/Documents/Git-Projects/Rainbow/rainbow-films-react

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Vercel deployment"

# Create GitHub repo and push
# Go to github.com → New Repository → rainbow-films-react
git remote add origin https://github.com/YOUR_USERNAME/rainbow-films-react.git
git branch -M main
git push -u origin main
```

### B. Deploy Backend on Vercel

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Login with GitHub

2. **Import Project:**
   - Click **"Add New"** → **"Project"**
   - Select your GitHub repo: `rainbow-films-react`
   - Click **"Import"**

3. **Configure Backend:**
   - **Project Name:** `rainbow-films-backend`
   - **Framework Preset:** Other
   - **Root Directory:** Click **"Edit"** → Select `backend`
   - **Build Command:** Leave empty or `npm install`
   - **Output Directory:** Leave empty
   - **Install Command:** `npm install`

4. **Add Environment Variables:**
   Click **"Environment Variables"** and add:

   ```
   PORT=3400
   DB_URI=mongodb+srv://rainbow-backend:tjlEVo1a5CHdLVfd@rainbow-backend.pwqbpdr.mongodb.net/rainbow-backend
   SESSION_SECRET=rainbow-films-secret-key-2024-change-this-in-production
   RESEND_API_KEY=re_2dbtfSDX_Eka4pEtWcnVjcKXH1NxGmPZJ
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

   **Note:** `FRONTEND_URL` ko baad me update karenge after frontend deploy

5. **Deploy:**
   - Click **"Deploy"**
   - Wait for deployment (2-3 minutes)
   - Copy the backend URL: `https://rainbow-films-backend.vercel.app`

6. **Update FRONTEND_URL:**
   - Go to **Settings** → **Environment Variables**
   - Edit `FRONTEND_URL` (will update after frontend deploy)

---

## 🎯 Step 2: Deploy Frontend

### A. Update Frontend Environment Variables

Before deploying, update frontend to use production backend URL.

Edit `frontend/.env.production` (create if doesn't exist):

```env
VITE_API_URL=https://rainbow-films-backend.vercel.app
```

### B. Deploy Frontend on Vercel

1. **Import Project Again:**
   - Go to Vercel Dashboard
   - Click **"Add New"** → **"Project"**
   - Select same GitHub repo: `rainbow-films-react`

2. **Configure Frontend:**
   - **Project Name:** `rainbow-films-frontend`
   - **Framework Preset:** Vite
   - **Root Directory:** Click **"Edit"** → Select `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

3. **Add Environment Variables:**
   ```
   VITE_API_URL=https://rainbow-films-backend.vercel.app
   ```

4. **Deploy:**
   - Click **"Deploy"**
   - Wait for deployment (2-3 minutes)
   - Copy the frontend URL: `https://rainbow-films-frontend.vercel.app`

---

## 🎯 Step 3: Update Backend CORS

Now update backend environment variables:

1. **Go to Backend Project on Vercel:**
   - Select `rainbow-films-backend` project
   - Go to **Settings** → **Environment Variables**

2. **Update FRONTEND_URL:**
   ```
   FRONTEND_URL=https://rainbow-films-frontend.vercel.app
   ```

3. **Redeploy Backend:**
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

---

## 🎯 Step 4: Verify Domain in Resend

For production emails to work:

1. **Go to Resend Dashboard:**
   - https://resend.com

2. **Add Domain:**
   - Go to **Domains**
   - Click **"Add Domain"**
   - Enter: `rainbowfilms.com` (your domain)

3. **Add DNS Records:**
   - Resend will show DNS records
   - Add them to your domain provider
   - Wait for verification

4. **Update Email Service:**
   Edit `backend/src/utils/emailService.js`:
   
   ```javascript
   // Change from:
   from: "Rainbow Films <onboarding@resend.dev>"
   
   // To:
   from: "Rainbow Films <noreply@rainbowfilms.com>"
   ```

5. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Update email domain"
   git push
   ```
   
   Vercel will auto-deploy!

---

## 🎯 Step 5: Test Production Deployment

1. **Visit Frontend:**
   - https://rainbow-films-frontend.vercel.app

2. **Test Contact Form:**
   - Fill and submit
   - Check `skycode9005@gmail.com` for email

3. **Test Subscribe Form:**
   - Fill and submit
   - Check emails

4. **Check Backend Logs:**
   - Vercel Dashboard → Backend Project → **Functions** tab
   - Click on any function to see logs

---

## 🔧 Common Issues & Fixes

### Issue 1: Backend Routes Not Working

**Fix:** Check `vercel.json` in backend is correct

### Issue 2: CORS Error

**Fix:** Make sure `FRONTEND_URL` in backend env variables matches your frontend URL

### Issue 3: Database Connection Failed

**Fix:** 
- Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Go to MongoDB Atlas → Network Access → Add IP Address → Allow Access from Anywhere

### Issue 4: Environment Variables Not Working

**Fix:**
- Go to Vercel → Project → Settings → Environment Variables
- Make sure all variables are added
- Redeploy after adding variables

### Issue 5: Build Failed

**Fix:**
- Check Vercel build logs
- Make sure `package.json` has correct scripts
- Check Node version compatibility

---

## 📝 Custom Domain Setup (Optional)

### Add Custom Domain to Frontend

1. **Buy Domain:**
   - GoDaddy, Namecheap, etc.
   - Example: `rainbowfilms.com`

2. **Add to Vercel:**
   - Frontend Project → **Settings** → **Domains**
   - Add: `rainbowfilms.com` and `www.rainbowfilms.com`

3. **Update DNS:**
   - Add CNAME records as shown by Vercel
   - Wait for propagation (5-30 minutes)

4. **Update Backend CORS:**
   - Update `FRONTEND_URL` to `https://rainbowfilms.com`
   - Redeploy backend

### Add Custom Domain to Backend (Optional)

1. **Add Subdomain:**
   - Backend Project → **Settings** → **Domains**
   - Add: `api.rainbowfilms.com`

2. **Update Frontend:**
   - Update `VITE_API_URL` to `https://api.rainbowfilms.com`
   - Redeploy frontend

---

## 🎉 Final URLs

After deployment:

- **Frontend:** https://rainbow-films-frontend.vercel.app
- **Backend:** https://rainbow-films-backend.vercel.app
- **API Endpoints:**
  - Contact: `https://rainbow-films-backend.vercel.app/api/contact`
  - Subscribe: `https://rainbow-films-backend.vercel.app/api/subscribe`

With custom domain:
- **Frontend:** https://rainbowfilms.com
- **Backend:** https://api.rainbowfilms.com

---

## 🔄 Auto Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Your changes"
git push

# Vercel will auto-deploy both frontend and backend!
```

---

## 📊 Monitoring

### View Logs:
- Vercel Dashboard → Project → **Functions** tab
- Click on any function to see real-time logs

### View Analytics:
- Vercel Dashboard → Project → **Analytics** tab

### View Deployments:
- Vercel Dashboard → Project → **Deployments** tab

---

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- Check deployment logs in Vercel dashboard

---

## ✅ Deployment Checklist

- [ ] Backend `vercel.json` created
- [ ] Frontend `vercel.json` created (optional)
- [ ] Code pushed to GitHub
- [ ] Backend deployed on Vercel
- [ ] Backend environment variables added
- [ ] Frontend deployed on Vercel
- [ ] Frontend environment variables added
- [ ] Backend CORS updated with frontend URL
- [ ] Resend domain verified (optional but recommended)
- [ ] MongoDB allows connections from anywhere
- [ ] Tested contact form
- [ ] Tested subscribe form
- [ ] Custom domain added (optional)

---

**Happy Deploying! 🚀**
