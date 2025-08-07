import { Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Get In Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Have questions or want to work with us? Drop us a message, and we'll get back to you soon.
            </p>
            <div className='space-y-4'>
              <p className='text-lg'>Email: <a href="mailto:contact@centennialpolaris.co" className="font-semibold text-primary hover:underline">contact@centennialpolaris.co</a></p>
              <div>
                <p className='font-medium mb-2'>Follow us on social media:</p>
                <div className='flex gap-4'>
                  <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className='size-6' />
                  </Link>
                  <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className='size-6' />
                  </Link>
                  <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className='size-6' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
