import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div className="bg-emerald-100">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;