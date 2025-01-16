import { createBrowserRouter } from "react-router-dom";
import Index from "../src/pages"; 
import Venta_equipos from "../src/pages/venta_equipos";
const router = createBrowserRouter([
    {
    path:"/",
    element:<Index/>,
},
{
    path:"/venta_equipos",
    element:<Venta_equipos/>,
},
])
export default router