import { motion, Variants } from "framer-motion";
import animationConfig from "../_constants";

interface BaseInViewSlideProps {
  delay?: number;
  distance?: number;
  direction?: "left" | "right" | "up" | "down";
}

interface InViewSlideProps extends BaseInViewSlideProps {
  children: React.ReactNode;
  threshold?: number;
}

const inViewSlideVariant: Variants = {
  initial: ({ direction, distance }: Required<BaseInViewSlideProps>) => {
    switch (direction) {
      case "left":
        return { opacity: 0, translateX: -distance };
      case "right":
        return { opacity: 0, translateX: distance };
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
    transition: { delay: animationConfig.delayScalar * custom.delay },
  }),
};

const InViewSlide = (props: InViewSlideProps) => {
  const {
    children,
    delay = 0,
    distance = animationConfig.baseDistance,
    direction = animationConfig.baseDir,
    threshold = animationConfig.baseThreshold,
  } = props;

  return (
    <motion.span
      className="inline-block"
      custom={{ delay, direction, distance }}
      variants={inViewSlideVariant}
      // initial="initial"
      // whileInView="animate"
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.span>
  );
};

export default InViewSlide;
