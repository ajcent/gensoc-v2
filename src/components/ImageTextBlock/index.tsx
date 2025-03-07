import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Padded from "@/components/Padded";
import Image from "@/components/Image";
import { Separator } from "@/components/ui/separator";

interface ImageTextBlockProps {
  heading: string;
  content: string;
  imgLink: string;
  to: string;
}

const ImageTextBlock = (props: ImageTextBlockProps) => {
  const { heading, content, imgLink, to } = props;

  return (
    <article className="group flex flex-col lg:flex-row even:lg:flex-row-reverse lg:h-[30rem] bg-cloud-main odd:bg-charcoal-main">
      <Padded className="flex flex-col gap-6 flex-[2] justify-center h-full">
        <h3 className="text-3xl font-semibold uppercase leading-none group-odd:text-cloud-main text-charcoal-main">
          {heading}
        </h3>
        <p className="leading-loose group-odd:text-cloud-secondary text-charcoal-secondary">
          {content}
        </p>

        <Separator className="group-even:bg-charcoal-light bg-cloud-light" />

        <motion.div whileHover="hover" className="w-fit" role="link">
          <Link
            to={to}
            className="relative font-semibold uppercase w-fit group-odd:text-cloud-main text-charcoal-main"
          >
            Read more
            <motion.span
              initial={{ width: 0 }}
              variants={{ hover: { width: "100%" } }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 -bottom-2 h-[2px] bg-green-400"
            />
          </Link>
        </motion.div>
      </Padded>

      <figure className="h-52 sm:h-96 lg:h-full lg:flex-[3] bg-gray-400">
        <Image src={imgLink} alt={heading} />
      </figure>
    </article>
  );
};

export default ImageTextBlock;
