import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Details from "../components/details/Details.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);
