import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="hero h-[100%]" style={{ backgroundImage: `url("https://media4.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=ecf05e47oy7eru5s1wzkhxhr9vyq76vxxqq63ploi6vmpxis&ep=v1_gifs_search&rid=giphy.gif&ct=g")` }}>
            <div className="flex flex-col items-center justify-center h-screen hero-overlay bg-opacity-60">
                <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-grey-100 mb-8">Oops! The page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-error hover:btn-success text-white font-bold py-2 px-4 rounded hove">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
