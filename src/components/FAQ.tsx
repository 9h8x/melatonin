import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import BlurFade from "@/components/ui/blur-fade";

export default function FAQ() {
  return (
    <BlurFade delay={0.5} inView>
      <div className="w-[90vw] max-w-lg mx-auto">
        <Accordion type="single" collapsible className="w-full mb-56">
          <AccordionItem value="item-1">
            <AccordionTrigger>Where can i get an invite?</AccordionTrigger>
            <AccordionContent>
              Sometimes invite waves happen for registered users, you can ask
              someone you know that already has access for an invite. After you
              receive an invite you have to buy an subscriptions in an 24 hours
              time-frame.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is the detection rate?</AccordionTrigger>
            <AccordionContent>
              For products like Roblox the detection rate it 0% since the
              product launched. For other games like BO6 or CS2 there isn't a
              certain way to know since the users can be very blatant and get
              manually banned.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Recommendations</AccordionTrigger>
            <AccordionContent>
              This product uses a kernel driver, so we highly recommend
              restarting your computer after using it, especially before you
              jump into any other games. If you don't follow this advice, we
              aren't responsible for any issues that might come up with your
              accounts in other games.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </BlurFade>
  );
}
