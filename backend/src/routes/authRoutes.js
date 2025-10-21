const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Auth routes
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/check", authController.checkAuth);
router.post("/create-admin", authController.createAdmin); // Use once to create admin

module.exports = router;
