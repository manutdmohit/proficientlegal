'use client';

import type React from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AnimatePresence } from 'framer-motion';
import { GlobalLoadingIndicator } from '@/components/global-loading-indicator';
import FontPreload from './font-preload';
import { SessionProvider } from 'next-auth/react';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {/* Font preloading component */}
        <FontPreload />

        {/* Global loading indicator for client-side transitions */}
        <GlobalLoadingIndicator />

        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </ThemeProvider>
    </SessionProvider>
  );
}
