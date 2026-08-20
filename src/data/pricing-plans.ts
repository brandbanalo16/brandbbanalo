export type PricingCardVariant = "dark" | "featured";

export interface PricingPlanCard {
  name: string;
  price: string;
  period: string;
  description: string;
  /** Longer copy for the “what this package is” section below the cards */
  whatItIs: string;
  features: string[];
  variant: PricingCardVariant;
  badge?: string;
}

export const pricingPlanCards: PricingPlanCard[] = [
  {
    name: "Silver",
    price: "₹1.5 Lakh",
    period: "/yr",
    description:
      "Essential digital presence for teams that want a solid foundation and measurable growth.",
    whatItIs:
      "Silver is our foundation package for businesses that want a credible website, steady visibility in search, and professional Google Ads support — without taking on every channel at once. It suits teams that are starting to invest seriously in digital and want clear, manageable scope for the year.",
    variant: "dark",
    features: [
      "Website Design",
      "Basic SEO",
      "Google Ads Management",
      "Landing Page",
    ],
  },
  {
    name: "Diamond",
    price: "Ask Us For Price",
    period: "/yr",
    description:
      "Full-funnel premium execution: creative, media, and brand systems built to scale.",
    whatItIs:
      "Diamond is our most complete annual package. It is built for brands that want premium execution across web, advanced SEO, paid media on Google and Meta, YouTube, Facebook, and Instagram, plus a strong visual system — brand kit, multiple landing pages, Google Business Profile SEO, and a one-time product shoot. Choose Diamond when you want one partner to align creative, campaigns, and local visibility.",
    variant: "featured",
    badge: "Most complete",
    features: [
      "Website Development (Premium)",
      "Advance SEO (Premium)",
      "Google Ads Management (Premium)",
      "Meta Ads Management (Premium)",
      "Youtube Management (Premium)",
      "Facebook Management (Premium)",
      "Instagram Management (Premium)",
      "Brand Kit (Premium)",
      "Landing Page (3)",
      "Google My Business (GMB SEO)",
      "One-time Product Photo Shoot",
    ],
  },
  {
    name: "Gold",
    price: "₹3 Lakh",
    period: "/yr",
    description:
      "Strong multi-channel coverage for brands ready to scale ads and social together.",
    whatItIs:
      "Gold is the right step up when you are ready to run paid search and paid social together, and keep Facebook and Instagram active with professional social management — still on solid website design, basic SEO, and two landing pages. It bridges the essentials of Silver with broader reach than a single-channel plan.",
    variant: "dark",
    features: [
      "Website Design",
      "Basic SEO",
      "Google Ads Management",
      "Meta Ads Management",
      "Social Media Management (Facebook, Instagram)",
      "Landing Page (2)",
    ],
  },
];
