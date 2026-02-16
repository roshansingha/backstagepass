import { MoreHorizontal, Smile, MessageCircle, Play } from 'lucide-react'
import { Avatar } from '../ui/Avatar'
import { cn } from '../../lib/cn'
import type { CheckinPost } from '../../types'

interface ChallengePostCardProps {
  post: CheckinPost
  onReaction?: (emoji: string) => void
  className?: string
}

export function ChallengePostCard({ post, className }: ChallengePostCardProps) {
  const isVideo = post.media?.type === 'video'

  return (
    <div className={cn('rounded-[24px] border border-[#14003527] bg-surface p-4 dark:border-[#F1E6FD30] dark:bg-[#1A191B]', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar src={post.author.avatar} alt={post.author.name} size="md" className="ring-0" />
          <div>
            <span className="text-base font-semibold leading-6 tracking-normal text-[#211F26] dark:text-white">{post.author.name}</span>
            <p className="text-xs font-normal leading-4 text-[#211F26] dark:text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button className="text-[#211F26] hover:text-[#211F26]/80 dark:text-gray-400">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-3 text-sm font-normal leading-5 text-[#211F26] dark:text-gray-300">{post.content}</p>

      {post.media && (
        <div className="relative mt-3 overflow-hidden rounded-xl">
          <img
            src={post.media.url}
            alt={post.media.alt || ''}
            className="w-full object-cover"
            style={{ maxHeight: 300 }}
            loading="lazy"
          />
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 rounded-full bg-surface-tertiary px-2.5 py-1.5 dark:bg-gray-800">
            {post.reactions?.slice(0, 2).map((r, i) => (
              <span key={i} className="text-sm">{r.emoji}</span>
            ))}
            <span className="text-xs font-medium text-[#211F26] dark:text-gray-400">
              {post.reactions?.[0]?.count ?? post.likes}
            </span>
          </div>
          <button className="flex h-8 w-8 items-center justify-center gap-1 rounded-full border border-[#20003618] bg-[#30004010] px-2 text-[#211F26] hover:bg-[#30004020] dark:text-gray-400">
            <Smile className="h-4.5 w-4.5" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center gap-1 rounded-full border border-[#20003618] bg-[#30004010] px-2 text-[#211F26] hover:bg-[#30004020] dark:text-gray-400">
            <MessageCircle className="h-4.5 w-4.5" />
          </button>
        </div>
        <span className="text-sm font-normal leading-5 text-[#211F26] dark:text-gray-400">
          {post.comments} Comments
        </span>
      </div>
    </div>
  )
}
