import Image from 'next/image';
import { cn } from "@/lib/utils";
import { site } from '@/data/inventory';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image 
        src={site.logo.src} 
        alt="Centennial Polaris Logo" 
        width={40} 
        height={40} 
        className="rounded-full"
        data-ai-id={site.logo.id}
        data-ai-hint={site.logo.aiHint}
      />
      <span className="text-xl font-bold font-headline text-primary">
        Centennial Polaris
      </span>
    </div>
  );
}
