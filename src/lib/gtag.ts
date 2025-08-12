
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url.pathname + url.search,
    });
  }
};
