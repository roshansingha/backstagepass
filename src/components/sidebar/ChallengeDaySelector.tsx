import { Check, Lock, Clock } from 'lucide-react'
import { cn } from '../../lib/cn'
import type { ChallengeDay } from '../../types'

interface ChallengeDaySelectorProps {
  days: ChallengeDay[]
  selectedDay: number
  onSelectDay: (day: number) => void
  variant?: 'subscriber' | 'creator'
}

export function ChallengeDaySelector({
  days,
  selectedDay,
  onSelectDay,
  variant = 'subscriber',
}: ChallengeDaySelectorProps) {
  const isCreator = variant === 'creator'

  return (
    <div
      className="flex flex-col gap-2 pr-0 pl-4 py-4 [background:linear-gradient(360deg,rgba(255,255,255,0)_0%,#F7F6FC_100%)] dark:[background:transparent]"
    >
      {days.map((day) => {
        const isSelected = day.day === selectedDay
        const isLocked = day.status === 'locked' && !isCreator
        const isCompleted = day.status === 'completed'

        return (
          <button
            key={day.id}
            onClick={() => !isLocked && onSelectDay(day.day)}
            disabled={isLocked}
            className={cn(
              'flex items-center justify-between px-4 py-3 transition-colors duration-150',
              isLocked
                ? 'cursor-not-allowed'
                : 'cursor-pointer hover:bg-white/50 dark:hover:bg-white/10',
              isSelected ? 'bg-white shadow-sm dark:bg-white/20' : 'rounded-2xl',
            )}
            style={isSelected ? {
              borderTopLeftRadius: '24px',
              borderBottomLeftRadius: '24px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
            } : undefined}
          >
            {/* Day label with icon for selected */}
            <div className="flex items-center gap-2">
              {isSelected && (
                <Clock className="h-5 w-5 text-[#211F26] dark:text-white" />
              )}
              <span
                className={cn(
                  'text-base font-medium',
                  isSelected
                    ? 'text-[#211F26] dark:text-white'
                    : isLocked
                      ? 'text-[#0400119C] dark:text-gray-500'
                      : 'text-[#0400119C] dark:text-gray-400'
                )}
              >
                Day - {day.day}
              </span>
            </div>

            {/* Right icon */}
            {isCompleted ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
            ) : isLocked ? (
              <Lock className="h-4 w-4 text-[#0400119C] dark:text-gray-500" />
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
