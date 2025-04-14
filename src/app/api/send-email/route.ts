import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Check if environment variables are set
    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD || !process.env.TO_EMAIL) {
      console.error("Email environment variables are not set correctly");
      return NextResponse.json(
        { success: false, error: 'Email configuration is incomplete. Check .env.local file.' },
        { status: 500 }
      );
    }

    // Log for debugging (remove in production)
    console.log("Attempting to send email with:", {
      from: process.env.GMAIL_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Quote Request from ${data.name}`,
    });

    // Configure transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Debug settings (remove in production)
      debug: true,
      logger: true
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to connect to email server. Check credentials and security settings.' 
        },
        { status: 500 }
      );
    }

    // Format the email content
    const message = `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      ${data.zipcode ? `ZIP Code: ${data.zipcode}` : ''}
      Service: ${data.service}
      ${data.message ? `Message: ${data.message}` : ''}
    `;

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.TO_EMAIL, // Using the environment variable for recipient
      subject: `New Quote Request from ${data.name}`,
      text: message,
      replyTo: data.email,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    return NextResponse.json({ 
      success: true,
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Detailed error message
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Unknown error occurred';
      
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: 'Check server logs for more information' 
      },
      { status: 500 }
    );
  }
} 