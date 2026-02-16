import { cn } from '../../lib/cn'
import type { Reaction } from '../../types'

interface ReactionBarProps {
  reactions: Reaction[]
  onReaction?: (emoji: string) => void
  className?: string
}

export function ReactionBar({ reactions, onReaction, className }: ReactionBarProps) {
  return (
    <div className={cn('sticky top-6 flex flex-col items-center gap-3 pt-6', className)}>
      {reactions.map((reaction, i) => (
        <button
          key={i}
          onClick={() => onReaction?.(reaction.emoji)}
          className={cn(
            'flex h-8 w-8 items-center justify-center gap-1 rounded-full border px-2 text-lg transition-all hover:scale-110',
            reaction.isActive
              ? 'bg-gold/10 ring-2 ring-gold/30'
              : 'border-[#20003618] bg-[#30004010]'
          )}
          title={reaction.emoji}
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  )
}
