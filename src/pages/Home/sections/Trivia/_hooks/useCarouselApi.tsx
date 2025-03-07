import { useEffect, useState } from "react";

import { type CarouselApi } from "@/components/ui/carousel";

const useCarouselApi = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  console.log(current);
  console.log(count);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
    // api?.scrollTo(2); //I can control which slide to show with this
  }, [api]);

  return [api, setApi] as const;
};

export default useCarouselApi;
