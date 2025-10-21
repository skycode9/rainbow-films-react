# Rainbow Films Backend API

Complete backend API with Admin Panel for Rainbow Films website.

## 🚀 Features

- ✅ **Admin Authentication** - Session-based login/logout
- ✅ **Hero Video Management** - Update hero section video
- ✅ **Films Management** - Full CRUD operations for films/movies
- ✅ **Contact Form** - Receive and manage contact submissions
- ✅ **Newsletter Subscriptions** - Manage subscriber list
- ✅ **Secure Admin Routes** - Protected with authentication middleware

## 📦 Installation

```bash
cd backend
npm install
```

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=3000
DB_URI="your_mongodb_connection_string"
SESSION_SECRET="your_secret_key_here"
FRONTEND_URL="http://localhost:5173"
NODE_ENV="development"
```

## 🏃 Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server will run on: `http://localhost:3000`

## 🔐 First Time Setup

### Create Admin Account

**POST** `/api/auth/create-admin`

```json
{
  "username": "admin",
  "password": "your_secure_password",
  "email": "admin@rainbowfilms.com"
}
```

⚠️ **Important:** Use this route ONCE to create admin, then comment it out or remove it for security.

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

---

## 🔑 Authentication Routes

### Login
**POST** `/api/auth/login`

Request:
```json
{
  "username": "admin",
  "password": "your_password"
}
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "admin": {
    "id": "...",
    "username": "admin",
    "email": "admin@rainbowfilms.com"
  }
}
```

### Logout
**POST** `/api/auth/logout`

### Check Auth Status
**GET** `/api/auth/check`

---

## 🎬 Hero Video Routes

### Get Hero Video (Public)
**GET** `/api/hero-video`

### Update Hero Video (Admin)
**PUT** `/api/hero-video`

Request:
```json
{
  "videoUrl": "https://www.youtube.com/watch?v=...",
  "title": "Hero Video"
}
```

---

## 🎥 Films Routes

### Get All Films (Public)
**GET** `/api/films`

Query params: `?category=Commercial` (optional)

### Get Film by ID (Public)
**GET** `/api/films/:id`

### Get All Films - Admin (Admin)
**GET** `/api/films/admin/all`

### Create Film (Admin)
**POST** `/api/films`

Request:
```json
{
  "title": "Ethereal Dreams",
  "category": "Music Video",
  "description": "A visually stunning music video...",
  "thumbnail": "https://images.unsplash.com/...",
  "videoUrl": "https://www.youtube.com/watch?v=..."
}
```

### Update Film (Admin)
**PUT** `/api/films/:id`

### Delete Film (Admin)
**DELETE** `/api/films/:id`

---

## 📧 Contact Routes

### Submit Contact Form (Public)
**POST** `/api/contact`

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Inc.",
  "message": "I want to collaborate..."
}
```

### Get All Contacts (Admin)
**GET** `/api/contact`

Response includes stats:
```json
{
  "success": true,
  "data": [...],
  "stats": {
    "total": 10,
    "unread": 5,
    "read": 5
  }
}
```

### Mark as Read (Admin)
**PUT** `/api/contact/:id/read`

### Delete Contact (Admin)
**DELETE** `/api/contact/:id`

---

## 📮 Subscribe Routes

### Subscribe (Public)
**POST** `/api/subscribe`

Request:
```json
{
  "email": "user@example.com"
}
```

### Get All Subscribers (Admin)
**GET** `/api/subscribe`

### Toggle Subscriber Status (Admin)
**PUT** `/api/subscribe/:id/toggle`

### Delete Subscriber (Admin)
**DELETE** `/api/subscribe/:id`

---

## 🛡️ Security

- Session-based authentication
- Bcrypt password hashing
- HTTP-only cookies
- CORS protection
- Protected admin routes

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── models/
│   │   ├── Admin.js
│   │   ├── HeroVideo.js
│   │   ├── Film.js
│   │   ├── Contact.js
│   │   └── Subscribe.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── heroVideoController.js
│   │   ├── filmController.js
│   │   ├── contactController.js
│   │   └── subscribeController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── heroVideoRoutes.js
│   │   ├── filmRoutes.js
│   │   ├── contactRoutes.js
│   │   └── subscribeRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── db.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🧪 Testing with Postman/Thunder Client

1. Create Admin Account
2. Login to get session cookie
3. Use authenticated routes with cookie

---

## 📝 Notes

- All admin routes require authentication
- Sessions last 7 days
- Use HTTPS in production
- Change SESSION_SECRET in production

---

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Create admin account using `/api/auth/create-admin`
3. Login through `/api/auth/login`
4. Start managing your website content!

---

Made with ❤️ for Rainbow Films
