# Luxury Home Remodeling

Website for Luxury Home Remodeling company in Orlando, FL.

## Email Notification Setup

The website is configured to send email notifications when users submit the free quote form on the home page or contact page.

### Configuration Steps:

1. Create a `.env.local` file in the root directory (if not already created)
2. Set up your email credentials in the `.env.local` file:
   ```
   EMAIL_USER=your-actual-email@gmail.com
   EMAIL_PASS=your-actual-password-or-app-password
   ```
3. After updating the `.env.local` file, **restart your development server** for the changes to take effect

### Gmail Setup (Recommended)

If you're using Gmail, follow these steps:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Generate an "App Password":
   - Go to Google Account > Security > App Passwords
   - Select "App" dropdown and choose "Mail"
   - Select "Device" dropdown and choose "Other" (Custom name)
   - Enter "Luxury Home Remodeling Website" and click Generate
5. Use the generated 16-character App Password in the `EMAIL_PASS` environment variable
6. Do not include spaces in the password

### Troubleshooting Email Issues

If email sending fails, check the following:

1. **Environment Variables**: Make sure you've updated the `.env.local` file with actual credentials and restarted the server
   
2. **Gmail Account Settings**:
   - If using regular password: Enable "Less secure app access" in your Google Account security settings
   - If using 2FA: Make sure you're using a valid App Password
   
3. **Check Browser Console & Server Logs**:
   - Open browser dev tools to see detailed error messages
   - Check server logs for SMTP connection or authentication issues
   
4. **Common Error Messages**:
   - "Invalid login": Check your email and password
   - "Username and Password not accepted": Gmail requires App Password if you have 2FA enabled
   - "SMTP connection failed": Check your network/firewall settings
   
5. **Test a Different Email Provider**:
   - If Gmail doesn't work, try modifying the email service in `src/app/api/send-email/route.ts`
   - Change the `service` from 'gmail' to other providers like 'outlook' or 'yahoo'

### Testing Email Functionality

To test the email functionality:
1. Fill out the free quote form on the home page or contact page
2. Submit the form
3. Check the browser console and server logs for success/error messages
4. Check the email inbox of `Luxuryhomeremodelingfl@gmail.com`

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Production

```bash
# Build the application
npm run build

# Start the production server
npm start
``` 