import { Link } from "react-router-dom";

import routes from "@/constants/routes";
import Padded from "@/components/Padded";
import AnimatedButton from "@/components/AnimatedButton";

const TopNavigation = () => {
  return (
    <Padded className="!py-4">
      <nav className="flex items-center">
        <h1 className="uppercase font-bold text-lg">Moral Matrix</h1>
        <ul className="lg:flex ml-auto gap-8 mr-8 min-[0px]:hidden">
          <li>
            <Link to={routes.EDUCATION}>Education</Link>
          </li>
          <li>
            <Link to={routes.CULTURE}>Culture</Link>
          </li>
          <li>
            <Link to={routes.WORKPLACE}>Workplace</Link>
          </li>
          <li>
            <Link to={routes.RELATIONSHIP}>Relationship</Link>
          </li>
          <li>
            <Link to={routes.POLITICS}>Politics</Link>
          </li>
        </ul>

        <AnimatedButton className="min-[0px]:hidden lg:inline-block uppercase rounded-none">
          Act Now
        </AnimatedButton>
      </nav>
    </Padded>
  );
};

export default TopNavigation;
