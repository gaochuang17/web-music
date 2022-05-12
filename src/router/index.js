import React from "react";
import { Navigate } from "react-router-dom";

import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";
import Recommend from "../pages/discover/c-pages/recommend";
import Ranking from "../pages/discover/c-pages/ranking";
import Songs from "../pages/discover/c-pages/songs";
import Djradio from "../pages/discover/c-pages/djradio";
import Artist from "../pages/discover/c-pages/artist";
import Album from "../pages/discover/c-pages/album";

const routes = [
  {
    path: "/",
    exact: true,
    // element: <Discover />,
    // render: () => {
    //   return <Navigate to="/discover" />;
    // },
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    exact: true,
    element: <Discover />,
    children: [
      {
        path: "/discover",
        exact: true,
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/songs",
        element: <Songs />,
      },
      {
        path: "/discover/djradio",
        element: <Djradio />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
    ],
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
