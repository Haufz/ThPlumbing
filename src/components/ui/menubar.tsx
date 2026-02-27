import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root data-zylo-id="zylo-41735e1b5841" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="21:3-28:5"
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger data-zylo-id="zylo-386c298d9eac" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="36:3-43:5"
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger data-zylo-id="zylo-d22ecc053dfe" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="53:3-64:33"
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight data-zylo-id="zylo-17e62afac238" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="63:5-63:49" className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent data-zylo-id="zylo-3cd5c29a9e6a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="72:3-79:5"
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal data-zylo-id="zylo-8e72ac6f3734" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="91:5-103:31">
      <MenubarPrimitive.Content data-zylo-id="zylo-7a897404ba30" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="92:7-102:9"
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item data-zylo-id="zylo-47479d1a5078" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="114:3-122:5"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem data-zylo-id="zylo-d02cc370bdca" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="130:3-145:35"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span data-zylo-id="zylo-fc63a9bb65dc" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="139:5-143:12" className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator data-zylo-id="zylo-50d03c22b865" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="140:7-142:40">
        <Check data-zylo-id="zylo-884095d67dc5" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="141:9-141:38" className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem data-zylo-id="zylo-7c167f8cf9a2" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="153:3-167:32"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span data-zylo-id="zylo-0412e8b603e5" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="161:5-165:12" className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator data-zylo-id="zylo-bf7b9d08c9af" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="162:7-164:40">
        <Circle data-zylo-id="zylo-692129b1e567" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="163:9-163:52" className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label data-zylo-id="zylo-ba4d12506311" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="177:3-185:5"
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator data-zylo-id="zylo-d5b30ff2cbfe" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="193:3-197:5"
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span data-zylo-id="zylo-8902643f09d6" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/menubar.tsx" data-zylo-loc="206:5-212:7" data-zylo-component="MenubarShortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
