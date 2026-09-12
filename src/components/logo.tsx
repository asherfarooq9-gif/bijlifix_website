import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Bijlifix"
      width={1254}
      height={1254}
      priority
      className={cn("h-10 w-10 object-contain sm:h-12 sm:w-12", className)}
    />
  );
}
