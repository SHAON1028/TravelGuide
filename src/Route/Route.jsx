import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Blog from "../components/Pages/Blog/Blog";
import Login from "../components/Pages/SignInUp/Login";
import Register from "../components/Pages/SignInUp/Register";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
              
            },
            {
                path:'/register',
                element:<Register></Register>
              
            },
            {
                path:'/blog',
                element:<Blog></Blog>
              
            },
        ]
    }
])

export default router;