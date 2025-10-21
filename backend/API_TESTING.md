# 🧪 API Testing Guide

Quick guide to test all API endpoints using **Thunder Client**, **Postman**, or **cURL**.

---

## 🎯 Step-by-Step Setup

### 1️⃣ Install Dependencies & Start Server

```bash
cd backend
npm install
npm run dev
```

Server should be running at: `http://localhost:3400`

---

### 2️⃣ Create Admin Account (ONE TIME ONLY)

**POST** `http://localhost:3400/api/auth/create-admin`

**Body (JSON):**
```json
{
  "username": "admin",
  "password": "Admin@123",
  "email": "admin@rainbowfilms.com"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Admin created successfully",
  "admin": {
    "id": "...",
    "username": "admin",
    "email": "admin@rainbowfilms.com"
  }
}
```

---

### 3️⃣ Login as Admin

**POST** `http://localhost:3400/api/auth/login`

**Body (JSON):**
```json
{
  "username": "admin",
  "password": "Admin@123"
}
```

⚠️ **Important:** Save the session cookie from response headers!

**Expected Response:**
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

---

## 🎬 Test Hero Video Management

### Update Hero Video (Requires Login)

**PUT** `http://localhost:3400/api/hero-video`

**Body (JSON):**
```json
{
  "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "title": "Rainbow Films Showreel 2024"
}
```

### Get Current Hero Video (Public)

**GET** `http://localhost:3400/api/hero-video`

---

## 🎥 Test Films Management

### Create a New Film (Requires Login)

**POST** `http://localhost:3400/api/films`

**Body (JSON):**
```json
{
  "title": "Midnight Dreams",
  "category": "Music Video",
  "description": "A cinematic journey through urban landscapes",
  "thumbnail": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
  "videoUrl": "https://www.youtube.com/watch?v=example123"
}
```

### Get All Films (Public)

**GET** `http://localhost:3400/api/films`

**GET** `http://localhost:3400/api/films?category=Music Video`

### Get All Films as Admin (Requires Login)

**GET** `http://localhost:3400/api/films/admin/all`

### Update a Film (Requires Login)

**PUT** `http://localhost:3400/api/films/{filmId}`

**Body (JSON):**
```json
{
  "title": "Midnight Dreams - Updated",
  "category": "Short Film",
  "description": "Updated description",
  "thumbnail": "https://images.unsplash.com/...",
  "videoUrl": "https://www.youtube.com/...",
  "isActive": true
}
```

### Delete a Film (Requires Login)

**DELETE** `http://localhost:3400/api/films/{filmId}`

---

## 📧 Test Contact Form

### Submit Contact Form (Public)

**POST** `http://localhost:3400/api/contact`

**Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Productions",
  "message": "I would like to collaborate on a project. Please get in touch!"
}
```

### Get All Contacts (Requires Login)

**GET** `http://localhost:3400/api/contact`

### Mark Contact as Read (Requires Login)

**PUT** `http://localhost:3400/api/contact/{contactId}/read`

### Delete Contact (Requires Login)

**DELETE** `http://localhost:3400/api/contact/{contactId}`

---

## 📮 Test Newsletter Subscription

### Subscribe (Public)

**POST** `http://localhost:3400/api/subscribe`

**Body (JSON):**
```json
{
  "email": "subscriber@example.com"
}
```

### Get All Subscribers (Requires Login)

**GET** `http://localhost:3400/api/subscribe`

### Toggle Subscriber Status (Requires Login)

**PUT** `http://localhost:3400/api/subscribe/{subscriberId}/toggle`

### Delete Subscriber (Requires Login)

**DELETE** `http://localhost:3400/api/subscribe/{subscriberId}`

---

## 🔐 Test Authentication

### Check Auth Status

**GET** `http://localhost:3400/api/auth/check`

### Logout

**POST** `http://localhost:3400/api/auth/logout`

---

## 📋 Thunder Client / Postman Tips

### For Thunder Client (VS Code):
1. Install "Thunder Client" extension
2. Create new request
3. Set method (GET, POST, PUT, DELETE)
4. Enter URL
5. Add JSON body for POST/PUT requests
6. Send request

### For Postman:
1. Create new Collection "Rainbow Films API"
2. Add requests for each endpoint
3. Use "Tests" tab to auto-save cookies
4. Use environment variables for base URL

### Important Settings:
- ✅ Enable "Send cookies"
- ✅ Content-Type: `application/json`
- ✅ Keep session cookies after login

---

## 🎯 Quick Test Checklist

- [ ] Server is running (`npm run dev`)
- [ ] MongoDB is connected
- [ ] Admin account created
- [ ] Login successful (session cookie saved)
- [ ] Hero video updated
- [ ] Film created
- [ ] Film retrieved
- [ ] Contact form submitted
- [ ] Newsletter subscription works
- [ ] All admin routes accessible
- [ ] Logout works

---

## 🐛 Common Issues

### Issue: "Unauthorized" error
**Solution:** Make sure you're logged in and cookies are being sent

### Issue: "Route not found"
**Solution:** Check the URL spelling and method (GET/POST/PUT/DELETE)

### Issue: "Cannot connect to database"
**Solution:** Check your `.env` file has correct `DB_URI`

### Issue: "Admin already exists"
**Solution:** You already created an admin account. Use login instead.

---

## 📞 Example cURL Commands

### Create Admin:
```bash
curl -X POST http://localhost:3400/api/auth/create-admin \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"Admin@123","email":"admin@rainbowfilms.com"}'
```

### Login:
```bash
curl -X POST http://localhost:3400/api/auth/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{"username":"admin","password":"Admin@123"}'
```

### Get Films (with cookie):
```bash
curl -X GET http://localhost:3400/api/films \
  -b cookies.txt
```

---

Happy Testing! 🎬✨
