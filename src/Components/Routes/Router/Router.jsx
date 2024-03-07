import { createBrowserRouter } from "react-router-dom";
import LayOut from "../MainLayOut/LayOut";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router