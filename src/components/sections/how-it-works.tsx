import { Download, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    title: 'Instant Delivery',
    description: 'Get immediate access to your digital products after purchase. No waiting, no delays.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: '24/7 Access',
    description: 'Your purchased files are available to you anytime, anywhere, right when you need them.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Payments',
    description: 'All transactions are handled through trusted and secure payment gateways.'
  }
]

export function HowItWorksSection() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            How It Works
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            A simple, streamlined process to get you the tools you need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                {feature.icon}
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
