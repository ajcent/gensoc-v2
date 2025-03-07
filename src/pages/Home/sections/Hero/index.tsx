import { Link } from "react-router-dom";

import Padded from "@/components/Padded";
import AnimatedButton from "@/components/AnimatedButton";
import InViewSlide from "@/components/animations/InViewSlide";

import AnimatedBackground from "./_components/AnimatedBackground";
import hero from "./_constants";

const Hero = () => {
  return (
    <section className="overflow-hidden relative">
      <Padded className="text-center lg:h-[30rem] flex  flex-col justify-center items-center">
        <InViewSlide delay={3}>
          <p>{hero.contents[0]}</p>
        </InViewSlide>
        <blockquote className="my-6">
          <p className="italic text-[clamp(2rem,4vw,3rem)] font-semibold">
            <AnimatedBackground />
            <InViewSlide delay={1} direction="up">
              <span>{hero.quote}</span>
            </InViewSlide>
          </p>
          <InViewSlide delay={2} direction="up">
            <strong className="uppercase text-charcoal-30">
              - {hero.author} -
            </strong>
          </InViewSlide>
        </blockquote>
        <Link
          to="https://en.wikipedia.org/wiki/Simone_de_Beauvoir"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <AnimatedButton className="rounded-none button-p-lg">
            Explore Simone’s Legacy
          </AnimatedButton>
        </Link>
      </Padded>
    </section>
  );
};

export default Hero;
