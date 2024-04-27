import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const Provider = ({children}) => {
    // const [user , setUser] = useState(null)
    const [loading, setLoading] =useState(true)
    console.log(loading)
    const createUser =(email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)

    } 

    const allValues = {
        createUser,
       
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}

        </AuthContext.Provider>
       
    );
};

export default Provider;