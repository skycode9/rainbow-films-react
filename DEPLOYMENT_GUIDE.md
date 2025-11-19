# 🚀 Rainbow Films - Deployment Guide

## ✅ **Frontend-Backend Integration Complete!**

All components are now fully dynamic and connected to the backend:

### **Dynamic Components:**

1. ✅ **Hero** - Fetches video URL from settings
2. ✅ **Portfolio** - Displays films from database
3. ✅ **Team** - Shows team members from database
4. ✅ **Clients** - Displays client logos from database
5. ✅ **Contact** - Saves submissions and sends emails
6. ✅ **Newsletter** - Saves subscribers and sends welcome emails

---

## 📋 **Pre-Deployment Checklist**

### **1. Environment Variables**

#### **Backend (.env)**

```env
PORT=8080
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
FRONTEND_URL=https://your-frontend-domain.com

# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com
```

#### **Frontend (.env)**

```env
VITE_API_URL=https://your-backend-domain.com/api
```

---

## 🌐 **Deployment Options**

### **Option 1: Vercel (Frontend) + Railway (Backend)**

#### **Backend on Railway:**

1. Create account on [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Set root directory to `/backend`
5. Add environment variables in Railway dashboard
6. Railway will auto-deploy on push

**Railway Environment Variables:**

- `PORT` = 8080
- `DB_URL` = Your MongoDB Atlas connection string
- `JWT_SECRET` = Generate secure secret
- `RESEND_API_KEY` = From Resend dashboard
- `FROM_EMAIL` = Your verified email
- `ADMIN_EMAIL` = Your admin email
- `FRONTEND_URL` = Your Vercel frontend URL

#### **Frontend on Vercel:**

1. Create account on [Vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `/frontend`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variable:
   - `VITE_API_URL` = Your Railway backend URL + `/api`

---

### **Option 2: Netlify (Frontend) + Render (Backend)**

#### **Backend on Render:**

1. Create account on [Render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Root directory: `backend`
5. Build command: `npm install`
6. Start command: `node server.js`
7. Add environment variables

#### **Frontend on Netlify:**

1. Create account on [Netlify.com](https://netlify.com)
2. Import from Git
3. Base directory: `frontend`
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variable: `VITE_API_URL`

---

### **Option 3: DigitalOcean App Platform (Full Stack)**

1. Create account on [DigitalOcean](https://www.digitalocean.com)
2. Apps → Create App
3. Connect GitHub repository
4. Add two components:
   - **Backend**: Node.js service (port 8080)
   - **Frontend**: Static site
5. Set environment variables for both
6. Deploy

---

## 🗄️ **Database Setup (MongoDB Atlas)**

1. Create account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create new cluster (Free tier available)
3. Database Access → Add user with password
4. Network Access → Add IP (0.0.0.0/0 for all IPs)
5. Connect → Get connection string
6. Replace `<password>` with your database password
7. Use this string in `DB_URL` environment variable

---

## 📧 **Email Setup (Resend)**

1. Create account on [Resend.com](https://resend.com)
2. API Keys → Create API Key
3. Copy key to `RESEND_API_KEY`
4. For production:
   - Domains → Add your domain
   - Add DNS records (MX, TXT, CNAME)
   - Verify domain
   - Use `noreply@yourdomain.com` as `FROM_EMAIL`

---

## 🔒 **Security Best Practices**

### **Backend:**

- ✅ Use strong JWT_SECRET (min 32 characters)
- ✅ Enable CORS only for your frontend domain
- ✅ Use HTTPS in production
- ✅ Keep dependencies updated
- ✅ Use environment variables for all secrets

### **Frontend:**

- ✅ Never commit `.env` files
- ✅ Use HTTPS for API calls
- ✅ Validate all user inputs
- ✅ Sanitize data before display

---

## 📦 **Build Commands**

### **Backend:**

```bash
cd backend
npm install
npm start
```

### **Frontend:**

```bash
cd frontend
npm install
npm run build
```

---

## 🧪 **Testing Before Deployment**

### **1. Test Backend:**

```bash
cd backend
npm start
```

Visit: `http://localhost:8080`

### **2. Test Frontend:**

```bash
cd frontend
npm run dev
```

Visit: `http://localhost:5173`

### **3. Test API Endpoints:**

- GET `/api/films` - Should return films
- GET `/api/team` - Should return team members
- GET `/api/clients` - Should return clients
- GET `/api/settings` - Should return settings
- POST `/api/contacts` - Should save contact
- POST `/api/subscribers` - Should save subscriber

---

## 🔄 **Post-Deployment Steps**

1. **Add Initial Data:**

   - Login to admin: `/admin/login`
   - Add films, team members, clients
   - Set hero video URL in settings

2. **Test Email Functionality:**

   - Submit contact form
   - Subscribe to newsletter
   - Check emails are received

3. **Test All Features:**

   - Hero video plays
   - Films display correctly
   - Team members show
   - Clients scroll
   - Contact form works
   - Newsletter subscription works

4. **Monitor:**
   - Check backend logs
   - Monitor database usage
   - Track email delivery

---

## 🐛 **Common Issues & Solutions**

### **CORS Errors:**

```javascript
// backend/server.js
const allowedOrigins = [
  "https://your-frontend-domain.com",
  process.env.FRONTEND_URL,
];
```

### **API Connection Failed:**

- Check `VITE_API_URL` in frontend .env
- Ensure backend is running
- Verify CORS settings

### **Images Not Loading:**

- Check image URLs use full path with domain
- Verify `/uploads` folder exists
- Check static file serving in server.js

### **Emails Not Sending:**

- Verify RESEND_API_KEY is correct
- Check FROM_EMAIL is verified
- Look at backend logs for errors

---

## 📊 **Performance Optimization**

### **Frontend:**

- ✅ Images lazy loaded
- ✅ Components memoized
- ✅ Code splitting with React.lazy
- ✅ Optimized animations

### **Backend:**

- ✅ Database indexes on frequently queried fields
- ✅ Response caching where appropriate
- ✅ Compression middleware
- ✅ Rate limiting on public endpoints

---

## 🎯 **Deployment Checklist**

- [ ] MongoDB Atlas database created
- [ ] Resend account setup with API key
- [ ] Backend deployed with all environment variables
- [ ] Frontend deployed with API_URL configured
- [ ] Domain DNS configured (if using custom domain)
- [ ] SSL certificates active (HTTPS)
- [ ] Admin account created
- [ ] Initial content added (films, team, clients)
- [ ] Hero video URL set
- [ ] Contact form tested
- [ ] Newsletter subscription tested
- [ ] All emails sending correctly
- [ ] Mobile responsiveness checked
- [ ] Performance tested
- [ ] SEO meta tags added

---

## 📞 **Support**

If you encounter issues:

1. Check backend logs
2. Check browser console
3. Verify environment variables
4. Test API endpoints directly
5. Check database connections

---

## 🎉 **You're Ready to Deploy!**

Your Rainbow Films website is fully dynamic and ready for production deployment. Follow the steps above for your chosen platform and you'll be live in minutes!

**Good luck! 🚀**
