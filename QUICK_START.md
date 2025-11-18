# ⚡ Quick Start - Rainbow Films

## 🎬 Start Karne Ke Liye

### 1️⃣ Backend Setup (5 minutes)

```bash
cd backend
npm install
cp .env.example .env
```

**Edit `.env` file:**

```env
MONGODB_URI=mongodb://localhost:27017/rainbow-films
JWT_SECRET=apni_secret_key_yahan_likho
```

**MongoDB Start Karo:**

```bash
# macOS
brew services start mongodb-community

# Ya manually
mongod
```

**Admin User Banao:**

```bash
node scripts/createAdmin.js
```

- Username: `admin`
- Password: `admin123`

**Backend Start Karo:**

```bash
npm run dev
```

✅ Backend running on: http://localhost:5000

---

### 2️⃣ Frontend Setup (2 minutes)

```bash
cd frontend
npm install
cp .env.example .env
```

**Edit `.env` file:**

```env
VITE_API_URL=http://localhost:5000/api
```

**Frontend Start Karo:**

```bash
npm run dev
```

✅ Frontend running on: http://localhost:5173

---

## 🎯 Ab Kya Karna Hai

### Public Website

👉 http://localhost:5173

### Admin Login

👉 http://localhost:5173/admin/login

- Username: `admin`
- Password: `admin123`

### Admin Dashboard

👉 http://localhost:5173/admin/dashboard

---

## ✨ Admin Panel Features

✅ **Dashboard** - Stats aur quick actions  
✅ **Films Management** - Films add/edit/delete karo  
✅ **Team Management** - Team members manage karo  
✅ **Clients Management** - Client list manage karo  
✅ **Contact Messages** - Contact form submissions dekho

---

## 🔧 Testing Commands

```bash
# Backend health check
curl http://localhost:5000

# Login test
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Get films
curl http://localhost:5000/api/films
```

---

## 🐛 Common Issues

**MongoDB connect nahi ho raha?**

```bash
# MongoDB start karo
brew services start mongodb-community
```

**Port already in use?**

```bash
# Kill port 5000
lsof -ti:5000 | xargs kill -9

# Kill port 5173
lsof -ti:5173 | xargs kill -9
```

**CORS error aa raha hai?**

- Backend `.env` mein `FRONTEND_URL` check karo
- Browser cache clear karo

---

## 📚 Detailed Documentation

Complete documentation ke liye dekho: **SETUP_GUIDE.md**

---

## 🎉 Happy Coding!

Project setup ho gaya! Ab tum:

1. Admin panel mein login karo
2. Films, team members, clients add karo
3. Contact form test karo
4. Customize karo apne hisaab se

**Questions?** Check SETUP_GUIDE.md ya backend/frontend logs dekho.
