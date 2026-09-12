import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { CallButton, WhatsAppButton } from "@/components/cta-buttons";
import { siteConfig } from "@/lib/site-config";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-primary"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      >
        <g stroke="white" strokeWidth="1.5" fill="none">
          <path d="M0 40 H140 V10 H400" />
          <path d="M0 160 H90 V190 H320 V160 H400" />
          <path d="M260 0 V70 H400" />
        </g>
      </svg>
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[36ch]">
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
          >
            Got an electrical problem right now?
          </h2>
          <p className="mt-3 flex items-center gap-2 font-mono text-lg text-primary-foreground/90">
            <PhoneCall weight="fill" className="size-5" />
            {siteConfig.phoneDisplay}
          </p>
          <p className="mt-1 text-sm text-primary-foreground/70">
            {siteConfig.hours}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <CallButton />
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
