import dynamic from 'next/dynamic';
import LoadingSpinner from '../components/LoadingSpinner';
import type { DynamicOptionsLoadingProps } from 'next/dynamic';

interface DynamicImportOptions {
  ssr?: boolean;
  loading?: (props: DynamicOptionsLoadingProps) => React.ReactNode;
}

export function dynamicImport<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: DynamicImportOptions = {}
) {
  const { ssr = true, loading = LoadingSpinner } = options;

  return dynamic(importFn, {
    ssr,
    loading,
  });
}

// Example usage:
/*
const DynamicComponent = dynamicImport(
  () => import('@/components/HeavyComponent'),
  { ssr: false }
)
*/
