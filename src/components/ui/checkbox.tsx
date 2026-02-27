import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root data-zylo-id="zylo-27d952ad58ac" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/checkbox.tsx" data-zylo-loc="11:3-24:28"
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator data-zylo-id="zylo-2a104b21a76d" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/checkbox.tsx" data-zylo-loc="19:5-23:35"
      className={cn("flex items-center justify-center text-current")}
    >
      <Check data-zylo-id="zylo-0fe183ea2ffc" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/checkbox.tsx" data-zylo-loc="22:7-22:36" className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
