import React, { createContext, useEffect, useState,} from 'react';
import { auth } from './../firebace/firebace.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const[loading,setloading]=useState(true)
    const provider = new GoogleAuthProvider()

    const googleloginuser = ()=>{
        return signInWithPopup(auth,provider)
    }
    const signupuser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinuser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateprofile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
           console.log(currentuser)
           setuser(currentuser)
           setloading(false)
        })
        return()=>{
            unsubscribe()
        }

    },[])

    const signoutuser=()=>{
         return signOut(auth)

    }

    const value = {
        googleloginuser,
        signupuser,
        signinuser,
        user,
        signoutuser,
        loading,
        updateprofile,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;