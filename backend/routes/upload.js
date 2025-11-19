const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/auth");

// @route   POST /api/upload/image
// @desc    Upload single image
// @access  Private (Admin only)
router.post("/image", authMiddleware, upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Return the full file URL for production
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://rainbow-films-react.onrender.com"
        : `http://localhost:${process.env.PORT || 8080}`;

    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    res.json({
      message: "File uploaded successfully",
      url: fileUrl,
      filename: req.file.filename,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Error uploading file" });
  }
});

module.exports = router;
