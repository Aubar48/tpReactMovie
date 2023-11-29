import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layouts";
import { ListMovies } from "./pages/ListMovies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies/list",
        element: <ListMovies />,
      },
    ],
  },
]);
