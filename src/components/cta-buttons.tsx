import { PhoneCall, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Component as PillButton } from "@/components/ui/button-4";
import { siteConfig } from "@/lib/site-config";

export function CallButton() {
  return (
    <PillButton href={siteConfig.phoneHref} tone="cta">
      <PhoneCall weight="fill" className="size-5" />
      Call Now
    </PillButton>
  );
}

export function WhatsAppButton() {
  return (
    <PillButton
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      tone="light"
    >
      <WhatsappLogo weight="fill" className="size-5" />
      WhatsApp Us
    </PillButton>
  );
}
