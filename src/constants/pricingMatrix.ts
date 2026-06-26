export interface PlanDetails {
  id: string;
  name: string;
  tagline: string;
  baseMonthlyPriceUSD: number;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export const PLANS: PlanDetails[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Essential data automations for growing teams.',
    baseMonthlyPriceUSD: 29,
    features: [
      'Up to 10 automated workflows',
      'Real-time monitoring dashboard',
      '5 active data pipelines',
      'Standard email support',
      '1 day data retention'
    ],
    ctaText: 'Start Free Trial'
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Advanced pipelines and predictive intelligence.',
    baseMonthlyPriceUSD: 99,
    features: [
      'Unlimited automated workflows',
      'Predictive analytics insights',
      '50 active data pipelines',
      'Priority 24/7 support',
      '30 days data retention',
      'Natural language SQL queries'
    ],
    ctaText: 'Get Pro Access',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Dedicated infrastructure with premium security.',
    baseMonthlyPriceUSD: 299,
    features: [
      'Custom dedicated pipelines',
      'Enterprise-grade security (SSO/SAML)',
      'Unlimited active data pipelines',
      'Dedicated success manager',
      'Custom data retention limits',
      'Advanced API access & webhooks',
      'Custom machine learning models'
    ],
    ctaText: 'Contact Enterprise'
  }
];

export const REGIONAL_MULTIPLIERS = {
  USD: {
    symbol: '$',
    multiplier: 1.0,
    label: 'USD'
  },
  INR: {
    symbol: '₹',
    multiplier: 80.0,
    label: 'INR'
  },
  EUR: {
    symbol: '€',
    multiplier: 0.9,
    label: 'EUR'
  }
};

export type CurrencyCode = keyof typeof REGIONAL_MULTIPLIERS;
export type BillingCycle = 'monthly' | 'annual';
