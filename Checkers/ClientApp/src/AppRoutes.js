import Checkers from "./components/Checkers";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/checkers',
    element: <Checkers />
  }
];

export default AppRoutes;
