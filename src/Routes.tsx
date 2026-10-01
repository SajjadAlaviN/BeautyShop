import { createBrowserRouter } from "react-router";
import Layout from "./components/common/Layout";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Products /> },
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

export default Routes;
