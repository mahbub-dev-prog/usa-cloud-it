
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'hosting' | 'development' | 'consultancy';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  category: 'shared' | 'vps' | 'dedicated';
}

export interface FAQItem {
  question: string;
  answer: string;
}
