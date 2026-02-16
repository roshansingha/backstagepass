interface CommunitySectionProps {
  participantCount: number
  children: React.ReactNode
}

export function CommunitySection({ participantCount, children }: CommunitySectionProps) {
  return (
    <div
      className="rounded-[24px] border border-[#14003527] bg-surface p-3 dark:border-[#F1E6FD30] dark:bg-[#1A191B]"
    >
      <div className="px-3 pb-3 pt-4">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-base font-bold text-on-surface dark:text-white">See what others</h3>
          <img src="/profiles.svg" alt="Participants" className="h-8" />
          <h3 className="text-base font-bold text-on-surface dark:text-white">shared</h3>
        </div>
        <p className="mt-1 text-center text-sm text-[#211F26] dark:text-white">
          <span className="font-bold leading-4">{participantCount}+</span> <span className="font-normal leading-5">participants already completed</span>
        </p>
      </div>

      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}
