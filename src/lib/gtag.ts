// src/lib/gtag.ts

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// This line gets your Measurement ID from the Vercel environment variable.
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// This function is called to send a pageview event to Google.
export const pageview = (url: URL) => {
  if (GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url.pathname + url.search,
    });
  }
};