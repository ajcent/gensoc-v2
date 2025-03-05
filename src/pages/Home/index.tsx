import Factors from "./sections/Factors";
import Facts from "./sections/Facts";
import Donation from "./sections/Donation";
import Testimonials from "./sections/Testimonials";
import Trivia from "./sections/Trivia";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Trivia />
      <Testimonials />
      <Facts />
      <Factors />
      <Donation />
    </main>
  );
};

export default Home;
