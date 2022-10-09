import { createBrowserRouter, Navigate } from "react-router-dom";
import { NotFound } from "@components/NotFound";
import { Character } from "@pages/Character";
import { Layout } from "@pages/Layout";
import { People } from "@pages/People";
import { Planet } from "@pages/Planet";
import { Planets } from "@pages/Planets";
import { Route } from "@domain/Route";
import { Vehicles } from "@pages/Vehicles";
import { Vehicle } from "@pages/Vehicle";

const Redirect = () => <Navigate to="/people" />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Redirect />,
      },
      {
        path: Route.People + "/:id",
        element: <Character />,
      },
      {
        path: Route.People,
        element: <People />,
      },
      {
        path: Route.Planets + "/:id",
        element: <Planet />,
      },
      {
        path: Route.Planets,
        element: <Planets />,
      },
      {
        path: Route.Vehicles + "/:id",
        element: <Vehicle />,
      },
      {
        path: Route.Vehicles,
        element: <Vehicles />,
      },
    ],
  },
]);

export default router;
