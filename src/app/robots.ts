// src/app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_vercel/', // Block Vercel-specific paths
    },
    sitemap: 'https://landhacker.ai/sitemap.xml',
  };
}