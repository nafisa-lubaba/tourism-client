import { Link, NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { MdPlaylistAddCircle } from "react-icons/md";
import img from '../assets/logo.png'

import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";



const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const nav =
    user ? (<>
            <div className="flex gap-3">
                <button className="text-2xl"><IoIosHome /></button>


                <NavLink to='/' className={({ isActive }) => isActive ? 'border border-orange-500 text-orange-400  text-xl font-bold' : 'font-bold text-xl'}>Home</NavLink>
            </div>
            <div className="flex gap-2">
                <button className="text-2xl"><MdPlace /></button>

                <NavLink to='/touristsSpot' className={({ isActive }) => isActive ? 'border border-orange-500 text-orange-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>Tourists Spot</NavLink>
            </div>
            <div className="flex gap-2">
                <button className="text-2xl"><IoMdAddCircle /></button>
                <NavLink to='/addSpot' className={({ isActive }) => isActive ? 'border border-orange-500 text-orange-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>Add Spot</NavLink>
            </div>

            <div className="flex gap-2 ">
                <button className="text-2xl"><MdPlaylistAddCircle /></button>
                  <NavLink to='/myList' className={({ isActive }) => isActive ? 'border border-orange-500 text-orange-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>my List</NavLink>
                  </div>
        </>) : 
        (<NavLink to='/' className={({ isActive }) => isActive ? 'border border-orange-500 text-orange-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>Home</NavLink>)
            
    return (
        <div>


            <div className="navbar">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow w-52 bg-emerald-100 rounded-badge">
                            {nav}


                            {/* <div className="navbar-end gap-3 lg:hidden">
                            <NavLink to='/signin' className="btn bg-green-400 text-white lg:text-2xl mr-5">Sign In</NavLink>
                        </div> */}
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl w-56"><img src={img} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {nav}
                       



                    </ul>
                </div>


                <div className="navbar-end">
                    
                {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} title={user.displayName} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/signin'>
                                <button className="btn bg-orange-400 text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;