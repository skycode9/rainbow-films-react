const express = require("express");
const router = express.Router();
const subscribeController = require("../controllers/subscribeController");
const authMiddleware = require("../middleware/auth");

// Public route
router.post("/", subscribeController.subscribe);

// Admin routes
router.get("/", authMiddleware, subscribeController.getAllSubscribers);
router.delete("/:id", authMiddleware, subscribeController.deleteSubscriber);
router.put("/:id/toggle", authMiddleware, subscribeController.toggleSubscriberStatus);

module.exports = router;
