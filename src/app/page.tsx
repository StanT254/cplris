import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProductsSection } from '@/components/sections/products';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
