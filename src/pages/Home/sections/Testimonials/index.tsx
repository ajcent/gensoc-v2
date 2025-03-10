import TestimonialCard from "@/components/TestimonialCard";
import Padded from "@/components/Padded";
import useAnimationSequence from "@/hooks/useAnimation";

import { testimonials, content } from "./_constants";
import animation from "./_animation";

const Testimonials = () => {
  const scope = useAnimationSequence(animation);

  return (
    <section ref={scope} className="relative">
      <Padded className="pt-20">
        <div className="pb-12" id="testimonial-content">
          <h2 className=" text-3xl uppercase font-bold pb-2 text-charcoal-main opacity-0">
            {content.heading}
          </h2>
          <p className="text-charcoal-secondary opacity-0">
            {content.description}
          </p>
        </div>
        <div className="flex flex-col w-full md:flex-row gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard {...testimonial} key={idx} className="opacity-0" />
          ))}
        </div>
      </Padded>
    </section>
  );
};

export default Testimonials;
