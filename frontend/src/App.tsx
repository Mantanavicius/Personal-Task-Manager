import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./layouts/Main";
import CreateTask from "./pages/CreateTask/CreateTask";
import Tasks from "./pages/Tasks/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <CreateTask />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
