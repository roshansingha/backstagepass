import { Play } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { AvatarGroup } from '../ui/AvatarGroup'
import type { Challenge, Participant } from '../../types'

interface ChallengeDescriptionPanelProps {
  isOpen: boolean
  onClose: () => void
  challenge: Challenge
  participants?: Participant[]
}

function ProgressRing({ percentage, color, size = 48 }: { percentage: number; color: string; size?: number }) {
  const strokeWidth = 3
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="absolute text-[11px] font-semibold text-white">
        {percentage}%
      </span>
    </div>
  )
}

function AudioWaveform() {
  const bars = [3, 8, 5, 12, 7, 15, 4, 10, 6, 13, 8, 5, 11, 7, 14, 3, 9, 6, 12, 8, 5, 15, 4, 10, 7, 13, 5, 11, 8, 6, 14, 3, 9, 7, 12, 5, 10, 8, 15, 4]
  return (
    <div className="flex items-end justify-center gap-[2px]">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[2px] rounded-full bg-white/60"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  )
}

export function ChallengeDescriptionPanel({
  isOpen,
  onClose,
  challenge,
  participants,
}: ChallengeDescriptionPanelProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="slide-right" showClose={false}>
      <div className="p-6">
        {/* Header with close icon */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold leading-[30px] tracking-[-0.001em] text-[#211F26] dark:text-white">
            Challenge Description
          </h1>
        </div>

        {/* Image with overlays */}
        <div className="relative overflow-hidden rounded-3xl" style={{ height: '282px' }}>
          <img
            src="/9dayschallenge.jpg"
            alt={challenge.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <AudioWaveform />
          </div>
        </div>

        {/* Challenge title */}
        <h2 className="mt-6 text-2xl font-semibold leading-[30px] tracking-[-0.001em] text-[#211F26] dark:text-white">
          {challenge.title}
        </h2>

        {/* Stats cards */}
        <div className="mt-4 flex gap-4">
          <div className="flex h-[90px] flex-1 flex-col justify-center gap-2 rounded-3xl border border-[#EAE7EC] bg-[#F2EFF3] p-4 dark:border-[#3C393F] dark:bg-[#232225]">
            <span className="text-sm leading-5 text-[#211F26] dark:text-white">
              Total Checkins
            </span>
            <span className="text-2xl font-semibold leading-[30px] tracking-[-0.001em] text-[#211F26] dark:text-white">
              {challenge.checkinCount}
            </span>
          </div>
          <div className="flex h-[90px] flex-1 flex-col justify-center gap-2 rounded-3xl border border-[#EAE7EC] bg-[#F2EFF3] p-4 dark:border-[#3C393F] dark:bg-[#232225]">
            <span className="text-sm leading-5 text-[#211F26] dark:text-white">
              Participants Joined
            </span>
            <span className="text-2xl font-semibold leading-[30px] tracking-[-0.001em] text-[#211F26] dark:text-white">
              {challenge.participantCount}
            </span>
          </div>
        </div>

        {/* Description section */}
        <h3 className="mt-6 text-sm font-medium leading-5 text-[#211F26] dark:text-white">
          Description
        </h3>

        <p className="mt-2 text-base leading-6 text-[#211F26] dark:text-white">
          {challenge.description}
        </p>
      </div>

      {/* Got it button at bottom */}
      <div className="p-6 pt-12">
        <button
          onClick={onClose}
          className="flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#211F26] px-5 text-base font-medium leading-6 text-[#FDFCFD] dark:bg-white dark:text-[#211F26]"
        >
          Got it
        </button>
      </div>
    </Modal>
  )
}
