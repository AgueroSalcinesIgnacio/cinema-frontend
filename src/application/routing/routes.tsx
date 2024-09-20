import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "../modules/common/PageNotFound";
import Movies from "../modules/movies/Movies";
import Login from "../modules/session/login/Login";
import Register from "../modules/session/register/Register";
import LayoutComponent from "./components/LayoutComponent";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <LayoutComponent />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
