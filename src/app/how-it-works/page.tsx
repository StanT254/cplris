import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HowItWorksSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
