import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { auth } from "../firebase";

  const UserAuthContext = createContext();

  export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({});
    
    //funzione Login
        function logIn(email,password){
            return signInWithEmailAndPassword(auth, email, password)
        }

    //funzione Register
        function signUp(email, password){
            return createUserWithEmailAndPassword (auth,email,password)
        }

    //funzione LogOut
        function logOut () {
            return signOut(auth);
        }

        //funzione per google
        function googleSignIn() {
            const googleAuthProvider = new GoogleAuthProvider();
            return signInWithPopup  (auth, googleAuthProvider);
        }

        //gestione stato login
            useEffect(() => {
            const unsubscribe = onAuthStateChanged (auth, (currentUser) =>{
                console.log("Auth", currentUser);
                setUser(currentUser)
            });

            return () => {
                unsubscribe()
            };
            }, []);
            
    return (
        <UserAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn}}>
            {children}
        </UserAuthContext.Provider>
    );
  }

  export function useUserAuth() {
    return useContext(UserAuthContext);
  }