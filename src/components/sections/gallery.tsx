import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const GALLERY_IMAGES = [
  { src: "/images/gallery/job1.jpeg", alt: "Finished electrical job, Karachi" },
  { src: "/images/gallery/job2.jpeg", alt: "Finished electrical job, Karachi" },
  { src: "/images/gallery/job3.jpeg", alt: "Finished electrical job, Karachi" },
  { src: "/images/gallery/job4.jpeg", alt: "Finished electrical job, Karachi" },
  { src: "/images/gallery/job5.jpeg", alt: "Finished electrical job, Karachi" },
];

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
          A running strip of finished jobs.
        </p>

        <ImageAutoSlider images={GALLERY_IMAGES} className="mt-10" />
      </div>
    </section>
  );
}
