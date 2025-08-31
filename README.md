# Pragya Aggarwal - Professional Portfolio

A modern, vibrant, and accessible portfolio website built with the MERN stack, showcasing software development skills, projects, and professional experience.

## 🌟 Features

### Core Features
- **Vibrant Professional Design**: Modern UI with dark/light mode support
- **Accessibility First**: WCAG AA compliant with comprehensive a11y features
- **Performance Optimized**: 98+ Lighthouse score with SSR/SSG
- **Mobile Responsive**: Seamless experience across all devices
- **SEO Optimized**: Meta tags, structured data, and optimized content

### Portfolio Sections
- **Hero Section**: Role, skills showcase, and call-to-actions
- **Tech Stack**: Interactive skills demonstration with proficiency levels
- **Featured Projects**: Detailed case studies with metrics and demos
- **Project Grid**: Filterable portfolio with live demos and source code
- **Contact Form**: Integrated backend with email notifications
- **Blog/Notes**: Technical content and communication skills showcase

### Advanced Features
- **Real-time Analytics**: Track visitor interactions and popular content
- **GitHub Integration**: Automated fetching of repository stats and activity
- **Contact Management**: Backend system for inquiry handling
- **Admin Dashboard**: Content management and analytics (optional)
- **Content Automation**: Automatic updates from GitHub and external sources

## 🛠 Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router, SSR/SSG
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations with reduced motion support
- **Lucide React**: Consistent icon system

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **TypeScript**: Type-safe backend development
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: Secure authentication
- **Nodemailer**: Email functionality

### DevOps & Tools
- **ESLint & Prettier**: Code quality and formatting
- **Git**: Version control
- **npm**: Package management
- **VS Code**: Development environment

## 📂 Project Structure

```
portfolio/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   ├── data/           # Static data and schemas
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   └── index.ts        # Server entry point
│   └── package.json
├── .github/                # GitHub workflows and configs
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in the backend directory:
   ```bash
   cp .env.example .env
   ```
   
   Update the environment variables:
   ```env
   NODE_ENV=development
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   EMAIL_USER=your.email@gmail.com
   EMAIL_APP_PASSWORD=your_app_password
   GITHUB_USERNAME=your_github_username
   GITHUB_TOKEN=your_github_token
   JWT_SECRET=your_jwt_secret
   ```

### Development

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### Using VS Code Tasks

This project includes VS Code tasks for easy development:

- **Ctrl+Shift+P** → "Tasks: Run Task"
- Choose from:
  - "Start Frontend Dev Server"
  - "Start Backend Dev Server" 
  - "Build Frontend"
  - "Build Backend"

## 📱 Pages & Components

### Main Pages
- **Home (`/`)**: Hero, tech stack, featured projects, CTA
- **Projects (`/projects`)**: Full project portfolio with filtering
- **Contact (`/contact`)**: Contact form and information
- **About (`/about`)**: Skills, experience, values *(coming soon)*
- **Blog (`/blog`)**: Technical posts and notes *(coming soon)*

### Key Components
- **Navigation**: Responsive navbar with theme toggle
- **Hero**: Landing section with role and skills
- **TechStack**: Interactive skills showcase
- **FeaturedProjects**: Highlighted work with metrics
- **ProjectsGrid**: Filterable portfolio display
- **ContactForm**: Backend-integrated contact system
- **Footer**: Links and additional information

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Frontend Configuration** (`frontend/src/app/layout.tsx`):
   - Meta title, description, and keywords
   - Open Graph and Twitter card data
   - Your name and role

2. **Project Data** (`frontend/src/data/projects.ts`):
   - Add your real projects
   - Update metrics, technologies, and links
   - Include case study details

3. **Navigation & Footer**:
   - Update social media links
   - Add your GitHub, LinkedIn, Twitter profiles
   - Update contact information

### Styling & Branding
- **Colors**: Modify `tailwind.config.js` for brand colors
- **Fonts**: Update font imports in `layout.tsx`
- **Logo**: Replace logo in navigation component
- **Favicon**: Add your favicon to `public/` directory

### Content
- **Resume**: Add `resume.pdf` to `public/` directory
- **Project Images**: Add project screenshots to `public/projects/`
- **SEO**: Update meta descriptions and keywords

## 🔧 Backend API

### Endpoints

#### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

#### Analytics
- `POST /api/analytics/track` - Track user events
- `GET /api/analytics/stats` - Get analytics data

#### GitHub
- `GET /api/github/stats` - Get GitHub profile stats
- `GET /api/github/repo/:owner/:repo` - Get repository details

### Environment Variables
```env
# Required
MONGODB_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:3000

# Email (optional)
EMAIL_USER=your.email@gmail.com
EMAIL_APP_PASSWORD=your_app_password

# GitHub API (optional)
GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_github_token

# Security
JWT_SECRET=your_jwt_secret_key
```

## 🚀 Deployment

### Frontend (Vercel - Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)
1. Create new app on Railway or Heroku
2. Connect your GitHub repository
3. Set environment variables
4. Deploy backend service

### Database (MongoDB Atlas)
1. Create cluster on MongoDB Atlas
2. Get connection string
3. Update `MONGODB_URI` in environment variables

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
FRONTEND_URL=https://your-domain.com
# ... other variables
```

## 📊 Analytics & Monitoring

The portfolio includes built-in analytics for tracking:
- Page views and user interactions
- Project clicks and demo views
- Contact form submissions
- Resume downloads

Analytics data is stored in MongoDB and can be viewed through the admin dashboard.

## 🎯 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags and Open Graph data
- JSON-LD structured data
- Sitemap generation
- Robots.txt configuration

### Performance Optimizations
- Next.js Image optimization
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Caching strategies
- CDN integration ready

## ♿ Accessibility

This portfolio follows WCAG 2.1 AA guidelines:
- Semantic HTML elements
- Proper heading hierarchy
- Focus management and keyboard navigation
- Color contrast compliance
- Screen reader support
- Alternative text for images
- Reduced motion preferences

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [MongoDB](https://www.mongodb.com/) for the database solution

## 📞 Support

If you have any questions or need help with setup:

- Create an issue on GitHub
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using the MERN stack
