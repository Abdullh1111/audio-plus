
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../pages/mainlayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router