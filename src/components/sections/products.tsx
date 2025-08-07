import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Startup Branding Kit',
    type: 'Design Templates (Figma, Canva, PSD)',
    description: 'A ready-made branding bundle for startups — includes logos, typography, social post templates, and color palettes.',
    price: '$19',
    cta: 'Buy Now on Gumroad',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'branding kit'
  },
  {
    name: 'Notion Business OS',
    type: 'Productivity Template (Notion)',
    description: 'A complete Notion dashboard for solopreneurs and small teams to manage clients, tasks, invoices, and content.',
    price: '$12',
    cta: 'Get Template',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'notion dashboard'
  },
  {
    name: 'AI Voiceover App',
    type: 'Android Mobile App (APK)',
    description: 'An AI-powered app that converts text to natural-sounding voiceovers — perfect for YouTube, courses, and audiobooks.',
    price: 'Free',
    cta: 'Download App',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'voiceover app'
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Digital Products
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            High-quality tools and templates to accelerate your growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline">{product.name}</CardTitle>
                <CardDescription>{product.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full aspect-[3/2]"
                  data-ai-hint={product.aiHint}
                />
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center mt-auto pt-4 border-t">
                <p className="text-2xl font-bold text-primary">{product.price}</p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">{product.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
