import {
  AnimationOptions,
  DOMKeyframesDefinition,
  ElementOrSelector,
  useAnimate,
  useInView,
  UseInViewOptions,
} from "motion/react";
import { useEffect, useRef } from "react";

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  AnimationOptions?
];

export type AnimationParams = AnimateParams | AnimationParams[];

const useAnimationSequence = (
  keyframes: AnimationParams[],
  inViewOptions?: UseInViewOptions
) => {
  const mounted = useRef(true);
  const [scope, animate] = useAnimate();
  const isInView = useInView(
    scope,
    inViewOptions ?? { once: true, amount: 0.8 }
  );

  useEffect(() => {
    mounted.current = true;
    if (isInView) handleAnimate();

    return () => {
      mounted.current = false;
    };
  }, [isInView]);

  const processAnimation = async (animation: AnimationParams) => {
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async (a) => {
          await processAnimation(a as AnimationParams);
        })
      );
    } else {
      await animate(...(animation as AnimateParams));
    }
  };

  const handleAnimate = async () => {
    for (const animation of keyframes) {
      if (!mounted.current) return;

      await processAnimation(animation);
    }
  };

  return scope;
};

export default useAnimationSequence;
