import { useContext } from "react";
import { AuthContext } from "../Provider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
   return <div className="w-10 h-10 animate-spin rounded-full border-dashed border-8 border-[#3b9df8]"></div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{from: location}}></Navigate>;
};

export default Private;
