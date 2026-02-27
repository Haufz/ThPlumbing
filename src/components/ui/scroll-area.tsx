import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root data-zylo-id="zylo-9d6e0f5a8177" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/scroll-area.tsx" data-zylo-loc="10:3-20:30"
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport data-zylo-id="zylo-016120acace8" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/scroll-area.tsx" data-zylo-loc="15:5-17:36" className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar data-zylo-id="zylo-4b0c162b8dbe" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/scroll-area.tsx" data-zylo-loc="18:5-18:18" />
    <ScrollAreaPrimitive.Corner data-zylo-id="zylo-a496c4f0e89f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/scroll-area.tsx" data-zylo-loc="19:5-19:35" />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar data-zylo-id="zylo-be1f35f643bc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/scroll-area.tsx" data-zylo-loc="28:3-42:45"
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb data-zylo-id="zylo-37030fa7c8c2" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/scroll-area.tsx" data-zylo-loc="41:5-41:95" className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
