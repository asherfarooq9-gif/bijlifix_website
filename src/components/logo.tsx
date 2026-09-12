import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="var(--primary)" />
      <path
        d="M22.5 8 12 22.5h6.5L17 32l10.5-14.5H21z"
        fill="var(--primary-foreground)"
      />
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo />
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        Bijlifix
      </span>
    </div>
  );
}
