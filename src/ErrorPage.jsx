import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl ">Oops! Page not found.</p>
            <button className="px-4 py-2 mt-4 bg-blue-500 rounded-md hover:bg-blue-600">
               <Link to="/">Go back</Link>
            </button>
        </div>
    );
};

export default ErrorPage;