import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Components/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/LogIn/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Error from "../Error/Error";
import AllUsers from "../Layouts/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/menu", element: <Menu></Menu> },
      { path: "/order/:category", element: <Order></Order> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/signUp", element: <SignUp></SignUp> },
      { path: "/*", element: <Error></Error> },

      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      { path: "myCart", element: <MyCart></MyCart> },
      { path: "users", element: <AllUsers></AllUsers> },
    ],
  },
]);
