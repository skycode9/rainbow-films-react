# ⚡ Quick Start - Vercel Deployment

## 🎯 3 Simple Steps

### 1️⃣ GitHub Push
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

### 2️⃣ Deploy Backend
1. https://vercel.com → New Project
2. Root: `backend`
3. Add env variables (see below)
4. Deploy → Copy URL

### 3️⃣ Deploy Frontend
1. Vercel → New Project (same repo)
2. Root: `frontend`
3. Add: `VITE_API_URL=<backend-url>`
4. Deploy → Done! 🎉

---

## 📋 Environment Variables

### Backend
```
PORT=3400
DB_URI=mongodb+srv://rainbow-backend:tjlEVo1a5CHdLVfd@rainbow-backend.pwqbpdr.mongodb.net/rainbow-backend
SESSION_SECRET=rainbow-films-secret-key-2024-change-this-in-production
RESEND_API_KEY=re_2dbtfSDX_Eka4pEtWcnVjcKXH1NxGmPZJ
NODE_ENV=production
FRONTEND_URL=<your-frontend-url>
```

### Frontend
```
VITE_API_URL=<your-backend-url>
```

---

## ✅ Files Ready
- ✅ `backend/vercel.json`
- ✅ `frontend/vercel.json`
- ✅ `backend/package.json` (Node 18)
- ✅ `frontend/.env.production`

---

## 🔧 MongoDB Setup
1. https://cloud.mongodb.com
2. Network Access → Allow 0.0.0.0/0
3. Done!

---

## 📧 Emails
- Contact → skycode9005@gmail.com
- Subscribe → Subscriber + Admin notification
- Powered by Resend

---

## 📚 Need Help?
- Quick Steps: `DEPLOYMENT_STEPS.md`
- Detailed Guide: `VERCEL_DEPLOYMENT_GUIDE.md`
- MongoDB: `MONGODB_ATLAS_SETUP.md`

---

**Deploy karo aur live ho jao! 🚀**
