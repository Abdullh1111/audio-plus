import Mainlayout from "@/pages/mainlayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>
    }
])

export default router