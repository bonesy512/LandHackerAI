// src/components/GoogleAnalytics.tsx
'use client'

import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';

export function GoogleAnalytics() {
  // Only load this script on the live production website.
  if (process.env.NODE_ENV !== 'production' || !GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      {/* This script loads the main gtag library from Google. */}
      {/* The `afterInteractive` strategy means it won't slow down your page load. */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      {/* This script initializes gtag and connects it to your Measurement ID. */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}