import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div data-zylo-id="zylo-719002fd4c90" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="9:3-15:9" className="relative w-full overflow-auto">
    <table data-zylo-id="zylo-4b6cafa201db" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="10:5-14:7"
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead data-zylo-id="zylo-d81dfe7eb0c5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="23:3-23:78" ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody data-zylo-id="zylo-f70ab1582d5f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="31:3-35:5"
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot data-zylo-id="zylo-feeca9b6c730" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="43:3-50:5"
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr data-zylo-id="zylo-c4fe8a5dbfdc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="58:3-65:5"
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th data-zylo-id="zylo-21cc597983c9" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="73:3-80:5"
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td data-zylo-id="zylo-56618ac72f18" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="88:3-92:5"
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption data-zylo-id="zylo-87c219aa2654" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/table.tsx" data-zylo-loc="100:3-104:5"
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
