import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Pie from "./pages/Pie";
import Bar from "./pages/Bar";
import Line from "./pages/Line";
import StopWatch from "./pages/StopWatch";
import Coupon from "./pages/Coupon";
import Toss from "./pages/Toss";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "admin",
    element: <MainLayout />, 
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "chart",
        children: [
          {
            path: "pie",
            element: <Pie/>,
          },
          {
            path: "bar",
            element: <Bar/>,
          },
          {
            path: "line",
            element: <Line/>,
          },
        ]
      },
      {
        path: "app",
        children: [
          {
            path: "stopwatch",
            element: <StopWatch/>,
          },
          {
            path: "coupon",
            element: <Coupon/>,
          },
          {
            path: "toss",
            element: <Toss/>,
          },
        ]
      }
    ],
  },
]);

export default router;