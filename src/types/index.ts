export interface User {
  id: string
  name: string
  avatar: string
  role?: 'creator' | 'subscriber'
  followerCount?: number
  subscriberCount?: number
  postCount?: number
}

export interface PostMedia {
  type: 'image' | 'video'
  url: string
  alt?: string
}

export interface Post {
  id: string
  author: User
  content: string
  media?: PostMedia
  timestamp: string
  likes: number
  comments: number
  isLiked: boolean
  isSubscriberPost?: boolean
}

export interface DayItem {
  id: string
  day: number
  title: string
  isLocked: boolean
  isCompleted: boolean
  description?: string
}

export interface SidebarProps {
  days: DayItem[]
  selectedDay: number
  onSelectDay: (day: number) => void
}

export interface FeedPostCardProps {
  post: Post
  onLike?: (postId: string) => void
  onComment?: (postId: string) => void
  onShare?: (postId: string) => void
}

export interface SubscriberPostCardProps {
  post: Post
  subscriberName: string
  onLike?: (postId: string) => void
}

export type ChallengeStatus = 'not_joined' | 'active' | 'completed' | 'ended' | 'unpublished'
export type DayStatus = 'locked' | 'active' | 'completed' | 'missed'

export interface Challenge {
  id: string
  title: string
  description: string
  image: string
  totalDays: number
  participantCount: number
  checkinCount: number
  status: ChallengeStatus
  linkedPasses?: Pass[]
}

export interface ChallengeDay {
  id: string
  day: number
  title: string
  status: DayStatus
  checkinPrompt?: string
  countdownEndTime?: string
}

export interface CheckinItem {
  icon: string
  color: string
  text: string
}

export interface Reaction {
  emoji: string
  count: number
  isActive: boolean
}

export interface CheckinPost extends Post {
  isPinned?: boolean
  checkinItems?: CheckinItem[]
  reactions?: Reaction[]
}

export interface Participant {
  id: string
  name: string
  avatar: string
}

export interface ChallengeStats {
  totalCheckins: number
  participantsJoined: number
  completedCount: number
  missedCount: number
  currentStreak: number
}

export interface Pass {
  id: string
  name: string
  icon: string
  price: number
}
