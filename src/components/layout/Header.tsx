import { Bell, Menu } from 'lucide-react'
import { Avatar } from '../ui/Avatar'
import { ThemeToggle } from '../ui/ThemeToggle'
import { cn } from '../../lib/cn'

interface HeaderProps {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
  onMenuToggle?: () => void
  variant?: 'default' | 'creator'
  className?: string
}

export function Header({ theme, onThemeToggle, onMenuToggle, variant = 'default', className }: HeaderProps) {
  const isCreator = variant === 'creator'

  return (
    <header
      className={cn(
        'sticky top-0 z-40 hidden h-[60px] items-center justify-between px-4 lg:flex lg:px-6',
        isCreator
          ? 'bg-transparent text-white'
          : 'border-b border-[#F2EFF3] bg-surface dark:border-[#232225]',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 text-[#B8860B]"
          >
            <circle cx="18" cy="18" r="4" fill="currentColor" />
            <path d="M11 25C8.2 22.2 8.2 13.8 11 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M25 11C27.8 13.8 27.8 22.2 25 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M7 29C2.3 24.3 2.3 11.7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M29 7C33.7 11.7 33.7 24.3 29 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <h1 className="font-brand text-[24px] font-bold leading-[1] tracking-[0px] text-on-surface">
            Backstage<span className="text-[#8D6500]">Pass</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />

        <div className="hidden items-center gap-1.5 rounded-full bg-[#30004010] px-3 py-1 sm:inline-flex">
          <img src="/fire.svg" alt="Fire" className="h-3.5 w-3.5" />
          <span className="text-sm font-medium leading-5 text-[#211F26] dark:text-white">30</span>
        </div>

        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#08003145]">
          <Bell className="h-3 w-3 text-[#211F26] dark:text-white" />
        </button>

        <Avatar
          src="/pappu.jpg"
          alt="Profile"
          size="sm"
          className="ml-1 cursor-pointer ring-0"
        />
      </div>
    </header>
  )
}
