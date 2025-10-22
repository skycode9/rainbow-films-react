# API Testing Guide

## Check if Backend is Running

Open your browser and go to:
```
http://localhost:3400
```

You should see:
```json
{
  "success": true,
  "message": "Rainbow Films Backend API is running!"
}
```

## Test Contact Form API

Open your browser console (F12) and run:

```javascript
fetch('http://localhost:3400/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    message: 'This is a test message'
  })
})
.then(res => res.json())
.then(data => console.log('Response:', data))
.catch(err => console.error('Error:', err));
```

## Test Subscribe API

```javascript
fetch('http://localhost:3400/api/subscribe', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'test@example.com'
  })
})
.then(res => res.json())
.then(data => console.log('Response:', data))
.catch(err => console.error('Error:', err));
```

## Expected Results

### Contact Form Success:
```json
{
  "success": true,
  "message": "Contact form submitted successfully. We'll get back to you soon!"
}
```

### Subscribe Success:
```json
{
  "success": true,
  "message": "Subscribed successfully! Thank you for joining us."
}
```

## Check Backend Console

After testing, check your backend terminal for:
- ✅ Email sent logs
- ❌ Any error messages

## Troubleshooting

### "Route not found" error?
- Make sure backend is running on port 3400
- Check that VITE_API_URL in frontend .env is `http://localhost:3400`

### Email not sending?
- Check backend console for Resend errors
- Verify RESEND_API_KEY is in backend .env
- Check Resend dashboard at https://resend.com for email logs
