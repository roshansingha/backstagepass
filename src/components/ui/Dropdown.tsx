import { useState, useRef, useEffect } from 'react'
import { MoreVertical } from 'lucide-react'
import { cn } from '../../lib/cn'

interface DropdownItem {
  label: string
  onClick: () => void
  variant?: 'default' | 'danger'
}

interface DropdownProps {
  items: DropdownItem[]
  className?: string
}

export function Dropdown({ items, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface-secondary transition-colors hover:bg-surface-hover"
      >
        <MoreVertical className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-xl border border-outline bg-white py-1 shadow-lg">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.onClick()
                setIsOpen(false)
              }}
              className={cn(
                'flex w-full items-center px-4 py-2.5 text-sm transition-colors hover:bg-surface-hover',
                item.variant === 'danger' ? 'text-error' : 'text-on-surface'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
