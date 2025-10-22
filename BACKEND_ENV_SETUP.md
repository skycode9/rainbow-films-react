# Backend Environment Setup

## Required: Add Resend API Key to Backend

You need to add your Resend API key to the backend `.env` file for emails to work.

### Steps:

1. **Copy the example file:**
   ```bash
   cd backend
   cp .env.example .env
   ```

2. **Add your Resend API key:**
   
   Open `backend/.env` and add:
   ```env
   RESEND_API_KEY=re_2dbtfSDX_Eka4pEtWcnVjcKXH1NxGmPZJ
   ```

3. **Restart your backend server:**
   ```bash
   npm run dev
   ```

## That's it!

Now your contact form and subscribe functionality will work with Resend sending emails from the backend.

### What happens:
- ✅ Contact form → Backend API → Saves to DB → Sends email via Resend
- ✅ Subscribe form → Backend API → Saves to DB → Sends welcome email via Resend
- ✅ API key stays secure on the backend (never exposed to browser)
