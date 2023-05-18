import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1464589578935-4a23731e7292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-[100%] flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-[40%] shadow-2xl glass">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={() => { }}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-block" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="my-4 text-center">
                            Don t have an account?{' '}
                            <Link className="text-violet-600 font-bold" to="/signup">
                                Sign Up
                            </Link>
                        </p>
                        <div className="divider">Or login with</div>
                        <div className="mt-6">
                            <div className="flex justify-center">
                                <button className="btn  hover:bg-orange-700  btn-circle text-center">
                                    <FaGoogle className="mr-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

