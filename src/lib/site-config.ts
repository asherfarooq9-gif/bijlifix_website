export const siteConfig = {
  name: "Bijlifix",
  tagline: "Electrician, Karachi",
  phoneDisplay: "+92 313 0068056",
  phoneHref: "tel:+923130068056",
  whatsappDisplay: "+92 313 0068056",
  whatsappHref: "https://wa.me/923130068056",
  email: "hello@bijlifix.com",
  hours: "Available 24/7 for emergency calls",
  areasServed: [
    "DHA",
    "Clifton",
    "Gulshan-e-Iqbal",
    "PECHS",
    "North Nazimabad",
    "Gulistan-e-Johar",
    "Bahadurabad",
    "Malir",
    "Korangi",
    "Nazimabad",
  ],
} as const;

export type Service = {
  title: string;
  description: string;
  icon: "wiring" | "panel" | "earthing" | "lighting" | "generator" | "meter";
  /**
   * Real photo for this service's carousel panel. Drop the file in
   * public/images/services/ and point this at it, e.g. "/images/services/wiring.jpg".
   * Leave empty to keep the brand gradient placeholder.
   */
  image?: string;
};

export const services: Service[] = [
  {
    title: "House Wiring",
    description:
      "Concealed and surface wiring, plus rewiring old or unsafe installations to full standard.",
    icon: "wiring",
    image: "/images/services/wiring.jpg",
  },
  {
    title: "MCB & DB Panel Upgrade",
    description:
      "Distribution board and MCB breaker upgrades for homes that keep tripping or need more load.",
    icon: "panel",
    image: "/images/services/panel.jpg",
  },
  {
    title: "Earthing (Grounding)",
    description:
      "Proper earthing installation so your appliances and family are protected from voltage faults.",
    icon: "earthing",
    image: "/images/services/earthing.jpg",
  },
  {
    title: "Lighting & Fan Points",
    description:
      "Indoor, outdoor, and energy-efficient lighting, plus ceiling and exhaust fan points.",
    icon: "lighting",
    image: "/images/services/lighting.jpg",
  },
  {
    title: "Generator, UPS & Stabilizer Wiring",
    description:
      "Changeover wiring for generator, UPS, and stabilizer set-ups, done right for load-shedding.",
    icon: "generator",
    image: "/images/services/generator.jpg",
  },
  {
    title: "K-Electric Meter & Load Extension",
    description:
      "New connection support, load extension applications, and meter or billing wiring issues.",
    icon: "meter",
    image: "/images/services/meter.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "Came within the hour when our panel started tripping at night. Fixed it properly, not a patch job.",
    name: "Ayesha Raza",
    role: "Homeowner, DHA Phase 6",
    // Drop the photo in public/images/testimonials/ and point this at it,
    // e.g. "/images/testimonials/ayesha.jpg". Leave empty for the placeholder.
    image: "/images/testimonials/ayesha.jpg",
  },
  {
    quote:
      "Rewired our whole shop before opening. Clean work, and he explained every circuit on the board.",
    name: "Bilal Farooqi",
    role: "Shop owner, Bahadurabad",
    image: "/images/testimonials/bilal.jpg",
  },
  {
    quote:
      "Did proper earthing for the whole house after our fridge kept getting shocks. Checked the meter load first instead of just selling us extra work.",
    name: "Nadia Sheikh",
    role: "Homeowner, Clifton",
    image: "/images/testimonials/nadia.jpg",
  },
];

export const faqs = [
  {
    question: "How fast can someone come out?",
    answer:
      "Standard bookings are usually same-day or next-day. For emergencies (sparking, burning smell, total outage) we prioritize a same-hour response where possible.",
  },
  {
    question: "Do you give a quote before starting work?",
    answer:
      "Always. We inspect the job first and confirm a price over WhatsApp or in person before any work begins. No surprise charges.",
  },
  {
    question: "What areas of Karachi do you cover?",
    answer:
      "DHA, Clifton, Gulshan-e-Iqbal, PECHS, North Nazimabad, Gulistan-e-Johar, Bahadurabad, Malir, Korangi, and Nazimabad. Outside these areas, message us and we'll confirm.",
  },
  {
    question: "Can you handle both emergencies and planned projects?",
    answer:
      "Yes. Emergency repairs, and planned work like rewiring, panel upgrades, or new construction wiring, are both part of our regular schedule.",
  },
  {
    question: "Can you help with K-Electric load extension or meter issues?",
    answer:
      "Yes. We handle the wiring side of new connections and load extension applications, plus meter and billing-related wiring faults.",
  },
];
