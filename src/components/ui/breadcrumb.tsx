import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav data-zylo-id="zylo-f8e82dd42d11" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="12:26-12:78" ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol data-zylo-id="zylo-e08a1ad0ba35" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="19:3-26:5"
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li data-zylo-id="zylo-2fcc49bcd342" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="34:3-38:5"
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp data-zylo-id="zylo-1cc9499d7f9a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="51:5-55:7"
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span data-zylo-id="zylo-c46296807197" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="64:3-71:5"
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li data-zylo-id="zylo-5e278dcc4d00" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="80:3-87:8" data-zylo-component="BreadcrumbSeparator"
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight data-zylo-id="zylo-71162933c432" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="86:18-86:34" data-zylo-component="BreadcrumbSeparator" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span data-zylo-id="zylo-5c54d17302d6" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="95:3-103:10" data-zylo-component="BreadcrumbEllipsis"
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal data-zylo-id="zylo-994e0d6b0f1a" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="101:5-101:43" data-zylo-component="BreadcrumbEllipsis" className="h-4 w-4" />
    <span data-zylo-id="zylo-6ea9bdf725f2" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/breadcrumb.tsx" data-zylo-loc="102:5-102:42" data-zylo-component="BreadcrumbEllipsis" className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
