# Database Setup Instructions

Since you need a PostgreSQL database to run this application, here are your options:

## Option 1: Use Vercel Postgres (Recommended for quick testing)

1. Go to [Vercel](https://vercel.com) and create a new project
2. In your project settings, go to the "Storage" tab
3. Create a new Postgres database
4. Copy the connection string and add it to your `.env` file:
   ```
   DATABASE_URL="your-vercel-postgres-connection-string"
   ```
5. Run the database commands:
   ```bash
   npm run db:push
   npm run db:seed
   ```

## Option 2: Use Local PostgreSQL

1. Install PostgreSQL on your Mac:
   ```bash
   brew install postgresql@15
   brew services start postgresql@15
   ```

2. Create a database:
   ```bash
   createdb mongoltoli
   ```

3. Update your `.env` file:
   ```
   DATABASE_URL="postgresql://YOUR_USERNAME@localhost:5432/mongoltoli"
   ```
   Replace YOUR_USERNAME with your Mac username

4. Run the database commands:
   ```bash
   npm run db:push
   npm run db:seed
   ```

## Option 3: Use Supabase (Free tier available)

1. Go to [Supabase](https://supabase.com) and create a new project
2. Go to Project Settings > Database
3. Copy the connection string (use "Connection pooling" for better performance)
4. Add it to your `.env` file
5. Run the database commands:
   ```bash
   npm run db:push
   npm run db:seed
   ```

## After Database Setup

Once your database is set up and seeded, you can run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to see the app!
