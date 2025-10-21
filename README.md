# 🎬 Rainbow Films - Complete Web Application with Admin Panel

A professional film production company website with a full-featured admin panel for content management.

---

## ✨ Features

### 🌐 Public Website
- **Hero Section** with video background
- **About Us** section with team information
- **Films Portfolio** with category filtering
- **Contact Form** for inquiries
- **Newsletter Subscription**
- **Smooth Animations** with Framer Motion
- **Responsive Design** for all devices

### 🔐 Admin Panel
- **Dashboard Overview** with statistics
- **Hero Video Manager** - Update homepage video
- **Films Manager** - Full CRUD for portfolio
- **Contacts Manager** - View and manage messages
- **Subscribers Manager** - Manage newsletter list
- **Secure Authentication** with sessions
- **Beautiful UI** with dark theme

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### 1️⃣ Clone & Install

```bash
# Clone the repository
cd rainbow-films-react

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2️⃣ Configure Environment

**Backend (.env):**
```env
PORT=3400
DB_URI="your_mongodb_connection_string"
SESSION_SECRET="your_secret_key"
FRONTEND_URL="http://localhost:5173"
NODE_ENV="development"
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:3400/api
```

### 3️⃣ Start Services

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend running on: http://localhost:3400

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
✅ Frontend running on: http://localhost:5173

### 4️⃣ Create Admin Account

Use Thunder Client or Postman:

**POST** `http://localhost:3400/api/auth/create-admin`

```json
{
  "username": "admin",
  "password": "YourPassword123",
  "email": "admin@rainbowfilms.com"
}
```

### 5️⃣ Access Admin Panel

1. Open: `http://localhost:5173/admin/login`
2. Login with your credentials
3. Start managing your website!

---

## 📁 Project Structure

```
rainbow-films-react/
│
├── backend/                    # Node.js Backend API
│   ├── src/
│   │   ├── models/            # MongoDB schemas
│   │   │   ├── Admin.js
│   │   │   ├── HeroVideo.js
│   │   │   ├── Film.js
│   │   │   ├── Contact.js
│   │   │   └── Subscribe.js
│   │   ├── controllers/       # Business logic
│   │   ├── routes/            # API endpoints
│   │   ├── middleware/        # Authentication
│   │   ├── config/            # Database config
│   │   └── app.js             # Main application
│   ├── .env                   # Environment variables
│   ├── package.json
│   ├── README.md             # API documentation
│   ├── API_TESTING.md        # Testing guide
│   └── SETUP_COMPLETE.md     # Setup summary
│
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx      # Public website
│   │   │   └── admin/        # Admin pages
│   │   │       ├── Login.tsx
│   │   │       └── Dashboard.tsx
│   │   ├── components/
│   │   │   ├── admin/        # Admin components
│   │   │   │   ├── HeroVideoManager.tsx
│   │   │   │   ├── FilmsManager.tsx
│   │   │   │   ├── ContactsManager.tsx
│   │   │   │   └── SubscribersManager.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── services/
│   │   │   └── api.ts        # API integration
│   │   └── App.tsx           # Main app & routing
│   ├── .env                   # Frontend config
│   └── package.json
│
├── ADMIN_PANEL_GUIDE.md       # Complete admin guide
└── README.md                  # This file
```

---

## 🛠️ Technology Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM |
| bcryptjs | Password hashing |
| express-session | Session management |
| connect-mongo | Session storage |
| CORS | Cross-origin support |

### Frontend
| Technology | Purpose |
|------------|---------|
| React | UI library |
| TypeScript | Type safety |
| Vite | Build tool |
| React Router | Routing |
| Axios | HTTP client |
| Framer Motion | Animations |
| Tailwind CSS | Styling |
| Lucide React | Icons |

---

## 🎯 Admin Panel Capabilities

### 1. Hero Video Management
- Update homepage video URL
- Preview before saving
- Support for multiple video platforms

### 2. Films Portfolio Management
- **Create** new films with details
- **Read** all films with filtering
- **Update** existing films
- **Delete** films
- Toggle visibility (active/inactive)
- Organize by categories:
  - Commercial
  - Documentary
  - Music Video
  - Short Film

### 3. Contact Management
- View all contact submissions
- Filter by read/unread status
- Mark messages as read
- Delete messages
- See submission statistics
- View contact details (name, email, company)

### 4. Subscriber Management
- View all newsletter subscribers
- See subscription dates
- Toggle active/inactive status
- Delete subscribers
- Export to CSV file
- View statistics

---

## 📚 Documentation Files

| File | Description |
|------|-------------|
| `ADMIN_PANEL_GUIDE.md` | Complete admin panel user guide |
| `backend/README.md` | Full API documentation |
| `backend/API_TESTING.md` | Step-by-step API testing guide |
| `backend/SETUP_COMPLETE.md` | Backend setup summary |
| `backend/QUICK_START.md` | Quick start guide |

---

## 🔐 Security Features

✅ **Secure Authentication**
- Bcrypt password hashing (10 rounds)
- Session-based authentication
- HTTP-only cookies
- Auto-logout after 7 days

