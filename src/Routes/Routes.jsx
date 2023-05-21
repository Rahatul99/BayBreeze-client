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
import PrivateRoute from "./PrivateRoute";
import ViewToyDetail from "../Pages/AllToys/ViewToyDetail/ViewToyDetail";

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
                element: <AllToys />,
                loader: () => fetch('http://localhost:5000/totalToys')
            },
            {
                path: 'addatoy',
                element:<PrivateRoute> <AddToy /> </PrivateRoute>
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
                element: <PrivateRoute><ViewDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}/${params.sub_id}`)
            },
            {
                path: 'myToys',
                element:<PrivateRoute> <MyToys /> </PrivateRoute>
            },
            {
                path: 'viewtoydetail/:id',
                element: <ViewToyDetail />,
                loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
            }
        ]
    },
]);

export default router