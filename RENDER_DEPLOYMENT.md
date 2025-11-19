# 🚀 Rainbow Films - Render Deployment Guide

## Complete Full-Stack Deployment on Render.com

---

## 📋 **Pre-Deployment Checklist**

### ✅ **What You Need:**

1. GitHub account with your repository
2. Render.com account (free tier available)
3. MongoDB Atlas account (free tier)
4. Resend account for emails (free tier)

---

## 🗄️ **Step 1: Setup MongoDB Atlas**

### **1.1 Create Database:**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up / Login
3. Create New Project → "Rainbow Films"
4. Build a Database → Free (M0) tier
5. Choose Cloud Provider & Region (closest to you)
6. Create Cluster

### **1.2 Configure Database Access:**

1. **Database Access** → Add New Database User

   - Username: `rainbowadmin`
   - Password: Generate secure password (save it!)
   - Database User Privileges: Read and write to any database

2. **Network Access** → Add IP Address
   - Click "Allow Access from Anywhere"
   - IP: `0.0.0.0/0` (for Render access)
   - Confirm

### **1.3 Get Connection String:**

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy connection string:
   ```
   mongodb+srv://rainbowadmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your actual password
5. Save this string - you'll need it!

---

## 📧 **Step 2: Setup Resend (Email Service)**

### **2.1 Create Account:**

1. Go to [Resend.com](https://resend.com)
2. Sign up with email
3. Verify email

### **2.2 Get API Key:**

1. Dashboard → API Keys
2. Create API Key
3. Name: "Rainbow Films Production"
4. Copy the key (starts with `re_...`)
5. Save it securely!

### **2.3 Email Configuration:**

- **For Testing:** Use `onboarding@resend.dev`
- **For Production:** Add your domain (optional)

---

## 🔧 **Step 3: Prepare Your Code**

### **3.1 Create `render.yaml` (Root of Project):**

Create this file in your project root:

```yaml
# render.yaml
services:
  # Backend Service
  - type: web
    name: rainbow-films-backend
    env: node
    region: oregon
    plan: free
    buildCommand: cd backend && npm install
    startCommand: cd backend && npm start
    envVars:
      - key: PORT
        value: 8080
      - key: NODE_ENV
        value: production
      - key: DB_URL
        sync: false
      - key: JWT_SECRET
        generateValue: true
      - key: RESEND_API_KEY
        sync: false
      - key: FROM_EMAIL
        value: onboarding@resend.dev
      - key: ADMIN_EMAIL
        sync: false
      - key: FRONTEND_URL
        sync: false

  # Frontend Service
  - type: web
    name: rainbow-films-frontend
    env: static
    region: oregon
    plan: free
    buildCommand: cd frontend && npm install && npm run build
    staticPublishPath: frontend/dist
    envVars:
      - key: VITE_API_URL
        sync: false
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### **3.2 Update `backend/package.json`:**

Make sure you have:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### **3.3 Update `frontend/package.json`:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## 🚀 **Step 4: Deploy to Render**

### **4.1 Push Code to GitHub:**

```bash
cd /Users/sky/Documents/Git-Projects/Rainbow/rainbow-films-react

# Add all changes
git add .

# Commit
git commit -m "Prepare for Render deployment"

# Push to GitHub
git push origin main
```

### **4.2 Connect to Render:**

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository
4. Select `rainbow-films-react` repository
5. Render will detect `render.yaml`

### **4.3 Configure Environment Variables:**

#### **For Backend Service:**

Click on backend service → Environment:

```env
DB_URL=mongodb+srv://rainbowadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/rainbow-films?retryWrites=true&w=majority

JWT_SECRET=your-super-secret-jwt-key-min-32-characters-long

RESEND_API_KEY=re_your_resend_api_key_here

FROM_EMAIL=onboarding@resend.dev

ADMIN_EMAIL=your-email@gmail.com

FRONTEND_URL=https://rainbow-films-frontend.onrender.com
```

**Important Notes:**

- Replace `YOUR_PASSWORD` in DB_URL with your MongoDB password
- Replace `RESEND_API_KEY` with your actual Resend key
- Replace `ADMIN_EMAIL` with your email
- `FRONTEND_URL` will be your frontend URL (update after frontend deploys)

#### **For Frontend Service:**

Click on frontend service → Environment:

```env
VITE_API_URL=https://rainbow-films-backend.onrender.com/api
```

**Note:** Replace with your actual backend URL after it deploys

### **4.4 Deploy:**

1. Click **"Apply"** or **"Create Blueprint Instance"**
2. Render will start deploying both services
3. Wait 5-10 minutes for first deployment

---

## 🔗 **Step 5: Get Your URLs**

After deployment completes:

### **Backend URL:**

```
https://rainbow-films-backend.onrender.com
```

### **Frontend URL:**

```
https://rainbow-films-frontend.onrender.com
```

### **5.1 Update Environment Variables:**

1. **Update Backend `FRONTEND_URL`:**

   - Go to Backend service → Environment
   - Update `FRONTEND_URL` to your frontend URL
   - Save changes (will trigger redeploy)

2. **Update Frontend `VITE_API_URL`:**
   - Go to Frontend service → Environment
   - Update `VITE_API_URL` to your backend URL + `/api`
   - Save changes (will trigger redeploy)

---

## 👤 **Step 6: Create Admin User**

### **6.1 Using Render Shell:**

