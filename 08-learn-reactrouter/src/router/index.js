import React from "react";
import Home from "../pages/Home";
// import About from "../pages/About";
import "../style.css";
// import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import HomeRanking from "../pages/HomeRanking";
import HomeRecommend from "../pages/HomeRecommend";
import Category from "../pages/Category";
import Order from "../pages/Order";
import HomeSongMenu from "../pages/HomeSongMenu";
import Detail from "../pages/Detail";
import User from "../pages/User";
import { Navigate } from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));
const Login = React.lazy(() => import("../pages/Login"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend" />,
      },
      {
        path: "/home/recommend",
        element: <HomeRecommend />,
      },
      {
        path: "/home/ranking",
        element: <HomeRanking />,
      },
      {
        path: "/home/songmenu",
        element: <HomeSongMenu />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
