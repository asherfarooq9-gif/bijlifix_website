import { Clock, Toolbox, SmileyWink } from "@phosphor-icons/react/dist/ssr";

const items = [
  { icon: Clock, label: "24/7 emergency callout" },
  { icon: Toolbox, label: "10+ years on the tools" },
  { icon: SmileyWink, label: "Straight pricing, no surprises" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Why homeowners trust us"
      className="border-y border-border bg-secondary"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-6 sm:justify-between sm:px-6">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5"
          >
            <Icon weight="fill" className="size-4 shrink-0 text-primary" />
            <span className="text-sm font-semibold text-accent-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
