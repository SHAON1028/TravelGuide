import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Login from "../components/Pages/SignInUp/Login";
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
        ]
    }
])

export default router;