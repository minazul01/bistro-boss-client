import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.init";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

// Create context correctly
export const AuthContext = createContext(null);

// Get auth instance
const auth = getAuth(app);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // SignUp
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update profile
  const updateUser = (userName, image) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: image,
    });
  };

  // Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current User", currentUser);

      if (currentUser) {
        // set token browser per user login
        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if(res.data.token){
             localStorage.setItem('access-token', res.data.token)
          }
        })
      }else{
        // remove item
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });

    return () => unsubscribe(); //Clean unsubscribe
  }, [axiosPublic]);

  // Context value
  const info = {
    user,
    loading,
    signUpUser,
    signInUser,
    googleLogin,
    logOutUser,
    updateUser,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Provider;
