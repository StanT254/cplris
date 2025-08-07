import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductsSection } from '@/components/sections/products';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ProductsSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
