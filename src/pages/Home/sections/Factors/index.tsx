import ImageTextBlock from "@/components/ImageTextBlock";

import { articles } from "./_constants";
import { isDarkOrLight, isEven } from "./_lib";

const Factors = () => {
  return (
    <section>
      {articles.map((article, count) => (
        <ImageTextBlock
          key={`${article.heading}-${count}`}
          colorScheme={isDarkOrLight(count)}
          reverse={!isEven(count)}
          data={article}
        />
      ))}
    </section>
  );
};

export default Factors;
