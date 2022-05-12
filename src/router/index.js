import React from "react";
// import { Navigate } from "react-router-dom";

import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Discover />,
    // render: () => <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    // exact: true,
    element: <Discover />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/friend",
    element: <Friend />,
  },
];

export default routes;
