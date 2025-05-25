import { Loader2 } from 'lucide-react';
import type { DynamicOptionsLoadingProps } from 'next/dynamic';

export default function LoadingSpinner({
  error,
  isLoading,
  pastDelay,
  retry,
  timedOut,
}: DynamicOptionsLoadingProps) {
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <button onClick={retry} className="text-red-500">
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <button onClick={retry} className="text-yellow-500">
          Loading timed out. Retry
        </button>
      </div>
    );
  }

  if (!isLoading || !pastDelay) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
