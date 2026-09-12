"use client";

import { motion, useReducedMotion } from "motion/react";
import { Phone, MagnifyingGlass, Wrench } from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Call or WhatsApp us",
    description: "Tell us what's wrong. We'll ask a few questions and give you a rough window for arrival.",
  },
  {
    number: "2",
    icon: MagnifyingGlass,
    title: "We inspect and quote",
    description: "We diagnose the issue on site and confirm a price before touching anything.",
  },
  {
    number: "3",
    icon: Wrench,
    title: "We fix it, properly",
    description: "Clean, code-compliant work, tested before we leave, with a heads-up on anything else worth watching.",
  },
];

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="process-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id="process-heading"
          className="max-w-[26ch] font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          What happens when you call
        </h2>

        <ol className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-5 hidden border-t border-dashed border-border sm:block"
          />
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              className="relative flex flex-col gap-3"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-base font-bold text-primary-foreground">
                  {step.number}
                </span>
                <step.icon className="size-6 text-primary" weight="fill" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
