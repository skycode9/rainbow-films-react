const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// Send contact form email to admin
const sendContactEmail = async (contactData) => {
  try {
    const { name, email, subject, message } = contactData;

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from Rainbow Films contact form.</p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: error.message };
  }
};

// Send welcome email to subscriber
const sendWelcomeEmail = async (subscriberEmail) => {
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: subscriberEmail,
      subject: "Welcome to Rainbow Films Newsletter! 🎬",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Welcome to Rainbow Films! 🎬</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #333;">Thank you for subscribing to our newsletter!</p>
            <p style="color: #666;">You'll now receive updates about:</p>
            <ul style="color: #666;">
              <li>Latest film releases</li>
              <li>Behind-the-scenes content</li>
              <li>Exclusive announcements</li>
              <li>Special events and screenings</li>
            </ul>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.FRONTEND_URL}" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; 
                        padding: 12px 30px; 
                        text-decoration: none; 
                        border-radius: 25px; 
                        display: inline-block;">
                Visit Our Website
              </a>
            </div>
            <p style="color: #999; font-size: 12px; text-align: center;">
              If you didn't subscribe, you can safely ignore this email.
            </p>
          </div>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return { success: false, error: error.message };
  }
};

// Send notification to admin about new subscriber
const sendSubscriberNotification = async (subscriberEmail) => {
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Newsletter Subscriber 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Newsletter Subscriber!</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${subscriberEmail}</p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This is an automated notification from Rainbow Films.</p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending subscriber notification:", error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendContactEmail,
  sendWelcomeEmail,
  sendSubscriberNotification,
};
