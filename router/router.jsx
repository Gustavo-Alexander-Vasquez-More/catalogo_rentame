import { createBrowserRouter } from "react-router-dom";
import Index from "../src/pages"; 

const router = createBrowserRouter([
    {
    path:"/",
    element:<Index/>,
},

])
export default router