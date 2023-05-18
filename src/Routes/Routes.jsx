import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/allToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";

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
            }
        ]
    },
]);

export default router