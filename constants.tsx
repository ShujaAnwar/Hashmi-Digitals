
import { Application, Category, EngagementModel } from './types';

export const APPLICATIONS: Application[] = [
  {
    id: 'tatm',
    name: 'TATM',
    description: 'AI-Powered Task Automation & Intelligent Time Management.',
    longDescription: 'TATM (Task and Time Manager) is a sophisticated productivity tool that uses AI to analyze your workflow, prioritize high-impact tasks, and automate your daily schedule for peak performance.',
    category: Category.AI,
    url: 'https://tatm.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    features: ['Predictive Scheduling', 'Context-Aware Prioritization', 'Insightful Velocity Reports'],
    techStack: ['Next.js', 'Tailwind', 'Gemini AI', 'Supabase']
  },
  {
    id: 'elc-education',
    name: 'ELC Smart Education',
    description: 'The Future of Learning: Intelligent Educational Ecosystem.',
    longDescription: 'ELC is a high-performance Learning Management System designed for modern institutions. It offers seamless course delivery, interactive student portals, and advanced progress analytics.',
    category: Category.Education,
    url: 'https://elc-smart-education-platform.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
    features: ['Interactive Courseware', 'Student Progress Analytics', 'Secure Assessment Engine'],
    techStack: ['React', 'Next.js', 'Firebase', 'Tailwind']
  },
  {
    id: 'prince-plastic',
    name: 'Prince Plastic',
    description: 'Next-Gen Industrial ERP & Inventory Management.',
    longDescription: 'Prince Plastic is a specialized industrial management platform designed for the manufacturing sector. It features real-time inventory tracking, production line monitoring, and automated B2B procurement workflows.',
    category: Category.Industrial,
    url: 'https://prince-plastic.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    features: ['Real-time Inventory Tracking', 'Production Lifecycle Monitoring', 'B2B Sales Portal'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'fa-task-manager',
    name: 'FA Task Manager',
    description: 'The Ultimate High-Performance Productivity Suite for Teams.',
    longDescription: 'FA Task Manager is a full-featured project management ecosystem designed for agile agencies. It features real-time synchronization, advanced Kanban workflows, and deep team analytics.',
    category: Category.Productivity,
    url: 'https://fa-task-manager-new-klgy.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
    features: ['Real-time Collaboration', 'Agile Kanban Boards', 'Team Velocity Tracking'],
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB']
  },
  {
    id: 'asghar-builders',
    name: 'Asghar Builders',
    description: 'Premium Real Estate Portal & Construction Management.',
    longDescription: 'Transforming property discovery, Asghar Builders provides a high-fidelity interface for luxury real estate. It features a robust CRM for developers and an immersive property search experience.',
    category: Category.RealEstate,
    url: 'https://asghar-builders-real-estate.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    features: ['High-Fidelity Listings', 'Lead-Capture CRM', 'Immersive Search UI'],
    techStack: ['React', 'Framer Motion', 'Cloudinary', 'Firebase']
  }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: 'Buy License',
    description: 'Get a full source code license of any existing app.',
    price: 'Custom',
    features: [
      'Complete Source Code Access',
      'One-time Payment',
      'Installation Guide',
      '1 Month Technical Support'
    ],
    ctaText: 'Purchase Inquiries'
  },
  {
    title: 'Customize App',
    description: 'Tailor one of our products to your specific brand needs.',
    price: 'Starting $2k',
    features: [
      'UI/UX Branding Overhaul',
      'Custom Feature Integration',
      'Hosting & Deployment Setup',
      '3 Months Premium Support'
    ],
    ctaText: 'Start Customizing'
  },
  {
    title: 'New Enterprise Project',
    description: 'Build a bespoke AI-driven solution from the ground up.',
    price: 'Contact Us',
    features: [
      'Dedicated Development Team',
      'Iterative Agile Process',
      'Post-Launch Maintenance',
      'Scalability Consulting'
    ],
    ctaText: 'Hire Hashmi Digitals'
  }
];
