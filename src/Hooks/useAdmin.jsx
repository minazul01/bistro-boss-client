import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const {user, isAdminLoading} = useAuth();
    const axiosSecure = useAxios();
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
           const res = await axiosSecure.get(`/users/admin/${user?.email}`);
           return res.data?.admin;
        }
    });
  
    return [isAdmin, isAdminLoading];
};

export default useAdmin;