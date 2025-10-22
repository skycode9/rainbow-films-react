# Resend Email Setup Guide

This guide will help you set up Resend for handling contact form submissions and subscriber welcome emails directly from the frontend.

## 🚀 Quick Setup

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Rainbow Films Production")
5. Copy the API key (it will only be shown once!)

### 3. Add API Key to Environment Variables

Add the following to your **backend** `.env` file:

```env
RESEND_API_KEY=re_your_api_key_here
```

**Important:** Never commit your API key to version control! The API key should only be in the backend for security.

### 4. Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain:

1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Enter your domain (e.g., `rainbowfilms.com`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually takes a few minutes)

Once verified, update the `from` field in `/backend/src/utils/emailService.js`:

```javascript
from: 'Rainbow Films <noreply@rainbowfilms.com>'
```

### 5. Update Recipient Email

In `/backend/src/utils/emailService.js`, update the contact form recipient email:

```javascript
to: ['hello@rainbowfilms.com'], // Replace with your actual email
```

## 📧 Email Features

### Contact Form
- Frontend submits to `/api/contact` endpoint
- Backend saves to database and sends email via Resend
- Includes name, email, company (optional), and message
- Beautiful HTML email template

### Subscribe/Newsletter
- Frontend submits to `/api/subscribe` endpoint
- Backend saves subscriber to database
- Backend sends welcome email via Resend
- Professional welcome email with company branding

## 🔧 Configuration

### Email Templates

Email templates are defined in `/backend/src/utils/emailService.js`:

- `sendContactEmail()` - Contact form submissions
- `sendWelcomeEmail()` - Welcome email for new subscribers

You can customize the HTML templates in these functions to match your branding.

### Architecture

**Frontend → Backend → Resend**

1. Frontend forms submit data to backend API
2. Backend saves data to MongoDB
3. Backend sends emails via Resend API
4. This keeps your API key secure on the server

## 📊 Resend Dashboard Features

- **Email Logs**: View all sent emails and their status
- **Analytics**: Track email delivery rates and opens
- **API Keys**: Manage multiple API keys for different environments
- **Domains**: Verify and manage your sending domains

## 🔒 Security Best Practices

1. **API key is on backend only** - Never exposed to frontend/browser
2. **Use domain verification** for production
3. **Implement rate limiting** on backend endpoints to prevent abuse
4. **Monitor your email logs** regularly in Resend dashboard

## 💰 Pricing

Resend offers:
- **Free Tier**: 3,000 emails/month
- **Pro Plan**: Starting at $20/month for 50,000 emails

For most small to medium businesses, the free tier is sufficient.

## 🐛 Troubleshooting

### Emails not sending?
1. Check if your API key is correct in backend `.env`
2. Verify the API key has the correct permissions
3. Check Resend dashboard logs for error messages
4. Ensure you're not exceeding rate limits
5. Check backend console logs for errors

### Using development domain?
If you haven't verified a domain, you can only send to:
- The email address you signed up with
- Email addresses you've added as verified in Resend dashboard

For testing, use `onboarding@resend.dev` as the from address (already configured).

## 📝 Testing

To test the email functionality:

1. Start your backend server (`npm run dev` in backend folder)
2. Start your frontend development server (`npm run dev` in frontend folder)
3. Fill out the contact form or subscribe form
4. Check your email inbox
5. Verify the email in Resend dashboard logs
6. Check backend console for any errors

## 🔄 Migration from EmailJS/Nodemailer

All EmailJS and Nodemailer code has been replaced with Resend:
- ✅ EmailJS removed from frontend
- ✅ Nodemailer replaced with Resend in backend
- ✅ New backend `emailService.js` created with Resend
- ✅ All email logic handled securely on backend
- ✅ Frontend only calls backend API endpoints

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend React Guide](https://resend.com/docs/send-with-react)
- [Resend API Reference](https://resend.com/docs/api-reference)

## 🎯 Next Steps

1. Sign up for Resend at https://resend.com
2. Get your API key from dashboard
3. Add `RESEND_API_KEY=re_your_key` to backend `.env` file
4. Update recipient email in `/backend/src/utils/emailService.js`
5. Start backend server
6. Test the contact and subscribe forms
7. (Optional) Verify your domain for production use

---

**Need Help?** Check the Resend documentation or contact support at support@resend.com
