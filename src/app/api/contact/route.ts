// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';
import { Resend } from 'resend';
import { ContactFormReceiptEmail } from '../../../../emails/contact-form-receipt';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const validation = contactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ errors: validation.error.flatten().fieldErrors }, { status: 400 });
  }
  
  const { name, email, message } = validation.data;

  // --- Start of updated logic ---

  // 1. Send the notification email to yourself
  const sendToAdmin = await resend.emails.send({
    from: 'Contact Form <noreply@landhacker.ai>',
    to: process.env.RECIPIENT_EMAIL!,
    subject: `New Contact Form Submission from ${name}`,
    html: `<h2>New Message from LandHacker.ai</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
  });

  // Check if the first email failed
  if (sendToAdmin.error) {
    console.error('Failed to send admin notification email:', sendToAdmin.error);
    return NextResponse.json({ message: "Failed to send notification email.", error: sendToAdmin.error }, { status: 500 });
  }

  // 2. Send the confirmation email to the user
  const sendToUser = await resend.emails.send({
    from: 'LandHacker.ai <noreply@landhacker.ai>',
    to: email,
    subject: 'Message Received | LandHacker.ai',
    react: ContactFormReceiptEmail({ name: name }),
  });

  // Check if the second email failed
  if (sendToUser.error) {
    console.error('Failed to send user confirmation email:', sendToUser.error);
    return NextResponse.json({ message: "Failed to send confirmation email.", error: sendToUser.error }, { status: 500 });
  }

  // 3. If both emails were sent successfully, return a success response
  return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 });
}