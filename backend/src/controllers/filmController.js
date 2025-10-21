const Film = require("../models/Film");

// Get all active films (Public)
exports.getAllFilms = async (req, res) => {
  try {
    const { category } = req.query;
    const query = { isActive: true };
    
    if (category && category !== "All") {
      query.category = category;
    }

    const films = await Film.find(query).sort({ createdAt: -1 });
    
    res.json({ 
      success: true, 
      data: films,
      count: films.length 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Get single film (Public)
exports.getFilmById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    
    if (!film) {
      return res.status(404).json({ 
        success: false, 
        message: "Film not found" 
      });
    }

    res.json({ 
      success: true, 
      data: film 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Create new film (Admin only)
exports.createFilm = async (req, res) => {
  try {
    const { title, category, description, thumbnail, videoUrl } = req.body;

    const film = new Film({
      title,
      category,
      description,
      thumbnail,
      videoUrl,
    });

    await film.save();

    res.status(201).json({
      success: true,
      message: "Film created successfully",
      data: film,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Update film (Admin only)
exports.updateFilm = async (req, res) => {
  try {
    const { title, category, description, thumbnail, videoUrl, isActive } = req.body;

    const film = await Film.findByIdAndUpdate(
      req.params.id,
      {
        title,
        category,
        description,
        thumbnail,
        videoUrl,
        isActive,
        updatedAt: Date.now(),
      },
      { new: true, runValidators: true }
    );

    if (!film) {
      return res.status(404).json({ 
        success: false, 
        message: "Film not found" 
      });
    }

    res.json({
      success: true,
      message: "Film updated successfully",
      data: film,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Delete film (Admin only)
exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);

    if (!film) {
      return res.status(404).json({ 
        success: false, 
        message: "Film not found" 
      });
    }

    res.json({
      success: true,
      message: "Film deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Get all films including inactive (Admin only)
exports.getAllFilmsAdmin = async (req, res) => {
  try {
    const films = await Film.find().sort({ createdAt: -1 });
    
    res.json({ 
      success: true, 
      data: films,
      count: films.length 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
