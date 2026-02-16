import { Check, Lock } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { cn } from '../../lib/cn'
import type { ChallengeDay } from '../../types'

interface MobileDaySelectorProps {
  days: ChallengeDay[]
  selectedDay: number
  onSelectDay: (day: number) => void
}

export function MobileDaySelector({
  days,
  selectedDay,
  onSelectDay,
}: MobileDaySelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const selectedRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (selectedRef.current && scrollRef.current) {
      const container = scrollRef.current
      const selected = selectedRef.current
      const containerRect = container.getBoundingClientRect()
      const selectedRect = selected.getBoundingClientRect()
      const scrollLeft =
        selected.offsetLeft - containerRect.width / 2 + selectedRect.width / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [selectedDay])

  return (
    <div className="bg-surface lg:hidden">
      <div
        ref={scrollRef}
        className="flex items-end justify-center gap-0 overflow-x-auto px-4 pt-3 pb-2 scrollbar-hidden"
      >
        {days.map((day) => {
          const isSelected = day.day === selectedDay
          const isLocked = day.status === 'locked'
          const isCompleted = day.status === 'completed'

          return (
            <button
              key={day.id}
              ref={isSelected ? selectedRef : undefined}
              onClick={() => !isLocked && onSelectDay(day.day)}
              disabled={isLocked}
              className={cn(
                'flex shrink-0 flex-col items-center px-4 transition-colors',
                isLocked && 'cursor-not-allowed'
              )}
            >
              {isSelected ? (
                <>
                  <span className="text-xs font-semibold text-on-surface">
                    Day
                  </span>
                  <span className="mt-0.5 text-2xl font-bold leading-tight text-on-surface">
                    {day.day}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={cn(
                      'text-xs whitespace-nowrap',
                      isCompleted
                        ? 'font-medium text-on-surface'
                        : 'font-medium text-on-surface-tertiary'
                    )}
                  >
                    Day {day.day}
                  </span>
                  <div className="mt-1 flex h-6 w-6 items-center justify-center">
                    {isCompleted ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                    ) : isLocked ? (
                      <Lock className="h-3.5 w-3.5 text-on-surface-tertiary" />
                    ) : (
                      <span className="text-xs font-medium text-on-surface-secondary">
                        {day.day}
                      </span>
                    )}
                  </div>
                </>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
