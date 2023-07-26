import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaCalendarAlt, FaWallet, FaPhoneAlt, FaArrowCircleLeft, FaUtensils, FaUsers, FaBook } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';



const DashBoard = () => {

    const [cart] = useCart()

    // TODO: load the data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn text-white bg-[#D1A054] drawer-button lg:hidden">Open Menu</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-white">

                    {
                        isAdmin ? <>
                            {/* Sidebar content here */}
                            <li>
                                <NavLink className='uppercase' to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='uppercase' to="/dashboard/addItem"><FaUtensils></FaUtensils>add an item</NavLink>
                            </li>
                            <li>
                                <NavLink className='uppercase' to="/dashboard/manageitems"><FaWallet></FaWallet>manage items</NavLink>
                            </li>
                            {/* <li>
                                <NavLink className='uppercase' to="/dashboard/payment"><FaBook></FaBook>Manage bookings</NavLink>
                            </li> */}
                            <li>
                                <NavLink className='uppercase' to="/dashboard/allusers"><FaUsers></FaUsers>all users</NavLink>
                            </li>


                        </> : <>
                            {/* Sidebar content here */}
                            <li>
                                <NavLink className='uppercase' to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='uppercase' to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink className='uppercase' to="/dashboard/paymenthistory"><FaWallet></FaWallet>Payments Histroy</NavLink>
                            </li>

                            <li>
                                <NavLink className='uppercase' to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart<span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                        </>
                    }



                    <div className="divider"></div>

                    <li>
                        <NavLink className='uppercase' to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='uppercase' to="/menu"><FaArrowCircleLeft></FaArrowCircleLeft> Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className='uppercase' to="/order/salad"><FaArrowCircleLeft></FaArrowCircleLeft> Our Food</NavLink>
                    </li>
                    <li>
                        <NavLink className='uppercase' to="/contact"><FaPhoneAlt></FaPhoneAlt> Contact Us</NavLink>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;