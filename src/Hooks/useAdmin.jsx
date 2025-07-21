import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxios();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data?.admin;
    },
    enabled: !loading && !!user?.email, // only fetch if auth is ready and user email exists
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
