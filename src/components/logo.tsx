import Image from 'next/image';
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image 
        src="https://placehold.co/40x40.png" 
        alt="Centennial Polaris Logo" 
        width={40} 
        height={40} 
        className="rounded-full"
        data-ai-id="logo"
        data-ai-hint="star logo"
      />
      <span className="text-xl font-bold font-headline text-primary">
        Centennial Polaris
      </span>
    </div>
  );
}
