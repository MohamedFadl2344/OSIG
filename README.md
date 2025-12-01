# OSIG - Open Source Image Generator

A modern, secure, and privacy-focused AI image generation platform built with React, TypeScript, and Vite.

## Project Status

**Current Version**: 1.0.0 (Active Development)

This project is under continuous development with new features and improvements being added regularly.

## Overview

OSIG is a full-stack web application that enables users to generate AI-powered images using state-of-the-art models. The platform emphasizes user privacy, security, and ease of use.

## Key Features

- Secure JWT-based authentication system
- Multiple AI model support (Google Gemini models)
- Generate 1-4 images simultaneously
- Real-time generation status updates
- Image download functionality
- Responsive design for all devices
- Modern UI with smooth animations
- Toast notifications for user feedback

## Technology Stack

### Frontend
- **React 19.2.0** - Modern React with concurrent features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Router DOM 7.9.6** - Client-side routing
- **TanStack React Query 5.90.11** - Server state management
- **Axios 1.13.2** - HTTP client
- **React Hot Toast 2.6.0** - Toast notifications
- **React Icons 5.5.0** - Icon library

### Development Tools
- ESLint - Code quality
- TypeScript ESLint - Type checking
- Vite Plugin React - Fast Refresh

## Architecture

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
┌────────▼────────┐ ┌──▼──────────────┐
│   MongoDB       │ │  OpenRouter API │
└─────────────────┘ └─────────────────┘
```

## Project Structure

```
OSIG/
├── public/                      # Static assets
├── src/
│   ├── assets/                 # Images and static files
│   ├── components/             # Reusable UI components
│   ├── context/                # React Context providers
│   ├── hooks/                  # Custom React hooks (planned)
│   ├── layouts/                # Layout components
│   │   ├── navbar/            # Navigation components
│   │   └── footer/            # Footer components
│   ├── page/                   # Page components
│   │   ├── Home/              # Landing page
│   │   ├── Login/             # Authentication
│   │   ├── Register/          # User registration
│   │   ├── Settings/          # User settings
│   │   ├── imggen/            # Image generation
│   │   ├── api-key-management/ # API management (planned)
│   │   └── forgot-password/   # Password recovery (planned)
│   ├── router/                 # Routing configuration
│   ├── Services/               # API service layer
│   ├── store/                  # State management (planned)
│   └── utils/                  # Utility functions (planned)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Available Pages

### Public Pages
- **Home** - Landing page with features showcase
- **Login** - User authentication
- **Register** - New user registration

### Protected Pages
- **Image Generator** - AI image generation interface
- **Settings** - User account management

### Planned Pages
- API Key Management
- Password Recovery
- User Dashboard
- Image Gallery

## Components Overview

### Layout Components
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Application footer with links

### Page Components
- **Hero** - Landing page hero section
- **About** - About section
- **Testimonial** - User testimonials carousel
- **FAQ** - Frequently asked questions

### Image Generation Components
- **PromptInput** - Text input for prompts
- **AdvancedOptions** - Generation parameters
- **GenerateButton** - Trigger generation
- **ImageGallery** - Display generated images
- **ImageCard** - Individual image with download

### Authentication Components
- **LoginForm** - User login interface
- **RegisterForm** - User registration interface
- **AccountSettings** - Profile management
- **DeleteAccount** - Account deletion

## State Management

### Authentication Context
Provides global authentication state:
- User information
- Login/logout functions
- Token management
- Loading states

### Future State Management
Reserved directories for advanced state management:
- `src/hooks/` - Custom React hooks
- `src/store/` - Global state store
- `src/utils/` - Helper functions

## Security Features

- JWT-based authentication
- Secure password hashing
- Input validation and sanitization
- CORS protection
- XSS prevention
- Secure HTTP headers
- No server-side image storage

## Performance Optimization

- Code splitting
- Lazy loading
- Tree shaking
- Asset optimization
- Fast Refresh (HMR)
- Efficient re-renders with React.memo
- Optimized dependency bundling

## Future Enhancements

### Planned Features
1. **Custom Hooks** - Reusable logic components
2. **API Key Management** - User key management
3. **Password Recovery** - Email-based reset
4. **Image Gallery** - History of generated images
5. **Dark Mode** - Theme switching
6. **Internationalization** - Multi-language support
7. **PWA Support** - Offline capabilities
8. **Advanced Editing** - Image manipulation tools
9. **Batch Generation** - Multiple prompts
10. **Social Sharing** - Share generated images

### UI/UX Improvements
- Accessibility enhancements
- Advanced animations
- Keyboard shortcuts
- Drag and drop support
- Virtual scrolling

## Development Workflow

### Code Quality
- ESLint for linting
- TypeScript for type safety
- Component-based architecture
- Functional programming patterns

### Best Practices
- Clean code principles
- DRY (Don't Repeat Yourself)
- SOLID principles
- Responsive design first
- Accessibility standards

## Repository

GitHub: [https://github.com/MohamedFadl2344/OSIG.git](https://github.com/MohamedFadl2344/OSIG.git)

## Project Highlights

- Modern tech stack with latest versions
- Full-stack integration
- Security-first approach
- Responsive and accessible design
- AI model integration
- Scalable architecture
- Performance optimized
- Active development

## System Requirements

- Node.js v18 or higher
- Modern web browser
- Backend API server
- OpenRouter Proxy Server

## License

MIT License

---

**Note**: This is the frontend application for the OSIG platform. The complete system requires the backend API and proxy server components.

**Developer**: Mohamed Fadl
**GitHub**: [MohamedFadl2344](https://github.com/MohamedFadl2344)
