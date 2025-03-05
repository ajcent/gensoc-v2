import { Outlet } from "react-router-dom";

import TopNavigation from "@/components/TopNavigation";

function HomepageLayout() {
  return (
    <div>
      <TopNavigation />
      <Outlet />
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default HomepageLayout;
