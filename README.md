# Innovative Strategy Solutions Website

A modern, professional website for Innovative Strategy Solutions, a consultancy firm specializing in Digital Consultancy, Personal Finance Coaching, and Business Mentoring.

## Tech Stack

- **Frontend:**
  - Next.js 14 (React Framework)
  - Tailwind CSS for styling
  - Headless UI for accessible components
  - Framer Motion for animations
  - React Icons for professional icons

- **Backend:**
  - Next.js API Routes
  - PostgreSQL database
  - Prisma ORM
  - SendGrid for email handling

## Features

- Modern, responsive design
- Newsletter subscription system
- Contact form with email notifications
- Blog system (coming soon)
- SEO optimized
- Accessible components
- Smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd innostrategy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your values:
     - `DATABASE_URL`: Your PostgreSQL connection string
     - `SENDGRID_API_KEY`: Your SendGrid API key
     - `SENDGRID_FROM_EMAIL`: Email address for sending emails
     - `ADMIN_EMAIL`: Admin email for notifications

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   └── services/       # Services pages
├── components/         # React components
│   ├── layout/        # Layout components
│   ├── sections/      # Page sections
│   └── ui/            # UI components
├── lib/               # Utility functions
└── types/             # TypeScript types
```

## Development

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for code formatting

### Database Migrations

To create a new migration after modifying the schema:

```bash
npx prisma migrate dev --name <migration-name>
```

### Adding New Features

1. Create a new branch for your feature
2. Implement the feature
3. Add tests if necessary
4. Create a pull request

## Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is private and confidential. All rights reserved.
