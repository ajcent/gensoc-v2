import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  motion,
  TargetAndTransition,
  VariantLabels,
  Variants,
} from "framer-motion";
import { forwardRef } from "react";

type MotionType = TargetAndTransition | VariantLabels | undefined;

interface AnimatedButtonProps extends ButtonProps {
  whileHover?: MotionType;
  whileTap?: MotionType;
}

const buttonVariant: Variants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, whileHover, whileTap, children, ...props }, ref) => {
    return (
      <motion.div
        variants={buttonVariant}
        whileHover={whileHover || "whileHover"}
        whileTap={whileTap || "whileTap"}
        className="inline-block"
      >
        <Button ref={ref} className={cn(className)} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
