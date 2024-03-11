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


    //Sign Up

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //login
    const login = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }




    //Obtect for all access its children
    const authentications = {
        googleLogin,
        signUp,
        login

    }
    return (
        <AuthContext.Provider value={authentications} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;