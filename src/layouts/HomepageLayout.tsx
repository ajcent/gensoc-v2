import { Outlet } from "react-router-dom";

import TopNavigation from "@/components/TopNavigation";
import Padded from "@/components/Padded";

function HomepageLayout() {
  return (
    <div>
      <TopNavigation />
      <Outlet />
      <footer className="bg-charcoal text-cloud">
        <Padded className="w-full grid place-items-center">
          <p className="text-cloud-70">© 2025 My Website</p>
          <p className="uppercase font-bold">Work In Progress</p>
        </Padded>
      </footer>
    </div>
  );
}

export default HomepageLayout;
