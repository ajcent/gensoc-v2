import { Link } from "react-router-dom";
import { motion, Variants } from "motion/react";

import Padded from "@/components/Padded";
import AnimatedButton from "@/components/AnimatedButton";

import AnimatedBackground from "./_components/AnimatedBackground";
import hero from "./_constants";

const slideUp: Variants = {
  initial: { opacity: 0, translateY: 20 },
  animate: (delay: number) => ({
    opacity: 1,
    translateY: 0,
    transition: { delay: 0.4 * delay },
  }),
};

const Hero = () => {
  return (
    <section className="overflow-hidden relative">
      <Padded className="text-center lg:h-[30rem] flex  flex-col justify-center items-center">
        <p className="relative z-10">{hero.contents[0]}</p>
        <blockquote className="my-6">
          <motion.p
            variants={slideUp}
            initial="initial"
            animate="animate"
            custom={1}
            className="italic text-[clamp(2rem,4vw,3rem)] relative"
          >
            <AnimatedBackground />
            <span className="relative">{hero.quote}</span>
          </motion.p>
          <motion.strong
            variants={slideUp}
            initial="initial"
            animate="animate"
            custom={2}
            className="uppercase text-charcoal-30 relative inline-block"
          >
            - {hero.author} -
          </motion.strong>
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
