'use client';

import { useState, useEffect, type ReactNode } from 'react';

/**
 * A wrapper component that ensures its children are only rendered on the client side.
 * This is useful for preventing React hydration errors when browser extensions
 * or client-specific APIs (like `window` or `localStorage`) modify the DOM
 * or are used in a way that creates a mismatch between server and client renders.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render only on the client.
 * @returns {React.ReactNode | null} The children on the client, or null on the server.
 */
export function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
