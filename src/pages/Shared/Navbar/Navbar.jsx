import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li className="text-2xl uppercase"><Link to="/">Home</Link></li>
        <li className="text-2xl uppercase"><Link to="/menu">Our Menu</Link></li>
        <li className="text-2xl uppercase"><Link to="/order/salad">Our Food</Link></li>
        <li className="text-2xl uppercase"><Link to="/contact">Contact Us</Link></li>
        <li className="text-2xl uppercase"><Link to="/secret">Secret</Link></li>

        {
            user ?
                <>
                <span>{user?.displayName}</span><button onClick={handleLogOut} className="btn text-xl uppercase btn-ghost">Log Out</button></> :
                <> <li className="text-2xl"><Link to="/login">Login</Link></li></>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;