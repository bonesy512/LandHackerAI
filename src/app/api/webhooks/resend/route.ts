// src/app/api/webhooks/resend/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// This instantiates the Resend client using the same environment variable
// as your contact form API route.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  // 1. Extract the signature from the request headers
  const signature = req.headers.get('resend-signature');
  if (!signature) {
    return new NextResponse('Signature is missing.', { status: 400 });
  }

  // 2. Get the signing secret from your environment variables
  const signingSecret = process.env.RESEND_WEBHOOK_SIGNING_SECRET;
  if (!signingSecret) {
    console.error('RESEND_WEBHOOK_SIGNING_SECRET is not set in .env or Vercel config.');
    return new NextResponse('Webhook signing secret is not configured.', { status: 500 });
  }
  
  // 3. Read the request body as raw text for verification
  const body = await req.text();

  try {
    // 4. Verify the webhook signature to ensure it's from Resend
    const event = await resend.webhooks.verify({
      body: body,
      signature: signature,
      secret: signingSecret,
    });

    // 5. Handle the verified event based on its type
    // You can now safely process the event data.
    console.log(`Received webhook event: ${event.type}`);

    switch (event.type) {
      case 'email.delivered':
        // Logic for when an email is delivered
        console.log('Email delivered:', event.data);
        // Example: Update a record in your database
        break;
      case 'email.bounced':
        // Logic for bounced emails
        console.log('Email bounced:', event.data);
        // Example: Add the recipient to a suppression list
        break;
      // Add other event types as needed
      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }

    // 6. Respond with a 200 OK to acknowledge receipt
    return new NextResponse('Webhook processed successfully.', { status: 200 });

  } catch (error) {
    console.error('Webhook verification failed:', error);
    return new NextResponse('Webhook verification failed.', { status: 400 });
  }
}