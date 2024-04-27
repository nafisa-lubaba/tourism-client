import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";


const Hook = () => {
    
    const all = useContext(AuthContext)
    return all
};

export default Hook;