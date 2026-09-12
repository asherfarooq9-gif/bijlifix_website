"use client";

import { useState } from "react";
import {
  List,
  X,
  PhoneCall,
  Wrench,
  MapPin,
  Question,
} from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/cta-buttons";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#areas", label: "Service Area", icon: MapPin },
  { href: "#faq", label: "FAQ", icon: Question },
];

const GLOW_SHADOW =
  "shadow-[0_2px_10px_rgb(0_0_0_/_0.06),0_1px_24px_color-mix(in_oklch,var(--primary)_16%,transparent)]";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6">
      <div
        className={`flex h-16 items-center justify-between rounded-full border border-border/60 bg-card/95 px-4 backdrop-blur-sm supports-[backdrop-filter]:bg-card/85 sm:px-6 ${GLOW_SHADOW}`}
      >
        <a href="#top" aria-label="Bijlifix home">
          <LogoMark />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-foreground/70 transition-colors hover:bg-accent hover:text-primary"
            >
              <link.icon weight="fill" className="size-4" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CallButton />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild variant="cta" size="icon" aria-label="Call now">
            <a href={siteConfig.phoneHref}>
              <PhoneCall weight="fill" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <List />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className={`mt-2 rounded-2xl border border-border/60 bg-card p-2 lg:hidden ${GLOW_SHADOW}`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-full px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-accent hover:text-primary"
                >
                  <link.icon weight="fill" className="size-5" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
