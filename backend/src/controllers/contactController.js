const Contact = require("../models/Contact");
const { sendContactEmail } = require("../utils/emailService");

// Submit contact form (Public)
exports.submitContact = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    const contact = new Contact({
      name,
      email,
      company,
      message,
    });

    await contact.save();

    // Send email notification (non-blocking)
    sendContactEmail({ name, email, company, message }).catch((err) =>
      console.error("Failed to send contact email:", err)
    );

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully. We'll get back to you soon!",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Get all contacts (Admin only)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    const stats = {
      total: contacts.length,
      unread: contacts.filter(c => !c.isRead).length,
      read: contacts.filter(c => c.isRead).length,
    };

    res.json({ 
      success: true, 
      data: contacts,
      stats 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Mark contact as read (Admin only)
exports.markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ 
        success: false, 
        message: "Contact not found" 
      });
    }

    res.json({
      success: true,
      message: "Marked as read",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Delete contact (Admin only)
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ 
        success: false, 
        message: "Contact not found" 
      });
    }

    res.json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
