import React, { memo } from "react";
import { Provider } from "react-redux";
// import { renderRoutes } from "react-router-config";
import { useRoutes } from "react-router-dom";

import routes from "./router";
import store from "./store";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import PlayerBar from "@/pages/player/app-player-bar";

const App = memo(() => {
  return (
    <Provider store={store}>
      <AppHeader></AppHeader>
      {useRoutes(routes)}
      <AppFooter></AppFooter>
      <PlayerBar></PlayerBar>
    </Provider>
  );
});

export default App;
