"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider data-zylo-id="zylo-61d23baca795" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/query-provider.tsx" data-zylo-loc="10:5-12:27" data-zylo-component="QueryProvider" client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}