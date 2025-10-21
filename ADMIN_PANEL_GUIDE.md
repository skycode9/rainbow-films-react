# 🎬 Rainbow Films Admin Panel - Complete Guide

## ✅ Setup Complete!

Your admin panel is now fully integrated with both backend and frontend.

---

## 🌐 Access URLs

**Frontend (Public Site):** http://localhost:5173  
**Admin Login:** http://localhost:5173/admin/login  
**Admin Dashboard:** http://localhost:5173/admin/dashboard  
**Backend API:** http://localhost:8000

---

## 🚀 How to Start

### 1️⃣ Start Backend Server

```bash
cd backend
npm run dev
```

Server will run on: `http://localhost:8000`

### 2️⃣ Start Frontend Development Server

```bash
cd frontend
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 🔐 First Time Setup

### Step 1: Create Admin Account

Use Thunder Client, Postman, or cURL:

**POST** `http://localhost:8000/api/auth/create-admin`

```json
{
  "username": "admin",
  "password": "Admin@123",
  "email": "admin@rainbowfilms.com"
}
```

### Step 2: Login to Admin Panel

1. Open browser: `http://localhost:5173/admin/login`
2. Enter your username and password
3. Click "Sign In"
4. You'll be redirected to the dashboard

---

## 🎯 Admin Panel Features

### 📊 Dashboard Overview

The main dashboard shows:
- Total number of films
- Contact messages (read/unread)
- Newsletter subscribers
- Hero video status
- Quick access to all sections

### 🎬 Hero Video Manager

**What it does:**
- Update the video that plays on your homepage hero section
- Preview the video before saving
- Support for YouTube, Vimeo, and direct video URLs

**How to use:**
1. Go to "Hero Video" tab
2. Paste your video URL
3. Add a title (optional)
4. Click "Update Hero Video"

### 🎥 Films Manager

**What it does:**
- Add new films to your portfolio
- Edit existing films
- Delete films
- Toggle visibility (active/inactive)
- Organize by categories

**How to use:**

**To Add New Film:**
1. Click "Add Film" button
2. Fill in:
   - Title
   - Category (Commercial, Documentary, Music Video, Short Film)
   - Description
   - Thumbnail URL (image link)
   - Video URL (YouTube, Vimeo, etc.)
   - Active/Inactive status
3. Click "Create"

**To Edit Film:**
1. Hover over film card
2. Click edit icon
3. Update fields
4. Click "Update"

**To Delete Film:**
1. Hover over film card
2. Click delete icon
3. Confirm deletion

### 📧 Contacts Manager

**What it does:**
- View all contact form submissions
- Mark messages as read/unread
- Delete messages
- See contact statistics

**Features:**
- Filter by: All, Read, Unread
- See sender details (name, email, company)
- View submission date
- Read full messages

**How to use:**
1. Go to "Contacts" tab
2. Click on any message to view details
3. Use checkmark icon to mark as read
4. Use trash icon to delete

### 📮 Subscribers Manager

**What it does:**
- View all newsletter subscribers
- See subscription dates
- Toggle subscriber status (active/inactive)
- Delete subscribers
- Export subscriber list as CSV

**How to use:**
1. Go to "Subscribers" tab
2. View all subscribers in table format
3. Click status badge to toggle active/inactive
4. Click "Export CSV" to download subscriber list
5. Use trash icon to delete subscriber

---

## 📁 Project Structure

```
rainbow-films-react/
├── backend/                    # Backend API
│   ├── src/
│   │   ├── models/            # Database schemas
│   │   ├── controllers/       # Business logic
│   │   ├── routes/            # API endpoints
│   │   ├── middleware/        # Auth middleware
│   │   └── config/            # DB configuration
│   └── package.json
│
└── frontend/                   # React Frontend
    ├── src/
    │   ├── pages/
    │   │   ├── Home.tsx       # Public homepage
    │   │   └── admin/
    │   │       ├── Login.tsx  # Admin login page
    │   │       └── Dashboard.tsx  # Admin dashboard
    │   ├── components/
    │   │   ├── admin/
    │   │   │   ├── HeroVideoManager.tsx
    │   │   │   ├── FilmsManager.tsx
    │   │   │   ├── ContactsManager.tsx
    │   │   │   └── SubscribersManager.tsx
    │   │   └── ProtectedRoute.tsx
    │   ├── services/
    │   │   └── api.ts         # API service layer
    │   └── App.tsx            # Main app with routes
    └── package.json
```

