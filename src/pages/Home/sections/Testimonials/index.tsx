import TestimonialCard from "@/components/TestimonialCard";
import Padded from "@/components/Padded";

import testimonials from "./_constants";

const Testimonials = () => {
  return (
    <section>
      <Padded className="pt-20">
        <div className="pb-12">
          <h2 className="text-3xl uppercase font-bold pb-2">Testimonials</h2>
          <p className="text-charcoal-30">
            Hear from inspiring voices who advocate for equality and change
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              {...testimonial}
              key={`${testimonial.author}-${idx}`}
            />
          ))}
        </div>
      </Padded>
    </section>
  );
};

export default Testimonials;
