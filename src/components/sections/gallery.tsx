import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

export function Gallery() {
  return (
    <section id="work" aria-labelledby="gallery-heading" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id="gallery-heading"
          className="mx-auto max-w-[26ch] bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-center font-heading text-3xl font-bold tracking-tight text-transparent sm:text-4xl"
        >
          Recent work around Karachi
        </h2>
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-base leading-relaxed text-muted-foreground">
          A running strip of finished jobs. Add your own site photos here as
          you shoot them.
        </p>

        <ImageAutoSlider className="mt-10" />
      </div>
    </section>
  );
}
