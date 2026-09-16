import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsappLogo weight="fill" className="size-7" />
    </a>
  );
}
