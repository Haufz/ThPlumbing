import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-zylo-id="zylo-f081203f8300" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/skeleton.tsx" data-zylo-loc="8:5-11:7" data-zylo-component="Skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
