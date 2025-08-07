import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "The Startup Branding Kit saved me weeks of work. The templates are stylish, professional, and incredibly easy to use. Highly recommended!",
    name: 'Alex Johnson',
    title: 'Founder, TechSavvy',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'professional man'
  },
  {
    quote: "I run my entire business through the Notion Business OS. It's the most comprehensive and well-designed template I've ever found.",
    name: 'Maria Garcia',
    title: 'Freelance Designer',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'smiling woman'
  },
  {
    quote: "The quality of the AI Voiceover App is astounding. The free version is already powerful, and the pro features are a steal. A game-changer for my content creation.",
    name: 'David Chen',
    title: 'YouTuber',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'creative person'
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Real stories from creators and entrepreneurs who love our products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <blockquote className="text-lg text-foreground/90 italic border-l-4 border-accent pl-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 mt-6">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
