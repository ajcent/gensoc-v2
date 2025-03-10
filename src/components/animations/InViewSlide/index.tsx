import { motion, Variants } from "framer-motion";
import animationConfig from "../_constants";
import { cn } from "@/lib/utils";

interface BaseInViewSlideProps {
  delay?: number;
  distance?: number;
  direction?: "left" | "right" | "up" | "down";
}

interface InViewSlideProps
  extends BaseInViewSlideProps,
    React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  threshold?: number;
}

const inViewSlideVariant: Variants = {
  initial: ({ direction, distance }: Required<BaseInViewSlideProps>) => {
    switch (direction) {
      case "left":
        return { opacity: 0, translateX: distance };
      case "right":
        return { opacity: 0, translateX: -distance };
      case "up":
        return { opacity: 0, translateY: distance };
      case "down":
      default:
        return { opacity: 0, translateY: -distance };
    }
  },
  animate: (custom: Required<BaseInViewSlideProps>) => ({
    opacity: 1,
    translateX: 0,
    translateY: 0,
    transition: {
      delay: animationConfig.delayScalar * (custom.delay + 1),
      duration: 0.3,
    },
  }),
};

const InViewSlide = (props: InViewSlideProps) => {
  const {
    children,
    delay = 0,
    distance = animationConfig.baseDistance,
    direction = animationConfig.baseDir,
    threshold = animationConfig.baseThreshold,
    className,
  } = props;

  return (
    <motion.span
      className={cn("block", className)}
      custom={{ delay, direction, distance }}
      variants={inViewSlideVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: threshold }}
    >
      {children}
    </motion.span>
  );
};

export default InViewSlide;
