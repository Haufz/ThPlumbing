/**
 * Loading Skeleton Component
 *
 * Displays animated loading placeholders
 */

import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
}

export function LoadingSkeleton({ className, count = 1 }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div data-zylo-id="zylo-bf444ca5bc75" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="18:9-22:11" data-zylo-component="LoadingSkeleton"
          key={i}
          className={cn('animate-pulse rounded-md bg-muted', className)}
          aria-label="Loading..."
        />
      ))}
    </>
  );
}

// Common skeleton patterns
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div data-zylo-id="zylo-cb3e6e45580f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="31:5-35:11" data-zylo-component="CardSkeleton" className={cn('rounded-lg border p-6', className)}>
      <LoadingSkeleton data-zylo-id="zylo-edc63b0d98f8" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="32:7-32:48" data-zylo-component="CardSkeleton" className="h-4 w-3/4" />
      <LoadingSkeleton data-zylo-id="zylo-41e5d72c1bf4" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="33:7-33:53" data-zylo-component="CardSkeleton" className="mt-2 h-4 w-1/2" />
      <LoadingSkeleton data-zylo-id="zylo-ff6dbbe23603" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="34:7-34:55" data-zylo-component="CardSkeleton" className="mt-4 h-20 w-full" />
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div data-zylo-id="zylo-c33b76041df7" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="41:5-51:11" data-zylo-component="ListSkeleton" className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div data-zylo-id="zylo-bac50c2ae018" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="43:9-49:15" data-zylo-component="ListSkeleton" key={i} className="flex items-center space-x-4">
          <LoadingSkeleton data-zylo-id="zylo-6da4cb290797" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="44:11-44:65" data-zylo-component="ListSkeleton" className="h-12 w-12 rounded-full" />
          <div data-zylo-id="zylo-b5296ba07687" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="45:11-48:17" data-zylo-component="ListSkeleton" className="flex-1 space-y-2">
            <LoadingSkeleton data-zylo-id="zylo-aabcabc56624" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="46:13-46:54" data-zylo-component="ListSkeleton" className="h-4 w-3/4" />
            <LoadingSkeleton data-zylo-id="zylo-def1d5e9bf67" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="47:13-47:54" data-zylo-component="ListSkeleton" className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div data-zylo-id="zylo-9c7a479a57be" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="57:5-65:11" data-zylo-component="TableSkeleton" className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div data-zylo-id="zylo-df97a68bc892" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="59:9-63:15" data-zylo-component="TableSkeleton" key={i} className="flex gap-4">
          {Array.from({ length: columns }).map((_, j) => (
            <LoadingSkeleton data-zylo-id="zylo-51fc35d0480c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/loading-skeleton.tsx" data-zylo-loc="61:13-61:64" data-zylo-component="TableSkeleton" key={j} className="h-10 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}
