import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger data-zylo-id="zylo-0ad844d519a1" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="25:3-36:38"
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight data-zylo-id="zylo-52814a4cdaaa" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="35:5-35:49" className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent data-zylo-id="zylo-2c97bf5c2eef" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="45:3-52:5"
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal data-zylo-id="zylo-bcb166ca3450" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="61:3-71:34">
    <DropdownMenuPrimitive.Content data-zylo-id="zylo-5528f2d1f7d5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="62:5-70:7"
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item data-zylo-id="zylo-142673c8e2c0" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="81:3-89:5"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem data-zylo-id="zylo-b1e3a9a181f3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="97:3-112:40"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span data-zylo-id="zylo-a7f788796afb" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="106:5-110:12" className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator data-zylo-id="zylo-9ad0d0fa00da" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="107:7-109:45">
        <Check data-zylo-id="zylo-7e2c6bcf6050" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="108:9-108:38" className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem data-zylo-id="zylo-773f94dc0252" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="121:3-135:37"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span data-zylo-id="zylo-14b261374566" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="129:5-133:12" className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator data-zylo-id="zylo-027eb1218573" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="130:7-132:45">
        <Circle data-zylo-id="zylo-6ba006c32ff7" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="131:9-131:52" className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label data-zylo-id="zylo-3dc43eee3a5a" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="145:3-153:5"
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator data-zylo-id="zylo-04156746cb38" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="161:3-165:5"
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span data-zylo-id="zylo-5b5577687103" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/dropdown-menu.tsx" data-zylo-loc="174:5-177:7" data-zylo-component="DropdownMenuShortcut"
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
