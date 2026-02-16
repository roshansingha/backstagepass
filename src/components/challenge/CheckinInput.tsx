import { Avatar } from '../ui/Avatar'

interface CheckinInputProps {
  userAvatar: string
  userName: string
  onClick?: () => void
}

export function CheckinInput({ userAvatar, userName, onClick }: CheckinInputProps) {
  return (
    <div className="relative rounded-full p-[2px] bg-[linear-gradient(90.51deg,#B8860B_1.44%,#FFF0D1_97.91%)] dark:bg-[linear-gradient(90.51deg,#B8860B_1.44%,#282115_97.91%)]">
      <button
        onClick={onClick}
        className="flex w-full items-center gap-3 rounded-full bg-surface-secondary p-3 pl-3 text-left transition-colors hover:opacity-90 dark:bg-[#1A191B]"
      >
        <Avatar src={userAvatar} alt={userName} size="sm" className="ring-0" />
        <span className="text-[13px] font-normal leading-5 text-gray-500 dark:text-gray-400">
          Share what you completed today?
        </span>
      </button>
    </div>
  )
}
