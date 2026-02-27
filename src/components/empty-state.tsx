/**
 * Empty State Component
 *
 * Displays a friendly message when there's no data to show
 */

import { ReactNode } from 'react';
import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div data-zylo-id="zylo-32a21136d6b4" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/empty-state.tsx" data-zylo-loc="31:5-52:11" data-zylo-component="EmptyState"
      className={cn(
        'flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center',
        className
      )}
    >
      <div data-zylo-id="zylo-143890abddd5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/empty-state.tsx" data-zylo-loc="37:7-39:13" data-zylo-component="EmptyState" className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        {icon || <FileQuestion data-zylo-id="zylo-93846a1dbb01" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/empty-state.tsx" data-zylo-loc="38:18-38:78" data-zylo-component="EmptyState" className="h-10 w-10 text-muted-foreground" />}
      </div>

      <h3 data-zylo-id="zylo-124db6fe3e91" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/empty-state.tsx" data-zylo-loc="41:7-41:62" data-zylo-component="EmptyState" className="mt-6 text-lg font-semibold">{title}</h3>

      {description && (
        <p data-zylo-id="zylo-bc4606519f5e" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/empty-state.tsx" data-zylo-loc="44:9-44:85" data-zylo-component="EmptyState" className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      )}

      {action && (
        <Button data-zylo-id="zylo-61f38d68a366" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/empty-state.tsx" data-zylo-loc="48:9-50:18" data-zylo-component="EmptyState" onClick={action.onClick} className="mt-6">
          {action.label}
        </Button>
      )}
    </div>
  );
}