1. Go to Backend service → Shell tab
2. Run these commands:

```bash
cd backend
node

# In Node REPL:
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

mongoose.connect(process.env.DB_URL).then(async () => {
  const User = require('./models/User');

  const hashedPassword = await bcrypt.hash('YourSecurePassword123!', 10);

  const admin = new User({
    username: 'admin',
    password: hashedPassword
  });

  await admin.save();
  console.log('Admin user created!');
  process.exit();
});
```

**Or use this helper script:**

Create `backend/create-admin.js`:

```javascript
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

async function createAdmin() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    const username = process.argv[2] || "admin";
    const password = process.argv[3] || "admin123";

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new User({
      username,
      password: hashedPassword,
    });

    await admin.save();
    console.log(`✅ Admin user created: ${username}`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

createAdmin();
```

Run it:

```bash
node create-admin.js admin YourSecurePassword123!
```

---

## ✅ **Step 7: Test Your Deployment**

### **7.1 Test Backend:**

```bash
curl https://rainbow-films-backend.onrender.com
# Should return: {"message":"Rainbow Films API Server"}

curl https://rainbow-films-backend.onrender.com/api/films
# Should return: [] or films array
```

### **7.2 Test Frontend:**

1. Open: `https://rainbow-films-frontend.onrender.com`
2. Should see your site!

### **7.3 Test Admin Login:**

1. Go to: `https://rainbow-films-frontend.onrender.com/admin/login`
2. Login with admin credentials
3. Add films, team members, clients

### **7.4 Test Features:**

- ✅ Hero video plays
- ✅ Films display
- ✅ Team members show
- ✅ Clients scroll
- ✅ Contact form works
- ✅ Newsletter subscription works
- ✅ Emails send

---

## 🐛 **Troubleshooting**

### **Issue: Build Failed**

**Check:**

1. Render logs for error messages
2. Node version compatibility
3. All dependencies in package.json

**Fix:**

```bash
# Locally test build
cd backend && npm install && npm start
cd frontend && npm install && npm run build
```

### **Issue: Backend 503 Error**

**Cause:** Free tier services sleep after 15 mins of inactivity

**Fix:**

- First request takes 30-60 seconds to wake up
- Consider paid plan for always-on service
- Or use a ping service (UptimeRobot)

### **Issue: CORS Error**

**Check:** `backend/server.js` has correct CORS origins:

```javascript
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://rainbow-films-frontend.onrender.com", // Add this
  process.env.FRONTEND_URL,
].filter(Boolean);
```

### **Issue: Environment Variables Not Working**

**Fix:**

1. Go to service → Environment
2. Check all variables are set
3. No extra spaces or quotes
4. Save and redeploy

### **Issue: Database Connection Failed**

**Check:**

1. MongoDB Atlas IP whitelist has `0.0.0.0/0`
2. DB_URL is correct with password
3. Database user has read/write permissions

---

## 🔄 **Continuous Deployment**

### **Auto-Deploy on Git Push:**

Render automatically deploys when you push to GitHub!

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main

# Render will auto-deploy! 🎉
```

### **Manual Deploy:**

1. Go to Render Dashboard
2. Select service
3. Click "Manual Deploy" → "Deploy latest commit"

---

## 💰 **Pricing**

### **Free Tier Includes:**

- ✅ 750 hours/month (enough for 1 service 24/7)
- ✅ Auto-deploy from Git
- ✅ Free SSL certificates
- ✅ Custom domains
- ⚠️ Services sleep after 15 mins inactivity
- ⚠️ 30-60 second cold start

### **Paid Plans:**

- **Starter:** $7/month per service
  - No sleep
  - Faster builds
  - More resources

---

## 🎯 **Post-Deployment Checklist**

```bash
✅ Backend deployed and running
✅ Frontend deployed and running
✅ MongoDB connected
✅ Environment variables set
✅ Admin user created
✅ CORS configured
✅ Emails sending (test contact form)
✅ All features working
✅ Custom domain added (optional)
✅ SSL certificate active
```

---

## 📊 **Monitoring**

### **Render Dashboard:**

- View logs in real-time
- Monitor resource usage
- Check deployment history
- View metrics

### **Logs:**

```bash
# Backend logs
Render Dashboard → Backend Service → Logs

# Frontend logs
Render Dashboard → Frontend Service → Logs
```

---

## 🔐 **Security Best Practices**

1. ✅ Use strong JWT_SECRET (32+ characters)
2. ✅ Use strong admin password
3. ✅ Keep API keys secret
4. ✅ Enable HTTPS only (Render does this automatically)
5. ✅ Regularly update dependencies
6. ✅ Monitor logs for suspicious activity

---

## 🎉 **You're Live!**

Your Rainbow Films website is now deployed on Render!

**Share your URLs:**

- **Website:** `https://rainbow-films-frontend.onrender.com`
- **API:** `https://rainbow-films-backend.onrender.com/api`

---

## 📞 **Need Help?**

- **Render Docs:** https://render.com/docs
- **Render Community:** https://community.render.com
- **MongoDB Docs:** https://docs.mongodb.com
- **Resend Docs:** https://resend.com/docs

---

## 🚀 **Next Steps:**

1. Add custom domain (optional)
2. Setup monitoring/alerts
3. Add more content via admin
4. Share with the world! 🌍

**Congratulations! Your site is live! 🎊**
