# ⚡ Quick Deployment Checklist - Render

## 🎯 **5-Minute Deployment Guide**

---

## ✅ **Pre-Requirements (Do These First)**

### **1. MongoDB Atlas** (5 mins)

```
✓ Create account: mongodb.com/cloud/atlas
✓ Create free cluster
✓ Add database user (save password!)
✓ Whitelist IP: 0.0.0.0/0
✓ Get connection string
```

### **2. Resend Email** (2 mins)

```
✓ Create account: resend.com
✓ Get API key (starts with re_...)
✓ Save the key
```

### **3. GitHub** (2 mins)

```bash
cd /Users/sky/Documents/Git-Projects/Rainbow/rainbow-films-react
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## 🚀 **Deploy on Render (10 mins)**

### **Step 1: Create Render Account**

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Authorize Render

### **Step 2: Deploy from Blueprint**

1. Dashboard → **New +** → **Blueprint**
2. Connect repository: `rainbow-films-react`
3. Render detects `render.yaml` ✅
4. Click **Apply**

### **Step 3: Set Environment Variables**

#### **Backend Service:**

Click on `rainbow-films-backend` → Environment → Add:

```env
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/rainbow-films

JWT_SECRET=create-a-long-random-secret-key-here-min-32-chars

RESEND_API_KEY=re_your_resend_api_key

FROM_EMAIL=onboarding@resend.dev

ADMIN_EMAIL=your-email@gmail.com

FRONTEND_URL=https://rainbow-films-frontend.onrender.com
```

#### **Frontend Service:**

Click on `rainbow-films-frontend` → Environment → Add:

```env
VITE_API_URL=https://rainbow-films-backend.onrender.com/api
```

### **Step 4: Wait for Deployment**

- Backend: ~5 minutes
- Frontend: ~3 minutes
- ☕ Grab coffee!

---

## 👤 **Create Admin User**

### **Option 1: Using Render Shell**

1. Go to Backend service → **Shell** tab
2. Run:

```bash
cd backend
node create-admin.js admin YourPassword123!
```

### **Option 2: Locally**

```bash
# Set your production DB_URL temporarily
export DB_URL="your-mongodb-connection-string"

cd backend
node create-admin.js admin YourPassword123!
```

---

## ✅ **Test Your Site**

### **1. Test Backend:**

```
https://rainbow-films-backend.onrender.com
Should show: {"message":"Rainbow Films API Server"}
```

### **2. Test Frontend:**

```
https://rainbow-films-frontend.onrender.com
Should show your website!
```

### **3. Login to Admin:**

```
https://rainbow-films-frontend.onrender.com/admin/login
Username: admin
Password: YourPassword123!
```

### **4. Add Content:**

- Add films
- Add team members
- Add clients
- Set hero video URL

---

## 🎉 **You're Live!**

**Your URLs:**

- **Website:** `https://rainbow-films-frontend.onrender.com`
- **API:** `https://rainbow-films-backend.onrender.com`
- **Admin:** `https://rainbow-films-frontend.onrender.com/admin`

---

## 🐛 **Common Issues**

### **Issue: 503 Service Unavailable**

**Fix:** Free tier sleeps after 15 mins. First request takes 30-60 seconds to wake up.

### **Issue: CORS Error**

**Fix:** Check `FRONTEND_URL` in backend environment variables matches your frontend URL.

### **Issue: Can't Login**

**Fix:** Make sure admin user is created. Run `create-admin.js` script.

### **Issue: Images Not Uploading**

**Fix:** Render free tier has limited storage. Use external image hosting (Cloudinary, AWS S3).

---

## 🔄 **Update Your Site**

Just push to GitHub:

```bash
git add .
git commit -m "Update"
git push origin main
```

Render auto-deploys! 🎉

---

## 💰 **Cost**

**Free Tier:**

- ✅ 750 hours/month
- ✅ 2 services (backend + frontend)
- ⚠️ Services sleep after 15 mins
- ⚠️ 30-60 second cold start

**Upgrade to Starter ($7/month per service):**

- ✅ No sleep
- ✅ Faster
- ✅ More resources

---

## 📋 **Final Checklist**

```
✅ MongoDB Atlas setup
✅ Resend API key obtained
✅ Code pushed to GitHub
✅ Render services deployed
✅ Environment variables set
✅ Admin user created
✅ Website accessible
✅ Admin login works
✅ Content added
✅ All features tested
```

---

## 🎯 **Next Steps**

1. **Custom Domain** (Optional)

   - Render Dashboard → Service → Settings → Custom Domain
   - Add your domain
   - Update DNS records

2. **Monitoring**

   - Check logs regularly
   - Monitor resource usage
   - Set up alerts

3. **Backup**
   - MongoDB Atlas has automatic backups
   - Export important data regularly

---

**Congratulations! Your site is live on Render! 🚀**

**Need detailed guide?** Check `RENDER_DEPLOYMENT.md`
