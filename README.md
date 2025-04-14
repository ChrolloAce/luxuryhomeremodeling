# Luxury Home Remodeling

Website for Luxury Home Remodeling company in Orlando, FL.

## Email Notification Setup

The website is configured to send email notifications when users submit the free quote form on the home page or contact page.

### Configuration Steps:

1. Create a `.env.local` file in the root directory (if not already created)
2. Set up your email credentials in the `.env.local` file:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Using Gmail

If you're using Gmail:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Generate an "App Password" (Google Account > Security > App Passwords)
5. Use this App Password in the `EMAIL_PASS` environment variable

### Testing Email Functionality

To test the email functionality:
1. Fill out the free quote form on the home page or contact page
2. Submit the form
3. Check the email inbox of the address specified in the `to` field in `src/app/api/send-email/route.ts`

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