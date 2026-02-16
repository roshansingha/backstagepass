import { useState, useCallback } from 'react'

export type SubscriberScreen =
  | 'join_modal'
  | 'pre_upload'
  | 'checkin_upload'
  | 'post_upload'
  | 'description_panel'

export function useChallengeFlow(initialScreen: SubscriberScreen = 'join_modal') {
  const [screen, setScreen] = useState<SubscriberScreen>(initialScreen)
  const [selectedDay, setSelectedDay] = useState(1)
  const [showDescription, setShowDescription] = useState(false)

  const joinChallenge = useCallback(() => {
    setScreen('pre_upload')
  }, [])

  const openCheckinUpload = useCallback(() => {
    setScreen('checkin_upload')
  }, [])

  const closeCheckinUpload = useCallback(() => {
    setScreen('pre_upload')
  }, [])

  const submitCheckin = useCallback(() => {
    setScreen('post_upload')
  }, [])

  const openDescription = useCallback(() => {
    setShowDescription(true)
  }, [])

  const closeDescription = useCallback(() => {
    setShowDescription(false)
  }, [])

  const selectDay = useCallback((day: number) => {
    setSelectedDay(day)
  }, [])

  const reset = useCallback(() => {
    setScreen('join_modal')
    setSelectedDay(1)
    setShowDescription(false)
  }, [])

  return {
    screen,
    setScreen,
    selectedDay,
    selectDay,
    showDescription,
    joinChallenge,
    openCheckinUpload,
    closeCheckinUpload,
    submitCheckin,
    openDescription,
    closeDescription,
    reset,
  }
}
