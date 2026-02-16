import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { cn } from '../../lib/cn'

interface SubmissionBannerProps {
  className?: string
}

const confettiPieces = [
  // Top left corner
  { left: '2%', top: '10%', color: '#10b981', rotate: -30, type: 'streamer' },
  { left: '8%', top: '20%', color: '#ef4444', rotate: 45, type: 'dot' },
  { left: '5%', top: '35%', color: '#b8860b', rotate: -15, type: 'squiggle' },
  { left: '12%', top: '15%', color: '#6c5ce7', rotate: 20, type: 'streamer' },
  { left: '3%', top: '45%', color: '#ec4899', rotate: -45, type: 'dot' },

  // Top right corner
  { right: '2%', top: '10%', color: '#6c5ce7', rotate: 30, type: 'squiggle' },
  { right: '8%', top: '20%', color: '#10b981', rotate: -20, type: 'streamer' },
  { right: '5%', top: '35%', color: '#ef4444', rotate: 50, type: 'dot' },
  { right: '12%', top: '15%', color: '#b8860b', rotate: -35, type: 'streamer' },
  { right: '3%', top: '45%', color: '#ec4899', rotate: 15, type: 'dot' },
]

export function SubmissionBanner({ className }: SubmissionBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null)
  const hasFired = useRef(false)

  useEffect(() => {
    if (hasFired.current || !bannerRef.current) return
    hasFired.current = true

    const rect = bannerRef.current.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#10b981', '#ef4444', '#b8860b', '#6c5ce7', '#ec4899', '#f59e0b'],
      ticks: 100,
      gravity: 1.2,
      scalar: 0.8,
      shapes: ['circle', 'square'],
      disableForReducedMotion: true,
    })
  }, [])

  return (
    <div
      ref={bannerRef}
      className={cn(
        'relative overflow-hidden rounded-t-[24px] bg-emerald-50 px-5 py-3.5',
        className
      )}
    >
      {confettiPieces.map((piece, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: piece.left,
            right: (piece as any).right,
            top: piece.top,
            transform: `rotate(${piece.rotate}deg)`,
          }}
        >
          {piece.type === 'streamer' && (
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path
                d="M2 1C2 1 10 3 8 8C6 13 2 15 2 15"
                stroke={piece.color}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          )}
          {piece.type === 'dot' && (
            <span
              className="block h-2 w-2 rounded-full"
              style={{ backgroundColor: piece.color }}
            />
          )}
          {piece.type === 'squiggle' && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path
                d="M1 5C3 1 5 9 7 5C9 1 11 9 13 5"
                stroke={piece.color}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          )}
        </span>
      ))}

      <p className="relative text-center text-sm font-semibold text-emerald-600">
        Your Submission
      </p>
    </div>
  )
}
