import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { testimonials } from "@/lib/site-config";
import { PhotoSlot } from "@/components/photo-slot";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id="testimonials-heading"
          className="max-w-[26ch] font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          What Karachi homeowners say
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6"
            >
              <Quotes weight="fill" className="size-7 text-primary/25" />
              <blockquote className="text-base leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 text-sm">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="size-11 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <PhotoSlot
                    label="Photo"
                    rounded="rounded-full"
                    className="size-11 shrink-0"
                  />
                )}
                <div>
                  <span className="block font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="text-muted-foreground">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
