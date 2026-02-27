import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup data-zylo-id="zylo-04ca0f1119c3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/resizable.tsx" data-zylo-loc="10:3-16:5" data-zylo-component="ResizablePanelGroup"
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle data-zylo-id="zylo-1e3e7d0c8060" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/resizable.tsx" data-zylo-loc="28:3-40:42" data-zylo-component="ResizableHandle"
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div data-zylo-id="zylo-0645597219c4" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/resizable.tsx" data-zylo-loc="36:7-38:13" data-zylo-component="ResizableHandle" className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical data-zylo-id="zylo-587ee5038b96" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/resizable.tsx" data-zylo-loc="37:9-37:49" data-zylo-component="ResizableHandle" className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
