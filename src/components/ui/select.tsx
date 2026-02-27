import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger data-zylo-id="zylo-29d2ae1e9a9c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="17:3-29:29"
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon data-zylo-id="zylo-e7affe071916" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="26:5-28:28" asChild>
      <ChevronDown data-zylo-id="zylo-1d440db7b2ed" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="27:7-27:53" className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton data-zylo-id="zylo-6504375b9efb" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="37:3-46:36"
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp data-zylo-id="zylo-e37714b5de18" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="45:5-45:38" className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton data-zylo-id="zylo-0b0fc5c05faa" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="54:3-63:38"
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown data-zylo-id="zylo-1e1bbbdbde59" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="62:5-62:40" className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal data-zylo-id="zylo-c3f371ae0959" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="72:3-96:28">
    <SelectPrimitive.Content data-zylo-id="zylo-d80ab5255cb3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="73:5-95:31"
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton data-zylo-id="zylo-948cb735edbd" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="84:7-84:31" />
      <SelectPrimitive.Viewport data-zylo-id="zylo-f64c47d0a8f5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="85:7-93:34"
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton data-zylo-id="zylo-c38b4d62c2b8" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="94:7-94:33" />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label data-zylo-id="zylo-debcfccd75f4" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="104:3-108:5"
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item data-zylo-id="zylo-956571d2b2ac" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="116:3-131:26"
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span data-zylo-id="zylo-2423923eea70" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="124:5-128:12" className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator data-zylo-id="zylo-a708788d3cab" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="125:7-127:39">
        <Check data-zylo-id="zylo-fa9a18083cec" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="126:9-126:38" className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText data-zylo-id="zylo-9727a3e9db41" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="130:5-130:68">{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator data-zylo-id="zylo-28d1e4643543" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/select.tsx" data-zylo-loc="139:3-143:5"
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
