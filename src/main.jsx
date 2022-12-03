import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProjectLayout from "./components/ProjectPage/ProjectLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/project",
    element: <ProjectLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