---

## 🔒 Security Features

✅ **Password Protection**
- Bcrypt hashing (10 rounds)
- Secure password storage

✅ **Session Management**
- HTTP-only cookies
- 7-day session expiry
- MongoDB session store

✅ **Route Protection**
- Protected admin routes
- Automatic redirect if not logged in
- Authentication check on every page load

✅ **CORS Configuration**
- Configured for your frontend domain
- Credentials enabled

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **bcryptjs** - Password hashing
- **express-session** - Session management
- **connect-mongo** - Session store

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Tailwind CSS** - Styling

---

## 📊 API Endpoints Summary

### Public Endpoints
- `GET /api/hero-video` - Get hero video
- `GET /api/films` - Get all films
- `POST /api/contact` - Submit contact form
- `POST /api/subscribe` - Subscribe to newsletter

### Admin Endpoints (Require Login)
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/check` - Check auth status
- `PUT /api/hero-video` - Update hero video
- `POST /api/films` - Create film
- `PUT /api/films/:id` - Update film
- `DELETE /api/films/:id` - Delete film
- `GET /api/contact` - Get all contacts
- `PUT /api/contact/:id/read` - Mark as read
- `DELETE /api/contact/:id` - Delete contact
- `GET /api/subscribe` - Get all subscribers
- `DELETE /api/subscribe/:id` - Delete subscriber

---

## 🎨 UI Features

### Design Elements
- **Modern Dark Theme** - Professional black/gray gradient
- **Smooth Animations** - Framer Motion powered
- **Responsive Design** - Works on all devices
- **Icon System** - Lucide React icons
- **Interactive Elements** - Hover effects, transitions

### User Experience
- **Sidebar Navigation** - Easy access to all sections
- **Stats Cards** - Visual data representation
- **Modal Forms** - Clean data entry
- **Filter Options** - Quick filtering
- **Loading States** - User feedback
- **Success/Error Messages** - Clear notifications

---

## 🐛 Troubleshooting

### Backend Issues

**Port already in use:**
```bash
# Change port in backend/.env
PORT=8001
```

**Database connection failed:**
- Check MongoDB URI in `.env`
- Verify MongoDB Atlas IP whitelist
- Check internet connection

### Frontend Issues

**Admin login not working:**
- Make sure backend is running
- Check CORS settings
- Verify credentials are correct

**API calls failing:**
- Check backend URL in `.env`
- Ensure `withCredentials: true` in axios

**Routing issues:**
- Clear browser cache
- Check React Router setup
- Verify route paths

---

## 💡 Tips & Best Practices

### Security
- ⚠️ Change default admin password immediately
- 🔒 Use strong passwords (min 8 chars, special chars)
- 🛡️ Never share admin credentials
- 📝 Enable HTTPS in production

### Content Management
- ✅ Add descriptive titles to films
- 📸 Use high-quality thumbnails
- 📝 Write clear descriptions
- 🎬 Test video URLs before saving

### Performance
- 🖼️ Optimize image sizes
- 📊 Regularly check analytics
- 🗑️ Delete old/spam messages
- 📤 Export subscriber backups

---

## 📞 Common Tasks

### Update Homepage Video
1. Login to admin panel
2. Go to "Hero Video"
3. Paste new video URL
4. Click "Update"

### Add New Film
1. Go to "Films" section
2. Click "Add Film"
3. Fill all fields
4. Enable "Make visible"
5. Click "Create"

### Check Messages
1. Go to "Contacts"
2. View unread count
3. Click message to read
4. Mark as read when done

### Export Subscribers
1. Go to "Subscribers"
2. Click "Export CSV"
3. File downloads automatically

---

## 🎉 You're All Set!

Your admin panel is ready to use. Start managing your Rainbow Films website content with ease!

**Quick Links:**
- 🌐 [Public Site](http://localhost:5173)
- 🔐 [Admin Login](http://localhost:5173/admin/login)
- 📚 [Backend Documentation](backend/README.md)
- 🧪 [API Testing Guide](backend/API_TESTING.md)

---

**Made with ❤️ for Rainbow Films**

Need help? Check the backend documentation files for detailed API information.
