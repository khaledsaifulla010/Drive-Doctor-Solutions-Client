import { createBrowserRouter } from "react-router-dom";
import LayOut from "../MainLayOut/LayOut";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import ErrorPage from "../../Pages/Home/ErrorPage/ErrorPage";
import Login from "../../Authentications/Login/Login";
import SignUp from "../../Authentications/SignUp/SignUp";





const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }

        ]
    },
]);

export default router