import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ViewDetails from "../Pages/Home/ViewDetails/ViewDetails";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";

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
                // loader: () => fetch('allToy.json')
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
                path: 'viewdetails/:id/:sub_id',
                element: <ViewDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}/${params.sub_id}`)
            },
            {
                path: 'myToys',
                element: <MyToys />
            }
        ]
    },
]);

export default router