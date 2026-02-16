import { Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/cn'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={cn(
        'relative flex h-8 w-16 items-center rounded-full p-1 transition-colors duration-300',
        isDark ? 'bg-white/15' : 'bg-gray-200',
        className
      )}
    >
      <span
        className={cn(
          'flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300',
          isDark ? 'translate-x-8' : 'translate-x-0'
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-indigo-600" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        )}
      </span>
    </button>
  )
}
