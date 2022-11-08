import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({children}) => {

    const googleProvider = new GoogleAuthProvider() 
    const [user, setUser] = useState({});
const [loading,setLoading] = useState(true)

// 1.Create User Email Pass
const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
//2. Update profile

const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile)
}



// 3.Google SignIn 
const signInWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

// 4.Log Out

const logOut = ()=>{
    setLoading(true)
   return signOut(auth)
}

//6.Login with Password
const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
   
    const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setLoading(false)
      })
  
      return()=>{
       
          unsubscribe()
      }
  },[])

  // -----------------value/info pass----------
const authInfo = {user,createUser,updateUserProfile,signInWithGoogle,logOut,signIn,loading}
return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;