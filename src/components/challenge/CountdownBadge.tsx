import { useCountdown } from '../../hooks/useCountdown'
import { cn } from '../../lib/cn'

interface CountdownBadgeProps {
  endTime?: string
  className?: string
}

export function CountdownBadge({ endTime, className }: CountdownBadgeProps) {
  const { formatted, isExpired } = useCountdown(endTime)

  if (isExpired) return null

  return (
    <span
      className={cn(
        'inline-flex h-5 w-[123px] items-center justify-center gap-1.5 rounded-full bg-[#E5484D] px-3 py-0.5 text-xs font-medium text-white',
        className
      )}
    >
      Ends in {formatted}
    </span>
  )
}
