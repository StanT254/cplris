import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutSection } from '@/components/sections/about';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
