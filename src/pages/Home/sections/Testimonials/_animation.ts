import { AnimationParams } from "@/hooks/useAnimation";
import { stagger } from "motion/react";

const animation: AnimationParams[] = [
  [
    "#testimonial-content h2",
    { opacity: [0, 1], x: [-50, 0] },
    { duration: 0.3 },
  ],
  [
    "#testimonial-content p",
    { opacity: [0, 1], x: [-50, 0] },
    { duration: 0.3 },
  ],
  [
    "article",
    { opacity: [0, 1], y: [50, 0] },
    { duration: 0.3, delay: stagger(0.3) },
  ],
];

export default animation;
