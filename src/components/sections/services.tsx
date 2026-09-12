"use client";

import { useRef } from "react";
import type { Icon } from "@phosphor-icons/react";
import {
  Lightning,
  SquaresFour,
  ArrowLineDown,
  Lightbulb,
  BatteryCharging,
  Gauge,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import { services, type Service } from "@/lib/site-config";

const icons: Record<Service["icon"], Icon> = {
  wiring: Lightning,
  panel: SquaresFour,
  earthing: ArrowLineDown,
  lighting: Lightbulb,
  generator: BatteryCharging,
  meter: Gauge,
};

// Same navy circuit gradient as the brand's other placeholder art. Shows only
// if a service's `image` field in site-config.ts is ever cleared.
const PLACEHOLDER_BACKGROUND =
  "linear-gradient(135deg, oklch(0.26 0.06 262), oklch(0.13 0.03 258))";

export function Services() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : 280;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id="services-heading"
          className="mx-auto max-w-[28ch] text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Every circuit, panel, and fixture, handled by one electrician
        </h2>
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-base leading-relaxed text-muted-foreground">
          One faulty switch or a full rewire, if it carries current in your
          home, we diagnose it, quote it straight, and fix it to code.
        </p>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          >
            {services.map((service, index) => {
              const ServiceIcon = icons[service.icon];
              return (
                <motion.div
                  key={service.title}
                  data-card
                  className="w-[70%] shrink-0 touch-pan-x snap-start sm:w-[38%] lg:w-[24%]"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-border bg-card">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ background: PLACEHOLDER_BACKGROUND }}
                      >
                        <ServiceIcon
                          weight="fill"
                          className="size-10 text-white/80"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous service"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next service"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
