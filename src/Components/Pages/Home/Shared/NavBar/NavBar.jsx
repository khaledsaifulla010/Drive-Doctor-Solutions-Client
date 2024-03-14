
import { Link } from 'react-router-dom';
import companyLogo from '../../../../../assets/images/checkout/CompanyLogo.jpg'
const NavBar = () => {
    return (
        <div className="m-8 border-2 rounded-lg">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li>

                                <Link to={'/'}><li><a>Home</a></li></Link>
                                <Link to={'/services'}><li><a>Services</a></li></Link>
                                <Link to={'/blog'}><li><a>Blog</a></li></Link>
                                <Link to={'/about'}><li><a>About</a></li></Link>
                                <Link to={'/contact'}><li><a>Contact</a></li></Link>
                                <Link to={'/login'}><li><a>Log In </a></li></Link>
                                <Link to={'/signUp'}><li><a>Sign Up</a></li></Link>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <img className='lg:w-[100px] border-2 rounded-xl' src={companyLogo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-lg">
                        <Link to={'/'}><li><a>Home</a></li></Link>
                        <Link to={'/services'}><li><a>Services</a></li></Link>
                        <Link to={'/blog'}><li><a>Blog</a></li></Link>
                        <Link to={'/about'}><li><a>About</a></li></Link>
                        <Link to={'/contact'}><li><a>Contact</a></li></Link>
                        <Link to={'/login'}><li><a>Log In</a></li></Link>
                        <Link to={'/signUp'}><li><a>Sign Up</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-orange-500 font-bold text-white text-lg">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;