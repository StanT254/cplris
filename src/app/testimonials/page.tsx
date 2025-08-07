import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <TestimonialsSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
