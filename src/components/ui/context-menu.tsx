import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger data-zylo-id="zylo-6269c1bdbad5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="25:3-36:37"
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight data-zylo-id="zylo-ab60b2f0c18d" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="35:5-35:49" className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent data-zylo-id="zylo-43cb4f2bdebc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="44:3-51:5"
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal data-zylo-id="zylo-4b4a5274097c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="59:3-68:33">
    <ContextMenuPrimitive.Content data-zylo-id="zylo-f0862477130a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="60:5-67:7"
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item data-zylo-id="zylo-67b2d0312c3e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="78:3-86:5"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem data-zylo-id="zylo-8f771f2f41b9" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="94:3-109:39"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span data-zylo-id="zylo-123a0823fbb3" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="103:5-107:12" className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator data-zylo-id="zylo-7b734f34dacf" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="104:7-106:44">
        <Check data-zylo-id="zylo-717d461f35fa" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="105:9-105:38" className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem data-zylo-id="zylo-7548fdbdd742" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="118:3-132:36"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span data-zylo-id="zylo-418e42011822" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="126:5-130:12" className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator data-zylo-id="zylo-3bd4e4ee63c1" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="127:7-129:44">
        <Circle data-zylo-id="zylo-59a03c418421" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="128:9-128:52" className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label data-zylo-id="zylo-d9c156cb64e3" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="142:3-150:5"
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator data-zylo-id="zylo-0f79d12e454c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="158:3-162:5"
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span data-zylo-id="zylo-db829966ee5d" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/context-menu.tsx" data-zylo-loc="171:5-177:7" data-zylo-component="ContextMenuShortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
