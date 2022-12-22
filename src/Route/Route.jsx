import { createBrowserRouter } from "react-router-dom";



import AddService from "../components/Pages/AddService/AddService";
import Blog from "../components/Pages/Blog/Blog";
import Home from "../components/Pages/Home/Home";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import Allreview from "../components/Pages/Review/Allreview";
import Service from "../components/Pages/Service/Service";
import ServiceDetails from "../components/Pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../components/Error/ErrorPage"
import Login from "../components/Pages/SignInUp/Login";
import Register from "../components/Pages/SignInUp/Register";
import Update from "../components/Udate/Update";
import Main from "../layout/Main";
import PrivateRoute from "../Route/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://service-update.vercel.app/home')

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/services',
                element: <Service></Service>,


            },
            {
                path: '/addservice',
                element: <AddService></AddService>,


            },

            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://service-update.vercel.app/services/${params.id}`)

            },
            {
                path: '/reviews',
                element: <Allreview></Allreview>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/myreviews/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://service-update.vercel.app/myreviews/${params.id}`)
            }
        ]
    },

])

export default router;