import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";




export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {



    //Google Login

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authentications ={
        googleLogin
    }












    return (
        <AuthContext.Provider value={authentications} >
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;