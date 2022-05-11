import React, { memo } from "react";
// import { renderRoutes } from "react-router-config";
import { useRoutes } from "react-router-dom";

import routes from "./router";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

const App = memo(() => {
  return (
    <>
      <AppHeader></AppHeader>
      {useRoutes(routes)}
      <AppFooter></AppFooter>
    </>
  );
});

export default App;
