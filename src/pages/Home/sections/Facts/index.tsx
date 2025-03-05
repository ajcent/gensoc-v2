import Padded from "@/components/Padded";
import Image from "@/components/Image";

const payGapData = {
  description:
    "The gender pay gap results in an annual average salary difference of $15,457.",
  gapPercentage: "16.2%",
  imageLink:
    "https://raw.githubusercontent.com/ajcent/gensoc/main/public/homepage/paygap.png",
} as const;

const Facts = () => {
  return (
    <section>
      <article className="flex flex-col lg:flex-row items-center lg:h-[30rem] xl:h-[35rem]">
        <Padded className="text-center lg:text-left">
          <h6 className="text-charcoal-30">{payGapData.description}</h6>
          <p className="text-destructive font-black leading-none text-[clamp(1rem,17vw+1rem,15rem)]">
            {payGapData.gapPercentage}
          </p>
        </Padded>
        <figure className="flex flex-1 h-full items-end">
          <Image
            src={payGapData.imageLink}
            className="h-96 lg:h-[22rem] xl:h-[30rem] object-contain"
          />
        </figure>
      </article>
    </section>
  );
};

export default Facts;