✅ **Route Protection**
- Protected admin routes
- Authentication middleware
- Automatic redirect for unauthorized access

✅ **CORS Protection**
- Configured origin validation
- Credentials support
- Production-ready settings

✅ **Input Validation**
- Required field validation
- URL format validation
- Email format validation

---

## 🌐 API Endpoints

### Public Endpoints
```
GET    /api/hero-video              Get hero video
GET    /api/films                   Get all active films
GET    /api/films/:id               Get single film
POST   /api/contact                 Submit contact form
POST   /api/subscribe               Subscribe to newsletter
```

### Admin Endpoints (Authentication Required)
```
POST   /api/auth/login              Admin login
POST   /api/auth/logout             Admin logout
GET    /api/auth/check              Check auth status

PUT    /api/hero-video              Update hero video

GET    /api/films/admin/all         Get all films (admin)
POST   /api/films                   Create new film
PUT    /api/films/:id               Update film
DELETE /api/films/:id               Delete film

GET    /api/contact                 Get all contacts
PUT    /api/contact/:id/read        Mark as read
DELETE /api/contact/:id             Delete contact

GET    /api/subscribe               Get all subscribers
PUT    /api/subscribe/:id/toggle    Toggle status
DELETE /api/subscribe/:id           Delete subscriber
```

---

## 💻 Development Commands

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

### Frontend
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 🚀 Deployment

### Backend Deployment
1. Set environment variables on hosting platform
2. Update `NODE_ENV` to `production`
3. Use strong `SESSION_SECRET`
4. Enable HTTPS
5. Configure MongoDB Atlas IP whitelist

### Frontend Deployment
1. Update `VITE_API_URL` to production API URL
2. Run `npm run build`
3. Deploy `dist` folder to hosting (Vercel, Netlify, etc.)
4. Configure environment variables

---

## 📊 Database Schema

### Admin
```javascript
{
  username: String,
  password: String (hashed),
  email: String,
  createdAt: Date
}
```

### HeroVideo
```javascript
{
  videoUrl: String,
  title: String,
  isActive: Boolean,
  updatedAt: Date
}
```

### Film
```javascript
{
  title: String,
  category: String,
  description: String,
  thumbnail: String,
  videoUrl: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Contact
```javascript
{
  name: String,
  email: String,
  company: String,
  message: String,
  isRead: Boolean,
  createdAt: Date
}
```

### Subscribe
```javascript
{
  email: String,
  isActive: Boolean,
  createdAt: Date
}
```

---

## 🎨 Design Features

- **Modern Dark Theme** - Professional black/gray gradients
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Layout** - Mobile-first design
- **Interactive Elements** - Hover effects and transitions
- **Icon System** - Lucide React icons
- **Loading States** - User feedback
- **Toast Notifications** - Success/error messages

---

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
- Check if port 8000 is available
- Verify MongoDB connection string
- Ensure all dependencies are installed

**Frontend won't start:**
- Clear node_modules and reinstall
- Check if port 5173 is available
- Verify all dependencies

**Can't login to admin:**
- Ensure backend is running
- Check CORS settings
- Verify admin account was created
- Check browser console for errors

**API calls failing:**
- Verify backend URL in `.env`
- Check `withCredentials: true` in axios config
- Ensure CORS is configured correctly

---

## 📞 Support & Documentation

- **Complete Admin Guide:** `ADMIN_PANEL_GUIDE.md`
- **API Documentation:** `backend/README.md`
- **API Testing:** `backend/API_TESTING.md`
- **Backend Setup:** `backend/SETUP_COMPLETE.md`

---

## ✅ Features Checklist

### Backend API
- [x] User authentication with sessions
- [x] Hero video management
- [x] Films CRUD operations
- [x] Contact form submissions
- [x] Newsletter subscriptions
- [x] Protected routes
- [x] MongoDB integration
- [x] Error handling
- [x] Input validation

### Frontend
- [x] Public website
- [x] Admin login page
- [x] Admin dashboard
- [x] Hero video manager
- [x] Films manager with modal
- [x] Contacts viewer
- [x] Subscribers manager with export
- [x] Protected routes
- [x] API integration
- [x] Responsive design
- [x] Smooth animations

---

## 🎉 Credits

Built with ❤️ for **Rainbow Films**

### Technologies Used
- React, TypeScript, Node.js, Express, MongoDB
- Tailwind CSS, Framer Motion, Vite
- Axios, React Router, Lucide Icons

---

## 📝 License

This project is private and confidential.

---

## 🚀 Getting Started Now!

1. **Install dependencies** (both backend & frontend)
2. **Configure environment variables**
3. **Start both servers**
4. **Create admin account**
5. **Login and start managing!**

**Public Website:** http://localhost:5173  
**Admin Panel:** http://localhost:5173/admin/login  
**Backend API:** http://localhost:3400

---

**Need help?** Check the `ADMIN_PANEL_GUIDE.md` for detailed instructions!
