const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// Admin Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    // Set session
    req.session.adminId = admin._id;
    req.session.username = admin.username;

    res.json({
      success: true,
      message: "Login successful",
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Admin Logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ 
        success: false, 
        message: "Logout failed" 
      });
    }
    res.json({ 
      success: true, 
      message: "Logged out successfully" 
    });
  });
};

// Check Auth Status
exports.checkAuth = (req, res) => {
  if (req.session && req.session.adminId) {
    res.json({ 
      success: true, 
      isAuthenticated: true,
      username: req.session.username 
    });
  } else {
    res.json({ 
      success: true, 
      isAuthenticated: false 
    });
  }
};

// Create First Admin (Run once to create admin account)
exports.createAdmin = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ 
        success: false, 
        message: "Admin already exists" 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const admin = new Admin({
      username,
      password: hashedPassword,
      email,
    });

    await admin.save();

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
