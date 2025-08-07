import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container text-center">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
            Guiding You to Digital Excellence
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            Innovative, high-quality digital products that empower creators, entrepreneurs, and small businesses.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
