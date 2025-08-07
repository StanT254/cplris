import { Logo } from '@/components/logo';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-8 bg-secondary border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Centennial Polaris Limited. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className='size-5 text-muted-foreground hover:text-primary' />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className='size-5 text-muted-foreground hover:text-primary' />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className='size-5 text-muted-foreground hover:text-primary' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
