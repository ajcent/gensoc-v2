import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Culture, NotFound } from "@/pages";
import routes from "@/constants/routes";
import HomepageLayout from "@/layouts/HomepageLayout";

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomepageLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.CULTURE} element={<Culture />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
