const express = require("express");
const router = express.Router();
const filmController = require("../controllers/filmController");
const authMiddleware = require("../middleware/auth");

// Public routes
router.get("/", filmController.getAllFilms);
router.get("/:id", filmController.getFilmById);

// Admin routes
router.get("/admin/all", authMiddleware, filmController.getAllFilmsAdmin);
router.post("/", authMiddleware, filmController.createFilm);
router.put("/:id", authMiddleware, filmController.updateFilm);
router.delete("/:id", authMiddleware, filmController.deleteFilm);

module.exports = router;
