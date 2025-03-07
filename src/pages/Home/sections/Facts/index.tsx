import InViewSlide from "@/components/animations/InViewSlide";
import Padded from "@/components/Padded";
import Image from "@/components/Image";

import section from "./_constants";

const Facts = () => {
  return (
    <section>
      <article className="flex flex-col lg:flex-row items-center lg:h-[30rem] xl:h-[35rem]">
        <Padded className="text-center lg:text-left">
          <InViewSlide direction="right" delay={2}>
            <h6 className="text-charcoal-secondary">{section.description}</h6>
          </InViewSlide>
          <p className="text-destructive font-black leading-none text-[clamp(1rem,17vw+1rem,15rem)]">
            {section.gapPercentage}
          </p>
        </Padded>
        <figure className="flex flex-1 h-full items-end justify-center">
          <InViewSlide direction="up" threshold={0.6}>
            <Image
              src={section.imageLink}
              className="h-96 lg:h-[22rem] xl:h-[30rem] object-contain"
            />
          </InViewSlide>
        </figure>
      </article>
    </section>
  );
};

export default Facts;
