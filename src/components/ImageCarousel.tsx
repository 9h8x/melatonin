import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  { imageUrl: "https://placehold.co/1920x1080", text: "BO6" },
  { imageUrl: "https://placehold.co/1920x1080", text: "Counter Strike 2" },
  { imageUrl: "https://placehold.co/1920x1080", text: "Roblox" },
];

export function ImageCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
        containScroll: "trimSnaps",
      }}
      className="w-full max-w-96 md:max-w-xl lg:max-w-xl relative"
    >
      <CarouselPrevious className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselContent className="flex gap-4">
        {items.map((item, index) => (
          <CarouselItem key={index} className="w-full md:w-1/2">
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <CardDescription className="mb-2">
                    <img
                      src={item.imageUrl}
                      alt={item.text}
                      className="w-full h-auto rounded-md"
                    />
                  </CardDescription>
                  <CardFooter className="w-full flex justify-center pb-0">
                    {item.text}
                  </CardFooter>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}

export default ImageCarousel;
