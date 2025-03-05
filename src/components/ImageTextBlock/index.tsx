import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Padded from "@/components/Padded";
import Image from "@/components/Image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ColorScheme = "light" | "dark";

export interface ArticleDTO {
  heading: string;
  content: string;
  imgLink: string;
  to: string;
}

interface ImageTextBlockProps {
  colorScheme?: ColorScheme;
  reverse?: boolean;
  data: ArticleDTO;
}

const colorSchemeClasses = {
  light: {
    bg: "bg-cloud",
    bgSecondary: "bg-charcoal",
    textPrimary: "text-charcoal",
    textSecondary: "text-charcoal-30",
  },
  dark: {
    bg: "bg-charcoal",
    bgSecondary: "bg-cloud",
    textPrimary: "text-cloud",
    textSecondary: "text-cloud-70",
  },
};

const ImageTextBlock = (props: ImageTextBlockProps) => {
  const { colorScheme = "light", reverse = false, data } = props;
  const { heading, content, imgLink, to } = data;
  const scheme = colorSchemeClasses[colorScheme];

  return (
    <article
      className={cn(
        "flex lg:h-[30rem] flex-col",
        scheme.bg,
        `${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`
      )}
    >
      <Padded className="flex-[2] flex flex-col gap-8 h-full justify-center">
        <h3 className={cn("font-semibold text-3xl", scheme.textPrimary)}>
          {heading}
        </h3>
        <p className={cn(scheme.textSecondary, "leading-loose")}>{content}</p>
        <Separator />

        <motion.div whileHover="hover" className="w-fit" role="button">
          <Link
            to={to}
            className={cn(
              "uppercase font-semibold relative w-fit",
              scheme.textPrimary
            )}
          >
            Read more
            <motion.span
              initial={{
                width: 0,
              }}
              variants={{ hover: { width: "100%" } }}
              transition={{ duration: 1 / 4 }}
              className={cn(
                "absolute h-[2px] -bottom-2 left-0",
                scheme.bgSecondary
              )}
            />
          </Link>
        </motion.div>
      </Padded>

      <div className="lg:flex-[3] lg:h-full h-52 sm:h-96 bg-blue-300">
        <Image className="" src={imgLink} alt={heading} />
      </div>
    </article>
  );
};

export default ImageTextBlock;
