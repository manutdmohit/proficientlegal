interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

interface LayoutShift extends PerformanceEntry {
  value: number;
}

export function measurePerformance(): PerformanceMetric[] {
  const metrics: PerformanceMetric[] = [];

  // Measure First Contentful Paint (FCP)
  const fcp = performance.getEntriesByName('first-contentful-paint')[0];
  if (fcp) {
    metrics.push({
      name: 'First Contentful Paint',
      value: fcp.startTime,
      rating:
        fcp.startTime < 1800
          ? 'good'
          : fcp.startTime < 3000
          ? 'needs-improvement'
          : 'poor',
    });
  }

  // Measure Largest Contentful Paint (LCP)
  const lcp = performance.getEntriesByName('largest-contentful-paint')[0];
  if (lcp) {
    metrics.push({
      name: 'Largest Contentful Paint',
      value: lcp.startTime,
      rating:
        lcp.startTime < 2500
          ? 'good'
          : lcp.startTime < 4000
          ? 'needs-improvement'
          : 'poor',
    });
  }

  // Measure First Input Delay (FID)
  const fid = performance.getEntriesByName('first-input-delay')[0];
  if (fid) {
    metrics.push({
      name: 'First Input Delay',
      value: fid.duration,
      rating:
        fid.duration < 100
          ? 'good'
          : fid.duration < 300
          ? 'needs-improvement'
          : 'poor',
    });
  }

  // Measure Cumulative Layout Shift (CLS)
  const cls = performance.getEntriesByName('layout-shift')[0] as LayoutShift;
  if (cls) {
    metrics.push({
      name: 'Cumulative Layout Shift',
      value: cls.value,
      rating:
        cls.value < 0.1
          ? 'good'
          : cls.value < 0.25
          ? 'needs-improvement'
          : 'poor',
    });
  }

  return metrics;
}

export function logPerformanceMetrics() {
  const metrics = measurePerformance();
  console.group('Performance Metrics');
  metrics.forEach((metric) => {
    console.log(
      `${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`
    );
  });
  console.groupEnd();
}

// Example usage:
/*
// Log performance metrics after page load
window.addEventListener('load', () => {
  setTimeout(logPerformanceMetrics, 0)
})

// Or use in a React component:
useEffect(() => {
  const metrics = measurePerformance()
  // Send metrics to analytics
}, [])
*/
