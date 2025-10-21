# 🚀 Quick Start Guide - Rainbow Films Backend

## ✅ Setup Complete!

Your backend is ready to use. Follow these simple steps:

---

## 📝 Step 1: Start the Server

```bash
cd backend
npm run dev
```

You should see:
```
✅ Connected to MongoDB
🚀 Server is running on port 3000
📍 API: http://localhost:3000
```

---

## 🔐 Step 2: Create Your Admin Account (First Time Only)

Open **Thunder Client** or **Postman** and make this request:

**POST** `http://localhost:3000/api/auth/create-admin`

**Body:**
```json
{
  "username": "admin",
  "password": "YourSecurePassword123",
  "email": "admin@rainbowfilms.com"
}
```

✅ **Success!** Your admin account is created.

---

## 🔑 Step 3: Login to Admin Panel

**POST** `http://localhost:3000/api/auth/login`

**Body:**
```json
{
  "username": "admin",
  "password": "YourSecurePassword123"
}
```

⚠️ Make sure to **save the session cookie** that comes in the response!

---

## 🎬 What Can You Do Now?

### ✨ Manage Hero Video
Update the video link on your homepage hero section

**PUT** `/api/hero-video`
```json
{
  "videoUrl": "https://www.youtube.com/watch?v=...",
  "title": "Hero Video"
}
```

### 🎥 Manage Films/Movies
Add, edit, or remove films from your portfolio

**POST** `/api/films` - Create new film
**GET** `/api/films` - Get all films
**PUT** `/api/films/:id` - Update film
**DELETE** `/api/films/:id` - Delete film

### 📧 View Contact Messages
See all contact form submissions

**GET** `/api/contact` - Get all contact messages
**PUT** `/api/contact/:id/read` - Mark as read
**DELETE** `/api/contact/:id` - Delete message

### 📮 View Newsletter Subscribers
Manage your subscriber list

**GET** `/api/subscribe` - Get all subscribers
**DELETE** `/api/subscribe/:id` - Remove subscriber

---

## 🌐 API Base URL

```
http://localhost:3000/api
```

---

## 📚 Full Documentation

- **README.md** - Complete API documentation
- **API_TESTING.md** - Step-by-step testing guide with examples

---

## 🎯 Common Admin Tasks

### 1. Add a New Film
```json
POST /api/films
{
  "title": "New Film Title",
  "category": "Music Video",
  "description": "Film description...",
  "thumbnail": "https://...",
  "videoUrl": "https://youtube.com/..."
}
```

### 2. Update Hero Video
```json
PUT /api/hero-video
{
  "videoUrl": "https://www.youtube.com/watch?v=...",
  "title": "Latest Showreel"
}
```

### 3. Check New Messages
```
GET /api/contact
```

### 4. View Subscribers
```
GET /api/subscribe
```

---

## 🔒 Security Notes

- ✅ Passwords are hashed with bcrypt
- ✅ Session-based authentication
- ✅ Protected admin routes
- ✅ CORS configured for your frontend
- ✅ HTTP-only cookies

---

## 🛠️ Tech Stack

- **Node.js** + **Express** - Backend framework
- **MongoDB** + **Mongoose** - Database
- **bcryptjs** - Password hashing
- **express-session** - Session management
- **connect-mongo** - Session store

---

## 📞 Need Help?

Check these files:
1. `README.md` - Full documentation
2. `API_TESTING.md` - Testing examples
3. Backend logs in terminal

---

## 🎉 You're All Set!

Your Rainbow Films admin backend is ready. Start managing your website content! 🎬✨

---

**Made with ❤️ for Rainbow Films**
