import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav data-zylo-id="zylo-e458fe374cd3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="8:3-13:5" data-zylo-component="Pagination"
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul data-zylo-id="zylo-6d8c5561bc84" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="21:3-25:5"
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li data-zylo-id="zylo-7528ed00f405" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="33:3-33:60" ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a data-zylo-id="zylo-ded14ddfcf9d" data-zylo-kind="link" data-zylo-cap="26" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="48:3-58:5" data-zylo-component="PaginationLink"
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink data-zylo-id="zylo-2de10338fa4a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="66:3-74:20" data-zylo-component="PaginationPrevious"
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft data-zylo-id="zylo-91beaa1bbfae" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="72:5-72:40" data-zylo-component="PaginationPrevious" className="h-4 w-4" />
    <span data-zylo-id="zylo-851f5f579399" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="73:5-73:26" data-zylo-component="PaginationPrevious">Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink data-zylo-id="zylo-9306c7888767" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="82:3-90:20" data-zylo-component="PaginationNext"
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span data-zylo-id="zylo-5cda944a9e88" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="88:5-88:22" data-zylo-component="PaginationNext">Next</span>
    <ChevronRight data-zylo-id="zylo-e83db77fafc0" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="89:5-89:41" data-zylo-component="PaginationNext" className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span data-zylo-id="zylo-6b350e00f3bf" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="98:3-105:10" data-zylo-component="PaginationEllipsis"
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal data-zylo-id="zylo-e8a1f49653ec" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="103:5-103:43" data-zylo-component="PaginationEllipsis" className="h-4 w-4" />
    <span data-zylo-id="zylo-c96ad3d49f7a" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/pagination.tsx" data-zylo-loc="104:5-104:48" data-zylo-component="PaginationEllipsis" className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
