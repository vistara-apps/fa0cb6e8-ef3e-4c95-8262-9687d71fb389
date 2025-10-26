# ContainerYield - Base Mini App

Invest in shipping containers, earn passive income monthly.

## Features

- 🏦 Fractional container ownership starting at $100
- 📊 Real-time yield tracking and transparent analytics
- 🔒 Guaranteed 3% minimum annual yield with vacancy protection
- 📱 Mobile-first, wallet-native experience
- 🎯 Social investment feed with community features
- ⚡ Instant container booking and rental

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Tailwind CSS for styling
- Recharts for data visualization
- TypeScript for type safety

## Base Mini App Integration

This app is built as a Base Mini App with:
- Farcaster Frame manifest at `/.well-known/farcaster.json`
- OnchainKit provider for wallet integration
- Mobile-optimized UI with bottom navigation
- Social primitives for community engagement

## Design System

The app uses the BASE theme with:
- Dark blue background (#1a2332)
- Base blue accents (#0052ff)
- Green success indicators (#10b981)
- Rounded borders and modern card layouts
- Responsive design for mobile and desktop

## License

MIT
