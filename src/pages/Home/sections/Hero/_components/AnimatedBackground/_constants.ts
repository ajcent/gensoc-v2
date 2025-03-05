import { Variants } from "motion/react";

const variants: { className: string; animation: Variants }[] = [
  {
    className: "w-80 h-80 bg-blue-100",
    animation: {
      initial: {
        top: 0,
        left: 0,
        translateX: -20,
        translateY: 0,
        scale: 1,
      },
      animate: {
        translateX: 50,
        translateY: -30,
        scale: 0.8,
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  },
  {
    className: "w-28 h-28 bg-pink-200",
    animation: {
      initial: {
        bottom: 0,
        left: 0,
        translateX: -50,
        translateY: 50,
        scale: 1,
      },
      animate: {
        scale: 1.2,
        translateX: -40,
        translateY: -20,
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
          repeatDelay: 2,
        },
      },
    },
  },
  {
    className: "w-40 h-40 bg-yellow-100",
    animation: {
      initial: {
        top: 0,
        right: 0,
        translateX: 125,
        translateY: 45,
        scale: 1,
      },
      animate: {
        translateX: 170,
        translateY: -10,
        scale: 0.4,
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        },
      },
    },
  },
];

export default variants;
