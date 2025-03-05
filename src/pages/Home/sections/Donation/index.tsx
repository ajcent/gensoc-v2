import { Link } from "react-router-dom";

import Image from "@/components/Image";
import OverlayText from "@/components/OverlayText";
import Padded from "@/components/Padded";
import UnwomenLogo from "@/components/icons/Unwomen";
import AnimatedButton from "@/components/AnimatedButton";

import donation from "./_constants";

const Donation = () => {
  return (
    <section>
      <Padded className="flex flex-col-reverse md:flex-row items-center gap-8">
        <header className="flex-1">
          <h2 className="uppercase text-3xl font-bold pb-4">
            {donation.heading}
          </h2>
          <p className="text-charcoal-30 pb-8 leading-loose">
            {donation.description}
          </p>
          <div>
            <Link
              to="https://donate.unwomen.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedButton className="bg-blue-500 rounded-none button-p-lg uppercase font-bold text-lg">
                {donation.buttonTxt}
              </AnimatedButton>
            </Link>
          </div>
        </header>
        <figure className="h-[20rem] flex-1">
          <OverlayText
            bgComponent={<Image src={donation.imageLink} />}
            textComponent={<UnwomenLogo />}
          />
        </figure>
      </Padded>
    </section>
  );
};

export default Donation;
