import { cn } from "@/lib/utils";

/**
 * Abstract circuit-panel motif used in place of stock photography.
 * Keeps the brand blue/orange system instead of generic international stock imagery.
 */
export function ElectricArt({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[linear-gradient(135deg,oklch(0.26_0.06_262),oklch(0.13_0.03_258))]",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-90"
      >
        <g stroke="white" strokeOpacity="0.14" strokeWidth="1.5" fill="none">
          <path d="M0 60 H120 V20 H400" />
          <path d="M0 150 H70 V220 H260 V150 H400" />
          <path d="M0 260 H180 V190 H400" />
          <path d="M320 0 V90 H400" />
          <path d="M40 300 V240 H150 V300" />
        </g>
        <g fill="white" fillOpacity="0.35">
          <circle cx="120" cy="20" r="3.5" />
          <circle cx="70" cy="150" r="3.5" />
          <circle cx="260" cy="220" r="3.5" />
          <circle cx="180" cy="260" r="3.5" />
          <circle cx="320" cy="90" r="3.5" />
          <circle cx="150" cy="240" r="3.5" />
        </g>
        <path
          d="M215 70 L165 165 H205 L185 235 L255 130 H210 Z"
          fill="oklch(0.68 0.18 45)"
        />
      </svg>
    </div>
  );
}
