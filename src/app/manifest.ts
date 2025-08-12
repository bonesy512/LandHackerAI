// src/app/manifest.ts
 
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LandHacker.ai',
    short_name: 'LandHacker',
    description: 'The ultimate proptech tool for finding off-market properties, generating comps, and managing deals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D1117', // Corresponds to hsl(220, 30%, 5%)
    theme_color: '#0D1117',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}