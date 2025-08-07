
export interface Product {
  id: string;
  name: string;
  type: string;
  description: string;
  price: string;
  cta: string;
  image: string;
  aiHint: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  aiHint: string;
}

export interface SiteData {
    logo: {
        id: string;
        src: string;
        aiHint: string;
    }
}

export const products: Product[] = [
  {
    id: 'product-1',
    name: 'Startup Branding Kit',
    type: 'Design Templates (Figma, Canva, PSD)',
    description: 'A ready-made branding bundle for startups — includes logos, typography, social post templates, and color palettes.',
    price: 'Coming Soon',
    cta: 'Learn More',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'branding kit'
  },
  {
    id: 'product-2',
    name: 'Notion Business OS',
    type: 'Productivity Template (Notion)',
    description: 'A complete Notion dashboard for solopreneurs and small teams to manage clients, tasks, invoices, and content.',
    price: 'Coming Soon',
    cta: 'Learn More',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'notion dashboard'
  },
  {
    id: 'product-3',
    name: 'AI Voiceover App',
    type: 'Android Mobile App (APK)',
    description: 'An AI-powered app that converts text to natural-sounding voiceovers — perfect for YouTube, courses, and audiobooks.',
    price: 'Coming Soon',
    cta: 'Learn More',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'voiceover app'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "The Startup Branding Kit saved me weeks of work. The templates are stylish, professional, and incredibly easy to use. Highly recommended!",
    name: 'Alex Johnson',
    title: 'Founder, TechSavvy',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'professional man'
  },
  {
    id: 'testimonial-2',
    quote: "I run my entire business through the Notion Business OS. It's the most comprehensive and well-designed template I've ever found.",
    name: 'Maria Garcia',
    title: 'Freelance Designer',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'smiling woman'
  },
  {
    id: 'testimonial-3',
    quote: "The quality of the AI Voiceover App is astounding. The free version is already powerful, and the pro features are a steal. A game-changer for my content creation.",
    name: 'David Chen',
    title: 'YouTuber',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'creative person'
  }
];

export const site: SiteData = {
    logo: {
        id: 'logo',
        src: 'https://placehold.co/40x40.png',
        aiHint: 'star logo'
    }
}
