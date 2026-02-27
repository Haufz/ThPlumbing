import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput data-zylo-id="zylo-7a76a5a6fa31" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/components/ui/input-otp.tsx" data-zylo-loc="11:3-19:5"
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div data-zylo-id="zylo-33d26e01ad24" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/input-otp.tsx" data-zylo-loc="27:3-27:78" ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div data-zylo-id="zylo-7d0c3ac39fd6" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/input-otp.tsx" data-zylo-loc="39:5-54:11"
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div data-zylo-id="zylo-b25807d4b8ab" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/input-otp.tsx" data-zylo-loc="50:9-52:15" className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div data-zylo-id="zylo-78f1d05b7ee3" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/input-otp.tsx" data-zylo-loc="51:11-51:87" className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div data-zylo-id="zylo-6a52522bd61f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/input-otp.tsx" data-zylo-loc="63:3-65:9" ref={ref} role="separator" {...props}>
    <Dot data-zylo-id="zylo-4d965e7ba687" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/input-otp.tsx" data-zylo-loc="64:5-64:12" />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
