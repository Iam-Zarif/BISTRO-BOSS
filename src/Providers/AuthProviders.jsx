/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth =getAuth(app)
export const AuthContext  = createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    const signIn =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(password,email)
    }
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(() =>{
const unsubscribe =  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
    console.log("current user", currentUser)
    setLoading(false)
})
return () =>{
    return unsubscribe()
}
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;