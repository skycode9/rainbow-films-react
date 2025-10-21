const HeroVideo = require("../models/HeroVideo");

// Get active hero video
exports.getHeroVideo = async (req, res) => {
  try {
    const heroVideo = await HeroVideo.findOne({ isActive: true });
    res.json({ 
      success: true, 
      data: heroVideo 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Update hero video (Admin only)
exports.updateHeroVideo = async (req, res) => {
  try {
    const { videoUrl, title } = req.body;

    // Deactivate all previous videos
    await HeroVideo.updateMany({}, { isActive: false });

    // Create or update hero video
    const heroVideo = await HeroVideo.findOneAndUpdate(
      {},
      {
        videoUrl,
        title: title || "Hero Video",
        isActive: true,
        updatedAt: Date.now(),
      },
      { new: true, upsert: true }
    );

    res.json({
      success: true,
      message: "Hero video updated successfully",
      data: heroVideo,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
