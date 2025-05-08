import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
///layout
const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));
//pages
const Home = lazy(() => import("@pages/home"));
const Wishlist = lazy(() => import("@pages/wishlist"));
const Categories = lazy(() => import("@pages/categories"));
const Cart = lazy(() => import("@pages/cart"));
const Products = lazy(() => import("@pages/products"));
const AboutUs = lazy(() => import("@pages/aboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Error = lazy(() => import("@pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="carregando, por favor aguarde...">
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <Products />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <Login />
          </Suspense>
        ),
      },
      {
        path: "registro",
        element: (
          <Suspense fallback="carregando, por favor aguarde...">
            <Register />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
