import { cn } from '../../lib/cn'

interface BadgeProps {
  variant?: 'default' | 'success' | 'accent' | 'warning' | 'streak' | 'pinned' | 'countdown' | 'active' | 'ended'
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  default: 'bg-surface-tertiary text-on-surface-secondary',
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  accent: 'bg-accent-light text-accent dark:bg-accent/15 dark:text-purple-300',
  warning: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  streak: 'bg-dark-purple text-white dark:bg-white/10 dark:text-on-surface',
  pinned: 'bg-gold/10 text-gold',
  countdown: 'bg-amber-100 text-amber-800',
  active: 'bg-emerald-100 text-emerald-700',
  ended: 'bg-gray-100 text-gray-600',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
