# 🧪 API Testing Guide

## Quick Test Commands

### **1. Test Backend is Running**

```bash
curl http://localhost:8080
```

**Expected:** `{"message":"Rainbow Films API Server"}`

---

### **2. Test Team API**

```bash
curl http://localhost:8080/api/team
```

**Expected Response:**

```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "position": "Director",
    "image": "http://localhost:8080/uploads/...",
    "createdAt": "2024-..."
  }
]
```

**If Empty:** `[]` - No team members in database

---

### **3. Test Films API**

```bash
curl http://localhost:8080/api/films
```

---

### **4. Test Clients API**

```bash
curl http://localhost:8080/api/clients
```

---

## 🔍 Debug Steps

### **Step 1: Check Backend Logs**

```bash
cd backend
npm start
```

Look for:

```
🚀 Server running on port 8080
MongoDB Connected
```

### **Step 2: Check Database**

```bash
# In backend folder
node
```

Then in Node REPL:

```javascript
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL).then(async () => {
  const TeamMember = require("./models/TeamMember");
  const team = await TeamMember.find();
  console.log("Team Members:", team);
  process.exit();
});
```

### **Step 3: Check Frontend Network Tab**

1. Open browser: `http://localhost:5173`
2. Press F12 → Network tab
3. Filter: XHR
4. Look for request to `/api/team`
5. Check:
   - Status: Should be 200
   - Response: Should show data

---

## 🐛 Common Issues

### **Issue: Empty Array `[]`**

**Cause:** No data in database

**Fix:**

1. Login to admin: `/admin/login`
2. Go to Team section
3. Click "Add Team Member"
4. Fill form and save

---

### **Issue: 404 Not Found**

**Cause:** Route not registered or backend not running

**Fix:**

```bash
# Check backend is running
curl http://localhost:8080

# Check route exists
curl http://localhost:8080/api/team
```

---

### **Issue: CORS Error**

**Cause:** Frontend can't connect to backend

**Fix:** Check `backend/server.js`:

```javascript
const allowedOrigins = ["http://localhost:5173", process.env.FRONTEND_URL];
```

---

### **Issue: 500 Server Error**

**Cause:** Database connection or model error

**Fix:**

1. Check MongoDB is connected
2. Check `.env` has correct `DB_URL`
3. Check backend console for errors

---

## ✅ Quick Fix Script

Create this file: `backend/test-team.js`

```javascript
const mongoose = require("mongoose");
require("dotenv").config();

const TeamMember = require("./models/TeamMember");

async function testTeam() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("✅ MongoDB Connected");

    const team = await TeamMember.find();
    console.log("📊 Team Members Count:", team.length);
    console.log("👥 Team Members:", JSON.stringify(team, null, 2));

    if (team.length === 0) {
      console.log("⚠️  No team members found. Add some via admin panel!");
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

testTeam();
```

Run it:

```bash
cd backend
node test-team.js
```

---

## 🎯 Expected Flow

1. **Frontend loads** → `Team.tsx` component mounts
2. **useEffect runs** → Calls `teamAPI.getAll()`
3. **API request** → `GET http://localhost:8080/api/team`
4. **Backend receives** → `/api/team` route handler
5. **Database query** → `TeamMember.find()`
6. **Response sent** → JSON array of team members
7. **Frontend receives** → `setTeamMembers(response.data)`
8. **UI updates** → Team members displayed

---

## 📝 Manual Test

### **Add Test Team Member via cURL:**

```bash
# First, login to get token
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your_password"}'

# Copy the token from response

# Then add team member
curl -X POST http://localhost:8080/api/team \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "name": "Test User",
    "position": "Test Position",
    "image": "https://via.placeholder.com/400"
  }'
```

---

## 🔧 Reset Everything

If nothing works:

```bash
# 1. Stop all servers
# Ctrl+C in both terminals

# 2. Clear node_modules
cd backend && rm -rf node_modules && npm install
cd ../frontend && rm -rf node_modules && npm install

# 3. Restart backend
cd backend && npm start

# 4. Restart frontend
cd frontend && npm run dev

# 5. Clear browser cache
# Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

---

**Try these steps and tell me what you see!** 🔍
