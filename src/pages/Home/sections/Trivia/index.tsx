import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "@/components/Image";

import slides from "./_constants";
import OverlayText from "@/components/OverlayText";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Trivia() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
    // api?.scrollTo(2); //I can control which slide to show with this
  }, [api]);

  return (
    <section className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="h-[25rem] lg:h-[33rem]">
          {slides.map((slide, idx) => (
            <CarouselItem key={`${slide.content}-${idx}`}>
              <OverlayText
                bgComponent={<Image src={slide.imgLink} />}
                textComponent={
                  <p className="text-white text-[clamp(1rem,2vw+0.5rem,2rem)] text-center font-semibold leading-relaxed p-8 sm:p-16 lg:p-40">
                    {slide.content}
                  </p>
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-0 flex justify-between items-stretch">
          <div
            className="text-cloud-70 p-2 sm:p-4 grid place-items-center" //bg-black/70
            onClick={() => api?.scrollPrev()}
            role="button"
          >
            <ChevronLeft size={25} />
          </div>

          <div
            className="text-cloud-70 p-2 sm:p-4 grid place-items-center"
            onClick={() => api?.scrollNext()}
            role="button"
          >
            <ChevronRight size={25} />
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Trivia;
