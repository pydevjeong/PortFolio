import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProjectLayout from "./components/ProjectPage/ProjectLayout";
import FirstProject from "./components/ProjectPage/FirstProject";
import SecondProject from "./components/ProjectPage/SecondProject";
import ThirdProject from "./components/ProjectPage/ThirdProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/project",
    element: <ProjectLayout />,
  },
  {
    path: "/firstProject",
    element: <FirstProject />,
  },
  {
    path: "/secondProject",
    element: <SecondProject />,
  },
  {
    path: "/thirdProject",
    element: <ThirdProject />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
