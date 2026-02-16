import { X, Image, Video, Smile } from 'lucide-react'
import { useState, useRef } from 'react'
import { Modal } from '../ui/Modal'

interface CheckinUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  userAvatar: string
  userName: string
}

export function CheckinUploadModal({
  isOpen,
  onClose,
  onSubmit,
  userAvatar,
  userName,
}: CheckinUploadModalProps) {
  const [hasUpload, setHasUpload] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setHasUpload(true)

      // Create preview URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} showClose={false}>
      <div className="relative h-28 bg-gradient-to-b from-amber-100/60 via-rose-50/40 to-surface dark:from-neutral-800/80 dark:via-neutral-900/60 dark:to-surface" />

      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 text-[#211F26] transition-colors hover:text-[#211F26]/80 dark:text-white"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="-mt-16 px-6 pb-6">
        {/* Avatar container - 96x96, rounded-full, shadow, no padding */}
        <div
          className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-gray-800"
          style={{
            boxShadow: '0px 6px 18px 0px #0000001F',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none'
          }}
        >
          <img
            src={userAvatar}
            alt={userName}
            className="h-full w-full rounded-full object-cover"
            style={{
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none'
            }}
          />
        </div>

        <h2 className="mt-3 text-[20px] font-semibold leading-[28px] tracking-[-0.0008em] text-[#211F26] dark:text-white">{userName}</h2>

        <p className="mt-3 text-sm font-normal leading-5 text-[#211F26] dark:text-white">
          Share what you completed today?
        </p>

        {/* Upload field - outer container: 504x376, 1px border #DBD8E0 (light) / #3C393F (dark), 24px radius, 8px padding */}
        <div
          className="mt-4 rounded-[24px] border border-[#DBD8E0] p-2 dark:border-[#3C393F]"
          style={{
            width: '504px',
            height: '376px',
            backgroundColor: 'transparent'
          }}
        >
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* Inner container: 488x360, bg #F2EFF3 (light) / #232225 (dark), 16px radius, 16px gap - clickable */}
          <button
            onClick={handleUploadClick}
            className="relative flex h-[360px] w-[488px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-[#F2EFF3] transition-opacity hover:opacity-80 dark:bg-[#232225]"
          >
            {previewUrl ? (
              // Show preview if file is selected
              <>
                {selectedFile?.type.startsWith('video/') ? (
                  <video
                    src={previewUrl}
                    className="h-full w-full object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                )}
              </>
            ) : (
              // Show upload prompt if no file selected
              <div className="flex flex-col items-center gap-2">
                {/* Upload icon - 24x24, rounded-sm */}
                <div className="flex h-6 w-6 items-center justify-center rounded-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#211F26] dark:text-white" />
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#211F26] dark:text-white" />
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#211F26] dark:text-white" />
                  </svg>
                </div>

                {/* Upload text - Medium 500, 16px, 24px line-height */}
                <p className="text-center text-base font-medium leading-6 tracking-normal text-[#211F26] dark:text-white">
                  Upload
                </p>

                {/* Description text - Regular 400, 12px, 16px line-height, 0.04px letter-spacing */}
                <p className="text-center text-xs font-normal leading-4 tracking-[0.04px] text-[#211F26] dark:text-white">
                  Images/Videos should be horizontal, at least 1280x720px.<br />
                  The maximum image size should be 2MB.
                </p>
              </div>
            )}
          </button>
        </div>

        {/* Bottom action buttons */}
        <div className="mt-6 flex items-center justify-between">
          {/* Icon buttons container - width 160px, height 48px, gap 8px */}
          <div className="flex h-12 w-[160px] items-center gap-2">
            {/* Image/Pic button - bg #E6F4FE, icon #0090FF */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F4FE] transition-opacity hover:opacity-80"
              onClick={handleUploadClick}
            >
              <Image className="h-[16.5px] w-[19.5px] text-[#0090FF]" />
            </button>

            {/* Video/Play button - bg #FEEBEC, icon #E5484D */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEEBEC] transition-opacity hover:opacity-80"
              onClick={handleUploadClick}
            >
              <Video className="h-[16.5px] w-[19.5px] text-[#E5484D]" />
            </button>

            {/* Smile/Emoji button - bg #FFF0D1, icon #FFBA18 */}
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0D1] transition-opacity hover:opacity-80">
              <Smile className="h-[16.5px] w-[19.5px] text-[#FFBA18]" />
            </button>
          </div>

          {/* Submit Checkin button - width 187px, height 48px, gap 12px, padding Spacing/5, radius full */}
          <button
            className={`flex h-12 w-[187px] items-center justify-center gap-3 rounded-full px-5 transition-opacity disabled:cursor-not-allowed ${hasUpload
              ? 'bg-[#B8860B]'
              : 'bg-[#30004010] dark:bg-[#EBEAF814]'
              }`}
            onClick={onSubmit}
            disabled={!hasUpload}
          >
            {/* Text - Medium 500, Typography/Font size/4 (14px), Typography/Line height/4 (20px) */}
            <span
              className={`align-middle text-sm font-medium leading-5 ${hasUpload
                ? 'text-white'
                : 'text-[#08003145] dark:text-[#EEE7FF5D]'
                }`}
            >
              Submit Checkin
            </span>
          </button>
        </div>
      </div>
    </Modal>
  )
}
