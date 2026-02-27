"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider data-zylo-id="zylo-31d26ce5386f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/theme-provider.tsx" data-zylo-loc="10:10-10:72" data-zylo-component="ThemeProvider" {...props}>{children}</NextThemesProvider>
}