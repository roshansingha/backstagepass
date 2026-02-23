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
  const selectedIndex = days.findIndex((d) => d.day === selectedDay)

  const beforeSelected = days.slice(0, selectedIndex)
  const selectedDayData = days[selectedIndex]
  const afterSelected = days.slice(selectedIndex + 1)

  const renderDay = (day: ChallengeDay) => {
    const isSelected = day.day === selectedDay
    const isLocked = day.status === 'locked' && !isCreator
    const isCompleted = day.status === 'completed'

    return (
      <button
        key={day.id}
        onClick={() => !isLocked && onSelectDay(day.day)}
        disabled={isLocked}
        className={cn(
          'flex h-[56px] w-[250px] items-center justify-between rounded-[16px] py-4 pr-4 transition-colors duration-150',
          isSelected ? 'pl-3' : 'pl-[42px]',
          isLocked
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:bg-white/50 dark:hover:bg-white/10',
          isSelected ? 'bg-white dark:bg-white/20' : '',
        )}
        style={isSelected ? {
          borderTopLeftRadius: '32px',
          borderBottomLeftRadius: '32px',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        } : undefined}
      >
        <div className="flex items-center gap-2.5">
          {isSelected && (
            <Clock className="h-5 w-5 text-[#211F26] dark:text-white" />
          )}
          <span
            className={cn(
              'text-base font-medium',
              isSelected
                ? 'text-[#211F26] font-semibold dark:text-white'
                : isLocked
                  ? 'text-[#0400119C] dark:text-gray-500'
                  : 'text-[#0400119C] dark:text-gray-400'
            )}
          >
            Day - {day.day}
          </span>
        </div>

        {isCompleted ? (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </span>
        ) : isLocked ? (
          <Lock className="h-4 w-4 text-[#0400119C] dark:text-gray-500" />
        ) : null}
      </button>
    )
  }

  return (
    <div className="flex h-full flex-col bg-white dark:bg-transparent">
      {/* Top section — gradient, only right side rounded */}
      <div
        className="flex flex-col items-start dark:[background:transparent]"
        style={{
          background: 'linear-gradient(180deg, #EEEDF5 0%, #F0EFF6 100%)',
          borderBottomRightRadius: '24px',
        }}
      >
        <div className="shrink-0 h-14" />
        {beforeSelected.map(renderDay)}
      </div>

      {/* Selected day — gradient bg with white inner card */}
      {selectedDayData && (
        <div
          className="pl-2 dark:[background:transparent]"
          style={{
            background: '#EFEEF6',
          }}
        >
          {renderDay(selectedDayData)}
        </div>
      )}

      {/* Bottom section — gradient, only right side rounded */}
      <div
        className="flex flex-1 flex-col items-start dark:[background:transparent]"
        style={{
          background: 'linear-gradient(180deg, #F0EFF6 0%, rgba(240, 239, 246, 0) 100%)',
          borderTopRightRadius: '24px',
        }}
      >
        {afterSelected.map(renderDay)}
      </div>
    </div>
  )
}
