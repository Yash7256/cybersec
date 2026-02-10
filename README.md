# CyberSec-CLI Landing Page

A modern, responsive landing page for CyberSec-CLI - an AI-powered cybersecurity scanning platform that unifies security tools, threat intelligence, and automated analysis into a single, powerful interface.

![CyberSec-CLI](https://img.shields.io/badge/Next.js-16.1.1-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.7-06B6D4?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🚀 Features

### Core Capabilities
- **AI-Powered Security Analysis**: Advanced vulnerability detection with intelligent remediation suggestions
- **Real-Time Scanning**: Live result streaming with WebSocket support
- **Interactive Dashboard**: Monitor security posture with comprehensive metrics and alerts
- **REST & WebSocket APIs**: Full-featured APIs for seamless integration
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Technical Features
- **Modern Stack**: Built with Next.js 16, React 18, and TypeScript
- **Beautiful UI**: Cybersecurity-themed design with glassmorphism effects
- **Smooth Animations**: Framer Motion-powered interactions and transitions
- **3D Elements**: Three.js integration for immersive visual effects
- **Dark Theme**: Eye-optimized dark mode with high contrast
- **Performance Optimized**: Next.js optimizations with Turbopack support

### User Experience
- **Terminal Demos**: Interactive typewriter effects showcasing CLI capabilities
- **Live Statistics**: Animated counters and real-time data visualization
- **Multi-Pricing Tiers**: Flexible pricing options with annual/monthly toggle
- **FAQ Section**: Expandable FAQ with smooth animations
- **Newsletter Integration**: Email subscription for security updates

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 18.2.0** - UI library with concurrent features
- **TypeScript 5.0.0** - Type safety and enhanced development experience

### Styling & UI
- **Tailwind CSS 3.4.7** - Utility-first CSS framework
- **Framer Motion 10.12.4** - Production-ready motion library
- **next-themes 0.4.6** - Perfect dark mode implementation
- **React Icons 4.10.1** - Comprehensive icon library

### 3D & Animation
- **Three.js 0.182.0** - 3D graphics library
- **@react-three/fiber 8.17.6** - React renderer for Three.js
- **@react-three/drei 9.105.3** - Useful helpers for react-three-fiber

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS transformation pipeline
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or **yarn** 1.22.0+)
- **Git** for version control

## 🚀 Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/cybersec-landing.git
cd cybersec-landing
```

### Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Optional: Add your environment variables here
NEXT_PUBLIC_API_URL=https://api.cybersec-cli.com
NEXT_PUBLIC_WS_URL=wss://api.cybersec-cli.com
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
# Start the development server
npm run dev

# Or with yarn
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Or with yarn
yarn build
yarn start
```

### Static Export
```bash
# Generate static files
npm run export
```

## 📁 Project Structure

```
cybersec-landing/
├── components/              # Reusable React components
│   ├── Benefits.js          # Benefits showcase
│   ├── Blog.js             # Blog section component
│   ├── Contact.js          # Contact form
│   ├── CTA.js              # Call-to-action components
│   ├── Features.js         # Feature cards
│   ├── Footer.js           # Site footer
│   ├── GridBackground.js   # Background grid effect
│   ├── Hero.js             # Hero section
│   ├── HeroSection.js      # Main hero landing
│   ├── Nav.js              # Navigation component
│   ├── Pricing.js          # Pricing tables
│   ├── SocialProof.js      # Social proof section
│   └── Testimonials.js     # Customer testimonials
├── pages/                  # Next.js pages
│   ├── api-docs.js         # API documentation
│   ├── _app.js             # App component with providers
│   ├── dashboard.js        # Security dashboard
│   ├── docs.js             # Documentation page
│   ├── features.js         # Features detailed page
│   └── index.js            # Home/landing page
├── public/                 # Static assets
│   └── logo.png            # Application logo
├── styles/                 # Global styles
│   └── globals.css         # Tailwind + custom styles
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment config
```

## 🎨 Customization

### Theme Configuration
The application uses a cybersecurity-themed color palette defined in `tailwind.config.js`:

```javascript
colors: {
  cyberNavy: '#0a0e27',
  cyberPurple: '#a855f7',
  cyberBlue: '#3b82f6',
  cyberCyan: '#06b6d4',
  // ... more colors
}
```

### Font Configuration
Custom fonts are configured in `pages/_app.js`:
- **Inter** - Body text
- **Space Grotesk** - Headings
- **Orbitron** - Logo/branding
- **JetBrains Mono** - Code/terminal

### Animation System
Custom animations are defined in `tailwind.config.js`:
- `float` - Floating animation for elements
- `glow` - Pulsing glow effect
- `shimmer` - Loading shimmer effect
- `scanline` - Scanning line animation

## 🔧 Configuration

### Next.js Configuration
Key configurations in `next.config.js`:
- React Strict Mode enabled
- Image optimization with WebP/AVIF support
- Performance optimizations
- Security headers
- Three.js transpilation

### Vercel Deployment
Optimized for Vercel with:
- Build and output directory configuration
- Security headers
- Caching strategies
- Function timeouts

## 🧪 Testing

Currently, this project focuses on UI/UX and marketing. Testing setup can be added based on requirements:

```bash
# For adding testing (examples)
npm install --save-dev jest @testing-library/react
npm install --save-dev cypress
```

## 📦 Build & Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js framework
3. Deploy with default settings

### Manual Deployment
```bash
# Build the application
npm run build

# The .next directory contains the build output
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔐 Security Features

### Implemented Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- Content Security Policy ready

### Best Practices
- No exposed API keys in client-side code
- HTTPS enforcement
- Secure cookie handling
- Input validation ready

## 🚀 Performance Optimization

### Next.js Optimizations
- Automatic code splitting
- Image optimization
- Font optimization
- Script optimization
- Turbopack support

### Custom Optimizations
- Lazy loading for heavy components
- Optimized animations with `will-change`
- Efficient re-renders with React.memo
- Bundle size optimization


### Development Guidelines
- Follow existing code style
- Use TypeScript for new components
- Ensure responsive design
- Test on multiple devices
- Keep animations performant

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Join our community Discord
- Email: support@cybersec-cli.com

## 🌟 Acknowledgments

- **Next.js Team** - Excellent React framework
- **Tailwind CSS** - Amazing utility-first CSS framework
- **Framer Motion** - Smooth animation library
- **React Icons** - Comprehensive icon library
- **Three.js Community** - Powerful 3D graphics library

## 📈 Roadmap

- [ ] Add comprehensive testing suite
- [ ] Implement internationalization (i18n)
- [ ] Add blog functionality
- [ ] Enhanced accessibility features
- [ ] Progressive Web App (PWA) support
- [ ] Advanced analytics integration
- [ ] CMS integration for content management

---

<div align="center">

  <p>© 2026 CyberSec. All rights reserved.</p>
</div>