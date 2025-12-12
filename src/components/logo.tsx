import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex flex-col text-primary text-right leading-none">
        <span className="font-headline font-bold text-3xl tracking-tighter">
          Gebr. Stegeman
        </span>
        <span className="font-body text-xs font-semibold tracking-widest uppercase text-primary/80">
          Verhuizingen &amp; Transport
        </span>
      </div>
      <div className="w-3 h-12 bg-accent" />
    </div>
  );
};

export default Logo;
