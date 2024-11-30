import React, { createContext,} from 'react';
import { auth } from './../firebace/firebace.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()

    const googleloginuser = ()=>{
        return signInWithPopup(auth,provider)
    }
    const signupuser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        googleloginuser,
        signupuser,
        
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;