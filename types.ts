export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Projektbasis' | 'Freelance';
  salaryRange: string;
  description: string;
  postedDate: string;
  tags: string[];
  isFeatured?: boolean;
}

export enum ViewState {
  HOME = 'HOME',
  IMPRESSUM = 'IMPRESSUM',
  DATENSCHUTZ = 'DATENSCHUTZ'
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleSection {
  title: string;
  content: string;
}