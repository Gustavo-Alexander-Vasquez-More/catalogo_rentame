import { createBrowserRouter } from "react-router-dom";
import Index from "../src/pages";
import Page_products from "../src/pages/page_products";
import About_us from "../src/pages/about_us";
import Refacciones from '../src/pages/refacciones.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/detalle-producto",
    element: <Page_products/>,
  },
  {
    path: "/about_us",
    element: <About_us/>,
  },
  {
    path: "/refacciones",
    element: <Refacciones/>,
  },
]);
export default router;
