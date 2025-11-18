# Rainbow Films - Complete Setup Guide

## 🚀 Quick Start

### Step 1: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit `.env` file:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/rainbow-films
JWT_SECRET=your_super_secret_jwt_key_change_this
NODE_ENV=development
```

### Step 2: Start MongoDB

```bash
# macOS (Homebrew)
brew services start mongodb-community

# Or manually
mongod

# Check if MongoDB is running
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

### Step 3: Create Admin User

```bash
# In backend folder
node scripts/createAdmin.js
```

**Admin Credentials Created:**

- Username: `admin`
- Password: `admin123`
- ⚠️ **Change this immediately after first login!**

### Step 4: Start Backend Server

```bash
# In backend folder
npm run dev
```

Backend will run on: **http://localhost:5000**

### Step 5: Frontend Setup

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies (if not already done)
npm install

# Create .env file
cp .env.example .env
```

Edit `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 6: Start Frontend

```bash
# In frontend folder
npm run dev
```

Frontend will run on: **http://localhost:5173**

## 🎯 Access Points

### Public Website

- URL: http://localhost:5173
- Sections: Home, Films, About, Clients, Contact

### Admin Panel

- Login: http://localhost:5173/admin/login
- Dashboard: http://localhost:5173/admin/dashboard
- Default Username: `admin`
- Default Password: `admin123`

## 📋 Admin Panel Features

### Dashboard

- Statistics overview (Films, Team, Clients, Messages)
- Quick action buttons
- System status

### Films Management

- Add new films
- Edit existing films
- Delete films
- Set featured films
- Manage display order

### Team Management

- Add team members
- Edit member details
- Upload profile pictures
- Set roles and taglines

### Clients Management

- Add client names
- Manage client list
- Control visibility

### Contact Messages

- View all contact form submissions
- Mark as read/replied/archived
- Delete messages
- Track status

## 🔧 API Endpoints

### Public Endpoints

```
GET  /api/films          - Get all films
GET  /api/team           - Get all team members
GET  /api/clients        - Get all clients
POST /api/contact        - Submit contact form
```

### Protected Endpoints (Require Auth Token)

```
POST   /api/films        - Create film
PUT    /api/films/:id    - Update film
DELETE /api/films/:id    - Delete film

POST   /api/team         - Create team member
PUT    /api/team/:id     - Update team member
DELETE /api/team/:id     - Delete team member

POST   /api/clients      - Create client
PUT    /api/clients/:id  - Update client
DELETE /api/clients/:id  - Delete client

GET    /api/contact      - Get all contacts
PUT    /api/contact/:id  - Update contact status
DELETE /api/contact/:id  - Delete contact
```

### Auth Endpoints

```
POST /api/auth/login     - Admin login
GET  /api/auth/verify    - Verify JWT token
POST /api/auth/register  - Create new admin (superadmin only)
```

## 🧪 Testing

### Test Backend API

```bash
# Health check
curl http://localhost:5000

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Get films (public)
curl http://localhost:5000/api/films

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "subject":"Test",
    "message":"Test message"
  }'
```

## 🗄️ Database Schema

### Admin

- username (unique)
- email (unique)
- password (hashed with bcrypt)
- role (admin/superadmin)

### Film

- title, category, description
- thumbnail, videoUrl
- featured (boolean)
- order (number)

### TeamMember

- name, role, tagline
- image, accentColor
- order, active

### Client

- name, logo
- order, active

### Contact

- name, email, subject, message
- status (new/read/replied/archived)
- createdAt

## 🔒 Security

### Production Checklist

- [ ] Change default admin password
- [ ] Use strong JWT_SECRET (32+ random characters)
- [ ] Enable HTTPS
- [ ] Set proper CORS origins
- [ ] Use environment variables
- [ ] Enable rate limiting
- [ ] Add input validation
- [ ] Implement CSP headers
- [ ] Regular dependency updates

## 🐛 Troubleshooting

### MongoDB Connection Error

```bash
# Check if MongoDB is running
ps aux | grep mongod

# Start MongoDB
brew services start mongodb-community
```

### Port Already in Use

```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### CORS Error

- Verify `FRONTEND_URL` in backend `.env`
- Check frontend is running on correct port
- Clear browser cache and cookies

### JWT Token Error

- Ensure `JWT_SECRET` is set in backend `.env`
- Clear localStorage: `localStorage.clear()`
- Re-login to get new token

### Module Not Found Error

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📁 Project Structure

```
rainbow-films-react/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth middleware
│   ├── scripts/         # Utility scripts
│   ├── server.js        # Express server
│   ├── db.js           # MongoDB connection
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   │   └── admin/   # Admin panel pages
│   │   ├── services/    # API services
│   │   ├── App.tsx      # Main app with routing
│   │   └── main.tsx     # Entry point
│   └── package.json
│
├── SETUP_GUIDE.md       # This file
└── README.md
```

## 🎨 Tech Stack

### Backend

- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt for password hashing

### Frontend

- React 18 + TypeScript
- React Router v6
- Framer Motion (animations)
- TailwindCSS (styling)
- Axios (HTTP client)
- Three.js + React Three Fiber (3D)

## 📝 Next Steps

1. ✅ Start MongoDB
2. ✅ Start backend server
3. ✅ Create admin user
4. ✅ Start frontend
5. ✅ Access admin panel
6. 🔲 Change default password
7. 🔲 Add your films/team/clients
8. 🔲 Customize content
9. 🔲 Deploy to production

## 🚀 Production Deployment

### Backend (Railway/Render/Heroku)

1. Push code to GitHub
2. Connect repository
3. Set environment variables
4. Deploy

### Frontend (Vercel/Netlify)

1. Push code to GitHub
2. Connect repository
3. Set `VITE_API_URL` to production backend URL
4. Deploy

### MongoDB (MongoDB Atlas)

1. Create free cluster
2. Get connection string
3. Update `MONGODB_URI` in backend .env

---

**Need Help?** Check the troubleshooting section or review the backend/frontend logs.
