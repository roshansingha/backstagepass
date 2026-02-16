import { cn } from '../../lib/cn'

interface AvatarGroupProps {
  avatars: { src: string; alt: string }[]
  max?: number
  size?: 'xs' | 'sm' | 'md'
  className?: string
}

const sizeClasses = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
}

export function AvatarGroup({ avatars, max = 4, size = 'sm', className }: AvatarGroupProps) {
  const visible = avatars.slice(0, max)
  const remaining = avatars.length - max

  return (
    <div className={cn('flex -space-x-2', className)}>
      {visible.map((avatar, i) => (
        <img
          key={i}
          src={avatar.src}
          alt={avatar.alt}
          className={cn(
            'rounded-full border-2 border-surface object-cover',
            sizeClasses[size]
          )}
        />
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            'flex items-center justify-center rounded-full border-2 border-surface bg-surface-tertiary font-medium text-on-surface-secondary',
            sizeClasses[size]
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  )
}
