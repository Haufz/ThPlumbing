import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div data-zylo-id="zylo-0890f69d6d0c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/card.tsx" data-zylo-loc="9:3-16:5"
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div data-zylo-id="zylo-dcca4f9cfaa7" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/card.tsx" data-zylo-loc="24:3-28:5"
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 data-zylo-id="zylo-51df3c0f028f" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/card.tsx" data-zylo-loc="36:3-43:5"
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p data-zylo-id="zylo-db169d0331a7" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/card.tsx" data-zylo-loc="51:3-55:5"
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div data-zylo-id="zylo-2e176cf2d910" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/card.tsx" data-zylo-loc="63:3-63:69" ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div data-zylo-id="zylo-c14d64230e0b" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/card.tsx" data-zylo-loc="71:3-75:5"
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
