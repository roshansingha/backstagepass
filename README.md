# BackstagePass UI - Challenge Management Interface

A modern, pixel-perfect React application for managing fitness challenges with a beautiful UI and comprehensive dark mode support.

## Features

- **Challenge Management**: View and participate in multi-day fitness challenges
- **Daily Check-ins**: Upload progress with images/videos and track daily completions
- **Community Interaction**: View other participants' posts with reactions and comments
- **Dark Mode**: Full dark mode support with seamless theme switching
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modal System**: Multiple modals for joining challenges, uploading check-ins, and viewing details

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Canvas Confetti** - Celebration animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd backstagepass-ui
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The production-ready files will be generated in the `dist` folder.

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── challenge/          # Challenge-specific components
│   │   ├── ChallengeDescriptionPanel.tsx
│   │   ├── ChallengePostCard.tsx
│   │   ├── CheckinHeader.tsx
│   │   ├── CheckinInput.tsx
│   │   ├── CheckinUploadModal.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── CountdownBadge.tsx
│   │   ├── JoinChallengeModal.tsx
│   │   ├── MobileDaySelector.tsx
│   │   ├── PinnedPost.tsx
│   │   ├── ReactionBar.tsx
│   │   └── SubmissionBanner.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── PageWrapper.tsx
│   │   ├── Sidebar.tsx
│   │   └── SubHeader.tsx
│   ├── sidebar/            # Sidebar components
│   │   └── ChallengeDaySelector.tsx
│   └── ui/                 # Reusable UI components
│       ├── Avatar.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Dropdown.tsx
│       ├── Modal.tsx
│       └── ThemeToggle.tsx
├── data/
│   └── mockData.ts         # Mock data for development
├── hooks/                  # Custom React hooks
│   ├── useChallengeFlow.ts
│   ├── useCountdown.ts
│   ├── useCreatorFlow.ts
│   ├── useDaySelector.ts
│   └── useTheme.ts
├── lib/
│   └── cn.ts              # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles

public/
├── 9dayschallenge.jpg    # Challenge banner image
├── pappu.jpg             # User avatar
├── russell.png           # Creator avatar
├── profiles.svg          # Participants icon
├── fire.svg              # Streak icon
├── pinned.svg            # Pinned post icon
├── content-container.svg # Checkins icon
└── count1.svg - count5.png # Numbered list icons
```

## Key Components

### Modals

- **JoinChallengeModal**: Modal for joining a new challenge
- **CheckinUploadModal**: Upload daily check-in with image/video
- **ChallengeDescriptionPanel**: Slide-in panel showing challenge details

### Challenge Features

- **ChallengeDaySelector**: Sidebar navigation for challenge days
- **CheckinInput**: Input field for creating check-ins
- **CommunitySection**: Display community posts and interactions
- **PinnedPost**: Highlighted creator post with checkin instructions
- **SubmissionBanner**: Celebration banner after successful submission

### UI Components

- **Avatar**: User profile pictures with support for initials
- **Modal**: Flexible modal system with center and slide-right variants
- **ThemeToggle**: Switch between light and dark modes
- **CountdownBadge**: Real-time countdown timer for check-in deadlines

## Color Scheme

### Light Mode
- Primary Text: `#211F26`
- Background: `#FFFFFF`
- Surface: `#F2EFF3`
- Borders: `#EAE7EC`

### Dark Mode
- Primary Text: `#FFFFFF`
- Background: `#1A191B`
- Surface: `#232225`
- Borders: `#3C393F`

### Accent Colors
- Gold: `#B8860B`
- Success: `#10b981`
- Error: `#E5484D`
- Info: `#0090FF`
- Warning: `#FFBA18`

## Development

### Code Style

- Use TypeScript for type safety
- Follow React best practices and hooks patterns
- Use Tailwind CSS utility classes for styling
- Maintain consistent component structure

### Adding New Features

1. Create component in appropriate directory
2. Add TypeScript types in `src/types/index.ts`
3. Update mock data if needed in `src/data/mockData.ts`
4. Import and use in `App.tsx` or parent component

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint (if configured)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[Your License Here]

## Contributing

[Your Contributing Guidelines Here]

## Contact

[Your Contact Information Here]
