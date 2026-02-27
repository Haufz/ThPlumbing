import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item data-zylo-id="zylo-8b5227535f8f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/accordion.tsx" data-zylo-loc="13:3-17:5"
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header data-zylo-id="zylo-8a16c6389d49" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/accordion.tsx" data-zylo-loc="25:3-37:31" className="flex">
    <AccordionPrimitive.Trigger data-zylo-id="zylo-e7896975a493" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/accordion.tsx" data-zylo-loc="26:5-36:34"
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown data-zylo-id="zylo-2c88bd859a91" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/accordion.tsx" data-zylo-loc="35:7-35:85" className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content data-zylo-id="zylo-6f44e2260a02" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/accordion.tsx" data-zylo-loc="45:3-51:32"
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div data-zylo-id="zylo-a509798c96dc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/accordion.tsx" data-zylo-loc="50:5-50:65" className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
