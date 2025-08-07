import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ImageGenerator } from '@/components/image-generator';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export default function ImageGeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                AI Image Generator
              </h1>
              <p className="text-foreground/80 md:text-lg">
                Create stunning images from text descriptions. Let your imagination run wild!
              </p>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <ImageGenerator />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
