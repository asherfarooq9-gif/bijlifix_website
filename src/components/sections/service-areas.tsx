import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

export function ServiceAreas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id="areas-heading"
          className="max-w-[26ch] font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Areas we cover across Karachi
        </h2>
        <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
          Based centrally, so most calls in these areas get a same-day slot.
          Outside the list? Message us, we can often still help.
        </p>

        <div className="relative mt-8">
          <ul className="flex snap-x gap-3 overflow-x-auto pb-2 no-scrollbar">
            {siteConfig.areasServed.map((area) => (
              <li
                key={area}
                className="flex shrink-0 snap-start items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                <MapPin weight="fill" className="size-4 text-primary" />
                {area}
              </li>
            ))}
          </ul>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-secondary to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-secondary to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
