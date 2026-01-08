//"C:\01-TECNOVITA\tecnovita1\src\components\ClientOffset.tsx"
'use client';

import { useEffect, useState, useRef } from 'react';

export default function ClientOffset({ children }: { children: React.ReactNode }) {
  const [applyOffset, setApplyOffset] = useState(true);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = () => window.innerWidth < 768;

    const checkFitsInViewport = () => {
      if (isMobile()) {
        setApplyOffset(true);
        return;
      }
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight;
      setApplyOffset(!(docHeight <= winHeight));
    };

    // Debounced resize handler
    let resizeTimeout: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(checkFitsInViewport, 120);
    };

    // Observe DOM changes (images, async content)
    observerRef.current = new MutationObserver(() => {
      window.setTimeout(checkFitsInViewport, 80);
    });
    observerRef.current.observe(document.body, { childList: true, subtree: true });

    // initial check + listeners
    checkFitsInViewport();
    window.addEventListener('resize', onResize);
    window.addEventListener('load', checkFitsInViewport);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', checkFitsInViewport);
      if (observerRef.current) observerRef.current.disconnect();
      window.clearTimeout(resizeTimeout);
    };
  }, []);

  // Usa la variable CSS --header-h definida en globals.css como fallback
  return (
    <main className="flex-grow" style={{ marginTop: applyOffset ? 'var(--header-h)' : '0' }}>
      {children}
    </main>
  );
}
