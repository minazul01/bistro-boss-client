import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.init";

// Create context correctly
export const AuthContext = createContext(null);

// Get auth instance
const auth = getAuth(app);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // Logout
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Running user:", currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); //Clean unsubscribe
  }, []);

  // Context value
  const info = {
    user,
    loading,
    signUpUser,
    signInUser,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
