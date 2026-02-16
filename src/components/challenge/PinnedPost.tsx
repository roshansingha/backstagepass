import { MoreHorizontal, Smile, MessageCircle, Pin } from 'lucide-react'
import { Avatar } from '../ui/Avatar'
import { cn } from '../../lib/cn'
import type { CheckinPost } from '../../types'

interface PinnedPostProps {
  post: CheckinPost
  className?: string
}

export function PinnedPost({ post, className }: PinnedPostProps) {
  return (
    <div className={cn('rounded-[24px] border border-[#14003527] bg-surface dark:border-[#F1E6FD30] dark:bg-[#1A191B]', className)}>
      <div className="flex h-8 items-center gap-1.5 border-b border-[#EAE7EC] px-4 text-xs font-normal leading-4 text-[#211F26] dark:border-gray-700 dark:text-gray-400">
        <img src="/pinned.svg" alt="Pinned" className="h-4 w-4" />
        This is a pinned post
      </div>

      <div className="p-4">
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

        {post.checkinItems && post.checkinItems.length > 0 && (
          <div className="mt-4 space-y-2.5">
            {post.checkinItems.map((item, i) => {
              const countImages = ['/count1.svg', '/count2.png', '/count3.png', '/count4.png', '/count5.png']
              return (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={countImages[i]}
                    alt={`${i + 1}`}
                    className="h-[18px] w-[18px] shrink-0"
                  />
                  <span className="text-sm font-normal leading-5 text-[#211F26] dark:text-white">{item.text}</span>
                </div>
              )
            })}
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
    </div>
  )
}
