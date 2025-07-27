# 📚 KanjiMaster

A modern, comprehensive web application for learning Japanese kanji systematically. Built with Next.js 15, KanjiMaster provides access to all 2,136 Jōyō kanji organized by school grade levels and JLPT difficulty.

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6.12.0-2D3748?style=flat&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-336791?style=flat&logo=postgresql)

## ✨ Features

### 📖 Comprehensive Kanji Database
- **2,136 Jōyō Kanji** - Complete collection of kanji designated for daily use
- **Grade-based Organization** - Elementary school grades 1-6 and junior high (grade 8)
- **JLPT Level Classification** - N5 (beginner) to N1 (advanced) difficulty levels
- **Detailed Information** - Meanings, readings (on'yomi, kun'yomi, nanori), stroke count, and usage examples

### 🔍 Advanced Search & Navigation
- **Search by Reading** - Find kanji by their pronunciation in hiragana or katakana
- **Browse by Grade** - Systematic learning following Japanese education curriculum
- **JLPT Level Filtering** - Study kanji appropriate for your Japanese proficiency level
- **Individual Kanji Pages** - Detailed views with comprehensive information and related words

### 🎨 Modern UI/UX
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - System preference detection with manual toggle
- **Japanese Typography** - Authentic Noto Serif JP font for proper kanji display
- **Intuitive Navigation** - Clean, accessible interface with breadcrumb navigation

### 👤 User Features
- **Authentication System** - Secure login with GitHub and Google OAuth
- **Favorites Management** - Save and organize your favorite kanji for quick access
- **Progress Tracking** - Monitor your learning progress across different levels
- **Personalized Experience** - Tailored content based on your learning preferences

### 📱 Technical Excellence
- **Server-Side Rendering** - Fast initial page loads with Next.js App Router
- **SEO Optimized** - Comprehensive metadata and Open Graph tags
- **Performance First** - Lazy loading, image optimization, and efficient caching
- **Custom 404 Pages** - Helpful error pages with navigation suggestions

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** 8.0 or later (recommended package manager)
- **PostgreSQL** database (local or hosted)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kanji-next.git
   cd kanji-next
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/kanjimaster"
   
   # Authentication (Better Auth)
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # OAuth Providers
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   pnpm db:generate
   
   # Run database migrations
   pnpm db:migrate
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - Type-safe database ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Better Auth](https://www.better-auth.com/)** - Modern authentication library

### Developer Experience
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[Turbopack](https://turbo.build/pack)** - Ultra-fast development bundler

### External APIs
- **[KanjiAPI.dev](https://kanjiapi.dev/)** - Comprehensive kanji data source

## 📁 Project Structure

```
kanji-next/
├── app/                      # Next.js App Router
│   ├── _components/          # Shared layout components
│   ├── kanji/               # Individual kanji pages
│   ├── grades/              # Grade-based kanji lists
│   ├── jlpt/                # JLPT level pages
│   ├── readings/            # Reading-based search
│   └── ...                  # Other pages
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   └── auth/           # Authentication components
│   ├── features/           # Feature-specific logic
│   ├── lib/                # Utility functions and config
│   ├── hooks/              # Custom React hooks
│   └── fonts/              # Custom font files
├── prisma/                  # Database schema and migrations
└── public/                  # Static assets
```

## 🎯 Key Features Explained

### Grade-Based Learning
Follow the Japanese education system's progression:
- **Grades 1-6**: Elementary school kanji (1,026 total)
- **Grade 8**: Additional junior high school kanji (1,110 total)

### JLPT Integration
Align your study with Japanese Language Proficiency Test levels:
- **N5**: 103 basic kanji for everyday situations
- **N4**: 181 kanji for practical communication
- **N3**: 367 intermediate kanji for complex topics
- **N2**: 415 advanced kanji for academic contexts
- **N1**: 1,235 kanji for near-native proficiency

### Reading System
Comprehensive support for Japanese reading systems:
- **On'yomi (音読み)**: Chinese-derived readings
- **Kun'yomi (訓読み)**: Native Japanese readings
- **Nanori (名乗り)**: Special readings used in names

## 🔧 Development Scripts

```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:migrate       # Run database migrations
pnpm db:studio        # Open Prisma Studio
```

## 🌐 API Integration

KanjiMaster integrates with [KanjiAPI.dev](https://kanjiapi.dev/) to provide:
- Real-time kanji data fetching
- Comprehensive kanji information
- Word usage examples
- Reading associations

## 🔐 Authentication

Powered by Better Auth with support for:
- **GitHub OAuth** - Sign in with your GitHub account
- **Google OAuth** - Sign in with your Google account
- **Email/Password** - Traditional authentication method
- **Session Management** - Secure, persistent sessions

## 📊 Performance Features

- **Server-Side Rendering** - Fast initial page loads
- **Incremental Static Regeneration** - Optimized static content
- **Image Optimization** - Automatic image compression and sizing
- **Code Splitting** - Efficient bundle loading
- **Caching Strategy** - Intelligent data caching

## 🎨 Design System

### Typography
- **Geist Sans/Mono** - Modern, readable interface fonts
- **Noto Serif JP** - Authentic Japanese character display

### Color Scheme
- **Light Mode** - Clean, minimalist design
- **Dark Mode** - Eye-friendly dark interface
- **System Preference** - Automatic theme detection

### Responsive Breakpoints
- **Mobile**: 640px and below
- **Tablet**: 768px to 1024px
- **Desktop**: 1024px and above

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and type checks
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[KanjiAPI.dev](https://kanjiapi.dev/)** - Comprehensive kanji data source
- **Japanese Ministry of Education** - Jōyō kanji standards
- **JLPT Organization** - Japanese Language Proficiency Test standards
- **shadcn** - Amazing UI component library
- **Vercel** - Deployment platform

## 📞 Support

- **Documentation**: Check our [Wiki](https://github.com/yourusername/kanji-next/wiki)
- **Issues**: Report bugs via [GitHub Issues](https://github.com/yourusername/kanji-next/issues)
- **Discussions**: Join our [GitHub Discussions](https://github.com/yourusername/kanji-next/discussions)

---

<div align="center">

**[🌐 Live Demo](https://kanjimaster.vercel.app)** • **[📚 Documentation](https://github.com/yourusername/kanji-next/wiki)** • **[🐛 Report Bug](https://github.com/yourusername/kanji-next/issues)**

Made with ❤️ for Japanese language learners worldwide

</div>
