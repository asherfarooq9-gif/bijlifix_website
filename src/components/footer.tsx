import { PhoneCall, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-[32ch]">
            <LogoMark />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Residential electrician serving Karachi. Wiring, panels,
              lighting, and 24/7 emergency repairs.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 font-medium text-foreground hover:text-primary"
            >
              <PhoneCall weight="fill" className="size-4 text-primary" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-medium text-foreground hover:text-primary"
            >
              <WhatsappLogo weight="fill" className="size-4 text-primary" />
              {siteConfig.whatsappDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 font-medium text-foreground hover:text-primary"
            >
              <EnvelopeSimple weight="fill" className="size-4 text-primary" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bijlifix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
