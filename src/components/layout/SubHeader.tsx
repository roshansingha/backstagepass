import { ChevronLeft, Info } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Dropdown } from '../ui/Dropdown'
import { cn } from '../../lib/cn'
import type { ChallengeStatus } from '../../types'

interface SubHeaderProps {
  dayNumber: number
  totalDays: number
  challengeTitle: string
  variant?: 'subscriber' | 'creator'
  challengeStatus?: ChallengeStatus
  onBack?: () => void
  onInfoClick?: () => void
  onTogglePublish?: () => void
  onEdit?: () => void
  onDelete?: () => void
  onDuplicate?: () => void
  className?: string
}

export function SubHeader({
  dayNumber,
  totalDays,
  challengeTitle,
  variant = 'subscriber',
  challengeStatus = 'active',
  onBack,
  onInfoClick,
  onTogglePublish,
  onEdit,
  onDelete,
  onDuplicate,
  className,
}: SubHeaderProps) {
  const isCreator = variant === 'creator'

  const dropdownItems = []
  if (challengeStatus === 'active') {
    dropdownItems.push({ label: 'Unpublish', onClick: onTogglePublish ?? (() => {}) })
  } else if (challengeStatus === 'unpublished') {
    dropdownItems.push({ label: 'Publish', onClick: onTogglePublish ?? (() => {}) })
  }
  if (challengeStatus !== 'ended') {
    dropdownItems.push({ label: 'Edit', onClick: onEdit ?? (() => {}) })
  }
  dropdownItems.push({ label: 'Delete', onClick: onDelete ?? (() => {}), variant: 'danger' as const })
  dropdownItems.push({ label: 'Duplicate', onClick: onDuplicate ?? (() => {}) })

  return (
    <div
      className={cn(
        'sticky top-0 z-40 flex h-[56px] items-center justify-between border-b border-outline bg-surface px-4 lg:relative lg:z-auto lg:px-6',
        className
      )}
    >
      <div className="flex items-center gap-4">
        {onBack && (
          <>
            <button
              onClick={onBack}
              className="flex items-center gap-0.5 text-sm font-medium text-on-surface transition-colors hover:text-on-surface-secondary"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden lg:inline">Back</span>
            </button>
            <div className="hidden h-5 w-px bg-outline lg:block" />
          </>
        )}

        {isCreator ? (
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-on-surface">{challengeTitle}</span>
            <Badge variant={challengeStatus === 'active' ? 'active' : challengeStatus === 'ended' ? 'ended' : 'default'}>
              {challengeStatus === 'active' ? 'ACTIVE' : challengeStatus === 'ended' ? 'ENDED' : 'UNPUBLISHED'}
            </Badge>
          </div>
        ) : (
          <>
            <span className="text-sm font-semibold text-on-surface lg:hidden">
              {challengeTitle}
            </span>
            <span className="hidden text-sm font-semibold text-on-surface lg:inline">
              Day {dayNumber} of {totalDays}
            </span>
          </>
        )}
      </div>

      {isCreator ? (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onTogglePublish}
          >
            {challengeStatus === 'active' ? 'Unpublish' : 'Publish'}
          </Button>
          <Dropdown items={dropdownItems} />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-on-surface-secondary lg:inline">{challengeTitle}</span>
          {onInfoClick && (
            <button onClick={onInfoClick} className="text-on-surface-tertiary hover:text-on-surface-secondary">
              <Info className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
