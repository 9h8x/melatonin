import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}

const PricingCard = ({ tier }: { tier: PricingTier }) => (
  <Card className="w-full max-w-sm h-full flex flex-col">
    <CardHeader>
      <CardTitle className="text-2xl">{tier.title}</CardTitle>
      <CardDescription>
        <span className="text-4xl font-bold">{tier.price}</span>
        {tier.price !== "Custom" && (
          <span className="text-muted-foreground"> /month</span>
        )}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1">
      <p className="text-muted-foreground mb-4">{tier.description}</p>
      <ul className="space-y-2">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button className="w-full">{tier.buttonText}</Button>
    </CardFooter>
  </Card>
);

export default function PricingCards() {
  const tiers: PricingTier[] = [
    {
      title: "Roblox",
      price: "$9.99",
      description: "Roblox Cheat with anti-capture functions",
      features: [
        "Aimbot",
        "Extra Sensory Perception (ESP)",
        "Scripting Api",
        "Config Support",
      ],
      buttonText: "Buy Now",
    },
    {
      title: "Counter Strike 2",
      price: "$9.99",
      description: "CS2 Cheat with anti-capture functions",
      features: [
        "Aimbot",
        "Extra Sensory Perception (ESP)",
        "Scripting Api",
        "Config Support",
      ],
      buttonText: "Buy Now",
    },
    {
      title: "Warzone / BO6",
      price: "$19.99",
      description: "Warzone / BO6 Cheat with anti-capture functions",
      features: ["Aimbot", "Extra Sensory Perception (ESP)", "Config Support"],
      buttonText: "Buy Now",
    },
  ];

  return (
    <BlurFade delay={0.5} inView>
      <div className="container mx-auto px-4 py-16 mt-8 md:-mt-12 lg:-mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
