import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root data-zylo-id="zylo-30ebf4ec4c48" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="10:3-13:5" data-zylo-component="Drawer"
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay data-zylo-id="zylo-3bfd178036de" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="27:3-31:5"
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal data-zylo-id="zylo-20cd34d7df89" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="39:3-52:18">
    <DrawerOverlay data-zylo-id="zylo-d2b700fdcce1" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="40:5-40:22" />
    <DrawerPrimitive.Content data-zylo-id="zylo-b1277cb02d09" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="41:5-51:31"
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div data-zylo-id="zylo-01c6b5d2f4db" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="49:7-49:75" className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-zylo-id="zylo-4bc4110bab87" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="60:3-63:5" data-zylo-component="DrawerHeader"
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-zylo-id="zylo-c94185697aa3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="71:3-74:5" data-zylo-component="DrawerFooter"
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title data-zylo-id="zylo-754c0c2360b0" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="82:3-89:5"
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description data-zylo-id="zylo-1423cf47b82a" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/drawer.tsx" data-zylo-loc="97:3-101:5"
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
