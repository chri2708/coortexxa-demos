import type { ComponentProps } from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from './lib/cn'

export const Dropdown = DropdownPrimitive.Root
export const DropdownTrigger = DropdownPrimitive.Trigger

export function DropdownContent({
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Content>) {
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[180px] rounded-[var(--radius-sm)] border border-border bg-surface p-1 shadow-[var(--shadow-lg)]',
          className,
        )}
        {...props}
      />
    </DropdownPrimitive.Portal>
  )
}

export function DropdownItem({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Item>) {
  return (
    <DropdownPrimitive.Item
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-[calc(var(--radius-sm)-2px)] px-2.5 py-2 text-sm text-ink-700 outline-none transition-colors',
        'data-[highlighted]:bg-surface-hover data-[highlighted]:text-ink-900',
        className,
      )}
      {...props}
    />
  )
}

export function DropdownSeparator({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Separator>) {
  return <DropdownPrimitive.Separator className={cn('my-1 h-px bg-border', className)} {...props} />
}
