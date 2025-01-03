import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Input from "./pages/Input";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import "./App.css";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Input />,
        },
        {
          path:'/input',
          element: <Input />,
        },
        {
          path: "/counter",
          element: <Counter />,
        },
      ],
    },
  ]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
