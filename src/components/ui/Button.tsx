import { cn } from '../../lib/cn'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const variantClasses = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-sm active:scale-[0.98]',
  secondary:
    'bg-surface-tertiary text-on-surface hover:bg-surface-hover',
  ghost:
    'text-on-surface-secondary hover:bg-surface-tertiary hover:text-on-surface',
  gold:
    'bg-gold text-white hover:bg-gold-hover shadow-sm active:scale-[0.98]',
  outline:
    'border border-outline text-on-surface hover:bg-surface-hover active:scale-[0.98]',
}

const sizeClasses = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-11 px-5 text-base gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
