const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authMiddleware = require("../middleware/auth");

// Public route
router.post("/", contactController.submitContact);

// Admin routes
router.get("/", authMiddleware, contactController.getAllContacts);
router.put("/:id/read", authMiddleware, contactController.markAsRead);
router.delete("/:id", authMiddleware, contactController.deleteContact);

module.exports = router;
