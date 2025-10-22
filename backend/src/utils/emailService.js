const { Resend } = require("resend");

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Send contact form email
const sendContactEmail = async (data) => {
  try {
    const response = await resend.emails.send({
      from: "Rainbow Films <onboarding@resend.dev>",
      to: ["skycode9005@gmail.com"],
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #667eea;
              margin-bottom: 5px;
            }
            .value {
              background: white;
              padding: 10px;
              border-radius: 5px;
              border-left: 3px solid #667eea;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🌈 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            ${
              data.company
                ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            `
                : ""
            }
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
};

// Send welcome email to new subscribers
const sendWelcomeEmail = async (email) => {
  try {
    const response = await resend.emails.send({
      from: "Rainbow Films <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Rainbow Films! 🎬✨",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f4f4f4;
            }
            .email-container {
              background-color: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 50px 30px;
              text-align: center;
            }
            .logo {
              font-size: 42px;
              font-weight: bold;
              margin-bottom: 15px;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
            }
            .header p {
              margin: 15px 0 0 0;
              font-size: 16px;
              opacity: 0.9;
            }
            .rainbow-line {
              height: 4px;
              background: linear-gradient(to right, #8b5cf6, #3b82f6, #06b6d4, #10b981, #eab308, #f97316, #ec4899);
              margin: 0;
            }
            .content {
              padding: 40px 30px;
            }
            .welcome-box {
              background: linear-gradient(135deg, #f0f7ff 0%, #e8f4f8 100%);
              padding: 30px;
              border-radius: 10px;
              text-align: center;
              margin: 25px 0;
            }
            .welcome-box .emoji {
              font-size: 64px;
              margin-bottom: 15px;
            }
            .welcome-box h2 {
              margin: 0 0 10px 0;
              color: #667eea;
              font-size: 24px;
            }
            .welcome-box p {
              margin: 0;
              color: #666;
              font-size: 16px;
            }
            .content p {
              margin: 15px 0;
              color: #555;
            }
            .content ul {
              color: #666;
              padding-left: 20px;
            }
            .content ul li {
              margin: 10px 0;
            }
            .highlight-box {
              background: #fff3cd;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #eab308;
              margin: 25px 0;
            }
            .highlight-box strong {
              color: #333;
            }
            .highlight-box p {
              margin: 10px 0 0 0;
              color: #666;
            }
            .footer {
              background: #f9f9f9;
              padding: 30px;
              text-align: center;
              border-top: 1px solid #e0e0e0;
            }
            .footer p {
              margin: 0 0 15px 0;
              color: #666;
              font-style: italic;
            }
            .social-links {
              margin: 20px 0;
            }
            .social-links a {
              display: inline-block;
              margin: 0 10px;
              color: #667eea;
              text-decoration: none;
              font-weight: 500;
            }
            .footer-info {
              margin: 20px 0 10px 0;
              font-size: 12px;
              color: #999;
            }
            @media only screen and (max-width: 600px) {
              body {
                padding: 10px;
              }
              .header {
                padding: 30px 20px;
              }
              .logo {
                font-size: 32px;
              }
              .header h1 {
                font-size: 22px;
              }
              .content {
                padding: 30px 20px;
              }
              .welcome-box {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <div class="logo">🌈 RAINBOW FILMS</div>
              <h1>Welcome Aboard!</h1>
              <p>You're now part of our creative community</p>
            </div>
            
            <div class="rainbow-line"></div>
            
            <div class="content">
              <div class="welcome-box">
                <div class="emoji">🎉</div>
                <h2>Thank You for Subscribing!</h2>
                <p>We're thrilled to have you join our newsletter</p>
              </div>
              
              <p>Hi there! 👋</p>
              
              <p>Welcome to the Rainbow Films family! You've just taken the first step into a world of cinematic excellence, creative storytelling, and behind-the-scenes magic.</p>
              
              <p><strong>Here's what you can expect from us:</strong></p>
              <ul>
                <li>🎬 Exclusive behind-the-scenes content</li>
                <li>📰 Latest project updates and announcements</li>
                <li>💡 Industry insights and filmmaking tips</li>
                <li>🎁 Special offers and early access to new releases</li>
                <li>🌟 Inspiring stories from our creative team</li>
              </ul>
              
              <div class="highlight-box">
                <strong>📧 Stay Connected:</strong>
                <p>Make sure to add <strong>hello@rainbowfilms.com</strong> to your contacts so you never miss an update!</p>
              </div>
              
              <p>Have questions or want to work with us? Feel free to reply to this email or visit our website.</p>
              
              <p style="margin-top: 30px;">
                Cheers,<br>
                <strong>The Rainbow Films Team</strong> 🎬
              </p>
            </div>
            
            <div class="footer">
              <p>"Every great film begins with a conversation. Let's start yours."</p>
              
              <div class="social-links">
                <a href="#">Instagram</a> •
                <a href="#">Twitter</a> •
                <a href="#">LinkedIn</a> •
                <a href="#">YouTube</a>
              </div>
              
              <div class="footer-info">
                Rainbow Films | Ahmedabad, Gujarat
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
};

// Send notification to admin when someone subscribes
const sendSubscribeNotification = async (subscriberEmail) => {
  try {
    const response = await resend.emails.send({
      from: "Rainbow Films <onboarding@resend.dev>",
      to: ["skycode9005@gmail.com"],
      subject: "🎉 New Newsletter Subscriber!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .subscriber-email {
              background: white;
              padding: 15px;
              border-radius: 5px;
              border-left: 4px solid #667eea;
              font-size: 18px;
              font-weight: bold;
              color: #667eea;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🌈 New Subscriber Alert!</h1>
          </div>
          <div class="content">
            <p>Great news! You have a new newsletter subscriber:</p>
            <div class="subscriber-email">${subscriberEmail}</div>
            <p>The subscriber has been added to your database and received a welcome email.</p>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending subscribe notification:", error);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
  sendWelcomeEmail,
  sendSubscribeNotification,
};
