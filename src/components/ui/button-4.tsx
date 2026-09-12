import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Tone = "cta" | "light";

const TONE_STYLES: Record<Tone, { fill: string; shadow: string }> = {
  cta: {
    fill: "border-[#b45f1a] bg-cta text-cta-foreground",
    shadow:
      "group-hover:[box-shadow:5px_5px_#b45f1a,10px_10px_#d97b2e,15px_15px_#f4a35f] group-active:[box-shadow:5px_5px_#b45f1a,10px_10px_#d97b2e,15px_15px_#f4a35f]",
  },
  light: {
    fill:
      "border-[#263381] bg-gradient-to-r from-[#f6f7ff] to-[#f5f6ff] text-black",
    shadow:
      "group-hover:[box-shadow:5px_5px_#394481,10px_10px_#5766be,15px_15px_#8898f3] group-active:[box-shadow:5px_5px_#394481,10px_10px_#5766be,15px_15px_#8898f3]",
  },
};

type CommonProps = {
  children: ReactNode;
  className?: string;
  tone?: Tone;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Pill button with a hard offset shadow that appears and shifts the button on hover. */
export function Component({
  children,
  className,
  tone = "light",
  href,
  ...props
}: AsButton | AsAnchor) {
  const { fill, shadow } = TONE_STYLES[tone];

  const inner = (
    <>
      <div
        className={cn(
          "relative z-10 inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border-2 px-6 font-medium transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:-translate-x-3 group-active:-translate-y-3",
          fill,
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:-translate-x-3 group-active:-translate-y-3",
          shadow,
        )}
      />
    </>
  );

  const rootClassName = cn("group relative inline-block", className);

  if (href) {
    return (
      <a
        href={href}
        className={rootClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      className={rootClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
