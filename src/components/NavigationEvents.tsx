// src/components/NavigationEvents.tsx
'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/gtag';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = new URL(pathname, window.location.origin);
      if(searchParams) {
        url.search = searchParams.toString();
      }
      // Every time the URL changes, send a `pageview` event.
      pageview(url);
    }
  }, [pathname, searchParams]); // Re-run this effect when the path changes.

  return null;
}