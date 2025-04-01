import { createBrowserRouter, RouterProvider } from "react-router-dom";
///layout
import MainLayout from "../layouts/MainLayout/MainLayout";
//pages
import Home from "../pages/home";
import Cart from "@pages/cart";
import Categories from "../pages/categories";
import Products from "../pages/products";
import AboutUs from "../pages/aboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Categoria nao encontrada",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registro",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
