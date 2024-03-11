/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";




export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {



    //Google Login

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    //Create User

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }



    //Obtect for all access its children
    const authentications = {
        googleLogin,
        createUser
    }













    return (
        <AuthContext.Provider value={authentications} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;