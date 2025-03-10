import { Link } from "react-router-dom";

import Padded from "@/components/Padded";
import AnimatedButton from "@/components/AnimatedButton";
import useAnimationSequence from "@/hooks/useAnimation";

import AnimatedBackground from "./_components/AnimatedBackground";
import hero from "./_constants";
import animation from "./_animation";

const Hero = () => {
  const scope = useAnimationSequence(animation);

  return (
    <section ref={scope} className="overflow-hidden relative">
      <AnimatedBackground />
      <Padded className="text-center h-[30rem] flex flex-col justify-center items-center">
        <p id="hero-content" className="text-charcoal-main opacity-0">
          {hero.contents[0]}
        </p>

        <blockquote className="my-6" id="hero-quote">
          <p className="italic text-[clamp(2rem,4vw,3rem)] font-semibold opacity-0">
            {hero.quote}
          </p>
          <footer className="opacity-0">
            <cite className="uppercase not-italic font-bold text-charcoal-secondary">
              - {hero.author} -
            </cite>
          </footer>
        </blockquote>

        <Link
          to="https://en.wikipedia.org/wiki/Simone_de_Beauvoir"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <AnimatedButton className="rounded-none button-p-lg scale-0">
            Explore Simone’s Legacy
          </AnimatedButton>
        </Link>
      </Padded>
    </section>
  );
};

export default Hero;
