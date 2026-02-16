import { cn } from '../../lib/cn'
import type { ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  label: string
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-10 w-10',
}

export function IconButton({
  size = 'md',
  label,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center rounded-lg text-on-surface-secondary transition-all duration-150 ease-in-out',
        'hover:bg-surface-tertiary hover:text-on-surface',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'active:scale-95',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
