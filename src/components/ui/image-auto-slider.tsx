"use client";

import { PhotoSlot } from "@/components/photo-slot";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
};

/**
 * Infinite marquee of square photo tiles. Pass real `images` once you have
 * jobsite photos; until then it loops dashed placeholder slots so the layout
 * ships finished without stock imagery standing in for it.
 */
export function ImageAutoSlider({
  images,
  placeholderCount = 8,
  className,
}: {
  images?: GalleryImage[];
  placeholderCount?: number;
  className?: string;
}) {
  const items: GalleryImage[] =
    images && images.length > 0
      ? images
      : Array.from({ length: placeholderCount }, (_, i) => ({
          src: "",
          alt: `Job photo ${i + 1}`,
        }));

  const looped = [...items, ...items];

  return (
    <div className={cn("scroll-container w-full overflow-hidden", className)}>
      <div className="infinite-scroll flex w-max gap-4">
        {looped.map((item, index) => (
          <div
            key={index}
            className="h-48 w-48 shrink-0 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.03] sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <PhotoSlot label={item.alt} className="h-full w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
