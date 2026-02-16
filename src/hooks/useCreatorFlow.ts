import { useState, useCallback } from 'react'
import type { ChallengeStatus } from '../types'

export type CreatorScreen =
  | 'homepage'
  | 'create_challenge'
  | 'manage_challenge'
  | 'checkin_instructions'
  | 'challenge_details'

export function useCreatorFlow(initialScreen: CreatorScreen = 'homepage') {
  const [screen, setScreen] = useState<CreatorScreen>(initialScreen)
  const [selectedDay, setSelectedDay] = useState(1)
  const [challengeStatus, setChallengeStatus] = useState<ChallengeStatus>('active')
  const [showDetails, setShowDetails] = useState(false)
  const [createStep, setCreateStep] = useState(1)

  const openCreateChallenge = useCallback(() => {
    setCreateStep(1)
    setScreen('create_challenge')
  }, [])

  const nextCreateStep = useCallback(() => {
    setCreateStep((s) => s + 1)
  }, [])

  const openManageChallenge = useCallback(() => {
    setScreen('manage_challenge')
  }, [])

  const openCheckinInstructions = useCallback(() => {
    setScreen('checkin_instructions')
  }, [])

  const openChallengeDetails = useCallback(() => {
    setShowDetails(true)
  }, [])

  const closeChallengeDetails = useCallback(() => {
    setShowDetails(false)
  }, [])

  const selectDay = useCallback((day: number) => {
    setSelectedDay(day)
  }, [])

  const goHome = useCallback(() => {
    setScreen('homepage')
    setShowDetails(false)
  }, [])

  const togglePublish = useCallback(() => {
    setChallengeStatus((s) => (s === 'active' ? 'unpublished' : 'active'))
  }, [])

  return {
    screen,
    setScreen,
    selectedDay,
    selectDay,
    challengeStatus,
    setChallengeStatus,
    showDetails,
    createStep,
    setCreateStep,
    openCreateChallenge,
    nextCreateStep,
    openManageChallenge,
    openCheckinInstructions,
    openChallengeDetails,
    closeChallengeDetails,
    goHome,
    togglePublish,
  }
}
