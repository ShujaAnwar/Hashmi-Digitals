
export enum Category {
  AI = 'AI',
  Productivity = 'Productivity',
  Business = 'Business',
  RealEstate = 'Real Estate',
  Education = 'Education',
  Industrial = 'Industrial',
  All = 'All'
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface Application {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: Category;
  url: string;
  imageUrl: string;
  features: string[];
  techStack: string[];
}

export interface EngagementModel {
  title: string;
  description: string;
  price?: string;
  features: string[];
  ctaText: string;
}
