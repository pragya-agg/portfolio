export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  problem: string
  solution: string
  role: string
  timeline: string
  image: string
  images: string[]
  technologies: string[]
  category: string[]
  featured: boolean
  stats: {
    [key: string]: string
  }
  metrics: {
    [key: string]: string
  }
  features: string[]
  challenges: string[]
  learnings: string[]
  links: {
    demo?: string
    github?: string
    video?: string
    case_study?: string
  }
  testimonial?: {
    text: string
    author: string
    role: string
    company: string
  }
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack MERN e-commerce platform with real-time inventory, secure payments, and admin dashboard.",
    longDescription: "A comprehensive e-commerce solution built with the MERN stack, featuring real-time inventory management, secure payment processing via Stripe, and a powerful admin dashboard for managing products, orders, and customers.",
    problem: "Small businesses needed an affordable, scalable e-commerce solution that could handle real-time inventory updates and provide seamless payment processing without the high costs of enterprise platforms.",
    solution: "Built a full-stack MERN application with Socket.io for real-time features, Stripe for payments, and a comprehensive admin panel. Implemented advanced features like abandoned cart recovery, inventory alerts, and analytics dashboard.",
    role: "Full-Stack Developer & Technical Lead",
    timeline: "3 months",
    image: "/projects/ecommerce.jpg",
    images: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
      "/projects/ecommerce-3.jpg"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io", "JWT", "Cloudinary"],
    category: ["web", "ecommerce", "fullstack"],
    featured: true,
    stats: {
      stars: "124",
      forks: "34",
      downloads: "2.5K"
    },
    metrics: {
      performance: "98 Lighthouse Score",
      users: "5,000+ Active Users",
      uptime: "99.9% Uptime",
      conversion: "15% Higher Conversion Rate"
    },
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Advanced product search and filtering",
      "Shopping cart with persistent storage",
      "Order tracking and management",
      "Admin dashboard with analytics",
      "Responsive design for all devices",
      "Email notifications and receipts"
    ],
    challenges: [
      "Implementing real-time inventory updates across multiple users",
      "Ensuring secure payment processing and PCI compliance",
      "Optimizing database queries for large product catalogs",
      "Building a scalable architecture for high traffic"
    ],
    learnings: [
      "Advanced MongoDB aggregation pipelines for complex queries",
      "Real-time communication patterns with Socket.io",
      "Payment processing best practices and security",
      "Performance optimization techniques for React applications"
    ],
    links: {
      demo: "https://ecommerce-demo.johndoe.dev",
      github: "https://github.com/johndoe/ecommerce-platform",
      video: "https://youtube.com/watch?v=ecommerce-demo",
      case_study: "/projects/ecommerce-platform"
    },
    testimonial: {
      text: "The e-commerce platform exceeded our expectations. Sales increased by 40% in the first month after launch.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStore Inc."
    }
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    description: "Scalable chat application with WebSocket connections, message encryption, and file sharing capabilities.",
    longDescription: "A modern real-time chat application supporting thousands of concurrent users with features like message encryption, file sharing, typing indicators, and message history with efficient pagination.",
    problem: "Teams needed a secure, scalable chat solution that could handle large volumes of concurrent users while maintaining message privacy and providing rich communication features.",
    solution: "Developed a real-time chat application using Socket.io for WebSocket connections, Redis for session management and caching, and implemented end-to-end encryption for message security.",
    role: "Senior Full-Stack Developer",
    timeline: "4 months",
    image: "/projects/chat.jpg",
    images: [
      "/projects/chat-1.jpg",
      "/projects/chat-2.jpg",
      "/projects/chat-3.jpg"
    ],
    technologies: ["Next.js", "Socket.io", "Redis", "PostgreSQL", "JWT", "Cryptography", "AWS S3"],
    category: ["web", "realtime", "messaging"],
    featured: true,
    stats: {
      stars: "89",
      forks: "23",
      contributors: "8"
    },
    metrics: {
      concurrent: "1,000+ Concurrent Users",
      latency: "<50ms Average Latency", 
      messages: "100K+ Messages/Day",
      uptime: "99.8% Uptime"
    },
    features: [
      "Real-time messaging with Socket.io",
      "End-to-end message encryption",
      "File sharing and image uploads",
      "Typing indicators and read receipts",
      "Message history with pagination",
      "User presence and status updates",
      "Private and group chat rooms",
      "Mobile-responsive design"
    ],
    challenges: [
      "Scaling Socket.io connections for 1000+ concurrent users",
      "Implementing secure end-to-end encryption",
      "Optimizing message delivery and caching strategies",
      "Building efficient message pagination and search"
    ],
    learnings: [
      "Advanced WebSocket scaling patterns",
      "Cryptography implementation for secure messaging",
      "Redis optimization for real-time applications",
      "Performance monitoring and optimization techniques"
    ],
    links: {
      demo: "https://chat-demo.johndoe.dev",
      github: "https://github.com/johndoe/realtime-chat",
      video: "https://youtube.com/watch?v=chat-demo"
    }
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Multi-tenant analytics platform with real-time data visualization and automated reporting.",
    longDescription: "A comprehensive analytics platform that processes and visualizes large datasets in real-time, featuring customizable dashboards, automated report generation, and multi-tenant architecture.",
    problem: "Businesses needed a powerful analytics solution that could process large volumes of data in real-time and present actionable insights through intuitive visualizations.",
    solution: "Built a multi-tenant analytics platform using React and D3.js for data visualization, with a Node.js backend for data processing and MongoDB for efficient data storage and aggregation.",
    role: "Lead Developer & Data Architect",
    timeline: "5 months",
    image: "/projects/analytics.jpg",
    images: [
      "/projects/analytics-1.jpg",
      "/projects/analytics-2.jpg",
      "/projects/analytics-3.jpg"
    ],
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express", "Chart.js", "WebSockets"],
    category: ["web", "analytics", "data-visualization"],
    featured: true,
    stats: {
      stars: "156",
      forks: "45",
      downloads: "5.2K"
    },
    metrics: {
      data: "1TB+ Data Processed",
      queries: "10K+ Queries/Hour",
      charts: "50+ Chart Types",
      response: "<200ms Query Response"
    },
    features: [
      "Real-time data visualization with D3.js",
      "Customizable dashboard builder",
      "Advanced filtering and drill-down capabilities",
      "Automated report generation and scheduling",
      "Multi-tenant architecture with role-based access",
      "Data export in multiple formats",
      "Real-time alerts and notifications",
      "Mobile-optimized responsive design"
    ],
    challenges: [
      "Processing and visualizing large datasets efficiently",
      "Building flexible multi-tenant architecture",
      "Optimizing MongoDB aggregation pipelines",
      "Creating responsive data visualizations"
    ],
    learnings: [
      "Advanced data visualization techniques with D3.js",
      "MongoDB optimization for analytics workloads",
      "Multi-tenant application architecture patterns",
      "Real-time data streaming and processing"
    ],
    links: {
      demo: "https://analytics-demo.johndoe.dev",
      github: "https://github.com/johndoe/analytics-dashboard",
      video: "https://youtube.com/watch?v=analytics-demo"
    }
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter(project => project.category.includes(category))
}
