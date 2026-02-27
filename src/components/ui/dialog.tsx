import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay data-zylo-id="zylo-819c48a22265" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="19:3-26:5"
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal data-zylo-id="zylo-b5f26ab24c7a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="34:3-50:18">
    <DialogOverlay data-zylo-id="zylo-f5ef7d1d2640" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="35:5-35:22" />
    <DialogPrimitive.Content data-zylo-id="zylo-b6dfac697977" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="36:5-49:31"
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close data-zylo-id="zylo-72b40ed66a68" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="45:7-48:31" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X data-zylo-id="zylo-509aaca87432" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="46:9-46:34" className="h-4 w-4" />
        <span data-zylo-id="zylo-f679dbc870ad" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="47:9-47:47" className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-zylo-id="zylo-eca3874a10a2" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="58:3-64:5" data-zylo-component="DialogHeader"
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-zylo-id="zylo-cb7e709b81ea" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="72:3-78:5" data-zylo-component="DialogFooter"
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title data-zylo-id="zylo-414b02cda1ae" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="86:3-93:5"
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description data-zylo-id="zylo-be63600af604" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/dialog.tsx" data-zylo-loc="101:3-105:5"
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
