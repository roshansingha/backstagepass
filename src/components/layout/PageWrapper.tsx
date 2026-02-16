import { cn } from '../../lib/cn'

interface PageWrapperProps {
  sidebar: React.ReactNode
  children: React.ReactNode
  rightBar?: React.ReactNode
  className?: string
}

export function PageWrapper({
  sidebar,
  children,
  rightBar,
  className,
}: PageWrapperProps) {
  return (
    <div className={cn('flex h-[calc(100vh-116px)]', className)}>
      <aside className="hidden w-[258px] shrink-0 lg:block">
        {sidebar}
      </aside>

      <main className="flex-1 overflow-y-auto bg-surface-secondary dark:bg-[#1A191B]">
        <div className="mx-auto flex max-w-[640px] gap-4 px-4 py-6 lg:px-0">
          <div className="flex-1">{children}</div>
        </div>
      </main>

      {rightBar && (
        <aside className="hidden w-[60px] shrink-0 lg:block">
          {rightBar}
        </aside>
      )}
    </div>
  )
}
