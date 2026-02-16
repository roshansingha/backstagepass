import { useState, useEffect } from 'react'

interface CountdownResult {
  hours: number
  minutes: number
  isExpired: boolean
  formatted: string
}

export function useCountdown(endTime?: string): CountdownResult {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60_000)
    return () => clearInterval(interval)
  }, [])

  if (!endTime) {
    return { hours: 0, minutes: 0, isExpired: true, formatted: '0h 0m' }
  }

  const diff = new Date(endTime).getTime() - now
  if (diff <= 0) {
    return { hours: 0, minutes: 0, isExpired: true, formatted: '0h 0m' }
  }

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return {
    hours,
    minutes,
    isExpired: false,
    formatted: `${hours}h ${minutes}m`,
  }
}
