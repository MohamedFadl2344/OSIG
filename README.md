# OSIG - Open Source Image Generator

A modern, secure, and privacy-focused AI image generation platform built with React, TypeScript, and Vite. OSIG provides users with a seamless experience for generating AI images while maintaining complete data privacy and security.

## Project Status

**Current Version**: 1.0.0 (Active Development)

This project is under active development with continuous improvements and new features being added regularly. Planned enhancements include additional AI models, advanced image editing capabilities, and expanded user management features.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Available Pages](#available-pages)
- [Components](#components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Routing](#routing)
- [Styling](#styling)
- [Security Features](#security-features)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Overview

OSIG (Open Source Image Generator) is a full-stack web application that enables users to generate AI-powered images using state-of-the-art models from OpenRouter. The platform emphasizes user privacy, security, and ease of use, making AI image generation accessible to everyone.

### Core Objectives

- Provide a secure and private AI image generation platform
- Offer multiple AI models for diverse creative needs
- Ensure seamless user experience across all devices
- Maintain high performance and reliability
- Enable easy integration with external AI services

## Key Features

### User Authentication & Management
- Secure JWT-based authentication system
- User registration and login functionality
- Profile management and settings
- Account deletion with password confirmation
- Session management and token refresh

### AI Image Generation
- Multiple AI model support (Google Gemini 2.5 Flash, Gemini 3 Pro)
- Customizable image generation parameters
- Support for generating 1-4 images simultaneously
- Real-time generation status updates
- Image download functionality
- Responsive image gallery display

### User Interface
- Modern, responsive design with Tailwind CSS
- Mobile-first approach with optimized mobile navigation
- Dark mode support (planned)
- Smooth animations and transitions
- Accessible UI components
- Toast notifications for user feedback

### Security & Privacy
- End-to-end encrypted communication
- No image storage on servers
- Secure API key management via proxy
- Rate limiting protection
- CORS configuration for secure cross-origin requests
- Input validation and sanitization

## Technology Stack

### Frontend Framework
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool and dev server

### UI & Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Icons 5.5.0** - Comprehensive icon library
- **Embla Carousel** - Smooth carousel implementation

### State Management & Data Fetching
- **React Context API** - Global state management for authentication
- **TanStack React Query 5.90.11** - Server state management and caching
- **Axios 1.13.2** - HTTP client for API requests

### Routing & Navigation
- **React Router DOM 7.9.6** - Client-side routing with latest features

### User Experience
- **React Hot Toast 2.6.0** - Beautiful toast notifications

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - Fast Refresh and JSX support

## Architecture

OSIG follows a modern, scalable architecture pattern:

```
┌─────────────────┐
│   Frontend      │
│   (React/TS)    │
└────────┬────────┘
         │
         ├──────────────┐
         │              │
┌────────▼────────┐ ┌──▼──────────────┐
│  Backend API    │ │  Proxy Server   │
│  (Node/Express) │ │  (OpenRouter)   │
└────────┬────────┘ └──┬──────────────┘
         │              │
         │              │
┌────────▼────────┐ ┌──▼──────────────┐
│   MongoDB       │ │  OpenRouter API │
│   (Database)    │ │  (AI Models)    │
└─────────────────┘ └─────────────────┘
```

### Component Architecture
- **Atomic Design Pattern** - Components organized by complexity
- **Container/Presentational Pattern** - Separation of logic and UI
- **Context Providers** - Global state management
- **Custom Hooks** - Reusable logic (planned for future development)

## Project Structure

```
OSIG/
├── public/                      # Static assets
│   └── favicon.ico             # Application favicon
├── src/
│   ├── assets/                 # Images, fonts, and static files
│   │   └── logo.svg           # Application logo
│   ├── components/             # Reusable UI components
│   │   ├── About.tsx          # About section component
│   │   ├── Fqa.tsx            # FAQ component
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Testimonial/       # Testimonial components
│   │   ├── about/             # About section subcomponents
│   │   ├── fqa/               # FAQ subcomponents
│   │   └── hero/              # Hero subcomponents
│   ├── config/                 # Application configuration
│   │   └── supertokens.ts     # Authentication configuration
│   ├── context/                # React Context providers
│   │   └── AuthContext.tsx    # Authentication context
│   ├── hooks/                  # Custom React hooks
│   │   └── (Reserved for future custom hooks)
│   ├── layouts/                # Layout components
│   │   ├── navbar/            # Navigation bar components
│   │   │   ├── Navbar.tsx
│   │   │   └── components/    # Navbar subcomponents
│   │   └── footer/            # Footer components
│   │       └── Footer.tsx
│   ├── page/                   # Page components
│   │   ├── Home/              # Homepage
│   │   ├── Login/             # Login page
│   │   ├── Register/          # Registration page
│   │   ├── Settings/          # User settings
│   │   ├── imggen/            # Image generation page
│   │   ├── api-key-management/ # API key management (planned)
│   │   └── forgot-password/   # Password recovery (planned)
│   ├── router/                 # Routing configuration
│   │   └── index.tsx          # Route definitions
│   ├── Services/               # API service layer
│   │   ├── auth_api/          # Authentication services
│   │   └── imggen_api/        # Image generation services
│   ├── store/                  # State management
│   │   └── (Reserved for future state management)
│   ├── utils/                  # Utility functions
│   │   └── (Reserved for helper functions)
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App-specific TS config
├── tsconfig.node.json          # Node-specific TS config
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

### Directory Explanations

#### Empty/Reserved Directories

**`src/hooks/`** - Currently empty, reserved for custom React hooks
- Future implementation will include hooks for:
  - Image generation state management
  - Form validation
  - API request handling
  - Local storage management
  - Window resize detection

**`src/store/`** - Reserved for centralized state management
- Planned for complex state management scenarios
- Will implement Redux Toolkit or Zustand if needed
- Currently using React Context for simpler state needs

**`src/utils/`** - Reserved for utility functions
- Future utilities will include:
  - Date formatting
  - String manipulation
  - Validation helpers
  - API response transformers

**`src/page/api-key-management/`** - Feature under development
- Will allow users to manage their OpenRouter API keys
- Secure key storage and rotation
- Usage statistics and monitoring

**`src/page/forgot-password/`** - Feature under development
- Password reset functionality
- Email verification
- Secure token generation

## Prerequisites

Before running this project, ensure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Backend API server running (see osig_back documentation)
- OpenRouter Proxy Server running (see proxy documentation)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd OSIG
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables (see Configuration section)

## Configuration

Create a `.env` file in the root directory:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000

# OpenRouter Proxy URL
VITE_PROXY_URL=http://localhost:3000
```

### Production Configuration

For production deployment:

```env
VITE_API_URL=https://your-backend.vercel.app
VITE_PROXY_URL=https://your-proxy.vercel.app
```

## Running the Application

### Development Mode

```bash
npm run dev
```

Application will be available at `http://localhost:5173`

Features in development mode:
- Hot Module Replacement (HMR)
- Fast Refresh
- Source maps for debugging
- Detailed error messages

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deployment.

### Linting

```bash
npm run lint
```

Check code quality and consistency.

## Available Pages

### Public Pages

1. **Home (`/`)** - Landing page with features and information
   - Hero section with call-to-action
   - Features showcase
   - Testimonials
   - FAQ section

2. **Login (`/login`)** - User authentication
   - Email/password login
   - Form validation
   - Error handling
   - Redirect to dashboard after login

3. **Register (`/signup`)** - New user registration
   - Email/password registration
   - Password strength validation
   - Automatic login after registration

### Protected Pages (Require Authentication)

4. **Image Generator (`/imggen`)** - AI image generation interface
   - Prompt input with character limit
   - Model selection (Gemini 2.5 Flash, Gemini 3 Pro)
   - Number of images selector (1-4)
   - Advanced options panel
   - Image gallery with download functionality
   - Real-time generation status

5. **Settings (`/settings`)** - User account management
   - Profile information
   - Account settings
   - Delete account functionality
   - Password change (planned)

### Planned Pages

6. **API Key Management** - Manage OpenRouter API keys
7. **Forgot Password** - Password recovery flow
8. **Dashboard** - User statistics and history
9. **Gallery** - Previously generated images
10. **Pricing** - Subscription plans

## Components

### Layout Components

**Navbar** - Responsive navigation bar
- Desktop navigation with links
- Mobile hamburger menu
- User profile dropdown
- Authentication status display
- Smooth animations

**Footer** - Application footer
- Logo and branding
- Navigation links
- Social media links
- Copyright information

### Page Components

**Hero** - Landing page hero section
- Gradient background
- Call-to-action buttons
- Feature highlights
- Responsive design

**About** - About section
- Company information
- Mission statement
- Feature cards

**Testimonial** - User testimonials
- Carousel implementation
- User ratings
- Responsive cards

**FAQ** - Frequently asked questions
- Accordion-style questions
- Expandable answers
- Search functionality (planned)

### Image Generation Components

**PromptInput** - Text input for image prompts
- Character counter
- Multi-line support
- Placeholder text
- Validation

**AdvancedOptions** - Generation parameters
- Model selection dropdown
- Number of images selector
- Collapsible panel
- Responsive design

**GenerateButton** - Trigger image generation
- Loading state
- Disabled state when not authenticated
- Error handling

**ImageGallery** - Display generated images
- Grid layout (responsive)
- Image cards with download buttons
- Empty state message
- Loading indicators

**ImageCard** - Individual image display
- Image preview
- Download button
- Hover effects
- Responsive sizing

### Authentication Components

**LoginForm** - User login interface
- Email input
- Password input
- Form validation
- Error messages
- Submit button

**RegisterForm** - User registration interface
- Email input
- Password input with strength indicator
- Confirm password
- Form validation
- Terms acceptance

### Settings Components

**AccountSettings** - Account management
- Display user information
- Edit profile (planned)
- Change password (planned)

**DeleteAccount** - Account deletion
- Password confirmation
- Warning message
- Confirmation dialog

## State Management

### Authentication Context

Located in `src/context/AuthContext.tsx`, provides:

- User authentication state
- Login/logout functions
- Token management
- User information
- Loading states
- Error handling

Usage:
```typescript
import { useAuth } from './context/AuthContext';

function Component() {
  const { user, login, logout, loading } = useAuth();
  // Use authentication state and functions
}
```

### Future State Management

The `src/store/` directory is reserved for more complex state management needs:

- Redux Toolkit for global state
- Zustand for lightweight state
- Jotai for atomic state management

Currently, React Context is sufficient for the application's needs.

## API Integration

### Authentication API (`src/Services/auth_api/`)

Handles all authentication-related API calls:

- `signUp(data)` - Register new user
- `signIn(data)` - User login
- `signOut()` - User logout
- `getCurrentUser()` - Fetch current user data
- `deleteAccount(password)` - Delete user account

### Image Generation API (`src/Services/imggen_api/`)

Manages image generation requests:

- `generateImage(prompt, model, numberOfImages)` - Generate AI images
- Handles API responses
- Error management
- Token management

### API Configuration

All API services use Axios with:
- Base URL from environment variables
- Automatic token injection
- Request/response interceptors
- Error handling
- Timeout configuration

## Routing

Routing is managed by React Router DOM v7 with the following structure:

```typescript
/                    → Home (Public)
/login               → Login (Public)
/signup              → Register (Public)
/imggen              → Image Generator (Protected)
/settings            → User Settings (Protected)
```

### Protected Routes

Protected routes require authentication and redirect to `/login` if the user is not authenticated.

### Route Guards

Implemented using:
- Authentication context
- Conditional rendering
- Redirect logic
- Loading states

## Styling

### Tailwind CSS

The application uses Tailwind CSS 4.1.17 for styling:

- Utility-first approach
- Responsive design utilities
- Custom color palette
- Gradient backgrounds
- Animations and transitions

### Custom Styles

Global styles in `src/index.css`:
- CSS reset
- Custom fonts
- Base styles
- Utility classes

### Design System

Color Palette:
- Primary: `#7c3aed` (Purple)
- Secondary: `#a855f7` (Light Purple)
- Accent: `#06b6d4` (Cyan)
- Success: `#10b981` (Green)
- Error: `#ef4444` (Red)
- Warning: `#f59e0b` (Orange)

Typography:
- Font Family: System fonts for optimal performance
- Responsive font sizes
- Consistent line heights

## Security Features

### Frontend Security

1. **Authentication**
   - JWT token storage in localStorage
   - Automatic token refresh
   - Secure token transmission

2. **Input Validation**
   - Client-side validation
   - XSS prevention
   - SQL injection prevention

3. **CORS Protection**
   - Configured allowed origins
   - Credential handling
   - Preflight requests

4. **Environment Variables**
   - Sensitive data in .env
   - No hardcoded secrets
   - Production/development separation

### Best Practices

- HTTPS in production
- Content Security Policy headers
- Secure cookie settings
- Regular dependency updates
- Code review process

## Performance Optimization

### Build Optimization

- Code splitting
- Tree shaking
- Minification
- Compression
- Asset optimization

### Runtime Optimization

- React.memo for expensive components
- useMemo and useCallback hooks
- Lazy loading for routes
- Image optimization
- Debouncing and throttling

### Vite Features

- Lightning-fast HMR
- Optimized dependency pre-bundling
- Efficient production builds
- Modern ES modules

## Deployment

### Vercel Deployment (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
vercel
```

4. Set environment variables in Vercel Dashboard:
   - `VITE_API_URL`
   - `VITE_PROXY_URL`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload `dist/` directory to your hosting provider

3. Configure environment variables

4. Set up redirects for client-side routing

### Environment Variables for Production

Ensure all environment variables are set:
- `VITE_API_URL` - Production backend URL
- `VITE_PROXY_URL` - Production proxy URL

## Future Enhancements

### Planned Features

1. **Custom Hooks** (`src/hooks/`)
   - useImageGeneration - Manage image generation state
   - useLocalStorage - Persist user preferences
   - useDebounce - Optimize search and input
   - useMediaQuery - Responsive design helpers

2. **API Key Management** (`src/page/api-key-management/`)
   - Add/remove API keys
   - Key rotation
   - Usage statistics
   - Cost tracking

3. **Password Recovery** (`src/page/forgot-password/`)
   - Email-based password reset
   - Secure token generation
   - Password strength requirements

4. **Advanced Features**
   - Image editing capabilities
   - Batch image generation
   - Image history and gallery
   - Favorites and collections
   - Social sharing
   - Export in multiple formats

5. **UI/UX Improvements**
   - Dark mode
   - Accessibility enhancements
   - Internationalization (i18n)
   - Progressive Web App (PWA)
   - Offline support

6. **Performance**
   - Service workers
   - Image lazy loading
   - Infinite scroll
   - Virtual scrolling for large lists

7. **Analytics**
   - User behavior tracking
   - Performance monitoring
   - Error tracking
   - Usage statistics

## Development Workflow

### Code Quality

- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting (planned)
- Husky for git hooks (planned)

### Testing

Testing infrastructure is planned for future implementation:
- Jest for unit testing
- React Testing Library for component testing
- Cypress for E2E testing
- Coverage reports

### Version Control

- Git for version control
- Semantic versioning
- Conventional commits
- Feature branches
- Pull request reviews

## Contributing

This project is under active development. Contributions are welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

### Coding Standards

- Follow TypeScript best practices
- Use functional components with hooks
- Write meaningful commit messages
- Document complex logic
- Maintain consistent code style

## License

MIT License - See LICENSE file for details

---

## Project Highlights for CV/Portfolio

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Full-Stack Integration**: Frontend, Backend API, Proxy Server
- **Security-First Approach**: JWT authentication, encrypted communication
- **Responsive Design**: Mobile-first, cross-device compatibility
- **AI Integration**: Multiple AI models via OpenRouter
- **Scalable Architecture**: Component-based, modular design
- **Performance Optimized**: Code splitting, lazy loading, HMR
- **Production Ready**: Deployed on Vercel with CI/CD
- **Active Development**: Continuous improvements and new features

---

**Note**: This is the frontend application for the OSIG platform. For the complete system, you also need to run the backend API (`osig_back`) and the OpenRouter Proxy Server (`Openrouter-Proxy-Server`).

**Developer**: [Your Name]
**Contact**: [Your Email]
**Portfolio**: [Your Portfolio URL]
**GitHub**: [Your GitHub URL]
