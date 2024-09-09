import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "../modules/common/PageNotFound";
import Movies from "../modules/movies/Movies";
import LayoutComponent from "./components/LayoutComponent";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <LayoutComponent />,
      children: [
        {
          index: true,
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
