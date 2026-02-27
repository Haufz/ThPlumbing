import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay data-zylo-id="zylo-94eae6036287" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="17:3-24:5"
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal data-zylo-id="zylo-d67c05dfde10" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="32:3-42:23">
    <AlertDialogOverlay data-zylo-id="zylo-01d4242925a8" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="33:5-33:27" />
    <AlertDialogPrimitive.Content data-zylo-id="zylo-769b07bf737c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="34:5-41:7"
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-zylo-id="zylo-d94b8fc41df6" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="50:3-56:5" data-zylo-component="AlertDialogHeader"
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-zylo-id="zylo-1918d15b92da" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="64:3-70:5" data-zylo-component="AlertDialogFooter"
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title data-zylo-id="zylo-cc1193a185b5" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="78:3-82:5"
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description data-zylo-id="zylo-59a184a19e83" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="90:3-94:5"
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action data-zylo-id="zylo-a08294b20063" data-zylo-kind="button" data-zylo-cap="126" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="103:3-107:5"
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel data-zylo-id="zylo-6b8c4a38dbe2" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/alert-dialog.tsx" data-zylo-loc="115:3-123:5"
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
