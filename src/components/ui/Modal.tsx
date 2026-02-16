import { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  variant?: 'center' | 'slide-right'
  className?: string
  showClose?: boolean
}

export function Modal({
  isOpen,
  onClose,
  children,
  variant = 'center',
  className,
  showClose = true,
}: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex',
        variant === 'center' && 'items-center justify-center max-sm:items-end'
      )}
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      />

      <div
        className={cn(
          'relative z-10',
          variant === 'center' && 'mx-4 w-full max-w-[540px] sm:mx-0',
          variant === 'center' && 'max-sm:fixed max-sm:inset-x-0 max-sm:bottom-0 max-sm:mx-0 max-sm:max-w-full',
          variant === 'slide-right' && 'fixed right-0 top-0 h-full w-full max-w-[600px]',
          variant === 'slide-right' && 'max-sm:max-w-full',
          className
        )}
      >
        {variant === 'center' && (
          <div className="flex justify-center pb-2 sm:hidden">
            <div className="h-1 w-10 rounded-full bg-white/60" />
          </div>
        )}

        <div
          className={cn(
            'relative overflow-y-auto bg-surface',
            variant === 'center' && 'rounded-[24px] max-sm:rounded-b-none max-sm:rounded-t-[20px] max-sm:max-h-[85vh]',
            variant === 'slide-right' && 'h-full'
          )}
        >
          {showClose && (
            <button
              onClick={onClose}
              className={cn(
                'absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-opacity hover:bg-white',
                variant === 'center' && 'max-sm:hidden'
              )}
            >
              <X className="h-6 w-6 text-[#211F26]" />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
