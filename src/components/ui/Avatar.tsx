import { cn } from '../../lib/cn'

interface AvatarProps {
  src: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  // Check if src is a single letter (initial)
  const isInitial = src.length === 1

  if (isInitial) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-full bg-[#B8860B] text-center font-medium text-white',
          sizeClasses[size],
          className
        )}
      >
        {src}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'rounded-full object-cover ring-2 ring-white/10',
        sizeClasses[size],
        className
      )}
    />
  )
}
