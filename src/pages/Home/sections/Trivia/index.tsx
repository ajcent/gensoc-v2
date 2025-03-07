import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import InViewSlide from "@/components/animations/InViewSlide";
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
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
        setApi={setApi}
        opts={{ loop: true }}
        className="relative"
      >
        <CarouselContent className="h-[25rem] lg:h-[33rem]">
          {slides.map((slide, idx) => (
            <CarouselItem
              key={`${slide.content}-${idx}`}
              className="cursor-ew-resize select-none"
            >
              <OverlayText
                bgComponent={<Image src={slide.imgLink} />}
                textComponent={
                  <InViewSlide direction="up">
                    <p>{slide.content}</p>
                  </InViewSlide>
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <>
          <FloatingButton
            className="top-0 left-0 text-cloud-main"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft size={25} />
          </FloatingButton>
          <FloatingButton
            className="top-0 right-0 text-cloud-main"
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
