import { Zap, Shield, Server, Globe, Cpu, Headphones } from 'lucide-react';

export const SERVICES = [
  {
    id: 'shared',
    title: 'NVMe Shared Hosting',
    description: 'Ultra-fast hosting powered by enterprise NVMe SSDs for superior performance.',
    icon: Zap,
    features: ['Litespeed Web Server', 'Free SSL & Domain', 'Daily Backups', 'One-click Installer']
  },
  {
    id: 'vps',
    title: 'Cloud VPS',
    description: 'Dedicated resources with full root access for scaling high-demand applications.',
    icon: Server,
    features: ['Root Access', 'Instant Deployment', 'DDoS Protection', 'Custom OS Support']
  },
  {
    id: 'dedicated',
    title: 'Dedicated Servers',
    description: 'Uncompromising power with single-tenant hardware for enterprise workloads.',
    icon: Cpu,
    features: ['Xeon Gold / EPYC CPUs', 'Private Network', 'IPMI Access', 'Tier 4 Data Centers']
  }
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$2.99',
    period: 'mo',
    features: ['1 Website', '10GB NVMe Storage', '100GB Bandwidth', 'Free SSL Certificate'],
    cta: 'Order Now'
  },
  {
    name: 'Business',
    price: '$7.99',
    period: 'mo',
    popular: true,
    features: ['Unlimited Websites', '50GB NVMe Storage', 'Unmetered Bandwidth', 'Free Domain Name'],
    cta: 'Best Value'
  },
  {
    name: 'Enterprise',
    price: '$15.00',
    period: 'mo',
    features: ['Dedicated IP', '100GB NVMe Storage', 'Priority Support', 'Advanced Security'],
    cta: 'Go Pro'
  }
];
