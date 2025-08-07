import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactSection } from '@/components/sections/contact';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
