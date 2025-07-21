import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";

const PrivateAdmin = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
  
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-10 h-10 animate-spin rounded-full border-dashed border-8 border-[#3b9df8]"></div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default PrivateAdmin;
