"use client";

import { motion, useReducedMotion } from "motion/react";

const stats = [
  { value: "10+", label: "Years on the tools" },
  { value: "500+", label: "Jobs completed in Karachi" },
  { value: "24/7", label: "Emergency availability" },
];

export function WhyUs() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id="why-us-heading"
          className="max-w-[26ch] font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Why homeowners call Bijlifix first
        </h2>
        <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
          We inspect before we quote, explain the fix in plain language, and
          stand behind every job. No callback fees for work we&apos;ve
          already done.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 divide-y divide-border sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="pt-6 first:pt-0 sm:px-8 sm:pt-0 sm:first:px-0"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-mono text-4xl font-bold tabular-nums text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-secondary-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
