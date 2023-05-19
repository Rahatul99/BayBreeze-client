import { Link, useLocation } from "react-router-dom";
import Logo from '../../../assets/Logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div className="navbar bg-gray-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className={location.pathname === '/' ? 'active' : ''}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={location.pathname === '/allToys' ? 'active' : ''}>
                                <Link to="/allToys">All Toys</Link>
                            </li>
                            <li className={location.pathname === '/myToys' ? 'active' : ''}>
                                <Link to="/myToys">My Toys</Link>
                            </li>
                            <li className={location.pathname === '/addedToy' ? 'active' : ''}>
                                <Link to="/addatoy">Add A Toy</Link>
                            </li>
                            <li className={location.pathname === '/blogs' ? 'active' : ''}>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link to="/" className="btn-ghost">
                            <img src={Logo} className="w-12 mr-2" alt="Logo" />
                        </Link>
                        <a className="btn btn-ghost upper-case md:font-bold md:text-2xl brandName">BayBreeze Playthings</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/">Home</Link>
                        </li>
                        {user ?
                            <>
                                <li className={location.pathname === '/allToys' ? 'active' : ''}>
                                    <Link to="/allToys">All Toys</Link>
                                </li>
                                <li className={location.pathname === '/myToys' ? 'active' : ''}>
                                    <Link to="/myToys">My Toys</Link>
                                </li>
                                <li className={location.pathname === '/addedToy' ? 'active' : ''}>
                                    <Link to="/addatoy">Add A Toy</Link>
                                </li>
                            </>
                            : ''
                        }
                        <li className={location.pathname === '/blogs' ? 'active' : ''}>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {
                            user ?
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} title={user?.displayName} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <Link to="/login" className="btn sm:btn-sm md:btn-md">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;