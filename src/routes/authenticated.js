import { Routes, Route } from "react-router-dom";
import * as ROUTES from "constants/authenticatedRoutes";
import Messages from "pages/Messages";

const routesConfig = [
  {
    path: ROUTES.BASE,
    component: Messages,
  },
];

export default function AuthenticatedRoutes() {
  return (
    <Routes>
      {routesConfig?.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
