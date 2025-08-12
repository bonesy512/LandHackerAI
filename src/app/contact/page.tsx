// src/app/contact/page.tsx

import { type Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

// This is the server-side metadata for the page title
export const metadata: Metadata = {
  title: "Contact Us | LandHacker.ai",
  description: "Get in touch with the LandHacker.ai team. We're here to answer your questions and receive your feedback.",
  openGraph: {
    title: "Contact Us | LandHacker.ai",
    description: "Get in touch with the LandHacker.ai team.",
    url: "https://landhacker.ai/contact",
    siteName: "LandHacker.ai",
    images: [
      {
        url: "/og-image-contact.png", // A specific OG image for the contact page
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// This is now a simple Server Component that renders the interactive Client Component
export default function ContactPage() {
  return <ContactForm />;
}