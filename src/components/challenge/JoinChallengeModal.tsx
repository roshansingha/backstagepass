import { Play, X } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { AvatarGroup } from '../ui/AvatarGroup'
import type { Challenge, Participant } from '../../types'

interface JoinChallengeModalProps {
  isOpen: boolean
  onClose: () => void
  challenge: Challenge
  participants: Participant[]
  onJoin: () => void
}

export function JoinChallengeModal({
  isOpen,
  onClose,
  challenge,
  participants,
  onJoin,
}: JoinChallengeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showClose={false}>
      <div className="w-[500px] rounded-3xl border-t border-gray-200 bg-gradient-to-b from-[#E8F4F8]/95 to-[#F8F8F8]/95 p-8 backdrop-blur-sm dark:border-transparent dark:from-[#3A3A3A]/95 dark:to-[#1A1A1A]/95">
        {/* Close button inside content */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:bg-gray-100"
        >
          <X className="h-6 w-6 text-[#211F26]" />
        </button>

        <div className="relative mb-5 overflow-hidden rounded-2xl">
          <img
            src="/9dayschallenge.jpg"
            alt={challenge.title}
            className="h-[280px] w-full object-cover"
          />
        </div>

        <h2 className="mb-3 text-2xl font-semibold leading-[30px] tracking-[-0.001em] text-[#211F26] dark:text-white">
          {challenge.title}
        </h2>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/content-container.svg" alt="Checkins" className="h-8 w-8" />
            <span className="text-sm text-[#211F26] dark:text-white">{challenge.checkinCount} checkins</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="/profiles.svg" alt="Participants" className="h-8" />
            <span className="text-sm text-[#211F26] dark:text-white">+{challenge.participantCount} participants joined</span>
          </div>
        </div>

        <h3 className="mb-3 text-lg font-semibold leading-[26px] tracking-[-0.0004em] text-[#211F26] dark:text-white">
          Description
        </h3>

        <p className="mb-6 text-sm leading-5 text-[#211F26] dark:text-white">
          {challenge.description}
        </p>

        <p className="mb-4 text-center text-sm leading-5 text-[#211F26] dark:text-white">
          Join the challenge and start your journey
        </p>

        <button
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#B8860B] px-5 transition-opacity hover:opacity-90"
          onClick={onJoin}
        >
          <span className="text-sm font-medium leading-5 text-white">
            Join Now
          </span>
        </button>
      </div>
    </Modal>
  )
}
