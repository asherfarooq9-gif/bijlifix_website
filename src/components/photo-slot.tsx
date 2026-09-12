import { Camera } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

/**
 * Marked placeholder for a real photo the client will drop in later.
 * Keeps layout and spacing final while no stock imagery ships in its place.
 */
export function PhotoSlot({
  label,
  className,
  rounded = "rounded-lg",
  tone = "light",
}: {
  label: string;
  className?: string;
  rounded?: string;
  /** "dark" reads against a photo/gradient background, like the hero. */
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 border-2 border-dashed text-center",
        tone === "dark"
          ? "border-white/30 bg-white/10 backdrop-blur-sm"
          : "border-border bg-muted/40",
        rounded,
        className,
      )}
    >
      <Camera
        weight="light"
        className={cn(
          "size-5 shrink-0",
          tone === "dark" ? "text-white/70" : "text-muted-foreground",
        )}
      />
      <span
        className={cn(
          "px-2 text-[11px] font-medium leading-tight",
          tone === "dark" ? "text-white/70" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </div>
  );
}
