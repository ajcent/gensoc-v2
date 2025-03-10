import { AnimationParams } from "@/hooks/useAnimation";

const animation: AnimationParams[] = [
  ["#hero-quote p", { opacity: [0, 1], y: [25, 0] }, { duration: 0.3 }],
  ["#hero-quote footer", { opacity: 1, y: [25, 0] }, { duration: 0.3 }],
  ["#hero-content", { opacity: 1 }, { duration: 0.3 }],
  ["button", { scale: [0, 1.05, 1] }],
];

export default animation;
