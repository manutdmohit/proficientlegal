interface PreloadOptions {
  as?: 'script' | 'style' | 'image' | 'font' | 'fetch';
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export function preloadResource(href: string, options: PreloadOptions = {}) {
  const { as = 'fetch', type, crossOrigin } = options;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;

  if (type) {
    link.type = type;
  }

  if (crossOrigin) {
    link.crossOrigin = crossOrigin;
  }

  document.head.appendChild(link);
}

export function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

export function preloadFont(family: string, url: string) {
  preloadResource(url, {
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  });
}

// Example usage:
/*
// Preload critical images
preloadImage('/hero-image.jpg')

// Preload critical fonts
preloadFont('Playfair Display', '/fonts/playfair-display.woff2')

// Preload critical scripts
preloadResource('/critical-script.js', { as: 'script' })

// Preload critical styles
preloadResource('/critical-styles.css', { as: 'style' })
*/
