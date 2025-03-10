import Padded from "@/components/Padded";
import Image from "@/components/Image";
import useAnimationSequence from "@/hooks/useAnimation";

import section from "./_constants";
import animation from "./_animation";
import AnimatedBackground from "../Hero/_components/AnimatedBackground";

const Facts = () => {
  const scope = useAnimationSequence(animation);

  return (
    <section ref={scope} className="relative">
      <AnimatedBackground />

      <article className="flex flex-col lg:flex-row items-center lg:h-[30rem] xl:h-[35rem]">
        <Padded className="text-center lg:text-left">
          <h6 className="text-charcoal-secondary opacity-0">
            {section.description}
          </h6>
          <p className="text-destructive font-black leading-none text-[clamp(1rem,17vw+1rem,15rem)] opacity-0">
            {section.gapPercentage}
          </p>
        </Padded>
        <figure className="flex flex-1 h-full items-end justify-center opacity-0">
          <Image
            src={section.imageLink}
            className="h-96 lg:h-[22rem] xl:h-[30rem] object-contain"
          />
        </figure>
      </article>
    </section>
  );
};

export default Facts;
