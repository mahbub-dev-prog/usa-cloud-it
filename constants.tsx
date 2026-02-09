
import React from 'react';
import { 
  Cloud, 
  Globe, 
  Server, 
  Database, 
  Mail, 
  Code, 
  Smartphone, 
  ShieldCheck, 
  LifeBuoy,
  Zap,
  Lock,
  Cpu
} from 'lucide-react';
import { Service, PricingPlan, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'domain-registration',
    title: 'Domain Registration',
    description: 'Find the perfect name for your business with our lightning-fast domain search and management tools.',
    icon: 'Globe',
    features: ['Instant Activation', 'Free Whois Privacy', 'DNS Management', 'Email Forwarding'],
    category: 'hosting'
  },
  {
    id: 'shared-hosting',
    title: 'Shared Hosting',
    description: 'The most cost-effective solution to get your website online with high performance and security.',
    icon: 'Zap',
    features: ['NVMe Storage', 'Free SSL', 'One-Click WP Install', '24/7 Support'],
    category: 'hosting'
  },
  {
    id: 'vps-hosting',
    title: 'VPS Hosting',
    description: 'Full root access and dedicated resources for high-traffic websites and complex applications.',
    icon: 'Server',
    features: ['Scalable Resources', 'DDoS Protection', 'Custom ISO', 'Tier 4 Datacenter'],
    category: 'hosting'
  },
  {
    id: 'dedicated-server',
    title: 'Dedicated Server',
    description: 'Premium hardware for enterprise workloads that require maximum performance and total control.',
    icon: 'Cpu',
    features: ['Latest Xeon CPUs', 'Unlimited Traffic', 'Multiple OS Options', '99.99% Uptime'],
    category: 'hosting'
  },
  {
    id: 'cloud-hosting',
    title: 'Cloud Hosting',
    description: 'Next-generation cloud infrastructure built for high availability and automatic scaling.',
    icon: 'Cloud',
    features: ['High Availability', 'Daily Backups', 'Global CDN', 'Managed Services'],
    category: 'hosting'
  },
  {
    id: 'business-email',
    title: 'Business Email',
    description: 'Professional email hosting to build trust with your clients using your custom domain.',
    icon: 'Mail',
    features: ['50GB Mailboxes', 'Antispam Filter', 'Webmail Access', 'IMAP/POP3/SMTP'],
    category: 'hosting'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, responsive, and SEO-friendly websites designed to convert visitors into customers.',
    icon: 'Code',
    features: ['E-commerce', 'Portfolio Sites', 'CMS Integration', 'React/Next.js'],
    category: 'development'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Modern mobile applications for iOS and Android built with Flutter or React Native.',
    icon: 'Smartphone',
    features: ['User-Centric Design', 'Backend Integration', 'Store Publishing', 'Maintenance'],
    category: 'development'
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic IT advice to help your business leverage technology for growth and efficiency.',
    icon: 'ShieldCheck',
    features: ['Cloud Migration', 'Security Audit', 'Infrastructure Planning', 'IT Support'],
    category: 'consultancy'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'shared-starter',
    name: 'Starter',
    price: '$2.99',
    period: 'mo',
    category: 'shared',
    features: ['1 Website', '10GB NVMe SSD', '100GB Bandwidth', '2 Email Accounts', 'Free SSL'],
  },
  {
    id: 'shared-pro',
    name: 'Pro',
    price: '$5.99',
    period: 'mo',
    category: 'shared',
    isPopular: true,
    features: ['Unlimited Websites', '50GB NVMe SSD', 'Unmetered Bandwidth', 'Unlimited Emails', 'Free Domain'],
  },
  {
    id: 'vps-1',
    name: 'Cloud VPS 1',
    price: '$12.00',
    period: 'mo',
    category: 'vps',
    features: ['2 Core CPU', '4GB RAM', '80GB NVMe SSD', '2TB Traffic', 'Dedicated IP'],
  },
  {
    id: 'dedicated-1',
    name: 'Enterprise Dedicated',
    price: '$149.00',
    period: 'mo',
    category: 'dedicated',
    features: ['16 Core CPU', '64GB DDR4 RAM', '2x 1TB NVMe', '1Gbps Uplink', 'Full Managed'],
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is Cloud Hosting?",
    answer: "Cloud hosting uses the resources of several clustered servers. This means that your website isn't limited to a single server's performance. If one server goes down, another takes over, ensuring 100% uptime and scalability."
  },
  {
    question: "How secure are USA Cloud IT services?",
    answer: "We prioritize security above all. Our infrastructure includes hardware DDoS protection, daily automated backups, free SSL certificates, and 24/7 security monitoring to keep your data safe."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and various cryptocurrencies for your convenience. We also support local payment gateways for international clients."
  },
  {
    question: "Do you offer migration support?",
    answer: "Yes! Our team provides free website migration services for new hosting customers. We ensure your transition to USA Cloud IT is smooth and downtime-free."
  }
];
