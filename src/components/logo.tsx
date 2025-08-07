import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Star className="size-6 text-accent" />
      <span className="text-xl font-bold font-headline text-primary">
        Centennial Polaris
      </span>
    </div>
  );
}
