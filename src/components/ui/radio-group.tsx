import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root data-zylo-id="zylo-4a42fd727fe4" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/radio-group.tsx" data-zylo-loc="12:5-16:7"
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item data-zylo-id="zylo-c4943487d92c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/radio-group.tsx" data-zylo-loc="26:5-37:32"
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator data-zylo-id="zylo-dbbc78826a91" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/radio-group.tsx" data-zylo-loc="34:7-36:39" className="flex items-center justify-center">
        <Circle data-zylo-id="zylo-d5589fe47a7f" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/radio-group.tsx" data-zylo-loc="35:9-35:69" className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
