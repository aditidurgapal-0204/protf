# Aditi Durgapal's Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Hover effects, smooth scrolling, and form validation
- **Contact Form**: Functional contact form with client-side validation
- **Social Links**: Integration with LinkedIn, GitHub, and Twitter
- **Skills Showcase**: Visual representation of technical skills

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI primitives
- **Build Tool**: Vite
- **Icons**: Lucide React, React Icons
- **Animations**: Custom CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Building for Production

Build the application:
```bash
npm run build
```

## Deployment

### Vercel Deployment

This project is configured for seamless deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure build settings** (already configured in `vercel.json`):
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Deploy** - Vercel will automatically build and deploy your application

The project includes:
- `vercel.json` - Vercel configuration for serverless functions and routing
- `api/index.ts` - Serverless API endpoint
- `.vercelignore` - Files to exclude from deployment
- Optimized build process for static site generation

### Environment Variables

No additional environment variables are required for basic functionality. The application works as a static site with client-side functionality.

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utility functions
│   │   └── pages/       # Page components
│   └── index.html       # HTML template
├── server/              # Backend server (for development)
├── api/                 # Vercel serverless functions
├── public/              # Static assets
└── vercel.json          # Vercel deployment configuration
```

## Features Overview

### Sections

1. **Hero Section**: Introduction with profile placeholder and call-to-action
2. **About Section**: Personal journey and professional background
3. **Skills Section**: Technical skills with proficiency indicators
4. **Social Section**: Links to professional profiles
5. **Contact Section**: Contact form with validation
6. **Footer**: Copyright and additional links

### Interactive Elements

- Sticky navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Dark mode toggle with system preference detection
- Form validation with toast notifications
- Hover animations and transitions
- Intersection Observer for scroll animations

## Customization

### Colors and Themes

Edit the CSS variables in `client/src/index.css` to customize colors:

```css
:root {
  --primary: hsl(207, 90%, 54%);
  --secondary: hsl(240, 4.8%, 95.9%);
  /* ... other variables */
}
```

### Content

Update the content in the respective component files:
- `client/src/components/Hero.tsx` - Hero section content
- `client/src/components/About.tsx` - About section content
- `client/src/components/Skills.tsx` - Skills and proficiency levels
- `client/src/components/Social.tsx` - Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!