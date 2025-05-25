'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Global loading indicator for client-side transitions
 *
 * This component shows a progress bar at the top of the page
 * during client-side navigation events. It's inspired by popular
 * libraries like NProgress but implemented with Framer Motion.
 */
function LoadingIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Handle route changes
  useEffect(() => {
    // Start loading when navigation begins
    requestAnimationFrame(() => {
      setIsLoading(true);
      setProgress(20);
    });

    // Simulate progress
    const timer1 = setTimeout(() => setProgress(40), 100);
    const timer2 = setTimeout(() => setProgress(60), 200);
    const timer3 = setTimeout(() => setProgress(80), 400);

    // Complete loading when navigation finishes
    const timer4 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 200);
    }, 500);

    // Cleanup timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [pathname, searchParams]); // Re-run effect when route changes

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: progress / 100, opacity: 1 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ transformOrigin: '0%' }}
        />
      )}
    </AnimatePresence>
  );
}

export function GlobalLoadingIndicator() {
  return (
    <Suspense fallback={null}>
      <LoadingIndicator />
    </Suspense>
  );
}
