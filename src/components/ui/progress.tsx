import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root data-zylo-id="zylo-ef930ec8428c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/progress.tsx" data-zylo-loc="10:3-22:28"
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator data-zylo-id="zylo-ad33d77519d0" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/progress.tsx" data-zylo-loc="18:5-21:7"
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
