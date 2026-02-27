/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider data-zylo-id="zylo-4cb311ba63d3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="49:5-64:29" value={{ config }}>
      <div data-zylo-id="zylo-20bf477e168f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="50:7-63:13"
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle data-zylo-id="zylo-a16ed5e32c85" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="59:9-59:52" id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer data-zylo-id="zylo-a0f885660027" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="60:9-62:49">
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style data-zylo-id="zylo-788ab4de941b" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="79:5-98:7" data-zylo-component="ChartStyle"
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

interface ChartTooltipContentProps extends React.ComponentProps<"div"> {
  active?: boolean
  payload?: any[]
  label?: any
  labelFormatter?: (label: any, payload: any[]) => React.ReactNode
  labelClassName?: string
  formatter?: (value: any, name: any, item: any, index: number, payload: any[]) => React.ReactNode
  color?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot" | "dashed"
  nameKey?: string
  labelKey?: string
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload = [],
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div data-zylo-id="zylo-449e042b1b4e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="158:11-160:17" className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div data-zylo-id="zylo-469e24a642d3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="168:14-168:78" className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div data-zylo-id="zylo-114c96bc6963" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="186:7-260:13"
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div data-zylo-id="zylo-086be6a5fe22" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="194:9-259:15" className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload?.fill || item.color

            return (
              <div data-zylo-id="zylo-5bf969e8d392" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="201:15-256:21"
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon data-zylo-id="zylo-09511ea5e922" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="213:23-213:42" />
                    ) : (
                      !hideIndicator && (
                        <div data-zylo-id="zylo-16e3a6115fcc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="216:25-233:27"
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div data-zylo-id="zylo-68e8488bc93a" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="236:21-253:27"
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div data-zylo-id="zylo-8070fe85484d" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="242:23-247:29" className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span data-zylo-id="zylo-22db46404ac6" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="244:25-246:32" className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span data-zylo-id="zylo-b5e3e3f14a9f" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="249:25-251:32" className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: any[]
    verticalAlign?: "top" | "bottom"
    hideIcon?: boolean
    nameKey?: string
  }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div data-zylo-id="zylo-967abc2a2785" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="288:7-321:13"
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div data-zylo-id="zylo-dd713221afdc" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="301:13-318:19"
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon data-zylo-id="zylo-61f118b3ad1e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="308:17-308:36" />
              ) : (
                <div data-zylo-id="zylo-90528e7c30e7" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/chart.tsx" data-zylo-loc="310:17-315:19"
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
