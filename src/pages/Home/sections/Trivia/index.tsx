import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "@/components/Image";
import OverlayText from "@/components/OverlayText";

import slides from "./_constants";
import FloatingButton from "./_components/FloatingButton";
import useCarouselApi from "./_hooks/useCarouselApi";

export function Trivia() {
  const [api, setApi] = useCarouselApi();

  return (
    <section>
      <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
        <CarouselContent className="h-[25rem] lg:h-[33rem]">
          {slides.map((slide, idx) => (
            <CarouselItem key={`${slide.content}-${idx}`}>
              <OverlayText
                bgComponent={<Image src={slide.imgLink} />}
                textComponent={slide.content}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <>
          <FloatingButton
            className="top-0 left-0 text-cloud-70"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft size={25} />
          </FloatingButton>
          <FloatingButton
            className="top-0 right-0 text-cloud-70"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight size={25} />
          </FloatingButton>
        </>
      </Carousel>
    </section>
  );
}

export default Trivia;
