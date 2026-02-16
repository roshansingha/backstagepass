import { useCallback } from 'react'
import { Header } from './components/layout/Header'
import { SubHeader } from './components/layout/SubHeader'
import { Sidebar } from './components/layout/Sidebar'
import { PageWrapper } from './components/layout/PageWrapper'
import { JoinChallengeModal } from './components/challenge/JoinChallengeModal'
import { CheckinHeader } from './components/challenge/CheckinHeader'
import { CheckinInput } from './components/challenge/CheckinInput'
import { CommunitySection } from './components/challenge/CommunitySection'
import { PinnedPost } from './components/challenge/PinnedPost'
import { ChallengePostCard } from './components/challenge/ChallengePostCard'
import { ReactionBar } from './components/challenge/ReactionBar'
import { SubmissionBanner } from './components/challenge/SubmissionBanner'
import { ChallengeDescriptionPanel } from './components/challenge/ChallengeDescriptionPanel'
import { CheckinUploadModal } from './components/challenge/CheckinUploadModal'
import { MobileDaySelector } from './components/challenge/MobileDaySelector'
import { useTheme } from './hooks/useTheme'
import { useChallengeFlow } from './hooks/useChallengeFlow'
import {
  fitnessChallenge,
  challengeDays,
  challengeDaysAfterUpload,
  participants,
  defaultReactions,
  pinnedCreatorPost,
  communityPosts,
  userSubmission,
  subscriber,
} from './data/mockData'

export default function App() {
  const { theme, toggle } = useTheme()
  const subscriberFlow = useChallengeFlow('join_modal')

  const activeDays = subscriberFlow.screen === 'post_upload' ? challengeDaysAfterUpload : challengeDays
  const activeDay = activeDays.find((d) => d.day === subscriberFlow.selectedDay)

  const handleReaction = useCallback((emoji: string) => {
    console.log('Reacted with', emoji)
  }, [])

  return (
    <div className="min-h-screen bg-surface-secondary dark:bg-[#1A191B]">
      <Header
        theme={theme}
        onThemeToggle={toggle}
        onMenuToggle={() => { }}
      />

      <SubHeader
        dayNumber={subscriberFlow.selectedDay}
        totalDays={fitnessChallenge.totalDays}
        challengeTitle={fitnessChallenge.title}
        onBack={() => { }}
        onInfoClick={() => subscriberFlow.openDescription()}
      />

      <MobileDaySelector
        days={activeDays}
        selectedDay={subscriberFlow.selectedDay}
        onSelectDay={subscriberFlow.selectDay}
      />

      <PageWrapper
        sidebar={
          <Sidebar
            days={activeDays}
            selectedDay={subscriberFlow.selectedDay}
            onSelectDay={subscriberFlow.selectDay}
            variant="subscriber"
          />
        }
      >
        <div className="space-y-5 pb-20 lg:pb-8">
          {(subscriberFlow.screen === 'pre_upload' || subscriberFlow.screen === 'checkin_upload') && (
            <>
              <CheckinHeader dayNumber={subscriberFlow.selectedDay} endTime={activeDay?.countdownEndTime} />
              <CheckinInput
                userAvatar={subscriber.avatar}
                userName={subscriber.name}
                onClick={() => subscriberFlow.openCheckinUpload()}
              />
              <CommunitySection
                participantCount={85}
                avatars={participants.slice(0, 3).map((p) => ({ src: p.avatar, alt: p.name }))}
              >
                <PinnedPost post={pinnedCreatorPost} />
                {communityPosts.map((post) => (
                  <ChallengePostCard
                    key={post.id}
                    post={post}
                    onReaction={handleReaction}
                  />
                ))}
              </CommunitySection>
            </>
          )}

          {subscriberFlow.screen === 'post_upload' && (
            <>
              <CheckinHeader dayNumber={subscriberFlow.selectedDay} endTime={activeDay?.countdownEndTime} />
              <div className="overflow-hidden rounded-[24px] border border-card-border bg-surface">
                <SubmissionBanner />
                <ChallengePostCard post={userSubmission} onReaction={handleReaction} />
              </div>
              <CommunitySection
                participantCount={85}
                avatars={participants.slice(0, 3).map((p) => ({ src: p.avatar, alt: p.name }))}
              >
                <PinnedPost post={pinnedCreatorPost} />
                {communityPosts.map((post) => (
                  <ChallengePostCard
                    key={post.id}
                    post={post}
                    onReaction={handleReaction}
                  />
                ))}
              </CommunitySection>
            </>
          )}
        </div>
      </PageWrapper>

      <JoinChallengeModal
        isOpen={subscriberFlow.screen === 'join_modal'}
        onClose={() => subscriberFlow.joinChallenge()}
        challenge={fitnessChallenge}
        participants={participants}
        onJoin={() => subscriberFlow.joinChallenge()}
      />

      <CheckinUploadModal
        isOpen={subscriberFlow.screen === 'checkin_upload'}
        onClose={() => subscriberFlow.closeCheckinUpload()}
        onSubmit={() => subscriberFlow.submitCheckin()}
        userAvatar={subscriber.avatar}
        userName={subscriber.name}
      />

      <ChallengeDescriptionPanel
        isOpen={subscriberFlow.showDescription}
        onClose={() => subscriberFlow.closeDescription()}
        challenge={fitnessChallenge}
        participants={participants}
      />
    </div>
  )
}
