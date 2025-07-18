# Aditi Durgapal's Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built for Aditi Durgapal, a 3rd-year B.Tech CSE student. The application is a full-stack web application with a React frontend and Express backend, featuring a sleek design system built with Tailwind CSS and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design tokens and shadcn/ui component library
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Theme System**: Custom theme provider with light/dark mode support
- **Component Library**: shadcn/ui components built on Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Memory-based storage with planned database integration
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with profile image placeholder, name, and call-to-action
2. **About Section**: Personal journey, professional image placeholder, and personality traits
3. **Skills Section**: Technical skills (Java, Python, AI) with proficiency indicators
4. **Social Links**: LinkedIn, GitHub, and Twitter integration
5. **Contact Form**: Client-side validation with toast notifications
6. **Navigation**: Sticky navbar with smooth scrolling and mobile menu

### UI Components
- Complete shadcn/ui component library including forms, dialogs, tooltips, and more
- Custom theme system with CSS variables for consistent design
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Dark mode support with system preference detection

### Technical Features
- **Responsive Design**: Mobile, tablet, and desktop optimizations
- **TypeScript**: Full type safety across the application
- **Form Handling**: React Hook Form with validation
- **Toast Notifications**: User feedback system
- **Query Client**: Centralized API request handling
- **Path Aliases**: Clean import paths with @ and @shared aliases

## Data Flow

### Frontend Data Flow
1. React Query manages server state and caching
2. Custom hooks handle UI state (theme, mobile detection, toasts)
3. Components communicate through props and context providers
4. Form data flows through React Hook Form with validation

### Backend Data Flow
1. Express middleware handles request/response logging
2. Routes are registered through a central router system
3. Storage interface abstracts database operations
4. Memory storage serves as fallback before database implementation

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for variants
- **Forms**: React Hook Form with resolvers
- **Icons**: Lucide React icons, React Icons for specific brands
- **Utilities**: date-fns, clsx, tailwind-merge

### Backend Dependencies
- **Express Framework**: Core server functionality
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with Tailwind
- **Drizzle Kit**: Database schema management and migrations

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database**: Drizzle Kit handles schema migrations and database setup

### Environment Configuration
- **Development**: Uses Vite dev server with hot reload and Express backend
- **Production**: Serves static files from Express with built frontend assets
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `dev`: Start development server with hot reload
- `build`: Build both frontend and backend for production
- `start`: Run production server
- `db:push`: Push database schema changes

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capabilities

The application is designed to be deployed on platforms like Replit, Vercel, or similar Node.js hosting services with PostgreSQL database support.

## Vercel Deployment Configuration

The project is now fully configured for Vercel deployment with:

### Configuration Files
- `vercel.json`: Defines build settings, routes, and serverless function configuration
- `api/index.ts`: Serverless API endpoint that imports the main Express server
- `.vercelignore`: Excludes unnecessary files from deployment
- `public/_redirects`: Handles client-side routing for SPA behavior

### Build Process for Vercel
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: Express server is bundled for serverless functions
3. **Routing**: API routes are handled by serverless functions, static files served directly
4. **Environment Detection**: Server automatically detects Vercel environment and exports appropriately

### Deployment Steps
1. Connect GitHub repository to Vercel
2. Vercel automatically detects the configuration
3. Build command: `npm run build`
4. Output directory: `dist/public`
5. Serverless functions handle API routes via `api/index.ts`

The application now supports both development (local server) and production (Vercel serverless) environments seamlessly.