# MongolToli - Traditional Mongolian Dictionary

A modern, responsive web application for a Traditional Mongolian dictionary with type-ahead search supporting both Cyrillic and Traditional Mongolian scripts.

## Features

- 🔍 Type-ahead search supporting both Cyrillic and Traditional Mongolian
- 📱 Responsive design
- ⚡ Fast search with debounced API calls (300ms)
- 🎨 Traditional Mongolian vertical text display
- ✨ Modern UI with glassmorphism effects and smooth animations
- 🌙 Dark mode design

## Tech Stack

- **Frontend**: Next.js 16 with TypeScript
- **Database**: PostgreSQL (via Prisma ORM)
- **Styling**: CSS Modules
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or cloud)

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up your environment variables:

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your PostgreSQL connection string
# For local development:
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mongoltoli"

# For Vercel Postgres (get from Vercel dashboard):
DATABASE_URL="your-vercel-postgres-connection-string"
```

### Database Setup

1. Generate Prisma Client:

```bash
npm run db:generate
```

2. Push the schema to your database:

```bash
npm run db:push
```

3. Seed the database with sample data:

```bash
npm run db:seed
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mongoltoli/
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts          # Search API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── page.module.css           # Page styles
├── components/
│   ├── Header.tsx                # Header component
│   ├── Header.module.css
│   ├── SearchBar.tsx             # Search input with dropdown
│   ├── SearchBar.module.css
│   ├── SearchResults.tsx         # Results display
│   ├── SearchResults.module.css
│   ├── Footer.tsx                # Footer component
│   └── Footer.module.css
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Sample data
└── prisma.config.ts              # Prisma configuration

```

## Database Schema

The dictionary uses a simple schema with the following fields:

- `mongolian`: Traditional Mongolian script
- `cyrillic`: Cyrillic transliteration
- `english`: English translation
- `partOfSpeech`: Word type (noun, verb, adjective, etc.)
- `examples`: Usage examples

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your `DATABASE_URL` environment variable in Vercel project settings
4. Deploy!

For database, you can use:
- Vercel Postgres (recommended for Vercel deployments)
- Supabase
- Railway
- Any PostgreSQL provider

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed database with sample data

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
