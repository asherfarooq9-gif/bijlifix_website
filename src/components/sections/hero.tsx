import { Clock } from "@phosphor-icons/react/dist/ssr";
import { CallButton, WhatsAppButton } from "@/components/cta-buttons";
import { GradientWave } from "@/components/ui/gradient-wave";
import { PhotoSlot } from "@/components/photo-slot";

const KARACHI_SKY_COLORS = [
  "#1e3a8a",
  "#1e40af",
  "#1d4ed8",
  "#2563eb",
  "#1e3a8a",
  "#1e40af",
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[600px] overflow-hidden border-b border-border"
    >
      <GradientWave colors={KARACHI_SKY_COLORS} />

      <div className="relative z-10 mx-auto grid min-h-[600px] max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1
            id="hero-heading"
            className="text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            A trusted electrician in Karachi, one call away.
          </h1>
          <p className="max-w-[46ch] text-lg leading-relaxed text-white/85">
            Wiring, panel upgrades, lighting, and 24/7 emergency repairs.
            Straight pricing, no surprise charges.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>
          <div className="flex items-center gap-1.5 pt-2 text-sm text-white/85">
            <Clock weight="fill" className="size-4 text-white" />
            Same-day response
          </div>
        </div>

        <PhotoSlot
          tone="dark"
          rounded="rounded-xl"
          label="Add a photo of the electrician here, portrait 1000×1250 works best"
          className="aspect-[4/5] w-full max-w-sm justify-self-center lg:justify-self-end"
        />
      </div>
    </section>
  );
}
