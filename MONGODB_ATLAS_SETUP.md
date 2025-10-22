# 🗄️ MongoDB Atlas Setup for Vercel Deployment

## Important: Network Access Configuration

Vercel uses dynamic IPs, so you need to allow access from anywhere.

---

## Step-by-Step Setup

### 1. Login to MongoDB Atlas

Go to: https://cloud.mongodb.com

### 2. Select Your Cluster

- Click on your cluster: `rainbow-backend`
- This is where your database is hosted

### 3. Configure Network Access

1. **Click on "Network Access"** in left sidebar
2. **Click "Add IP Address"** button
3. **Select "Allow Access from Anywhere"**
   - Or manually add: `0.0.0.0/0`
4. **Click "Confirm"**

**Why?** Vercel servers have dynamic IPs, so we need to allow all IPs.

### 4. Verify Database User

1. **Click on "Database Access"** in left sidebar
2. **Check if user exists:** `rainbow-backend`
3. **If not, create new user:**
   - Username: `rainbow-backend`
   - Password: `tjlEVo1a5CHdLVfd` (or generate new)
   - Database User Privileges: **Read and write to any database**

### 5. Get Connection String

1. **Click "Connect"** on your cluster
2. **Choose "Connect your application"**
3. **Copy connection string:**
   ```
   mongodb+srv://rainbow-backend:<password>@rainbow-backend.pwqbpdr.mongodb.net/rainbow-backend
   ```
4. **Replace `<password>` with actual password:**
   ```
   mongodb+srv://rainbow-backend:tjlEVo1a5CHdLVfd@rainbow-backend.pwqbpdr.mongodb.net/rainbow-backend
   ```

---

## ✅ Checklist

- [ ] Network Access: Allow from anywhere (0.0.0.0/0)
- [ ] Database User created with read/write access
- [ ] Connection string copied
- [ ] Password replaced in connection string
- [ ] Connection string added to Vercel environment variables

---

## 🔒 Security Note

**For Production:**
- Consider using MongoDB Atlas IP Access List with Vercel's IP ranges
- Use strong passwords
- Enable MongoDB Atlas encryption
- Regular backups

**For Development:**
- Current setup (0.0.0.0/0) is fine
- Just make sure password is strong

---

## 🧪 Test Connection

You can test the connection locally:

```bash
cd backend
node -e "const mongoose = require('mongoose'); mongoose.connect('YOUR_CONNECTION_STRING').then(() => console.log('✅ Connected!')).catch(err => console.error('❌ Error:', err));"
```

---

## 📊 Monitor Database

### View Data:
1. MongoDB Atlas → **Browse Collections**
2. Select database: `rainbow-backend`
3. View collections:
   - `contacts` - Contact form submissions
   - `subscribes` - Newsletter subscribers
   - `films` - Films data
   - `users` - Admin users

### View Metrics:
1. MongoDB Atlas → **Metrics**
2. See database usage, connections, operations

---

## 🆘 Common Issues

### Issue: "Authentication failed"
**Fix:** Check username and password in connection string

### Issue: "Network timeout"
**Fix:** 
- Check Network Access allows 0.0.0.0/0
- Check connection string is correct

### Issue: "Database not found"
**Fix:** 
- Database name should be at end of connection string
- Example: `.../rainbow-backend`

---

## 🔄 Connection String Format

```
mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/[DATABASE]
```

Your connection string:
```
mongodb+srv://rainbow-backend:tjlEVo1a5CHdLVfd@rainbow-backend.pwqbpdr.mongodb.net/rainbow-backend
```

- **Username:** `rainbow-backend`
- **Password:** `tjlEVo1a5CHdLVfd`
- **Cluster:** `rainbow-backend.pwqbpdr.mongodb.net`
- **Database:** `rainbow-backend`

---

**All set! Your database is ready for Vercel deployment.** ✅
