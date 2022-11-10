import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import Blog from "../components/Pages/Blog/Blog";
import Home from "../components/Pages/Home/Home";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import Allreview from "../components/Pages/Review/Allreview";
import Service from "../components/Pages/Service/Service";
import ServiceDetails from "../components/Pages/ServiceDetails/ServiceDetails";

import Login from "../components/Pages/SignInUp/Login";
import Register from "../components/Pages/SignInUp/Register";
import Update from "../components/Udate/Update";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/home')
              
            },
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
            {
                path:'/services',
                element:<Service></Service>,
                loader:()=>fetch('http://localhost:5000/services')
              
            },

            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
              
            },
            {
                path: '/reviews',
                element: <Allreview></Allreview>
              },
              {
                path: '/myreviews',
                element:<MyReviews></MyReviews>
              },
              {
                path:'/myreviews/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/myreviews/${params.id}`)
              }
        ]
    }
])

export default router;