import { motion } from "motion/react";

import variants from "./_constants";

const AnimatedBackground = () => {
  return (
    <span className="absolute w-80 h-80 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 -z-10">
      {variants.map((variant, idx) => (
        <motion.span
          key={idx}
          variants={variant.animation}
          initial="initial"
          animate="animate"
          className={`absolute rounded-full blur-xl mix-blend-multiply ${variant.className}`}
        />
      ))}
    </span>
  );
};

export default AnimatedBackground;
