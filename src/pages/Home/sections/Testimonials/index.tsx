import InViewSlide from "@/components/animations/InViewSlide";
import TestimonialCard from "@/components/TestimonialCard";
import Padded from "@/components/Padded";

import { testimonials, content } from "./_constants";

const Testimonials = () => {
  return (
    <section>
      <Padded className="pt-20">
        <div className="pb-12">
          <InViewSlide direction="right">
            <h2 className="text-3xl uppercase font-bold pb-2 text-charcoal-main">
              {content.heading}
            </h2>
          </InViewSlide>
          <InViewSlide direction="right" delay={1}>
            <p className="text-charcoal-secondary">{content.description}</p>
          </InViewSlide>
        </div>
        <div className="flex flex-col w-full md:flex-row gap-8">
          {testimonials.map((testimonial, idx) => (
            <InViewSlide
              className="flex-1 flex"
              delay={idx}
              direction="up"
              key={`${testimonial.author}-${idx}`}
            >
              <TestimonialCard {...testimonial} />
            </InViewSlide>
          ))}
        </div>
      </Padded>
    </section>
  );
};

export default Testimonials;
