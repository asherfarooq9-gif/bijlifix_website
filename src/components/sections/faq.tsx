import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-config";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-secondary">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id="faq-heading"
          className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Common questions
        </h2>

        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
