import type {
  User,
  Post,
  DayItem,
  Challenge,
  ChallengeDay,
  CheckinPost,
  Participant,
  Reaction,
  ChallengeStats,
  Pass,
} from '../types'

export const creator: User = {
  id: 'u1',
  name: 'Sarah Johnson',
  avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah',
  role: 'creator',
}

export const subscriber: User = {
  id: 'u2',
  name: 'Pappu Saha',
  avatar: '/pappu.jpg',
  role: 'subscriber',
}

export const russellBrunson: User = {
  id: 'u-russell',
  name: 'Russell Brunson',
  avatar: '/russell.png',
  role: 'creator',
  followerCount: 12400,
  subscriberCount: 3200,
  postCount: 248,
}

export const posts: Post[] = [
  {
    id: 'p1',
    author: creator,
    content:
      "Welcome to Day 3 of BackstagePass! Today we're diving deep into advanced color theory and how it applies to modern UI design. I'll share my process for building cohesive color palettes that work across light and dark themes.",
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop',
      alt: 'Abstract gradient design',
    },
    timestamp: '2 hours ago',
    likes: 42,
    comments: 8,
    isLiked: false,
  },
  {
    id: 'p2',
    author: creator,
    content:
      "Quick tip: Always design your components in both light and dark mode simultaneously. It saves you from painful refactors later. Here's a mini checklist I use for every new component.",
    timestamp: '5 hours ago',
    likes: 67,
    comments: 12,
    isLiked: true,
  },
  {
    id: 'p3',
    author: creator,
    content:
      "Day 2 recap: We covered typography fundamentals, font pairing strategies, and responsive type scales. If you missed it, the recording is now available in the Day 2 section. Don't forget to complete the exercise!",
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop',
      alt: 'Typography design layout',
    },
    timestamp: 'Yesterday',
    likes: 89,
    comments: 23,
    isLiked: false,
  },
]

export const subscriberPost: Post = {
  id: 'sp1',
  author: subscriber,
  content:
    "Just completed the Day 2 exercise! The font pairing challenge was so insightful. I never thought about combining geometric sans-serifs with humanist ones before. Sharing my result here!",
  media: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    alt: 'Typography exercise result',
  },
  timestamp: '1 hour ago',
  likes: 15,
  comments: 4,
  isLiked: false,
  isSubscriberPost: true,
}

export const days: DayItem[] = [
  {
    id: 'd1',
    day: 1,
    title: 'Design Fundamentals',
    isLocked: false,
    isCompleted: true,
    description: 'Core principles of visual design',
  },
  {
    id: 'd2',
    day: 2,
    title: 'Typography Deep Dive',
    isLocked: false,
    isCompleted: true,
    description: 'Font pairing & type scales',
  },
  {
    id: 'd3',
    day: 3,
    title: 'Color Theory',
    isLocked: false,
    isCompleted: false,
    description: 'Building cohesive palettes',
  },
  {
    id: 'd4',
    day: 4,
    title: 'Layout & Grid Systems',
    isLocked: false,
    isCompleted: false,
    description: 'Responsive grid patterns',
  },
  {
    id: 'd5',
    day: 5,
    title: 'Component Design',
    isLocked: true,
    isCompleted: false,
    description: 'Reusable UI patterns',
  },
  {
    id: 'd6',
    day: 6,
    title: 'Motion & Animation',
    isLocked: true,
    isCompleted: false,
    description: 'Purposeful micro-interactions',
  },
  {
    id: 'd7',
    day: 7,
    title: 'Design Systems',
    isLocked: true,
    isCompleted: false,
    description: 'Building scalable systems',
  },
]

export const fitnessChallenge: Challenge = {
  id: 'ch1',
  title: '9-Day Fitness Challenge',
  description:
    'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger\u2014one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
  image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop',
  totalDays: 9,
  participantCount: 75,
  checkinCount: 9,
  status: 'active',
  linkedPasses: [
    { id: 'pass-gold', name: 'Gold Pass', icon: '🥇', price: 499 },
    { id: 'pass-platinum', name: 'Platinum Pass', icon: '💎', price: 699 },
  ],
}

export const flowChallenge: Challenge = {
  id: 'ch2',
  title: 'Flow Challenge',
  description:
    'A 7-day deep work challenge to help you unlock your creative flow state. Daily prompts, accountability check-ins, and community support.',
  image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop',
  totalDays: 7,
  participantCount: 189,
  checkinCount: 642,
  status: 'active',
}

export const challengeDays: ChallengeDay[] = [
  { id: 'cd1', day: 1, title: 'Foundation Workout', status: 'active', countdownEndTime: '2026-02-17T23:59:00' },
  { id: 'cd2', day: 2, title: 'Cardio Blast', status: 'locked' },
  { id: 'cd3', day: 3, title: 'Strength Training', status: 'locked' },
  { id: 'cd4', day: 4, title: 'Active Recovery', status: 'locked' },
  { id: 'cd5', day: 5, title: 'HIIT Session', status: 'locked' },
  { id: 'cd6', day: 6, title: 'Core & Flexibility', status: 'locked' },
  { id: 'cd7', day: 7, title: 'Endurance Run', status: 'locked' },
  { id: 'cd8', day: 8, title: 'Full Body Circuit', status: 'locked' },
  { id: 'cd9', day: 9, title: 'Final Challenge', status: 'locked' },
]

