import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Configure transporter with your email service credentials
    // For Gmail, you might need to use app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Set this in your .env file
        pass: process.env.EMAIL_PASS, // Set this in your .env file
      },
    });

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
      from: process.env.EMAIL_USER,
      to: 'Luxuryhomeremodelingfl@gmail.com', // Your business email
      subject: `New Quote Request from ${data.name}`,
      text: message,
      replyTo: data.email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 