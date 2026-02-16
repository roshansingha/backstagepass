import { ChallengeDaySelector } from '../sidebar/ChallengeDaySelector'
import { cn } from '../../lib/cn'
import type { ChallengeDay } from '../../types'

interface SidebarProps {
  days: ChallengeDay[]
  selectedDay: number
  onSelectDay: (day: number) => void
  variant?: 'subscriber' | 'creator'
  className?: string
}

export function Sidebar({
  days,
  selectedDay,
  onSelectDay,
  variant = 'subscriber',
}: SidebarProps) {
  return (
    <div
      className={cn(
        'flex h-full w-[258px] flex-col overflow-hidden border-r border-sidebar-border',
        'bg-sidebar-bg text-sidebar-text'
      )}
    >
      <ChallengeDaySelector
        days={days}
        selectedDay={selectedDay}
        onSelectDay={onSelectDay}
        variant={variant}
      />
    </div>
  )
}
