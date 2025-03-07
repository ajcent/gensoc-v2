import ImageTextBlock from "@/components/ImageTextBlock";

import { articles } from "./_constants";

const Factors = () => {
  return (
    <section>
      {articles.map((article, idx) => (
        <ImageTextBlock key={`${article.heading}-${idx}`} {...article} />
      ))}
    </section>
  );
};

export default Factors;
