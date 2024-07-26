import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

import "./index.css";
import Bangkok from "./mod/Bangkok";
import Chiangmai from "./mod/Chiangmai";

import PlaceDetail from "./mod/PlaceDetail";
import Phuket from "./mod/Phuket";
import Pattaya from "./mod/Pattaya";
import Krabi from "./mod/Krabi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Bangkok",
    element: <Bangkok />,
  },
  {
    path: "Chiangmai",
    element: <Chiangmai />,
  },
  {
    path: "Phuket",
    element: <Phuket />,
  },
  {
    path: "Pattaya",
    element: <Pattaya />,
  },
  {
    path: "Krabi",
    element: <Krabi />,
  },
  {
    path: "PlaceDetail",
    element: <PlaceDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
