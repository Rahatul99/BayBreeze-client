import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/allToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ViewDetails from "../Pages/Home/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'alltoys',
                element: <AllToys />
            },
            {
                path: 'addatoy',
                element: <AddToy />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'viewdetails/:id',
                element: <ViewDetails />,
                loader: ({params}) => fetch(`toysData.json/${params.id}`)
            },
        ]
    },
]);

export default router