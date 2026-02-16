import { CountdownBadge } from './CountdownBadge'

interface CheckinHeaderProps {
  dayNumber?: number
  endTime?: string
}

export function CheckinHeader({ endTime }: CheckinHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <h2 className="text-lg font-semibold leading-[26px] tracking-[-0.0004em] text-[#211F26] dark:text-white">
        Today's check-in
      </h2>
      <CountdownBadge endTime={endTime} />
    </div>
  )
}
