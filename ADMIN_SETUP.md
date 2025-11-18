# Admin Panel Setup Guide

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or remote connection)
- npm or yarn

## Backend Setup

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create `.env` file in `backend/` directory:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/rainbow-films
JWT_SECRET=change_this_to_a_random_secret_key
NODE_ENV=development
```

### 3. Start MongoDB

```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

### 4. Create Admin User

```bash
cd backend
node scripts/createAdmin.js
```

**Default Credentials:**

- Username: `admin`
- Password: `admin123`

### 5. Start Backend Server

```bash
npm run dev
```

Backend will run on: `http://localhost:5000`

## Frontend Setup

### 1. Install React Router

```bash
cd frontend
npm install react-router-dom
```

### 2. Configure Environment

Create `.env` file in `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Update Main App File

The admin panel files are created in `src/pages/admin/` directory.

You need to integrate React Router in your `App.tsx`:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";

// Add routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* Add more admin routes */}
      </Routes>
    </BrowserRouter>
  );
}
```

### 4. Start Frontend

```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

## Admin Panel Access

1. Open browser: `http://localhost:5173/admin/login`
2. Login with default credentials
3. **IMPORTANT:** Change password immediately after first login!

## Admin Panel Features

✅ **Dashboard**

- Overview statistics
- Quick actions
- Films, Team, Clients, Messages counts

✅ **Films Management**

- Add/Edit/Delete films
- Set featured films
- Manage order
- Upload thumbnails and video URLs

✅ **Team Management**

- Add/Edit/Delete team members
- Upload profile pictures
- Set roles and taglines
- Order management

✅ **Clients Management**

- Add/Edit/Delete clients
- Manage client logos
- Control visibility

✅ **Contact Messages**

- View all contact submissions
- Mark as read/replied
- Status management
- Delete messages

## API Integration

The frontend automatically integrates with the backend API:

- Authentication with JWT tokens
- Auto-redirect on unauthorized access
- Token stored in localStorage
- Axios interceptors for auth headers

## File Structure

```
backend/
├── models/          # MongoDB models
├── routes/          # API routes
├── middleware/      # Auth middleware
├── scripts/         # Utility scripts
├── server.js        # Main server file
└── db.js           # Database connection

frontend/src/
├── pages/admin/     # Admin panel pages
│   ├── Login.tsx
│   └── Dashboard.tsx
├── services/        # API services
│   └── api.ts
└── ...
```

## Security Notes

⚠️ **Important Security Measures:**

1. Change default admin password
2. Use strong JWT_SECRET in production
3. Enable HTTPS in production
4. Set proper CORS origins
5. Keep dependencies updated
6. Never commit .env files
7. Use environment-specific configs

## Troubleshooting

### MongoDB Connection Error

- Ensure MongoDB is running: `mongod`
- Check MongoDB URI in `.env`
- Verify MongoDB port (default: 27017)

### CORS Error

- Check `FRONTEND_URL` in backend `.env`
- Verify frontend is running on correct port
- Clear browser cache

### JWT Token Error

- Check `JWT_SECRET` is set in `.env`
- Clear localStorage and re-login
- Verify token expiration (7 days)

### Port Already in Use

```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

## Next Steps

1. ✅ Backend API created
2. ✅ MongoDB models defined
3. ✅ Authentication system ready
4. ✅ Admin panel UI created
5. 🔲 Install react-router-dom
6. 🔲 Integrate routing
7. 🔲 Create additional admin pages
8. 🔲 Connect frontend components to backend

## Support

For issues or questions:

1. Check MongoDB is running
2. Verify all dependencies installed
3. Check environment variables
4. Review server logs
5. Test API endpoints with curl/Postman
