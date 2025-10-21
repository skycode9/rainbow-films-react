const express = require("express");
const router = express.Router();
const heroVideoController = require("../controllers/heroVideoController");
const authMiddleware = require("../middleware/auth");

// Public route
router.get("/", heroVideoController.getHeroVideo);

// Admin routes
router.put("/", authMiddleware, heroVideoController.updateHeroVideo);

module.exports = router;
