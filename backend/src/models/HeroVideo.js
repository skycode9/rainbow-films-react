const mongoose = require("mongoose");

const heroVideoSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Hero Video",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HeroVideo", heroVideoSchema);
