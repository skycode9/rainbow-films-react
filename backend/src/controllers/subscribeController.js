const Subscribe = require("../models/Subscribe");

// Add new subscriber (Public)
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if already subscribed
    const existingSubscriber = await Subscribe.findOne({ email });
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({ 
          success: false, 
          message: "Email already subscribed" 
        });
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        await existingSubscriber.save();
        return res.json({
          success: true,
          message: "Subscription reactivated successfully!",
        });
      }
    }

    const subscriber = new Subscribe({ email });
    await subscriber.save();

    res.status(201).json({
      success: true,
      message: "Subscribed successfully! Thank you for joining us.",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Get all subscribers (Admin only)
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscribe.find().sort({ createdAt: -1 });
    
    const stats = {
      total: subscribers.length,
      active: subscribers.filter(s => s.isActive).length,
      inactive: subscribers.filter(s => !s.isActive).length,
    };

    res.json({ 
      success: true, 
      data: subscribers,
      stats 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Delete subscriber (Admin only)
exports.deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscribe.findByIdAndDelete(req.params.id);

    if (!subscriber) {
      return res.status(404).json({ 
        success: false, 
        message: "Subscriber not found" 
      });
    }

    res.json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Toggle subscriber status (Admin only)
exports.toggleSubscriberStatus = async (req, res) => {
  try {
    const subscriber = await Subscribe.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({ 
        success: false, 
        message: "Subscriber not found" 
      });
    }

    subscriber.isActive = !subscriber.isActive;
    await subscriber.save();

    res.json({
      success: true,
      message: `Subscriber ${subscriber.isActive ? 'activated' : 'deactivated'} successfully`,
      data: subscriber,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
