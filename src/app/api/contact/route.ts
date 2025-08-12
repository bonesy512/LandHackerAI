// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';
import { Resend } from 'resend';

// Import the email template you approved
import { ContactFormReceiptEmail } from '../../../../emails/contact-form-receipt';

// Instantiate Resend using the API key from Vercel's environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const validation = contactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ errors: validation.error.flatten().fieldErrors }, { status: 400 });
  }
  
  const { name, email, message } = validation.data;

  try {
    // Send one email to yourself (the notification)
    await resend.emails.send({
      from: 'Contact Form <noreply@landhacker.ai>', // Must be a verified domain in Resend
      to: process.env.RECIPIENT_EMAIL!, // Your personal email from env variables
      subject: `New Contact Form Submission from ${name}`,
      html: `<h2>New Message from LandHacker.ai</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    // Send a second email to the user (the receipt)
    await resend.emails.send({
      from: 'LandHacker.ai <noreply@landhacker.ai>', // Must be a verified domain in Resend
      to: email, // The user's email address
      subject: 'Message Received | LandHacker.ai',
      react: ContactFormReceiptEmail({ name: name }), // Pass the user's name as a prop
    });

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send emails." }, { status: 500 });
  }
}