export const challengeDaysAfterUpload: ChallengeDay[] = [
  { id: 'cd1', day: 1, title: 'Foundation Workout', status: 'completed' },
  { id: 'cd2', day: 2, title: 'Cardio Blast', status: 'active', countdownEndTime: '2026-02-16T20:44:00' },
  { id: 'cd3', day: 3, title: 'Strength Training', status: 'locked' },
  { id: 'cd4', day: 4, title: 'Active Recovery', status: 'locked' },
  { id: 'cd5', day: 5, title: 'HIIT Session', status: 'locked' },
  { id: 'cd6', day: 6, title: 'Core & Flexibility', status: 'locked' },
  { id: 'cd7', day: 7, title: 'Endurance Run', status: 'locked' },
  { id: 'cd8', day: 8, title: 'Full Body Circuit', status: 'locked' },
  { id: 'cd9', day: 9, title: 'Final Challenge', status: 'locked' },
]

export const participants: Participant[] = [
  { id: 'p1', name: 'Emily Chen', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Emily' },
  { id: 'p2', name: 'James Wilson', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=James' },
  { id: 'p3', name: 'Maria Garcia', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Maria' },
  { id: 'p4', name: 'David Kim', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=David' },
  { id: 'p5', name: 'Sophie Turner', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sophie' },
  { id: 'p6', name: 'Chris Anderson', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Chris' },
]

export const defaultReactions: Reaction[] = [
  { emoji: '🔥', count: 24, isActive: false },
  { emoji: '❤️', count: 18, isActive: false },
  { emoji: '👏', count: 12, isActive: false },
  { emoji: '💪', count: 9, isActive: false },
]

export const pinnedCreatorPost: CheckinPost = {
  id: 'pinned-1',
  author: russellBrunson,
  content: 'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger\u2014one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
  timestamp: '3 hrs ago',
  likes: 18,
  comments: 10,
  isLiked: false,
  isPinned: true,
  checkinItems: [
    { icon: '1', color: '#3b82f6', text: 'Minimum 20 minutes of sit-up' },
    { icon: '2', color: '#e84393', text: 'Mention Intensity' },
    { icon: '3', color: '#10b981', text: 'Upload Media (Optional)' },
    { icon: '4', color: '#b8860b', text: 'Upload Media (Optional)' },
    { icon: '5', color: '#b8860b', text: 'Upload Media (Optional)' },
  ],
  reactions: [
    { emoji: '🙏', count: 18, isActive: false },
    { emoji: '😍', count: 12, isActive: false },
  ],
}

export const communityPosts: CheckinPost[] = [
  {
    id: 'comm-1',
    author: { id: 'p-sayantan', name: 'Sayantan Chandra', avatar: 'S', role: 'subscriber' },
    content: "Completed today's challenge workout, one step closer to my goal.",
    timestamp: '1 hrs ago',
    likes: 18,
    comments: 10,
    isLiked: false,
    reactions: [
      { emoji: '🙏', count: 18, isActive: false },
      { emoji: '😍', count: 12, isActive: false },
    ],
  },
  {
    id: 'comm-2',
    author: { id: 'p-pappu', name: 'Pappu Saha', avatar: '/pappu.jpg', role: 'subscriber' },
    content: "Today's challenge workout completed\u2014feeling stronger already.",
    timestamp: '2 day ago',
    likes: 18,
    comments: 10,
    isLiked: false,
    reactions: [
      { emoji: '🙏', count: 18, isActive: false },
      { emoji: '😍', count: 12, isActive: false },
    ],
  },
]

export const ashrafIdrishi: User = {
  id: 'u-ashraf',
  name: 'Ashraf Idrishi',
  avatar: '/pappu.jpg',
  role: 'subscriber',
}

export const userSubmission: CheckinPost = {
  id: 'user-sub-1',
  author: ashrafIdrishi,
  content: "Today's challenge workout completed\u2014feeling stronger already",
  media: {
    type: 'video',
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop',
    alt: 'Workout video',
  },
  timestamp: '1s',
  likes: 18,
  comments: 10,
  isLiked: false,
  reactions: [
    { emoji: '🙏', count: 18, isActive: false },
    { emoji: '😍', count: 12, isActive: false },
  ],
}

export const challengeStats: ChallengeStats = {
  totalCheckins: 1247,
  participantsJoined: 344,
  completedCount: 124,
  missedCount: 0,
  currentStreak: 1,
}

export const linkedPasses: Pass[] = [
  { id: 'pass-gold', name: 'Gold Pass', icon: '🥇', price: 499 },
  { id: 'pass-platinum', name: 'Platinum Pass', icon: '💎', price: 699 },
]
