import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive data-zylo-id="zylo-c510787fc834" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="13:3-20:5"
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

type CommandDialogProps = DialogProps

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog data-zylo-id="zylo-29174aa968ae" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="28:5-34:14" data-zylo-component="CommandDialog" {...props}>
      <DialogContent data-zylo-id="zylo-07b0ff1064a7" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="29:7-33:23" data-zylo-component="CommandDialog" className="overflow-hidden p-0 shadow-lg">
        <Command data-zylo-id="zylo-a2fb6eb2525f" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="30:9-32:19" data-zylo-component="CommandDialog" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div data-zylo-id="zylo-64770cb27111" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="42:3-52:9" className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search data-zylo-id="zylo-8ca0183a7572" data-zylo-kind="icon" data-zylo-cap="86" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="43:5-43:60" className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input data-zylo-id="zylo-6e96a6d8df8b" data-zylo-kind="input" data-zylo-cap="63" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="44:5-51:7"
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List data-zylo-id="zylo-fa5ca3568da6" data-zylo-kind="list" data-zylo-cap="59" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="61:3-65:5"
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty data-zylo-id="zylo-15e4df080ed5" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="74:3-78:5"
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group data-zylo-id="zylo-b0b15e0f569d" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="87:3-94:5"
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator data-zylo-id="zylo-8acafc22d2a8" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="103:3-107:5"
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item data-zylo-id="zylo-b85f8befa642" data-zylo-kind="container" data-zylo-cap="247" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="115:3-122:5"
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span data-zylo-id="zylo-9bd739c0a069" data-zylo-kind="text" data-zylo-cap="282" data-zylo-file="src/components/ui/command.tsx" data-zylo-loc="132:5-138:7" data-zylo-component="CommandShortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
