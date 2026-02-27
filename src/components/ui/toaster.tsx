"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider data-zylo-id="zylo-455b02bcc97e" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/toaster.tsx" data-zylo-loc="17:5-33:21" data-zylo-component="Toaster">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast data-zylo-id="zylo-a2241b59a699" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/toaster.tsx" data-zylo-loc="20:11-29:19" data-zylo-component="Toaster" key={id} {...props}>
            <div data-zylo-id="zylo-26b5e1dcc70c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/toaster.tsx" data-zylo-loc="21:13-26:19" data-zylo-component="Toaster" className="grid gap-1">
              {title && <ToastTitle data-zylo-id="zylo-e793448515fa" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/toaster.tsx" data-zylo-loc="22:25-22:57" data-zylo-component="Toaster">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-zylo-id="zylo-9918912788e3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/toaster.tsx" data-zylo-loc="24:17-24:67" data-zylo-component="Toaster">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-zylo-id="zylo-dd7cef42ae2c" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/toaster.tsx" data-zylo-loc="28:13-28:27" data-zylo-component="Toaster" />
          </Toast>
        )
      })}
      <ToastViewport data-zylo-id="zylo-0483841a9855" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/toaster.tsx" data-zylo-loc="32:7-32:24" data-zylo-component="Toaster" />
    </ToastProvider>
  )
}
