import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root data-zylo-id="zylo-77d1d625ea0e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/slider.tsx" data-zylo-loc="10:3-22:26"
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track data-zylo-id="zylo-c81affef90c9" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/slider.tsx" data-zylo-loc="18:5-20:29" className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range data-zylo-id="zylo-468d7b3dc595" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/components/ui/slider.tsx" data-zylo-loc="19:7-19:71" className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb data-zylo-id="zylo-94a1a3ba7544" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/slider.tsx" data-zylo-loc="21:5-21:297" className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
